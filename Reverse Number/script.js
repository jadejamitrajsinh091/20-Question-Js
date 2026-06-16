function reverseNum() {

  let num = document.getElementById("numInput").value;
  let reverse = "";

  for (let i = num.length - 1; i >= 0; i--) {
    reverse += num[i];
  }
  document.getElementById("resultDisplay").innerText = "Reverse = " + reverse;
}