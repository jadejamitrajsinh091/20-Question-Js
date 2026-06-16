function check(){
  let year = Number(document.getElementById("year").value);

  if(year % 4 === 0)
  {
    result.innerText = "This Is Leap Year"
  }
  
  else
  {
    result.innerText = "This Is Not Leap Year"
  }
}