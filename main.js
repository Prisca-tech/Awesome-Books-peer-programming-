function Book(author, title) {
  this.author = author;
  this.title = title;
}
// ui class:handle the ui
class UI {
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
  });

// remove event
document.querySelector('#tablebody').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});

// get values from local storage
// const author = document.getElementById('authorname').value;
// const title = document.getElementById('titlename').value;

// const saveDetails = () => {
//   const setDetails = {
//     authorname: author.value,
//     titlename: title.value,
//   };

//   localStorage.setItem('storeDetails', JSON.stringify(setDetails));
// };
// const getStoredDetails = () => {
//   const getDetails = JSON.parse(localStorage.getItem('storeDetails'));
//   author.value = getDetails.authorname;
//   title.value = getDetails.titlename;
// };
// //  save values to local storage
// if (!localStorage.getItem('savedData')) {
//   const savedData = {
//     authorname: ''${auhtor.value},
//     titlename: '',

//   };
//   localStorage.setItem('savedData', JSON.stringify(savedData));
// } else {
//   getStoredDetails();
// }
// const form = document.forms[0];
// form.addEventListener('change', saveDetails);

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
    // console.log('Content exists');
    const retrieveFormData = localStorage.getItem('formData');
    const retrieveJsonData = JSON.parse(retrieveFormData);
    document.getElementById('authorname').value = retrieveJsonData.Author;
    document.getElementById('titlename').value = retrieveJsonData.Title;
  }
}

window.onload = () => {
  loadLocalStorageData();
  // console.log('The DOM it's uploaded');
};