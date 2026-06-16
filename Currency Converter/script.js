function toUSD()
{

  let rupees = Number(document.getElementById("amount").value);

  let usd = rupees / 96;

  document.getElementById("result").innerText =
    "USD = $" + usd;
}

function toINR()
{

  let usd = Number(document.getElementById("amount").value);

  let rupees = usd * 96;

  document.getElementById("result").innerText =
    "INR = ₹" + rupees;
}