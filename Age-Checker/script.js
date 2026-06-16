function check()
{
  let age = Number(document.getElementById("age").value);
  
  if(age >=60)
  {
    result.innerText = "Senior Citizen";
  }
  
  else if(age > 18)
  {
    result.innerText = "Eligable For Vote And Drive";
  }
  
  else
  {
    result.innerText = "Not Eligable";
  }
}