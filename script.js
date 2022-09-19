
let x="";
let a;
let sign=0;

const clear=document.getElementById("clear");
clear.addEventListener("click",function(){
    x="";
    a=0;
    sign=0;
    document.getElementById("middlepart").innerText=x;
    document.getElementById("result").innerText=x;
    

})
const equal=document.getElementById("equal");
equal.addEventListener("click",function(){

    if(sign==1)
    {
        document.getElementById("result").innerText=a+parseFloat(x);

    }
    else if(sign==2)
    {
        document.getElementById("result").innerText=(a-parseFloat(x));

    }
    else if(sign==3)
    {
        document.getElementById("result").innerText=(a*parseFloat(x));

    }
    else if(sign==4)
    {
        document.getElementById("result").innerText=(a/parseFloat(x));
    }


})
const zero=document.getElementById("zero");
zero.addEventListener("click",function(){
    let temp=document.getElementById("middlepart").innerText;
    document.getElementById("middlepart").innerText=temp+"0";
    x+="0";

})

const one=document.getElementById("one");
one.addEventListener("click",function(){
    let temp=document.getElementById("middlepart").innerText;
    document.getElementById("middlepart").innerText=temp+"1";
    x+="1";

})
const two=document.getElementById("two");
two.addEventListener("click",function(){
    let temp=document.getElementById("middlepart").innerText;
    document.getElementById("middlepart").innerText=temp+"2";
    x+="2";

})
const three=document.getElementById("three");
three.addEventListener("click",function(){
    let temp=document.getElementById("middlepart").innerText;
    document.getElementById("middlepart").innerText=temp+"3";
    x+="3";

})
const four=document.getElementById("four");
four.addEventListener("click",function(){
    let temp=document.getElementById("middlepart").innerText;
    document.getElementById("middlepart").innerText=temp+"4";
    x+="4";

})
const five=document.getElementById("five");
five.addEventListener("click",function(){
    let temp=document.getElementById("middlepart").innerText;
    document.getElementById("middlepart").innerText=temp+"5";
    x+="5";

})
const six=document.getElementById("six");
six.addEventListener("click",function(){
    let temp=document.getElementById("middlepart").innerText;
    document.getElementById("middlepart").innerText=temp+"6";
    x+="6";

})
const seven=document.getElementById("seven");
seven.addEventListener("click",function(){
    let temp=document.getElementById("middlepart").innerText;
    document.getElementById("middlepart").innerText=temp+7;
    x+="7";

})
const eight=document.getElementById("eight");
eight.addEventListener("click",function(){
    let temp=document.getElementById("middlepart").innerText;
    document.getElementById("middlepart").innerText=temp+"8";
    x+="8";

})
const nine=document.getElementById("nine");
nine.addEventListener("click",function(){ 
    let temp=document.getElementById("middlepart").innerText;
    document.getElementById("middlepart").innerText=temp+"9";
    x+="9";          

})
const dot=document.getElementById("dot");
dot.addEventListener("click",function(){
    let temp=document.getElementById("middlepart").innerText;
    document.getElementById("middlepart").innerText=temp+".";
    x+=".";
})
const plus=document.getElementById("plus");
plus.addEventListener("click",function(){
    let temp=document.getElementById("middlepart").innerText;
    document.getElementById("middlepart").innerText=temp+"+";
    a=parseFloat(x);
    x="";
    sign=1;
})
const minus=document.getElementById("minus");
minus.addEventListener("click",function(){
    let temp=document.getElementById("middlepart").innerText;
    document.getElementById("middlepart").innerText=temp+"-";
    a=parseFloat(x);
    x="";
    sign=2;
})
const multiply=document.getElementById("multiply");
multiply.addEventListener("click",function(){
    let temp=document.getElementById("middlepart").innerText;
    document.getElementById("middlepart").innerText=temp+"×";
    a=parseFloat(x);
    x="";
    sign=3;
})
const devide=document.getElementById("devide");
devide.addEventListener("click",function(){
    let temp=document.getElementById("middlepart").innerText;
    document.getElementById("middlepart").innerText=temp+"÷";
    a=parseFloat(x);
    x="";
    sign=4;
})



