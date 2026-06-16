function toFahrenheit()
{

  let c = Number(document.getElementById("temp").value);

  let f = (c * 9 / 5) + 32;

  document.getElementById("result").innerText =
    c + "°C = " + f + "°F";
}

function toCelsius()
{

  let f = Number(document.getElementById("temp").value);

  let c = (f - 32) * 5 / 9;

  document.getElementById("result").innerText =
    f + "°F = " + c + "°C";
}