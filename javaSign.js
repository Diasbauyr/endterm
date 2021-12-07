// append prepend after
console.log("hello");
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorAll = document.getElementById('vError')

function add() {
    var ch = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var mail = document.getElementById('email').value;
    var valid = ch.test(mail);
      // if (valid != true || email.value === '') {
      //   error4.style.display = 'block';
      // }
      // else {
      //   error4.style.display = 'none';
      // }

    //
    //
    // console.log("hello");
    // if (password.value.length <= 9 || password.value === '') {
    //   error5.style.display = 'block';
    // }
    // else {
    //   error5.style.display = 'none';
    // }

  if (valid != true || email.value === ''
      || password.value.length <= 9 && password.value === '') {
    errorAll.style.display = 'block';
  }
  else {
    errorAll.style.display = 'none';
  }
}


// // append prepend after
// console.log("hello");
//
//
// window.onload = function() {
//     myform = document.getElementById('form')
//     authorName = document.getElementById('authorName')
//     bookName = document.getElementById('bookName')
//     isbn = document.getElementById('isbn')
//     dynamicHere = document.getElementById('dynamicHere')
//     date = document.getElementById('date')
//     cardBody = document.getElementsByClassName('card-body')[0]
//     table = document.querySelector('table')
//     myform.addEventListener('submit', (e) => {
//         e.preventDefault();
//
//         authorNameTxtValue = document.getElementById('authorName').value
//         bookNameTxtValue = document.getElementById('bookName').value
//         isbnTxtValue = document.getElementById('isbn').value
//         dateTxtvalue = document.getElementById('date').value
//
//         if (authorNameTxtValue == '' || bookNameTxtValue == '' || isbnTxtValue == '' || dateTxtvalue == '') {
//             UI.messages('Insert All Text Fields', 'danger');
//             return
//         } else {
//             var books = new Book(authorNameTxtValue, bookNameTxtValue, isbnTxtValue, dateTxtvalue);
//
//             UI.clearFields();
//             UI.displayData(books)
//             Store.setStored(books)
//             UI.messages('Data Inserted', 'success')
//         }
//
//     })
//
//
//     dynamicHere.addEventListener('click', (e) => {
//         if (e.target.classList.contains('RemoveIt')) {
//             UI.removeRow(e.target)
//         }
//     })
//
//     function sortTable() {
//
//         let sortedRows = Book.from(table.rows)
//         .slice(1)
//
//         .sort((rowA, rowB) => rowA.cells[3].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
//
//       table.tBodies[0].append(...sortedRows);
//
//     }
//
//
//     class Book {
//         constructor(authorNameTxtValue, bookNameTxtValue, isbnTxtValue, dateTxtvalue) {
//             this.author = authorNameTxtValue;
//             this.book = bookNameTxtValue;
//             this.isbn = isbnTxtValue;
//             this.date = dateTxtvalue;
//         }
//     }
//
//     class UI {
//
//         static clearFields() {
//             document.getElementById('authorName').value = ''
//             document.getElementById('bookName').value = ''
//             document.getElementById('isbn').value = ''
//             document.getElementById('date').value = ''
//         }
//
//         static displayData(obj) {
//             let Book = Store.getStored()
//             Book.push(obj);
//             UI.populateTR(Book);
//         }
//
//         static populateTR(Book) {
//             Book.forEach(function(onebyone) {
//                 dynamicHere.innerHTML += ` <tr>
//                 <td>${onebyone.isbn}</td>
//                 <td>${onebyone.author} </td>
//                 <td>${onebyone.book}</td>
//                 <td>${onebyone.date}</td>
//                 <td><button class='btn btn-danger RemoveIt'>Delete</button></td>
//
//             </tr>`
//
//             })
//         }
//
//
//
//         static messages(txt, className) {
//             let divs = '';
//             divs = document.createElement('div')
//             divs.classList = `alert alert-${className}`
//             divs.innerText = txt;
//             cardBody.insertBefore(divs, myform)
//             setTimeout(() => {
//                 divs.remove()
//             }, 2000)
//         }
//
//
//
//         static removeRow(element) {
//             isbn = element.parentElement.parentElement.firstElementChild.innerText
//             element.parentElement.parentElement.remove()
//             Store.removeStored(isbn)
//         }
//
//
//
//
//
//     }
//
//
//     class Store {
//         static getStored() {
//             let books = ''
//             if (localStorage.getItem('book') == null) {
//                 books = []
//             } else {
//                 books = JSON.parse(localStorage.getItem('book'))
//             }
//             return books
//         }
//
//         static setStored(x) {
//
//             let books = Store.getStored()
//             console.log(books)
//             books.push(x)
//             localStorage.setItem('book', JSON.stringify(books))
//         }
//
//
//         static removeStored(isbn) {
//             let Allvalues = Store.getStored()
//             Allvalues.forEach((onebyone, index) => {
//                 if (onebyone.isbn == isbn) {
//                     Allvalues.splice(index, 1);
//                 }
//             })
//
//             localStorage.setItem('book', JSON.stringify(Allvalues))
//         }
//
//
//
//     }
//
//
//
//     UI.populateTR(Store.getStored())
// }
