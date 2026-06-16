function calculate()
{

  let amount = Number(document.getElementById("amount").value);

  let discount = 0;

  if (amount >= 5000)
  {
    discount = amount * 20 / 100;
  }
  else if (amount >= 2000)
  {
    discount = amount * 10 / 100;
  }
  else
  {
    discount = 0;
  }

  let finalAmount = amount - discount;

  document.getElementById("result").innerHTML =
    "Discount = ₹" + discount + "<br>" +
    "Final Amount = ₹" + finalAmount;
}