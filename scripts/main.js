function getInputValue() {
  // Selecting the input element and get its value

  var mealNumb = document.getElementById("meal_input_num").value;
  var days = mealNumb / (103 * 3);
  var result =  Math.round(days) + " days left" ;
  document.getElementById("cookie1").innerHTML = result;
  // Displaying the value
  //103 guests only because cabin crew are AIs
};

function totalDistance() {
  var dailyDistance = document.getElementById("distance_input_num").value;
  var storedDays = JSON.parse(localStorage.getItem("days"))
  if (storedDays == null) {
    storedDays = []
  }
  storedDays.push(dailyDistance)
  localStorage.setItem("days", JSON.stringify(storedDays))
  var totaldistance = 0
  for (let i = 0; i < storedDays.length; i++) {
    totaldistance = totaldistance + parseInt(storedDays[i])
  }
  document.getElementById("distance").innerHTML =  totaldistance + " miles ";
}

function clearStorage() {
  localStorage.clear()
  document.getElementById("distance").innerHTML =  0 + " miles ";
};

function getGravityInfo(){
  var earth = "9,807 m/s²";
  var mars = "3,721 m/s²";
  var planet = document.getElementById("planets").value
  var result= ""
  if(planet == "earth"){
result=earth
  }
  else{
  	result=mars
  }
  console.log(result)
    document.getElementById("gravity").innerHTML =  result
}

