console.log("FrontEnd JS ishga tushdi");

//  Element yaratish uchun template
function itemTemplate(item) {
    return `
    <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
        <span class="item-text">${item.reja}</span>
        <div>
            <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">O'zgartirish</button>
            <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">O'chirish</button>
        </div>
    </li>`;
}

// 📌 Input maydoni
let createField = document.getElementById("create-field");

//  Yangi element qo‘shish
document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();

    axios.post("/create-item", { reja: createField.value })
        .then(response => {
            document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
            createField.value = "";
            createField.focus();
        })
        .catch(() => console.log("Please try again!"));
});

//  Elementni o‘chirish
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-me")) {
        if (confirm("Aniq o‘chirmoqchimisiz?")) {
            e.target.closest("li").remove(); // 🗑️ List elementini o‘chiradi
            alert("Element o‘chirildi");
        } else {
            alert("Bekor qilindi");
        }
    }
});
