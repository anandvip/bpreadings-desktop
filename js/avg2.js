const avgreadings = JSON.parse(localStorage.getItem("readings")) || [];
console.log(avgreadings);

function calculateSumReadings(avgreadings) {
  let sumHeartRate = 0;
  let sumSystolicBP = 0;
  let sumdiastolicBP = 0;

  for (let reading of avgreadings) {
    sumHeartRate += Number(reading.heartRate);
    sumSystolicBP += Number(reading.systolic);
    sumdiastolicBP += Number(reading.diastolic);
  }

  const avgHeartRate = sumHeartRate.toFixed() / avgreadings.length;
  const avgSystolicBP = sumSystolicBP.toFixed() / avgreadings.length;
  const avgdiastolicBP = sumdiastolicBP.toFixed() / avgreadings.length;

  return {
    sumHeartRate,
    sumSystolicBP,
    sumdiastolicBP,
    avgHeartRate,
    avgSystolicBP,
    avgdiastolicBP
  };
}

const result = calculateSumReadings(avgreadings);

console.log(result.sumSystolicBP);

let targetavgsystolicAvg = document.getElementById("targetsystolicAvg");
console.log(targetavgsystolicAvg.textContent);
let targetbpvalue = targetavgsystolicAvg.textContent.match(/\d+/g).map(Number);
console.log(targetbpvalue[0]);

if (result.avgSystolicBP) {
  console.log("oops no data here!");
} else {
  console.log("data here!");
  console.log(result.avgSystolicBP);
}

document.getElementById("heartRateAvg").textContent = result.avgHeartRate.toFixed();
document.getElementById("systolicAvg").textContent = result.avgSystolicBP.toFixed();
document.getElementById("diastolicAvg").textContent = result.avgdiastolicBP.toFixed();
document.getElementById("numCells").textContent = avgreadings.length;
