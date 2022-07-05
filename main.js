
function Book (author, title) {
    this.author = author;
    this.title = title;
  }
  // ui class:handle the ui
  class UI{
    
    static addBookToList(book){
        const list = document.querySelector('#tablebody');
        const row =document.createElement('tr');
        row.innerHTML =`
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
 const author = document.getElementById('authorname').value;
 const title = document.getElementById('titlename').value;
 
 const saveDetails = () => {
   const setDetails = {
     authorName: authorName.value,
     titleName: titleName.value,
   };
 
   localStorage.setItem('storeDetails', JSON.stringify(setDetails));
 };
 const getStoredDetails = () => {
   const getDetails = JSON.parse(localStorage.getItem('storeDetails'));
   authorName.value = getDetails.authorName;
   titleName.value = getDetails.titleName;
 };
//  save values to local storage
 if (!localStorage.getItem('savedData')) {
   const savedData = {
     authorName: '',
     titleName: '',
     
   };
   localStorage.setItem('savedData', JSON.stringify(savedData));
 } else {
   getStoredDetails();
 }
 
 form.addEventListener('change', saveDetails);

      