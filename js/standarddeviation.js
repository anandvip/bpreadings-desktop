function calculateStatistics() {
    let systolicSum = 0;
    let diastolicSum = 0;
    let systolicMean = 0;
    let diastolicMean = 0;
    let systolicVariance = 0;
    let diastolicVariance = 0;
    let systolicStdDev = 0;
    let diastolicStdDev = 0;
    
    const myreadings = JSON.parse(localStorage.getItem("readings"));
  console.log(`coming from std deviation script:${myreadings}`);
    //Calculate sum of systolic and diastolic readings
    myreadings.forEach((reading) => {
      systolicSum += Number(reading.systolic);
      diastolicSum += Number(reading.diastolic);
    });
  
    //Calculate mean of systolic and diastolic readings
    systolicMean = systolicSum / myreadings.length;
    diastolicMean = diastolicSum / myreadings.length;
  
    //Calculate variance of systolic and diastolic readings
    myreadings.forEach((reading) => {
      systolicVariance += Math.pow(Number(reading.systolic) - systolicMean, 2);
      diastolicVariance += Math.pow(Number(reading.diastolic) - diastolicMean, 2);
    });
    systolicVariance /= myreadings.length;
    diastolicVariance /= myreadings.length;
  
    //Calculate standard deviation of systolic and diastolic readings
    systolicStdDev = Math.sqrt(systolicVariance);
    diastolicStdDev = Math.sqrt(diastolicVariance);
  
    console.log("systolicMean: " + systolicMean);
    console.log("diastolicMean: " + diastolicMean);
    console.log("systolicVariance: " + systolicVariance);
    console.log("diastolicVariance: " + diastolicVariance);
    console.log("systolicStdDev: " + systolicStdDev);
    console.log("diastolicStdDev: " + diastolicStdDev);
    console.log(document.getElementById("stddevsys").textContent);
    console.log(document.getElementById("stddevDia").textContent);
    document.getElementById("stddevsys").innerText = systolicStdDev.toFixed(2);
  document.getElementById("stddevDia").innerText = diastolicStdDev.toFixed(2);
  }
  calculateStatistics()