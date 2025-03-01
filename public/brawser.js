// Elementlarni olamiz
const createField = document.getElementById('create-field')
const itemList = document.getElementById('item-list')
const createForm = document.getElementById('create-form')
const cleanAllButton = document.getElementById('clean-all')

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
  e.preventDefault()
  const userInput = createField.value.trim()

  if (userInput) {
    axios
      .post('/create-item', { reja: userInput })
      .then(response => {
        // Yangi elementni ro'yxatga qo'shish
        itemList.insertAdjacentHTML('beforeend', itemTemplate(response.data))
        createField.value = ''
        createField.focus()
      })
      .catch(err => {
        console.error('Iltimos, qaytadan harakat qiling!', err)
      })
  } else {
    alert('Iltimos, vazifani kiriting.')
  }
})

// Vazifalarni tahrirlash yoki o'chirish
document.addEventListener('click', function (e) {
  // O'chirish
  if (e.target.classList.contains('delete-me')) {
    if (confirm('Aniq ochirmoqchimisiz?')) {
      axios
        .post('/delete-item', { id: e.target.getAttribute('data-id') })
        .then(() => {
          e.target.closest('li').remove()
        })
        .catch(err => {
          console.error('Iltimos, qaytadan harakat qiling!', err)
        })
    }
  }

  // Tahrirlash
  if (e.target.classList.contains('edit-me')) {
    let userInput = prompt(
      "O'zgarish kiriting",
      e.target.parentElement.parentElement.querySelector('.item-text').innerHTML
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,

        })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector('.item-text').innerHTML = userInput;
        }).catch((err) => {
          console.log('Iltimos, qaytadan harakat qiling!');
        });
    }
  }
});

// Barcha vazifalarni tozalash
cleanAllButton.addEventListener('click', function () {
  if (confirm("Barcha vazifalarni o'chirishni xohlaysizmi?")) {
    axios
      .post('/delete-all', { delete_all: true })
      .then((response) => {
        alert(response.data.state)
        e.target.parentElement.parentElement.querySelector('.item-text').innerHTML = userInput;

      })
      .catch(err => {
        console.log('Iltimos, qaytadan harakat qiling!', err)
      })
  }
});

cleanAllButton.addEventListener('click', function () {
  axios.post('/delete-all', { delete_all: true }).then((response) => {
    alert(response.data.state);
    // Ro'yxatni tozalash
    itemList.innerHTML = '';
  }).catch((err) => {
    console.error('Iltimos, qaytadan harakat qiling!', err);
  });
});