/* variable list */
const myLibrary = [];
const inputElements = document.getElementsByTagName("input");
const tableBody = document.getElementById('table-body');
const form = document.querySelector('.form-container');
const showFormBtn = document.getElementById('show-form');
let newTitle = document.getElementById('input-title');
let newAuthor = document.getElementById('input-author');
let newPages = document.getElementById('input-pages');
let newIsRead =document.getElementsByName('input-read');
let submitBtn = document.getElementById('add-new-book');
let deleteBtn = document.querySelector('.fa-solid');
let updateBtn = document.querySelector('.update-btn');
let newBook = '';


class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  addBook() {
    myLibrary.push();
    tableBody.innerHTML += `
                <tr> 
                  <td class='book-title'>${this.title}</td>
                  <td class='book-author'>${this.author}</td>
                  <td class='book-pages'>${this.pages}</td>
                  <td class='book-isRead'>${this.isRead}</td>
                  
                  <td class='delete'> <i class="fa-solid fa-trash"></i> </td>
                </tr>`  
  }
}


const eventHandlers = (() => {
  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let isReadOption = ''
  
    for (let i =0; i < newIsRead.length; i++) {
      if(newIsRead[i].checked) {
        isReadOption = newIsRead[i].value;
      }
    }
    let book1 = new Book(newTitle.value, newAuthor.value, newPages.value, isReadOption );
    book1.addBook(book1);
    newTitle.value = '';
    newAuthor.value = '';
    newPages.value = ''
    newIsRead.value = ''
  })

  // show form button
  showFormBtn.addEventListener('click', showForm);

  /* update read status */
  tableBody.addEventListener('click', (event) => {
    if(!event.target.classList.contains('book-isRead')) {
      return
    } 
      if(event.target.closest('.book-isRead').textContent === 'no') {
        event.target.closest('.book-isRead').textContent = 'yes'
      } else {
        event.target.closest('.book-isRead').textContent = 'no'
      }
  })

  /* delete book record */
tableBody.addEventListener('click', (event) => {
  if (!event.target.classList.contains('fa-solid')) {
    return
  }
  const removeBtn = event.target;
  removeBtn.closest('tr').remove();
}
  );
  
})();


/* show or hide form */

 function showForm() {
  if (form.style.display === 'none') {
    form.style.display = 'flex'
    showFormBtn.textContent = "Hide Form"
  } else {
    form.style.display = 'none'
    showFormBtn.textContent = "Show Form To Add Book"
  }
} 






