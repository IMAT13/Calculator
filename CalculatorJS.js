var UseOp=false;
var LastOp="";
var Nums= new Array();
var Ops= new Array();
var count=0;
var LastText="";
var PrioritySortedOps=new Array;
function reset(){
document.getElementById("screen").value=""; 
}
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
  for( var i = 0; i < Ops.length; i++){ 
    if ( Ops[i] == Op) { 
        Ops.splice(i, 1); 
        i--; 
    }
}
  return indices; 
}
function calc(PSOps,Op){

  var OpCounts=PSOps.length;
  while(OpCounts>0){
    var index=eval(PSOps[0]);
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
      for(var k=index;k<PSOps.length-1;k++) {PSOps[k]=(eval(PSOps[k+1])-1);}
      PSOps.pop();  
      for(var j=index;j<Nums.length-1;j++) {Nums[j]=Nums[j+1];} 
      Nums.pop();
      OpCounts--;
    }

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
  document.getElementById("screen").value=Nums[0];
  InputText=Nums[0];
  Ops=[];
  UseOp=true;
  LastOp="";
  count=0;
}