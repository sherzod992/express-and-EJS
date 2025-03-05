const createField = document.getElementById('create-field') // Input maydoni, foydalanuvchi vazifa qo'shadi
const itemList = document.getElementById('item-list') // Vazifalar ro'yxati
const createForm = document.getElementById('create-form') // Forma, yangi vazifa qo'shish uchun
const cleanAllButton = document.getElementById('clean-all') // Barcha vazifalarni o'chirish tugmasi

// Vazifa elementining HTML shabloni
function itemTemplate(item) {
  return `
    <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
      <span class="item-text">${item.reja}</span>
      <div>
        <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
        <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">Delete</button>
      </div>
    </li>`
}

// Yangi vazifa qo'shish
createForm.addEventListener('submit', function (e) {
  console.log('tugma bosildi') // Foydalanuvchi forma tugmasini bosdi
  e.preventDefault() // Forma yuborilishini to'xtatadi, sahifa yangilanishi oldini oladi
  const userInput = createField.value.trim() // Foydalanuvchi kiritgan matnni olish va atrofidagi bo'sh joylarni olib tashlash

  if (userInput) {
    // Agar foydalanuvchi ma'lumot kiritsa
    axios // Axios bilan serverga so'rov yuborish
      .post('/create-item', { reja: userInput }) // Yangi vazifani serverga yuborish
      .then(response => { // Serverdan javob olganda
        // Yangi vazifani ro'yxatga qo'shish
        itemList.insertAdjacentHTML('beforeend', itemTemplate(response.data)) // Yangi vazifani HTML ro'yxatga qo'shish
        createField.value = '' // Input maydonini tozalash
        createField.focus() // Yangi vazifa kiritish uchun input maydonini fokus qilish
      })
      .catch(err => { // Agar xatolik yuz bersa
        console.error('Iltimos, qaytadan harakat qiling!', err) // Xato haqida xabar chiqarish
      })
  } else {
    alert('Iltimos, vazifani kiriting.') // Agar foydalanuvchi hech narsa kiritmasa, ogohlantirish
  }
})

// Vazifalarni tahrirlash yoki o'chirish
document.addEventListener('click', function (e) {
  // 1. Klik hodisasi yuz berganda bu funksiya ishlaydi
  if (e.target.classList.contains('delete-me')) {
    // 2. Agar bosilgan elementda 'delete-me' sinfi bo'lsa, o'chirishni boshlaymiz
    if (confirm('Aniq ochirmoqchimisiz?')) { // O'chirishni tasdiqlash
      axios // Axios orqali serverga so'rov yuborish
        .post('/delete-item', { id: e.target.getAttribute('data-id') }) // O'chirilishi kerak bo'lgan elementning ID sini yuborish
        .then(() => {
          e.target.closest('li').remove() // Muvaffaqiyatli o'chirishda ro'yxatdan elementni olib tashlash
        })
        .catch(err => { // Agar xatolik yuz bersa
          console.error('Iltimos, qaytadan harakat qiling!', err) // Xato haqida xabar chiqarish
        })
    }
  }

  if (e.target.classList.contains('edit-me')) {
    // Agar bosilgan elementda 'edit-me' sinfi bo'lsa, tahrirlashni boshlaymiz
    let userInput = prompt(
      "O'zgarish kiriting",
      e.target.parentElement.parentElement.querySelector('.item-text').innerHTML
    ); // Foydalanuvchidan yangi matn kiritishni so'raymiz

    if (userInput) { // Agar foydalanuvchi matn kiritgan bo'lsa
      axios // Axios bilan serverga so'rov yuborish
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput, // Yangi matn va ID bilan serverga so'rov yuboriladi
        })
        .then((response) => {
          console.log(response.data); // Server javobini ko'rsatish
          e.target.parentElement.parentElement.querySelector('.item-text').innerHTML = userInput; // Ro'yxatdagi matnni yangilash
        }).catch((err) => { // Agar xatolik yuz bersa
          console.log('Iltimos, qaytadan harakat qiling!'); // Xato haqida xabar chiqarish
        });
    }
  }
});

// Barcha vazifalarni tozalash
cleanAllButton.addEventListener('click', function () {
  // 1. Barcha vazifalarni tozalash tugmasi bosilganda ishlaydi
  if (confirm("Barcha vazifalarni o'chirishni xohlaysizmi?")) { // Foydalanuvchidan barcha vazifalarni o'chirishni tasdiqlash
    axios // Axios orqali serverga so'rov yuborish
      .post('/delete-all', { delete_all: true }) // Barcha vazifalarni o'chirish so'rovi
      .then((response) => {
        alert(response.data.state) // Server javobini ko'rsatish
        e.target.parentElement.parentElement.querySelector('.item-text').innerHTML = userInput;
        // Bu qator keraksiz, chunki boshqa joyda ishlatilgan
      })
      .catch(err => { // Agar xatolik yuz bersa
        console.log('Iltimos, qaytadan harakat qiling!', err) // Xato haqida xabar chiqarish
      })
  }
});

// Barcha vazifalarni tozalash va ro'yxatni tozalash
cleanAllButton.addEventListener('click', function () {
  // Barcha vazifalarni tozalash
  axios.post('/delete-all', { delete_all: true })
    .then((response) => {
      alert(response.data.state); // Server javobini ko'rsatish
      itemList.innerHTML = ''; // Ro'yxatni tozalash
    })
    .catch((err) => {
      console.error('Iltimos, qaytadan harakat qiling!', err); // Xato haqida xabar chiqarish
    });
});

//(e) → bu hodisa obyektini bildiradi (e → event)
//e.preventDefault() - Hodisaning standart harakatini to‘xtatadi. Masalan:
// Forma yuborilishi: Sahifa yangilanmaydi.
// Havola bosilishi: Sahifa o‘zgarmaydi.

// Cluster => Db => Collection => Document => datasat 

// reqni ichidagi malumotlar nimalarni ozida ushlab turibdi?
// _id bu nima id bilan nima farqi bor?
// edit itemda biz valueni ozgartyapmiz id nixam ozgartradimi?
// $ set nimaga ishledi?
