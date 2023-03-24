const bookname = document.getElementById('book-name')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const isRead = document.getElementById('is-Read')
const bookarray = document.getElementById('book-array')
const addBook = document.getElementById('add-book')

addBook.addEventListener('click', addBookToArray)



let myLibrary = []

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead

    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${isRead ? 'is already read' : 'not read yet'}`
    }

}

function addBookToLibrary() {

}


const book1 = new Book('The Hobbit', 'J.R.R', 295, false)
console.log(book1.info())

