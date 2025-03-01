const { cleanAllButton, itemList } = require("./brawser");

// Barcha vazifalarni tozalash
cleanAllButton.addEventListener('click', function () {
    if (confirm("Barcha vazifalarni o'chirishni xohlaysizmi?")) {
        axios
            .post('/delete-all', { delete_all: true })
            .then(response => {
                alert(response.data.state);
                // Ro'yxatni tozalash
                itemList.innerHTML = '';
            })
            .catch(err => {
                console.error('Iltimos, qaytadan harakat qiling!', err);
            });
    }
});
