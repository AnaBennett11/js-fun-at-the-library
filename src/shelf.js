function shelfBook(book, shelf) {
  if(shelf.length < 3) {
 return shelf.unshift(book);
} else {
  return book;
 }
}

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if(shelf[i].title === book) {
      shelf.splice(i, 1);
  }
 }
}

function listTitles(shelf) {
  return `${shelf[0].title}, ${shelf[1].title}, ${shelf[2].title}`;
}

function searchShelf(shelf, title) {
  var hasBook = false;
  for (var i = 0; i < shelf.length; i++) {
    if(shelf[i].title === title) {
      hasBook = true;
    } else
     hasBook = false
    }
    return hasBook
  }



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
