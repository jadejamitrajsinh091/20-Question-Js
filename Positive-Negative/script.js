document.getElementById("btn").addEventListener("click", (enter) => {
  enter.preventDefault();

  let num = Number(document.getElementById("input").value);

  let result = document.getElementById("result");

  if (num < 0) {
    result.innerText = "Number Is Negative";
  } else if (num > 0) {
    result.innerText = "Number Is Positive";
  } else {
    result.innerText = "Number Is Zero (0)";
  }
});