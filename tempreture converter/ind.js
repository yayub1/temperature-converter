const numbe=document.getElementById("number");
const input1=document.getElementById("input1");
const input2=document.getElementById("input2");
const mysubmit=document.getElementById("mysubmit");
const display=document.getElementById("display");
let nan=document.getElementById("number").value;
let  F;
let C;
function tofaranite(){
    number=document.getElementById("number").value;
   return F = (9/5 * number) + 32;

}
function tocelsius(){
    number=document.getElementById("number").value;
   return C = (number - 32) * 5/9
}
mysubmit.onclick=function(){
   
  if(input1.checked){
    display.textContent=tofaranite() + " C";
}
else if(input2.checked){
    display.textContent= tocelsius()  + "  C";
}

else{
    display.textContent="please select the type of conversion";}
}


