// 6. Managing a library: Array of Objects
// 1. Task: Create an array named library that contains three objects. Each
// object should represent a book and have the following properties:
// title (a string)
// author (a string)
// yearPublished (a number)
// 2. Instructions:
// Add a new book named “System Design” object to the library array.
// Loop over the library and search for the new book by title you just
// added and console all its properties
// Remove any book by title
// update any book’s publish year by key yearPublished

const library = [
  {
    title: "HTML Basics",
    author: "Shariq",
    yearPublished: 2020,
  },
  {
    title: "CSS Basics",
    author: "S Yousuf",
    yearPublished: 2021,
  },
  {
    title: "JS Basics",
    author: "S Y Khan",
    yearPublished: 2022,
  },
];
let newBook;

// Adding new book to the library
library.push({
  title: "System Design",
  author: "S Y K",
  yearPublished: 2024,
});

// updating publish year for new book
library[3].yearPublished = 2023;

// searching for new book
for (let i = 0; i < library.length; i++) {
  newBook = library[i];
}

// logging out new book properties
console.log("New Book:", newBook);

// removing first book from library
library.splice(0, 1)

console.log(`Removed 1st book (named: 'HTML Basics').`, library)
