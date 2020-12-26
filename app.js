var dateinput = document.querySelector("#inputDate");
var button = document.querySelector("#button");
var output = document.querySelector("#output");

//Splitting entered date, and generating the date in different formats and putting them into an array.
function generateDate(date) {
  var datearr = date.split("-");
  var yrmndt = datearr[0] + datearr[1] + datearr[2];
  var dtmnyr = datearr[2] + datearr[1] + datearr[0];
  var mndtyr = datearr[1] + datearr[2] + datearr[0];
  datearr[0] = yrmndt;
  datearr[1] = dtmnyr;
  datearr[2] = mndtyr;
  return datearr;
}

//Checking if the date is palindrome
function checkPalindrome(date) {
  var flag = 0;
  var dateitr = parseInt(date);
  var reversedate = "";
  while (dateitr > 0) {
    reversedate += dateitr % 10;
    dateitr = Math.floor(dateitr / 10);
  }
  if (reversedate === date) {
    flag = 1;
  } else {
    flag = 0;
  }
  return flag;
}

function clickHandler() {
  var date = dateinput.value;
  var flag = 0;
  // console.log(date);
  var dateformats = generateDate(date);
  // console.log(dateformats);

  //loop to check if any one format of date is palindrome using the checkPalindrome function
  for (var i = 0; i < dateformats.length; i++) {
    flag = checkPalindrome(dateformats[i]);
    console.log(flag);
    if (flag === 1) {
      break;
    }
  }

  //Displaying appropiate result depending on the flag value. 1 is date is palindrome, 0 is it isn't
  if (flag === 1) {
    output.innerHTML =
      "Congratulations Your birthday is a palindrome birthdate!!";
  } else if (flag === 0) {
    output.innerHTML = "Oops :( your birthdate is not an palidrome birthdate.";
  }
}

button.addEventListener("click", clickHandler);
