function lovecalc(){
var n=Math.random();
var m=n*100;
var r=Math.floor(m);
if(r<=25){
  document.getElementById("res").innerHTML = "Your Love Score is " + r + "%" + " You dont deserve to be together";
}
if(r>25 && r<=50){
  document.getElementById("res").innerHTML = "Your Love Score is " + r + "%" + " you will get along as the time passes";
}
if(r>50 && r<=75){
  document.getElementById("res").innerHTML = "Your Love Score is " + r + "%" + " you have special bonding!!";
}
if(r>75 && r<=90){
  document.getElementById("res").innerHTML = "Your Love Score is " + r + "%" + "you are made for each other";
}
if(r>90){
  document.getElementById("res").innerHTML = "Your Love Score is " + r + "%" + "you are romeo and juliet";
}
}
