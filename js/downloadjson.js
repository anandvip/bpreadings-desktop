 // Retrieve data from local storage or initialize empty array
 var readings = JSON.parse(localStorage.getItem("readings")) || [];

 // Convert readings to JSON string
 var jsonString = JSON.stringify(readings);
 // console.log(jsonString);
 // Create Blob
 var blob = new Blob([jsonString], {type: "application/json"});

 // Create URL
 var url = URL.createObjectURL(blob);

 // Get existing anchor element or create new one
 var a = document.getElementById("download-link");
 if (!a) {
   a = document.createElement("a");
   a.id = "download-link";
   a.className = "json";
   var container = document.getElementById("container");
   container.appendChild(a);
 }

 // Set attributes
 a.href = url;
 a.download = "readings.json";
 // a.textContent = "Download readings";
 a.innerHTML = `<img class="json" src="images/JSONDNLD.png" alt="download json readings"> <span>download readings</span>`
