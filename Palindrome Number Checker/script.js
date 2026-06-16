function check(){
  let num = document.getElementById("num").value;
  let reverse = "";
  let result = document.getElementById("result");

  for(let i = num.length - 1; i >= 0; i--){
    reverse += num[i];
  }

  if(num == reverse){
    result.innerText = "Palindrome Number";
  }
  else{
    result.innerText = "Not a Palindrome Number";
  }
}