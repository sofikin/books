class UI {
  // help function for creating DOM elements
  addUIElement(tagname, classname = "", textcontent = "", attributes = {}) {
    // create element
    const element = document.createElement(tagname);
    // set css class
    if (classname !== "") {
      element.className = classname;
    }
    // set text content
    let text = document.createTextNode(textcontent);
    element.appendChild(text);
    // attributes
    if (Object.keys(attributes).length > 0) {
      for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
      }
    }
    return element;
  }

  addBook(book) {
    // create <tr> element
    const tr = this.addUIElement("tr", "newBook");
    for (let key in book) {
      // create <td> element
      let td = this.addUIElement("td", "", book[key], {});
      // add td to tr
      tr.appendChild(td); // add td to tr
    }
    // X link
    // create <td> element
    let td = this.addUIElement("td");
    // create <a> element
    const link = this.addUIElement("a", "", "X", { href: "#" });
    // add <a> to <li>
    td.appendChild(link);
    // add td to tr
    tr.appendChild(td);
    // add tr to tbody
    const booksList = document.querySelector(".books");
    booksList.appendChild(tr);
  }

  deleteBook(target) {
    // let td =
    // td.parentElement.remove();
    if (target.tagName === "a") {
      target.parentElement.parentElement.remove();
    }
  }
}
