
// //new y-scales
// function createChart(ctx, dataObject) {
//     var labels = dataObject.jsonarray.map(function (e) {
//       return e.time;
//     });
    
//     // Extract numeric values from systolic data and compute average
//     var systolicData = dataObject.jsonarray.map(function (e) {
//       return e.systolic;
//     });
//     var numericSystolicData = systolicData.filter(function (e) {
//       return !isNaN(e);
//     });
//     var systolicAvg = numericSystolicData.reduce(function (a, b) {
//       return a + b;
//     }, 0) / numericSystolicData.length;
//     console.log(`chart systolic average is:${systolicAvg}`);
//     var config = {
//       type: 'line',
//       data: {
//         labels: labels,
//         datasets: [
//           {
//             label: 'Vipul\'s Systolic Blood Pressure',
//             data: systolicData,
//             pointBackgroundColor: function(context) {
//               if (context.parsed.y > 140) {
//                 return 'red';
//               } else {
//                 return 'green';
//               }
//             },
//             pointBorderColor: function(context) {
//               if (context.parsed.y > 160) {
//                 return 'red';
//               } else {
//                 return 'green';
//               }
//             },
//             backgroundColor: 'rgba(211 105 17 /40%)',
//             tension: 0.3,
//             borderWidth: 1,
//             pointStyle: 'circle',
//             radius: 5,
//             hoverRadius: 8,
//           },
//           {
//             type: 'line',
//             label: 'Average Systolic',
//             data: Array(labels.length).fill(systolicAvg),
//             borderColor: 'black',
//             borderWidth: 1,
//             fill: true,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           y: {
//             ticks: {
//               callback: function(value, index, values) {
//                 if (value === systolicAvg) {
//                   return `Average: ${value}`;
//                 } else {
//                   return value;
//                 }
//               },
//             },
//           },
//         },
//         responsive: true,
//         plugins: {
//           title: {
//             display: true,
//             text: 'Vipul\'s Systolic Blood Pressure',
//           },
//           subtitle: {
//             display: true,
//             text: 'SBP variations during the day',
//             color: 'blue',
//           },
//         },
//       },
//     };
  
  
//     return new Chart(ctx, config);
//   }
  

//new
function createChart(ctx, dataObject) {
    var labels = dataObject.jsonarray.map(function (e) {
      return e.time;
    });
    
    // Extract numeric values from systolic data and compute average
    var systolicData = dataObject.jsonarray.map(function (e) {
      return e.systolic;
    });
    var numericSystolicData = systolicData.filter(function (e) {
      return !isNaN(e);
    });
    var systolicAvg = numericSystolicData.reduce(function (a, b) {
      return a + b;
    }, 0) / numericSystolicData.length;
  
    var config = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Vipul\'s Systolic Blood Pressure',
            data: systolicData,
            pointBackgroundColor: function(context) {
              if (context.parsed.y > 140) {
                return 'red';
              } else {
                return 'green';
              }
            },
            pointBorderColor: function(context) {
              if (context.parsed.y > 160) {
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
          },
          {
            type: 'line',
            label: 'Average Systolic',
            data: Array(labels.length).fill(systolicAvg),
            borderColor: 'black',
            borderWidth: 1,
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          y: {
            ticks: {
              callback: function(value, index, values) {
                if (value === systolicAvg) {
                  return `Average: ${value}`;
                } else {
                  return value;
                }
              },
            },
          },
        },
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Vipul\'s Systolic Blood Pressure',
          },
          subtitle: {
            display: true,
            text: 'SBP variations during the day',
            color: 'red',
          },
        },
      },
    };

    chart.destroy();
    return new Chart(ctx, config);
  }
  