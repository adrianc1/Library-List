const myLibrary = [];
const inputElements = document.getElementsByTagName("input");

const tableBody = document.getElementById('table-body');
let newTitle = document.getElementById('input-title');
let newAuthor = document.getElementById('input-author');
let newPages = document.getElementById('input-pages');
let newIsRead =document.getElementsByName('input-read')
let submitBtn = document.getElementById('add-new-book')
let deleteBtn = document.querySelector('.fa-solid')
const form = document.querySelector('.form-container');
const showFormBtn = document.getElementById('show-form')
let newBook = '';

/* new book constructor */
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

/* add book to library */
function addBookToLibrary(book) {
  myLibrary.push(book);
    tableBody.innerHTML += `
                <tr> 
                  <td class='book-title'>${book.title} </td>
                  <td class='book-author'>${book.author} </td>
                  <td class='book-pages'>${book.pages} </td>
                  <td class='book-isRead'>${book.isRead} </td>
                  <td class='delete'> <i class="fa-solid fa-trash"></i> </td>
                </tr>`  
}

/* add inputs to new book */
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let isReadOption = ''

  for (let i =0; i < newIsRead.length; i++) {
    if(newIsRead[i].checked) {
      isReadOption = newIsRead[i].value;
    }
  }
  let book1 = new Book(newTitle.value, newAuthor.value, newPages.value, isReadOption );
  addBookToLibrary(book1);
  newTitle.value = '';
  newAuthor.value = '';
  newPages.value = ''
  newIsRead.value = ''
} )


/* show or hide form */

 function showForm() {
  if (form.style.display === 'none') {
    form.style.display = 'flex'
    showFormBtn.textContent = "Hide Form"
    showFormBtn.style.textAlign = 'center'
  } else {
    form.style.display = 'none'
    showFormBtn.textContent = "Show Form To Add Book"
  }
} 


/* delete book record */

tableBody.addEventListener('click', (event) => {
  if (!event.target.classList.contains('fa-solid')) {
    return
  }
  const removeBtn = event.target;
  removeBtn.closest('tr').remove();
}
  );
  

