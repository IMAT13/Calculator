var UseOp=false;
var LastOp="";
function inputNum(BTN){
    document.getElementById("screen").value+=BTN.innerText;
    UseOp=true;
}
function inputOp(BTN){
    if(UseOp){document.getElementById("screen").value+=(BTN.innerText+"");LastOp=(BTN.innerText+"");}
    else{
      if((BTN.innerText+"")!=LastOp) {
        document.getElementById("screen").value=document.getElementById("screen").value.slice(0, -1);
        document.getElementById("screen").value+=(BTN.innerText+"");
        LastOp=(BTN.innerText+"");
      }   
    }
    UseOp=false;
}
function calculate(BTN){
    
}
