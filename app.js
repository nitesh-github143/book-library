const bookname = document.getElementById('bookname')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const isRead = document.getElementById('is-Read')
const bookarray = document.getElementById('book-array')
const addBook = document.getElementById('add-book')

addBook.addEventListener('click', () => {
    console.log(bookname.value, author.value, pages.value, isRead.value)
    const book2 = new Book(bookname.value, author.value, pages.value, isRead.value)
    console.log(book2.info())
    myLibrary.push(book2)
    console.log(myLibrary)
})



let myLibrary = []
console.log(myLibrary)

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

