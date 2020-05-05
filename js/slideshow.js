var slideIndex = 1;
var food = ["Chickpea Burgers", "Zucchini Fritters in Tomato Sauce", "Miso Soup", "Tofu Scramble", "Italian Herb Roasted Red Pepper Bisque with Sweet Potatoes"];
var arrIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
  if(!(arrIndex == 4 && n == 1) && !(arrIndex == 0 && n == -1)) {
	document.getElementById("desc").innerHTML = '<p>' + food[arrIndex + n] + '</p>';
	arrIndex = arrIndex + n;
  }
  else if(arrIndex == 4 && n == 1) {
	document.getElementById("desc").innerHTML = '<p>' + food[0] + '</p>';
	arrIndex = 0;
  }
  else {
	document.getElementById("desc").innerHTML = '<p>' + food[4] + '</p>';
	arrIndex = 4;
  }
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("food");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}