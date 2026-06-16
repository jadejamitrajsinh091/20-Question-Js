function check()
{
  let number = Number(document.getElementById("digit").value);
  let sum = 1;
  
  for(num = number;num >= 1; num--)
  {
    sum = sum*num;
  }
  
  document.getElementById("result").innerText = sum;
}