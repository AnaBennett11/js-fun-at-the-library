function createTitle(title) {
    return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {
      name: name,
      age: age,
      pronouns: pronouns,
    }
  }

  function saveReview(review, reviews) {
    if(reviews.includes(review)) {
      return reviews;
    } else {
      return reviews.push(review);
    }
  }

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;

}

function writeBook(bookTitle, bookCharacter, genre) {
return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,

  }
}

function editBook(title) {
  title.pageCount = title.pageCount * 0.75
  return title.pageCount;
}





module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
