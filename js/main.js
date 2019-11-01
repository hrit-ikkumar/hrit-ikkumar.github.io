function showMenu(){
  var x=document.getElementById("myLinks");
  if(x.style.display === "block" || x.style.display=="inline-block")
  {
    x.style.display = "none";
  }
  else
  {
    x.style.display = "block";
  }
}
function whatIsYourName(){
  var firstname = prompt("What is your first name?");
  document.getElementById("YourName").innerHTML = "Hey, " + firstname+"!";
}
