const avgreadings = JSON.parse(localStorage.getItem("readings")) || [];
console.log(avgreadings);
let sumHeartRate = 0;
let sumSystolicBP = 0;
let sumdiastolicBP = 0;
function calculateSumReadings(avgreadings) {
  let sumHeartRate = 0;
  let sumSystolicBP = 0;
  let sumdiastolicBP = 0;
  console.log(sumHeartRate);
  for (let reading of avgreadings) {
    sumHeartRate += Number(reading.heartRate);
    sumSystolicBP += Number(reading.systolic);
    sumdiastolicBP += Number(reading.diastolic);
  }

  return {
    sumHeartRate,
    sumSystolicBP,
    sumdiastolicBP
  };
}
const avgHeartRate = sumHeartRate.toFixed() / avgreadings.length;
const avgSystolicBP = sumSystolicBP.toFixed() / avgreadings.length;
const avgdiastolicBP = sumdiastolicBP.toFixed() / avgreadings.length;
console.log(sumSystolicBP);
let targetavgsystolicAvg = document.getElementById("targetsystolicAvg");
console.log(targetsystolicAvg.textContent);
let targetbpvalue= targetavgsystolicAvg.textContent.match(/\d+/g).map(Number);
console.log(targetbpvalue[0]); 
if (avgSystolicBP) {
 console.log("oops no data here!");
}else{
  console.log("data here!");
  console.log(avgSystolicBP);
}
for (let reading of avgreadings) {
  sumHeartRate += Number(reading.heartRate);
  sumSystolicBP += Number(reading.systolic);
  sumdiastolicBP += Number(reading.diastolic);
}

calculateSumReadings(avgreadings)


document.getElementById("heartRateAvg").textContent = avgHeartRate.toFixed();
document.getElementById("systolicAvg").textContent = avgSystolicBP.toFixed();
document.getElementById("diastolicAvg").textContent = avgdiastolicBP.toFixed();
document.getElementById("numCells").textContent = avgreadings.length;
