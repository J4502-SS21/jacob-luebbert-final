function checkPriceCpu() {
  var cpuPrice = document.getElementById("cpu").value;
  document.getElementById("cpuprice").innerHTML = "$" + cpuPrice;
}

function checkPriceRam() {
  var ramPrice = document.getElementById("ram").value;
  document.getElementById("ramprice").innerHTML = "$" + ramPrice;
}

function checkPriceGpu() {
  var gpuPrice = document.getElementById("gpu").value;
  document.getElementById("gpuprice").innerHTML = "$" + gpuPrice;
}

function checkPriceMobo() {
  var moboPrice = document.getElementById("mobo").value;
  document.getElementById("moboprice").innerHTML = "$" + moboPrice;
}

function checkPricePsu() {
  var psuPrice = document.getElementById("psu").value;
  document.getElementById("psuprice").innerHTML = "$" + psuPrice;
}

function checkPriceCase() {
  var casePrice = document.getElementById("case").value;
  document.getElementById("caseprice").innerHTML = "$" + casePrice;
}

function checkPriceStorage() {
  var storagePrice = document.getElementById("storage").value;
  document.getElementById("storageprice").innerHTML = "$" + storagePrice;
}

function totalPrice() {
  var totalPrice = Number(document.getElementById("cpu").value) + Number(document.getElementById("ram").value) + Number(document.getElementById("gpu").value) + Number(document.getElementById("mobo").value) + Number(document.getElementById("psu").value) + Number(document.getElementById("case").value) + Number(document.getElementById("storage").value);
  document.getElementById("totalprice").innerHTML = "$" + totalPrice;
}