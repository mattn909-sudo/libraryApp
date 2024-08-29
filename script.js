const dialog = document.getElementById("myDialog");
const showButton = document.querySelector('.add');
const submitButton = document.getElementById('submit');
const closeButton = document.querySelector('.closeDialog');
const bookInput = document.getElementById('bookName');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener('click', ()=>{
    dialog.close();
    bookInput.value = null;
    authorInput.value = null;
    pagesInput.value = null;
});

submitButton.addEventListener('click', ()=>{
    let myBook = new Book(bookInput.value,authorInput.value,pagesInput.value, false);
    createCard(myBook);
    dialog.close();
    bookInput.value = null;
    authorInput.value = null;
    pagesInput.value = null;
});

function Book(bookTitle, author, pages, read){
    this.bookTitle = bookTitle;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function createCard(book){
    const cardContainer = document.querySelector('.bookCardContainer');
    const newCard = document.createElement('div');
    newCard.classList.add('bookCard');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    title.textContent = book.bookTitle;
    author.textContent = book.author;
    pages.textContent = book.pages;
    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pages);
    cardContainer.appendChild(newCard);
}