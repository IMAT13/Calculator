var UseOp=false;
var LastOp="";
var Nums= new Array();
var Ops= new Array();
var count=0;
var LastText="";
var PrioritySortedOps=new Array;
function inputNum(BTN){
    InputText=document.getElementById("screen").value;
    document.getElementById("screen").value+=BTN.innerText;
    UseOp=true;
}
function inputOp(BTN){
    if(UseOp){
      seperator(document.getElementById("screen").value,BTN);
      document.getElementById("screen").value+=(BTN.innerText+"");
      LastOp=(BTN.innerText+"");
    }
    else{
      if((BTN.innerText+"")!=LastOp && document.getElementById("screen").value!="") {
        document.getElementById("screen").value=document.getElementById("screen").value.slice(0, -1);
        count--;
        seperator(document.getElementById("screen").value,BTN);
        document.getElementById("screen").value+=(BTN.innerText+"");
        LastOp=(BTN.innerText+"");
      }   
    }
    UseOp=false;
}
function seperator(InputText,btn){
      Nums[count]=InputText.replace(LastText,"");
      Ops[count]=btn.innerText;
      LastText=InputText+=Ops[count];
      count++;
}
function findOps(Op){
  var indices = [];
  var element = Op;
  var idx = Ops.indexOf(element);
  while (idx != -1) {
    indices.push(idx);
    idx = Ops.indexOf(element, idx + 1);
  }
  return indices; 
}
function calculate(){
  Nums[count]=document.getElementById("screen").value.replace(LastText,"");
  PrioritySortedOps=findOps("*");
  calc(PrioritySortedOps,"*");
  PrioritySortedOps=[];
  PrioritySortedOps=findOps("/");
  calc(PrioritySortedOps,"/");
  PrioritySortedOps=[];
  PrioritySortedOps=findOps("+");
  calc(PrioritySortedOps,"+");
  PrioritySortedOps=[];
  PrioritySortedOps=findOps("-");
  calc(PrioritySortedOps,"-");
  PrioritySortedOps=[];
  // document.getElementById("screen").value=Nums[0];
  //alert(Nums[0]);
}
function calc(PSOps,Op){

  for(var i=0;i<PSOps.length;i++){
    var index=eval(PSOps[i]);
    switch(Op){
        case "*":
          Nums[index+1]=eval(Nums[index])*eval(Nums[index+1]);
          break;
        case "/":
          Nums[index+1]=eval(Nums[index])/eval(Nums[index+1]);
          break;
        case "+":
          Nums[index+1]=eval(Nums[index])+eval(Nums[index+1]);
          break;
        case "-":
          Nums[index+1]=eval(Nums[index])-eval(Nums[index+1]);
          break;
      } 
    }
   for(var j=index;i<Nums.length-1;j++) {Nums[j]=Nums[j+1];} 
   Nums.pop();
   alert(Nums);
}
