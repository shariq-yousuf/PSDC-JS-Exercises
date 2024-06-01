// PSDC Ecommerce Dataset Exercises
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 28.95,
    stock: 34,
    sales: 150,
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    category: "Electronics",
    price: 95.5,
    stock: 12,
    sales: 200,
  },
  {
    id: 3,
    name: "Laptop",
    category: "Electronics",
    price: 910.75,
    stock: 7,
    sales: 50,
  },
  {
    id: 4,
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 45.3,
    stock: 0,
    sales: 85,
  },
  {
    id: 5,
    name: "Smartphone",
    category: "Electronics",
    price: 680.4,
    stock: 25,
    sales: 300,
  },
  {
    id: 6,
    name: "Blender",
    category: "Home Appliances",
    price: 37.6,
    stock: 10,
    sales: 45,
  },
  {
    id: 7,
    name: "Desk Lamp",
    category: "Home Decor",
    price: 18.8,
    stock: 50,
    sales: 70,
  },
  {
    id: 8,
    name: "Office Chair",
    category: "Furniture",
    price: 85.2,
    stock: 5,
    sales: 60,
  },
  {
    id: 9,
    name: "Electric Kettle",
    category: "Home Appliances",
    price: 23.7,
    stock: 0,
    sales: 90,
  },
  {
    id: 10,
    name: "Running Shoes",
    category: "Footwear",
    price: 57.45,
    stock: 20,
    sales: 120,
  },
  {
    id: 11,
    name: "Air Conditioner",
    category: "Home Appliances",
    price: 389.95,
    stock: 8,
    sales: 30,
  },
  {
    id: 12,
    name: "Bookshelf",
    category: "Furniture",
    price: 142.3,
    stock: 15,
    sales: 40,
  },
  {
    id: 13,
    name: "Smartwatch",
    category: "Electronics",
    price: 192.99,
    stock: 18,
    sales: 75,
  },
  {
    id: 14,
    name: "Electric Toothbrush",
    category: "Personal Care",
    price: 27.55,
    stock: 22,
    sales: 55,
  },
  {
    id: 15,
    name: "Yoga Mat",
    category: "Sports",
    price: 17.2,
    stock: 30,
    sales: 100,
  },
  {
    id: 16,
    name: "Gaming Console",
    category: "Electronics",
    price: 489.0,
    stock: 10,
    sales: 95,
  },
  {
    id: 17,
    name: "Water Bottle",
    category: "Sports",
    price: 9.5,
    stock: 40,
    sales: 85,
  },
  {
    id: 18,
    name: "Microwave Oven",
    category: "Home Appliances",
    price: 94.75,
    stock: 8,
    sales: 60,
  },
  {
    id: 19,
    name: "T-Shirt",
    category: "Apparel",
    price: 13.99,
    stock: 60,
    sales: 110,
  },
  {
    id: 20,
    name: "Jeans",
    category: "Apparel",
    price: 47.3,
    stock: 20,
    sales: 75,
  },
];

// Questions
// Note: Create a function for each question, and return an array in the answer
// wherever necessary.

// 1. Find the Best Selling Product
// Write a function which returns the object of the best selling product.
function findBestSellingProduct() {
  let bestSales = 0;
  let bestSellingProduct;

  for (let i = 0; i < products.length; i++) {
    if (bestSales < products[i].sales) {
      bestSales = products[i].sales;
      bestSellingProduct = products[i];
    }
  }

  return bestSellingProduct;
}
console.log("Best Selling Product: ", findBestSellingProduct());

// 2. Find the Out of Stock Products (products that have 0 stock)
// Function will take one parameter products and return an array of out-of-stock
// products.
function findOutOfStockProducts(products) {
  let outOfStockProducts = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].stock === 0) {
      outOfStockProducts.push(products[i]);
    }
  }
  return outOfStockProducts;
}
console.log("Out of stock products: ", findOutOfStockProducts(products));

// 3. Calculate the Total Revenue
// Write a function to calculate the total revenue from all products. The function
// will take one parameter products and return the total revenue as a number.
function calculateTotalRevenue(products) {
  let totalRevenue = 0;

  for (let i = 0; i < products.length; i++) {
    totalRevenue += products[i].price * products[i].sales;
  }
  return totalRevenue;
}
console.log("Total Revenue: ", calculateTotalRevenue(products));

// 4. Apply Sale to Less-Selling Products (products that have <50 sales)
// Write a function to apply a sale to less-selling products. The function will
// take two parameters: products and percentage (the discount percentage you
// want to apply). The function should return an array of products with the
// updated prices.
function applySaleToLessSellingProducts(products, percentage) {
  const lessSales = 50;
  let lessSellingProducts = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].sales < lessSales) {
      products[i].price = Number(
        (products[i].price - products[i].price * percentage).toFixed(2)
      );
      lessSellingProducts.push(products[i]);
    }
  }
  return lessSellingProducts;
}
console.log(
  "20% sale on less-selling products: ",
  applySaleToLessSellingProducts(products, 0.2)
);

// 5. Find Products in a Specific Category
// Write a function to find products in a specific category. The function will take
// two parameters: products and category (a string representing the category to
// search for). The function should return an array of products in that category.
function findProductsInCategory(products, category) {
  const productsInCat = [];

  for (let i = 0; i < products.length; i++) {
    if (category === products[i].category) {
      productsInCat.push(products[i]);
    }
  }
  return productsInCat;
}
console.log(
  "Products in specific category: ",
  findProductsInCategory(products, "Electronics")
);

// 6. Find Products with Stock Less Than a Specific Quantity
// Write a function to find products with stock less than a specific quantity. The
// function will take two parameters: products and quantity (the stock quantity
// threshold). The function should return an array of products with stock less
// than the given quantity.
function findProductsWithLowStock(products, quantity) {
  const productsWithLowStock = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].stock < quantity) {
      productsWithLowStock.push(products[i]);
    }
  }

  return productsWithLowStock;
}
console.log(
  `Products with low stock: `,
  findProductsWithLowStock(products, 10)
);

// 7. Calculate Total Stock Value
// Write a function to calculate the total stock value (total stock * price for each
// product). The function will take one parameter products and return the total
// stock value as a number.
function calculateTotalStockValue(products) {
  let totalStockValue = 0

  for (let i = 0; i < products.length; i++) {
    totalStockValue += products[i].stock * products[i].price
  }

  return totalStockValue
}
console.log("Total stock value: ", calculateTotalStockValue(products))

// 8. Get Products with High Sales but Low Stock
// Write a function to get products with high sales but low stock. The function
// will take three parameters: products , salesThreshold (minimum sales to consider
// high), and stockThreshold (maximum stock to consider low). The function
// should return an array of products that meet the criteria.
// function getHighSalesLowStockProducts(products, salesThresh
// old, stockThreshold) {
//
// }
// 9. Find the Most Expensive Product in Each Category
// Write a function to find the most expensive product in each category. The
// function will take one parameter products and return an object where each
// key is a category and the value is the most expensive product in that
// category.
// function findMostExpensiveProductInEachCategory(products) {
//
// }
// 10. Group Products by Category
// Write a function to group products by their category. The function will take
// one parameter products and return an object where each key is a category
// PSDC Ecommerce Dataset Exercises 8
// and the value is an array of products in that category.
// function groupProductsByCategory(products) {
//
// }
// 11. Get Top N Selling Products
// Write a function to get the top N selling products. The function will take two
// parameters: products and n (the number of top selling products to return).
// The function should return an array of the top N selling products.
// function getTopNSellingProducts(products, n) {
//
// }
