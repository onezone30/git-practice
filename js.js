function calculate(){
  
  var bill = document.getElementById("bill").value;
  var tip = document.getElementById("tip").value;
  var totalElement = document.getElementById("total");

 // tip formula
  let calculatedNumber = bill * (1 + (tip / 100));

  //displaying the result
  totalElement.innerHTML = calculatedNumber.toFixed(2);
}

// tip formula
// total * (1 + (tip / 100)