const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: {
      name: "F. Scott Fitzgerald",
      country: "USA",
    },
    genre: "Classic",
    price: 1800,
    stock: 300,
    reviews: [
      { user: "Alice", rating: 5, comment: "Loved it!" },
      { user: "Bob", rating: 4, comment: "Great read." },
    ],
    availability: { online: true, inStore: true },
    weeklySales: [
      { date: "01-06-2024", quantity: 10 },
      { date: "02-06-2024", quantity: 15 },
      { date: "03-06-2024", quantity: 9 },
      { date: "04-06-2024", quantity: 30 },
      { date: "05-06-2024", quantity: 46 },
      { date: "06-06-2024", quantity: 6 },
      { date: "07-06-2024", quantity: 0 },
    ],
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: {
      name: "Harper Lee",
      country: "USA",
    },
    genre: "Classic",
    price: 1250,
    stock: 700,
    reviews: [
      { user: "Charlie", rating: 5, comment: "A masterpiece." },
      { user: "Dave", rating: 3, comment: "Average" },
    ],
    availability: { online: true, inStore: true },
    weeklySales: [
      { date: "01-06-2024", quantity: 7 },
      { date: "02-06-2024", quantity: 15 },
      { date: "03-06-2024", quantity: 9 },
      { date: "04-06-2024", quantity: 6 },
      { date: "05-06-2024", quantity: 36 },
      { date: "06-06-2024", quantity: 16 },
      { date: "07-06-2024", quantity: 40 },
    ],
  },
  {
    id: 3,
    title: "1984",
    author: {
      name: "George Orwell",
      country: "UK",
    },
    genre: "Dystopian",
    price: 1500,
    stock: 1000,
    reviews: [
      { user: "Eve", rating: 4, comment: "Little boring." },
      { user: "Frank", rating: 5, comment: "A must-read." },
    ],
    availability: { online: true, inStore: true },
    weeklySales: [
      { date: "01-06-2024", quantity: 70 },
      { date: "02-06-2024", quantity: 1 },
      { date: "03-06-2024", quantity: 19 },
      { date: "04-06-2024", quantity: 32 },
      { date: "05-06-2024", quantity: 21 },
      { date: "06-06-2024", quantity: 0 },
      { date: "07-06-2024", quantity: 0 },
    ],
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: {
      name: "J.D. Salinger",
      country: "USA",
    },
    genre: "Classic",
    price: 2900,
    stock: 0,
    reviews: [
      { user: "Grace", rating: 4, comment: "Really enjoyed it" },
      { user: "Hank", rating: 3, comment: "It was okay." },
    ],
    availability: { online: false, inStore: false },
    weeklySales: [
      { date: "01-06-2024", quantity: 25 },
      { date: "02-06-2024", quantity: 11 },
      { date: "03-06-2024", quantity: 44 },
      { date: "04-06-2024", quantity: 3 },
      { date: "05-06-2024", quantity: 1 },
      { date: "06-06-2024", quantity: 0 },
      { date: "07-06-2024", quantity: 11 },
    ],
  },
  {
    id: 5,
    title: "Moby Dick",
    author: {
      name: "Herman Melville",
      country: "USA",
    },
    genre: "Adventure",
    price: 2320,
    stock: 20,
    reviews: [
      { user: "Ivy", rating: 2, comment: "Did not enjoy reading" },
      { user: "Jack", rating: 4, comment: "Long but worth it." },
    ],
    availability: { online: true, inStore: true },
    weeklySales: [
      { date: "01-06-2024", quantity: 21 },
      { date: "02-06-2024", quantity: 62 },
      { date: "03-06-2024", quantity: 140 },
      { date: "04-06-2024", quantity: 4 },
      { date: "05-06-2024", quantity: 16 },
      { date: "06-06-2024", quantity: 87 },
      { date: "07-06-2024", quantity: 22 },
    ],
  },
  {
    id: 6,
    title: "War and Peace",
    author: {
      name: "Leo Tolstoy",
      country: "Russia",
    },
    genre: "Historical Fiction",
    price: 1350,
    stock: 80,
    reviews: [
      { user: "Kelly", rating: 5, comment: "A true classic." },
      { user: "Liam", rating: 3, comment: "Very long but good" },
    ],
    availability: { online: true, inStore: true },
    weeklySales: [
      { date: "01-06-2024", quantity: 47 },
      { date: "02-06-2024", quantity: 2 },
      { date: "03-06-2024", quantity: 40 },
      { date: "04-06-2024", quantity: 14 },
      { date: "05-06-2024", quantity: 25 },
      { date: "06-06-2024", quantity: 7 },
      { date: "07-06-2024", quantity: 26 },
    ],
  },
  {
    id: 7,
    title: "Pride and Prejudice",
    author: {
      name: "Jane Austen",
      country: "UK",
    },
    genre: "Romance",
    price: 1780,
    stock: 25,
    reviews: [
      { user: "Mia", rating: 2, comment: "not good" },
      { user: "Noah", rating: 3, comment: "Average." },
    ],
    availability: { online: true, inStore: true },
    weeklySales: [
      { date: "01-06-2024", quantity: 11 },
      { date: "02-06-2024", quantity: 8 },
      { date: "03-06-2024", quantity: 0 },
      { date: "04-06-2024", quantity: 7 },
      { date: "05-06-2024", quantity: 18 },
      { date: "06-06-2024", quantity: 1 },
      { date: "07-06-2024", quantity: 3 },
    ],
  },
  {
    id: 8,
    title: "The Hobbit",
    author: {
      name: "J.R.R. Tolkien",
      country: "UK",
    },
    genre: "Fantasy",
    price: 900,
    stock: 30,
    reviews: [
      { user: "Olivia", rating: 5, comment: "Fantastic adventure" },
      { user: "Pete", rating: 4, comment: "Loved it." },
    ],
    availability: { online: true, inStore: true },
    weeklySales: [
      { date: "01-06-2024", quantity: 1 },
      { date: "02-06-2024", quantity: 78 },
      { date: "03-06-2024", quantity: 57 },
      { date: "04-06-2024", quantity: 12 },
      { date: "05-06-2024", quantity: 14 },
      { date: "06-06-2024", quantity: 61 },
      { date: "07-06-2024", quantity: 47 },
    ],
  },
  {
    id: 9,
    title: "Brave New World",
    author: {
      name: "Aldous Huxley",
      country: "UK",
    },
    genre: "Dystopian",
    price: 3100,
    stock: 0,
    reviews: [
      { user: "Quinn", rating: 1, comment: "not good" },
      { user: "Rachel", rating: 4, comment: "Very intriguing." },
    ],
    availability: { online: false, inStore: false },
    weeklySales: [
      { date: "01-06-2024", quantity: 11 },
      { date: "02-06-2024", quantity: 58 },
      { date: "03-06-2024", quantity: 10 },
      { date: "04-06-2024", quantity: 47 },
      { date: "05-06-2024", quantity: 98 },
      { date: "06-06-2024", quantity: 0 },
      { date: "07-06-2024", quantity: 0 },
    ],
  },
  {
    id: 10,
    title: "The Lord of the Rings",
    author: {
      name: "J.R.R. Tolkien",
      country: "UK",
    },
    genre: "Fantasy",
    price: 1599,
    stock: 25,
    reviews: [
      { user: "Steve", rating: 5, comment: "An epic saga." },
      { user: "Tina", rating: 5, comment: "Absolutely amazing" },
    ],
    availability: { online: true, inStore: true },
    weeklySales: [
      { date: "01-06-2024", quantity: 67 },
      { date: "02-06-2024", quantity: 34 },
      { date: "03-06-2024", quantity: 120 },
      { date: "04-06-2024", quantity: 44 },
      { date: "05-06-2024", quantity: 106 },
      { date: "06-06-2024", quantity: 26 },
      { date: "07-06-2024", quantity: 10 },
    ],
  },
];

// Questions
// 1. Calculate Total Revenue from All Books (last 7 days of
// revenue)
// Write a function to calculate the total revenue from all books. The function
// should return the total revenue as a number.
// improvise: function also return each book weekly sales and revenue.
function calculateTotalRevenue(books) {
  const Revenue = [{ "Each book revenue": [] }, {}];
  let totalRevenue = 0;
  let oneBookRevenue = 0;

  for (let i = 0; i < books.length; i++) {
    let totalWeeklySales = 0;
    const obj = {};

    for (j = 0; j < books[i].weeklySales.length; j++) {
      totalWeeklySales += books[i].weeklySales[j].quantity;
    }
    oneBookRevenue = totalWeeklySales * books[i].price;
    totalRevenue += oneBookRevenue;

    obj.title = books[i].title;
    obj["Total weekly sales"] = totalWeeklySales;
    obj["Total revenue"] = oneBookRevenue;
    Revenue[0]["Each book revenue"].push(obj);
  }

  Revenue[1]["Total revenue"] = totalRevenue;

  return Revenue;
}
console.log("Total Revenue", calculateTotalRevenue(books));

// 2. Find Revenue for Specific Date
// Write a function to find the revenue for specific date. The function will take
// two parameters: books and date . The function should return a number .
// function findBooksSoldOnDate(books, date) {
//
// }
// 3. Get Daily Sales Summary
// Write a function to get a summary of daily sales across all books. The
// function should return an object where each key is a date and the value is the
// total quantity of books sold on that date.
// function getDailySalesSummary(books) {
//
// }
// 4. Find the Most and Least Sold Books on a Specific Date
// Write a function to find the most and least sold book (books if there are more
// than one) on a specific date. The function should take two parameters: books
// and date . It should return an object with the most and least sold books on
// that date.
// Output will be like this:
// {
// mostSoldBook: [],
// mostSoldBook: [],
// }
// PSDC Book Store Dataset 9
// function findMostAndLeastSoldBooksOnDate(books, date) {
//
// }
// 5. Calculate Daily Average Sales for Each Book
// Write a function to calculate the daily average sales for each book. The
// function should take one parameter: books . It should return an array of
// objects, each containing the bookId and the average daily sales quantity.
// function calculateDailyAverageSalesForBooks(books) {
//
// }
// 6. Find the Highest Rated Book
// Write a function to find the highest rated book based on average rating. The
// function should return the book object with the highest average rating.
// function findHighestRatedBook(books) {
//
// }
// 7. Calculate Total Number of Reviews for Each Book
// Write a function to calculate the total number of reviews for each book. The
// function should return an array of objects, each containing the book title and
// the total number of reviews.
// function calculateTotalReviewsForBooks(books) {
//
// }
// 8. Calculate Average Rating for Each Book
// Write a function to calculate the average rating for each book. The function
// should return an array of objects, each containing the book title and its
// average rating.
