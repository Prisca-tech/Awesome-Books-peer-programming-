class Book{
    constructor(author, title){
      this.author =author
      this.title =title
    }
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
    static deleteBook(el){
      if(el.classList.contains('delete')){
        el.parentElement.parentElement.remove();
    }
  }
  }
  
  // add book event
  document.querySelector('#form-Book').addEventListener('submit',
  (e) =>{
    // pervent actual submit
  e.preventDefault();
  // get form values
    const author = document.getElementById("authorname").value;
    const title = document.getElementById("bookname").value;
    // instatiate book
    const book = new Book(author, title);
    // adding book to ui
  UI.addBookToList(book);
   
  });
  
  // remove event
  document.querySelector('#tablebody').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
  });
  // const authorName = document.getElementById('authorname');
  // const  titleName = document.getElementById('bookname');
  // // Adding listner for event handling
  // form.addEventListener('input', () => {
  //   localStorage.setItem('Author', `${authorName.value}`);
  //   localStorage.setItem('Title', `${titleName.value}`);
  // });
  // // get values from local storage
  // authorName.value = localStorage.getItem('Author');
  // titleName.value = localStorage.getItem('Title');
  