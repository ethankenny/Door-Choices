function doorRandomizer() {
  var x = Math.floor((Math.random() * 3) + 1);
  var link = document.getElementsByClassName("door");

  if (x == 1 || x == 2) {
    window.open("pages/goat.html");
  } else {
    window.open("pages/car.html");
  }
}