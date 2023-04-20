var readings = JSON.parse(localStorage.getItem("readings")) || [];
var table = document.getElementById("readings");
var patient = document.getElementById("person");
var feedback = document.getElementById("about");
console.log(patient.textContent);
console.log(feedback.textContent);
if (patient&&feedback) {
  patient.textContent="Developer of this app: Vipul Anand";
  feedback.textContent="you have suugestions for features improvement whatsapp me @ 9896918475 or if you can email i am available here va@vipulanand.in"
}
// Request permission to show notifications
Notification.requestPermission();

// Function to show a notification april5,2023
function sendNotification() {
  if (Notification.permission === "granted") {
    new Notification("Reading Added", {
      body: "A new reading has been added.",
      icon: "/images/icon3.png"
    });
  }
}
// Add the readings from localStorage to the table
for (var i = 0; i < readings.length; i++) {
  var reading = readings[i];
  var row = table.insertRow(-1);
  var dateCell = row.insertCell(0);
  var timeCell = row.insertCell(1);
  var systolicCell = row.insertCell(2);
  var diastolicCell = row.insertCell(3);
  var heartRateCell = row.insertCell(4);
  var actionCell = row.insertCell(5);
  dateCell.innerHTML = reading.date;
  timeCell.innerHTML = reading.time;
  systolicCell.innerHTML = reading.systolic;
  if (reading.systolic > 140) {

    systolicCell.parentElement.classList.add("red");
  }
  diastolicCell.innerHTML = reading.diastolic;
  heartRateCell.innerHTML = reading.heartRate;
  actionCell.innerHTML =
    '<button class="delete" data-index="' + i + '"></button>';
}

// Add a click event listener to the table that deletes a row and its corresponding reading
table.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    var index = event.target.dataset.index;
    readings.splice(index, 1);
    localStorage.setItem("readings", JSON.stringify(readings));
    event.target.closest("tr").remove();
  }
});

// Add a submit event listener to the form that adds a new reading to the table
var form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var systolic = document.getElementById("systolic").value;
  var diastolic = document.getElementById("diastolic").value;
  var heartRate = document.getElementById("heartRate").value;
  var reading = {
    date: date,
    time: time,
    systolic: systolic,
    diastolic: diastolic,
    heartRate: heartRate,
  };
  readings.push(reading);
  localStorage.setItem("readings", JSON.stringify(readings));
  var row = table.insertRow(-1);
  var dateCell = row.insertCell(0);
  var timeCell = row.insertCell(1);
  var systolicCell = row.insertCell(2);
  var diastolicCell = row.insertCell(3);
  var heartRateCell = row.insertCell(4);
  var actionCell = row.insertCell(5);
  dateCell.innerHTML = date;
  timeCell.innerHTML = time;
  systolicCell.innerHTML = systolic;
  if (systolic > 140) {
    systolicCell.parentElement.classList.add("red");
  }
  diastolicCell.innerHTML = diastolic;
  heartRateCell.innerHTML = heartRate;
  actionCell.innerHTML =
    '<button class="delete" data-index="' +
    (readings.length - 1) +
    '"></button>';
  form.reset();
  sendNotification();
  //console.log(`reached function you added! ${sendNotification()}`); // Show a notification when a new reading is added
  location.reload(); 
});

// Add a click event listener to the print icon that opens the print dialog for the table
var printIcon = document.getElementById("print-icon");
printIcon.addEventListener("click", function () {
  window.print();
});
console.log("Page reloaded.");
