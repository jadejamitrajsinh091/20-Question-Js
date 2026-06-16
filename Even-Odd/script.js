document.getElementById("myform"),
  addEventListener("submit", (enter) => {
    enter.preventDefault();

    let num = Number(document.getElementById("num").value);

    let result = document.getElementById("result");

    if (num % 2 == 0) {
      result.textContent = "This Is Even Number";
    } else {
      result.textContent = "This Is Odd Number";
    }
  });