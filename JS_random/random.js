function getRandomNumberBetween(start, end, quantity) {
  var pole = document.getElementById("pole");
  for (var i = 1; i <= quantity; i++) {
    if (quantity > 1) {
      pole.innerHTML +=
        Math.floor(Math.random() * (end - start + 1)) + start + ", ";
    } else {
      pole.innerHTML = Math.floor(Math.random() * (end - start + 1)) + start;
    }
  }
}

function getRandomNumber() {
  pole.innerHTML = " ";
  var start = document.getElementsByClassName("start")[0].value;
  var end = document.getElementsByClassName("end")[0].value;
  var quantity = document.getElementsByClassName("quantity")[0].value;
  getRandomNumberBetween(parseInt(start), parseInt(end), parseInt(quantity));
}
