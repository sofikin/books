class LS {
  getData(key) {
    let data;
    if (localStorage.getItem(key) === null) {
      data = [];
    } else {
      data = JSON.parse(localStorage.getItem(key));
    }
    return data;
  }

  setData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  addBook(book) {
    let books = this.getData("books");
    books.push(book);
    this.setData("books", books);
  }
}
