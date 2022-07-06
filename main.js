function Book(author, title) {
  this.author = author;
  this.title = title;
}
// ui class:handle the ui
class UI {
  static displayBooks() {
    const books = store.getBooks();
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

  static getBooks() {
    if (localStorage.getItem('formData') == null) {
      formData = [];
    } else {
      formData = JSON.parse(localStorage.getItem('formData'));
    }
    return formData;
  }

  static addBook(book) {
    const books = store.getBooks();
    books.push(book);
    localStorage.setItem('formData', JSON.stringify(book));
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
    store.addBook(book);
  });

// remove event
document.querySelector('#tablebody').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});

// get values from local storage

function getFormData() {
  const formData = {
    Author: document.getElementById('authorname').value,
    Title: document.getElementById('titlename').value,
  };

  // // Put the object into storage
  localStorage.setItem('formData', JSON.stringify(formData));

  // // Retrieve the object from storage
  const retrieveFormData = localStorage.getItem('formData');
  // eslint-disable-next-line no-console
  console.log(JSON.parse(retrieveFormData));
}

document.getElementById('authorname').addEventListener('change', () => {
  getFormData();
});
document.getElementById('titlename').addEventListener('change', () => {
  getFormData();
});

function loadLocalStorageData() {
  if (localStorage.getItem('formData') !== null) {
    const retrieveFormData = localStorage.getItem('formData');
    const retrieveJsonData = JSON.parse(retrieveFormData);
    document.getElementById('authorname').value = retrieveJsonData.Author;
    document.getElementById('titlename').value = retrieveJsonData.Title;
  }
}

window.onload = () => {
  loadLocalStorageData();
};