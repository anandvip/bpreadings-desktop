//bp reading highs and normal values for my age.container

function highlightNumbers() {
    // Get all elements on the page
    const elements = document.querySelectorAll("*");

    // Loop through the elements and check for numbers
    elements.forEach((element) => {
      // Check if the element contains a number
      if (!isNaN(element.textContent.trim())) {
        const value = parseInt(element.textContent.trim());
        // Check if the number is equal to or greater than 140
        if (value >= 140 || value >= 160) {
          // Change the color and font weight of the text
          element.style.color = "red";
          element.style.fontWeight = "bold";
        }
        changeColor();
      }
    });
  }
  function changeColor() {
const TableRows = document.querySelectorAll("table tr");
// Start the loop at i=1 to skip the header row
for (let i = 1; i < TableRows.length; i++) {
const cells = TableRows[i].querySelectorAll("td");
const thirdColumn = cells[2];
const value = parseInt(thirdColumn.textContent);
if (value < 140) {
  thirdColumn.style.color = "green";
}
  if(value>=140){
      thirdColumn.style.color = "red";
  }
}
}



  // Call the function when the page loads
  window.addEventListener("load", highlightNumbers);