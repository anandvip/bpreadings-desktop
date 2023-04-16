//LATEST VERSION

// Define data object
var dataObject = {
  // ...
};

// Get blood pressure readings from local storage
var bpReadings = [];
try {
  bpReadings = JSON.parse(localStorage.getItem("readings")) || [];
} catch (error) {
  console.error("Error parsing JSON from local storage:", error);
}

// Assign readings to data object
dataObject["jsonarray"] = bpReadings;

// Create chart
var ctx = mybpchart.getContext('2d');
var chart = createChart(ctx, dataObject);

function createChart(ctx, dataObject) {
  var labels = dataObject.jsonarray.map(function (e) {
    return e.date;
  });

  var systolicData = dataObject.jsonarray.map(function (e) {
    return e.systolic;
  });

  

  //genie solution return new Chart(ctx, config) but missed the closing curly;

  var config = {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Vipul\'s Systolic BP mmHG',
        data: systolicData,
        pointBackgroundColor: function(context) {
          var systolic = context.parsed.y;
          if (systolic >= 140) {
            return 'red';    
          } else {
            return 'green';
          }
        },
        pointBorderColor: function(context) {
          var systolic = context.parsed.y;
          if (systolic >= 140) {
            return 'red';
          } else {
            return 'green';
          }
        },
        backgroundColor: 'rgba(211 105 17 /40%)',
        tension: 0.3,
        borderWidth: 1,
        pointStyle: 'circle',
        radius: 5,
        hoverRadius: 8,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio:false,
      plugins: {
        title: {
          display: true,
          text: 'Vipul\'s Systolic Blood Pressure'
        },
        subtitle: {
          display: true,
          text: 'Systolic BP variations during the day at random',
          color: 'blue'
        }
      },
      width:900,
      height:750,
      onClick: (event, chartElements) => {
        if (chartElements.length > 0) {
          const clickedElementIndex = chartElements[0].index;
          const clickedDate = chartData.labels[clickedElementIndex];
  
          // Loop through table rows and find the one with the matching date column
          const tableRows = document.querySelectorAll("#readings tbody tr");
          for (let i = 0; i < tableRows.length; i++) {
            const dateCell = tableRows[i].querySelector("td:first-child");
            if (dateCell.textContent === clickedDate) {
              // Scroll to the matched row
              tableRows[i].scrollIntoView({
                behavior: "smooth"
              });
              break;
            }
          }
        }
      }
    }
  };
    
  return new Chart(ctx, config);

}
   
  



//amendments in tooltips by genie
//under consideration to toy with

//   width:800,
//   height:600,
//   tooltips: {
//     callbacks: {
//       label: function(context) { // This function returns the tooltip label for each datapoint
//         var label = context.dataset.label || ''; // Get the dataset label or default to empty string
//         if (label) {
//           label += ': ';
//         }
//         var dateAndTime = context.parsed.x;
//         var systolic = context.parsed.y;
//         return label + dateAndTime + ', ' + systolic + 'mmHg'; // Concatenate the date, time, and systolic value into a single label string
//       }
//     }
//   }
// };

