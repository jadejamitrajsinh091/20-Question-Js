function table()
{
  let num = document.getElementById("num").value;
  
  let result = document.getElementById("table-container"); 
  
  let output = "";

  for(let i = 1; i <= 10; i++)
  {
    output += num + " x " + i + " = " + (num * i) + "<br>";
  }
  
  result.innerHTML = output;
}