function check()
{
  let num1 = Number(document.getElementById("input1").value);
  let num2 = Number(document.getElementById("input2").value);
  let num3 = Number(document.getElementById("input3").value);
  
  if(num1>num2 && num1>num3)
  {
    result.innerText = "Number 1 Is Largest";
  }
  
  else if(num2>num1 && num2>num3)
  {
    result.innerText = "Number 2 Is Largest";
  }
  
  else
  {
    result.innerText = "Number 3 Is Largest";
  }
};