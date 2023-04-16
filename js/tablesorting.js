// Get thesortTable element
const sortTable = document.getElementById("readings");

// Loop through each row of thesortTable
for (let i = 0; i <sortTable.rows.length; i++) {
  // Get the second column of the current row
  const timeCell =sortTable.rows[i].cells[1];
console.log(timeCell);
  // Extract the time from the inner text of the cell
  const time = timeCell.innerText.trim();
console.log(time);
  // Log the time to the console
  console.log(`Time: ${time}`);
}
