function calculatePrice()
{

  let age = Number(document.getElementById("age").value);

  let price;

  if (age < 12)
  {
    price = 100;
  }
  
  else if (age < 60) 
  {
    price = 200;
  }
  
  else 
  {
    price = 150;
  }

  document.getElementById("result").innerText =
    "Ticket Price = ₹" + price;
}