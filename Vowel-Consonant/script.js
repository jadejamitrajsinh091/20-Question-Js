function check()
{
  let character = document.getElementById("letter").value.toLowerCase();
  
  if(character === "a" || character === "e" || character === "i" || character === "o" || character ==="u")
  {
    result.innerText = "It's Vowel";
  }
  
  else
  {
    result.innerText = "It's Consonant";
  }
}