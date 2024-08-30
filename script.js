const dialog = document.getElementById("myDialog");
const showButton = document.querySelector('.add');
const submitButton = document.getElementById('submit');
const closeButton = document.querySelector('.closeDialog');
const bookInput = document.getElementById('bookName');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const boolRead = document.getElementById('boolRead');

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
    let myBook = new Book(bookInput.value,authorInput.value,pagesInput.value, boolRead.value);
    myBook.createCard();
    console.log(boolRead.value)
    dialog.close();
    bookInput.value = null;
    authorInput.value = null;
    pagesInput.value = null;
    boolRead.value = null;
});

function Book(bookTitle, author, pages, read){
    this.bookTitle = bookTitle;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.createCard = function() {
    const cardContainer = document.querySelector('.bookCardContainer');
    const newCard = document.createElement('div');
    newCard.classList.add('bookCard');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const deleteBtn = document.createElement('button');
    const readBtn = document.createElement('button');
    title.textContent = this.bookTitle;
    title.classList.add('cardTitle')
    author.textContent ='by ' + this.author;
    pages.textContent = 'Number of pages: ' + this.pages;
    deleteBtn.textContent = 'Remove Book';
    deleteBtn.classList.add('deleteButton');
    readBtn.classList.add('readButton');
    if(this.read == "true"){
        readBtn.textContent = "Mark as not read";
        newCard.style.backgroundColor = 'rgb(136,229,153)';
        deleteBtn.style.backgroundColor = 'rgb(136,229,153)';
        console.log("bool is" + this.read)
    }
    else{
        readBtn.textContent = "Mark as read"
        console.log("bool is" + this.read)
    }
    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pages);
    newCard.appendChild(readBtn);
    newCard.appendChild(deleteBtn);
    cardContainer.appendChild(newCard);
    deleteBtn.addEventListener('click', ()=>{
        cardContainer.removeChild(newCard);
    });
    readBtn.addEventListener('click', ()=>{
        console.log('deeezzzzz');
        if(this.read == "false"){
            readBtn.textContent = "Mark as not read";
            newCard.style.backgroundColor = 'rgb(136,229,153)';
            deleteBtn.style.backgroundColor = 'rgb(136,229,153)';
            this.read = 'true'
        }
        else{
            readBtn.textContent = "Mark as read";
            this.read = 'false';
            newCard.style.backgroundColor = 'buttonface';
            deleteBtn.style.backgroundColor = 'buttonface';
        }
    });

}