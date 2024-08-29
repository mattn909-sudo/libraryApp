const dialog = document.querySelector("dialog");
const showButton = document.querySelector('.add');
const closeButton = document.querySelector('.closeDialog');
const bookInput = document.getElementById('bookName');

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener('click', ()=>{
    dialog.close();
    bookInput.value = null;

});

