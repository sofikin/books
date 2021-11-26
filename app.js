// project objects
const ui = new UI();
// event elements
const form = document.querySelector("form");
// const booksList = document.querySelector(".books");

// events
form.addEventListener("submit", addBook);

function addBook(event) {
  // get form input data
  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const isbnInput = document.querySelector("#isbn");

  let title = titleInput.value;
  let author = authorInput.value;
  let isbn = isbnInput.value;

  // create book by Book class
  const book = new Book(title, author, isbn);
  // add book by ui object addBook
  ui.addBook(book);

  // save book
  titleInput.value = "";
  authorInput.value = "";
  isbnInput.value = "";
  event.preventDefault();
}
