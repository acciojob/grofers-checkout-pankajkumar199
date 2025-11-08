document.getElementById("btn").addEventListener("click", function () {

  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach((p) => {
    total += Number(p.textContent);
  });

  const table = document.getElementById("grocery-table");

  // Create new row
  const row = document.createElement("tr");
  const cell = document.createElement("td");

  cell.colSpan = 2;
  cell.id = "ans"; // REQUIRED FOR TESTCASE
  cell.textContent = total;

  row.appendChild(cell);
  table.appendChild(row);
});
