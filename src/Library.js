function createLibrary(name) {
     return {
       name:name,
       shelves:{
         fantasy: [],
         fiction: [],
         nonFiction: [],
       }
  }
}

function addBook(shelf, book) {
  if(book.genre === "fantasy") {
    shelf.shelves.fantasy.push(book);
  } else if(book.genre === "nonFiction") {
    shelf.shelves.nonFiction.push(book);
  } else {
    shelf.shelves.fiction.push(book);
  }
}

function checkoutBook(library, book, genre) {
for(var i = 0; i < library.shelves[genre].length; i++) {
  if (library.shelves[genre][i].title === book) {
      library.shelves[genre].splice(i, 1)
      return `You have now checked out ${book} from the ${library.name}`;
  }
}

    return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
  }



module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
