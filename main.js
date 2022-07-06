function Book(author, title) {
  this.author = author;
  this.title = title;
}

// ui class:handle the ui
class UI {
  static displayBooks() {
    const books = UI.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#tablebody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.author}</td>
        <td>${book.title}</td>
        <td><input type="button" value="remove" class="delete" ></td>
  
        `;
    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  // local storage
  static getBooks() {
    let books;
    if (localStorage.getItem('books') == null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = UI.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// add book event
document.querySelector('#form-Book').addEventListener('submit',
  (e) => {
    // prevent actual submit
    e.preventDefault();
    // get form values
    const author = document.getElementById('authorname').value;
    const title = document.getElementById('titlename').value;
    // instatiate book
    const book = new Book(author, title);
    // adding book to ui
    UI.addBookToList(book);
    // adding book to store
    UI.addBook(book);
  });

// remove event
document.querySelector('#tablebody').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});
document.addEventListener('DOMContentLoaded', UI.displayBooks);
