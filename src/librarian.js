class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  greetPatron(name, morning) {
    if(morning === true) {
      return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`
    }
  }
  findBook(title) {
    if(title) {
    return `Yes, we have ${title}`;
  } else {
    return `Sorry, we do not have ${title}`
  }
 }
}


module.exports = Librarian;
