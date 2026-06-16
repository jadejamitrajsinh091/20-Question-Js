function withdraw() 
{

  let amount = Number(document.getElementById("amount").value);

  let note500 = 0;
  let note200 = 0;
  let note100 = 0;

  while (amount >= 500) 
  {
    note500++;
    amount = amount - 500;
  }

  while (amount >= 200)
  {
    note200++;
    amount = amount - 200;
  }

  while (amount >= 100) 
  {
    note100++;
    amount = amount - 100;
  }

  document.getElementById("result").innerHTML =
    "500 Notes = " + note500 + "<br>" +
    "200 Notes = " + note200 + "<br>" +
    "100 Notes = " + note100;
}