// Select all price cells
const prices = document.querySelectorAll(".price");

let total = 0;

// Add all prices
prices.forEach(price => {
  total += Number(price.textContent);
});

// Create new row
const totalRow = document.createElement("tr");
const totalCell = document.createElement("td");

// One cell across two columns
totalCell.colSpan = 2;
totalCell.textContent = "Total Price: " + total;

// Add row to table
totalRow.appendChild(totalCell);
document.querySelector("table").appendChild(totalRow);
