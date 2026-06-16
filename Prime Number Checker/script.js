function checkPrime()
{
  let num = document.getElementById("num").value;
  let prime = true;
  let result = document.getElementById("result");

  if(num <= 1)
  {
    prime = false;
  }

  for(let i = 2; i < num; i++)
  {
    if(num % i == 0)
    {
      prime = false;
    }
  }

  if(prime)
  {
    result.innerText = "Prime Number";
  }
  else
  {
    result.innerText = "Not a Prime Number";
  }
}