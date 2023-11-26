
const btnce = document.querySelector("#ce");
const btnb= document.querySelector("#b");
const btndiv = document.querySelector("#div");
const btnb0 = document.querySelector("#b0");
const btnb1 = document.querySelector("#b1");
const btnb2 = document.querySelector("#b2");
const btnb3 = document.querySelector("#b3");
const btnb4 = document.querySelector("#b4");
const btnb5 = document.querySelector("#b5");
const btnb6 = document.querySelector("#b6");
const btnb7 = document.querySelector("#b7");
const btnb8 = document.querySelector("#b8");
const btnb9 = document.querySelector("#b9");
const btnadd = document.querySelector("#add");
const btnmul = document.querySelector("#mul");
const btnsub = document.querySelector("#sub");
const btneq = document.querySelector("#eq");
const btndot = document.querySelector("#dot");
const btnpn = document.querySelector("#pn");
const btnpwr = document.querySelector("#pwrbtn");
const pwrtxt = document.querySelector("#pwrbtn h1")
const scrtxt = document.querySelector("#screen h1");
var point="0"
var power="off";
var fnum="0";
var snum="0";
var renum="0"
var opr="+"
var oprclk="0"
var divclk="0"
var subclk="0"
var neg="0"
var tempopr="@"
function sizechk() {
    if(scrtxt.textContent.length<10){
        scrtxt.style.fontSize="45px"
    }    
    else{
        scrtxt.style.fontSize="25px"

    }
}
function oprchk(){
    if(scrtxt.textContent=="+" || scrtxt.textContent=="-" || scrtxt.textContent=="x" || scrtxt.textContent=="/"){
        return true
    }
    else{
        return false
    }
}

btnpwr.addEventListener("click",function () {
    if(power=="off" && pwrtxt.textContent=="ON"){
        pwrtxt.innerHTML="OFF"
        btnpwr.style.background="red"
        scrtxt.innerHTML=0
        scrtxt.style.opacity="1"
        power="on"
        sizechk();
    }
    else{
        pwrtxt.innerHTML="ON"
        btnpwr.style.background="green"
        scrtxt.innerHTML="000000000"
        scrtxt.style.opacity="0.5"
        power="off"
        fnum="0"
        snum="0"
        renum="0"
        eqclk="0"
        mulclk="0"
        sizechk();
    }
})
function numchk(){
    if(scrtxt.innerHTML=="0"){
        return true
    }
    else{
        return false
    }
}
btnce.addEventListener("click",function () {
    if(power=="on"){
            sizechk();
            fnum="0"
            snum="0"
            renum="0"
            eqclk="0"
            mulclk="0"
            subclk="0"
            divclk="0"
            scrtxt.innerHTML=0
        
    }
})
btndot.addEventListener("click",function(){
    if(power=="on"){
        if(numchk()){
            scrtxt.innerHTML="0."
        }
        else if(oprchk()){
            if(opr=="*"){
                scrtxt.innerHTML="x"+"0."
            }
            else{
                scrtxt.innerHTML=opr+"0."

            }

        }
        else{
            scrtxt.innerHTML=scrtxt.innerHTML+"."
        }
    }
    console.log(".")
})
function clrscr(){
    if(scrtxt.textContent.length==0){
        scrtxt.innerHTML="0"
    }
}
btnb.addEventListener("click",function () {
    console.log("backspace")
    if(power=="on"){
        if(!(scrtxt.textContent.endsWith("-") || scrtxt.textContent.endsWith("+") || scrtxt.textContent.endsWith("x") || scrtxt.textContent.endsWith("/") )){
            var str = scrtxt.textContent
            var bs=str.substring(0,str.length-1)
            scrtxt.innerHTML=bs
            
        }
        if(eqclk>0){
            scrtxt.innerHTML="0"
        }
        clrscr();
        
    }
})
btnpn.addEventListener("click",function () {
    if(power=="on"){
            if(opr=="*" || opr=="/"){
                neg=scrtxt.textContent.substring(1)
                neg=0-neg
                console.log(neg);
                scrtxt.innerHTML=opr+neg
                oprclk="1"
            }
            else{
                scrtxt.innerHTML=0-Number(scrtxt.textContent)
                console.log("hey");
                oprclk="1"
            }
    }
})
btndiv.addEventListener("click",function () {
    opr="/";
    tempopr="/"
    var a;
    if(power=="on"){
        if(oprclk=="0"){
            if(numchk()){
                fnum="1"
                fnum=Number(scrtxt.innerHTML);
                scrtxt.innerHTML="/"
                console.log(fnum,"3");
                oprclk++
            }
            else if(oprchk()){
                scrtxt.innerHTML="/"
            }
            else{
                if(divclk=="0"){
                    fnum=Number(scrtxt.textContent)
                    console.log(fnum,"1");
                    scrtxt.innerHTML="/"
                    divclk++
                    oprclk++
                }
                else{
                    fnum=Number(fnum)/Number(scrtxt.textContent.substring(1))
                    console.log(fnum,"2");
                    scrtxt.innerHTML="/"                 
                    oprclk++
                }
            }
        }          
    } 
    
})
btnb1.addEventListener("click",function () {
    if(power=="on"){
        if(numchk()){
            scrtxt.innerHTML="1"
            oprclk="0"
                
        }
        else{
            scrtxt.innerHTML=scrtxt.innerHTML+"1"
            oprclk="0"
        }
        
    }
})
btnb2.addEventListener("click",function () {
    if(power=="on"){
        if(numchk()){

            scrtxt.innerHTML="2"
            oprclk="0"
        }
        else{
            scrtxt.innerHTML=scrtxt.innerHTML+"2"
            oprclk="0"
        }
        
    }
})
btnb3.addEventListener("click",function () {
    if(power=="on"){
        if(numchk()){

            scrtxt.innerHTML="3"
            oprclk="0"
        }
        else{
            scrtxt.innerHTML=scrtxt.innerHTML+"3"
            oprclk="0"
        }
        
    }
})
btnb4.addEventListener("click",function () {
    if(power=="on"){
        if(numchk()){

            scrtxt.innerHTML="4"
            oprclk="0"
        }
        else{
            scrtxt.innerHTML=scrtxt.innerHTML+"4"
            oprclk="0"
        }
        
    }
})
btnb5.addEventListener("click",function () {
    if(power=="on"){
        if(numchk()){

            scrtxt.innerHTML="5"
            oprclk="0"
        }
        else{
            scrtxt.innerHTML=scrtxt.innerHTML+"5"
            oprclk="0"
        }
        
    }
})
btnb6.addEventListener("click",function () {
    if(power=="on"){
        if(numchk()){

            scrtxt.innerHTML="6"
            oprclk="0"
        }
        else{
            scrtxt.innerHTML=scrtxt.innerHTML+"6"
            oprclk="0"
        }
        
    }
})
btnb7.addEventListener("click",function () {
    if(power=="on"){
        if(numchk()){

            scrtxt.innerHTML="7"
            oprclk="0"
        }
        else{
            scrtxt.innerHTML=scrtxt.innerHTML+"7"
            oprclk="0"
        }
        
    }
})
btnb8.addEventListener("click",function () {
    if(power=="on"){
        if(numchk()){

            scrtxt.innerHTML="8"
            oprclk="0"
        }
        else{
            scrtxt.innerHTML=scrtxt.innerHTML+"8"
            oprclk="0"
        }
        
    }
})
btnb9.addEventListener("click",function () {
    if(power=="on"){
        if(numchk()){

            scrtxt.innerHTML="9"
            oprclk="0"
        }
        else{
            scrtxt.innerHTML=scrtxt.innerHTML+"9"
            oprclk="0"
        }
        
    }
})
btnb0.addEventListener("click",function () {
    if(power=="on"){
        if(numchk()){

            scrtxt.innerHTML="0"
            oprclk="0"
        }
        else{
            scrtxt.innerHTML=scrtxt.innerHTML+"0"
            oprclk="0"
        }
        
    }
})
btnadd.addEventListener("click",function () {
    opr="+"
    tempopr="+"
    if(power=="on"){
        
        if(oprchk()){
            scrtxt.innerHTML="+"            
        }
        else if(numchk()){
            fnum=Number(fnum)+Number(scrtxt.innerHTML)
            scrtxt.innerHTML="+"
            console.log(fnum);
            numchk();
        }
        else{
            fnum=Number(fnum)+Number(scrtxt.innerHTML)
            scrtxt.innerHTML="+"
            console.log(fnum);
        }
        
    }
})
var eqclk=0;

btneq.addEventListener("click",function () {
    if(power=="on"){
        if(opr=="+"){
            if(numchk()){ 
            snum=Number(snum)+Number(scrtxt.innerHTML)
            renum=Number(fnum)+Number(snum)
            scrtxt.innerHTML="0"
            console.log(snum);
            tempopr="@"
            console.log(tempopr);
        }
        else{
            if(eqclk=="0"){
                snum=Number(snum)+Number(scrtxt.innerHTML)
                renum=Number(fnum)+Number(snum)
                console.log(fnum,snum,renum)
                scrtxt.innerHTML=renum
                eqclk++
                tempopr="@"
                console.log(tempopr);
            }
            else{
                if(tempopr=="+"){
                    snum=Number(scrtxt.innerHTML)
                    renum=Number(fnum)+Number(snum)
                    console.log(fnum,snum,renum)
                    scrtxt.innerHTML=renum
                    tempopr="@"
                    console.log(tempopr);
                    eqclk++
                }
                else{
                    fnum=renum
                    renum=Number(fnum)+Number(snum)
                    console.log(fnum,snum,renum)
                    scrtxt.innerHTML=renum
                console.log(tempopr);
                }
                
                
                
            }
            
        }
        
    }
    else if(opr=="*"){
        if(numchk()){   
            snum=Number( scrtxt.textContent.substring(1))
            renum=Number(fnum)*Number(snum)
            console.log(snum)
            scrtxt.innerHTML="0"
            console.log(snum);
            tempopr="@"
        }
        else{
            if(eqclk=="0"){
                snum=1*Number(scrtxt.textContent.substring(1))
                renum=Number(fnum)*Number(snum)
                scrtxt.innerHTML=renum
                console.log(fnum,snum,renum )   
                mulclk="0"
                tempopr="@"
                eqclk++
            }
            else{
                if(tempopr=="*"){
                    snum=Number(scrtxt.textContent.substring(1))
                    renum=Number(fnum)*Number(snum)
                    scrtxt.innerHTML=renum
                    console.log(fnum,snum,renum )   
                    mulclk="0"
                    tempopr="@"
                    eqclk++
                }
                else{
                    fnum=Number(renum)    
                    renum=Number(fnum)*Number(snum)
                    scrtxt.innerHTML=renum
                    console.log(fnum,snum,renum)
                    mulclk="0"
                }
            }
 
        } 
    }
    else if(opr=="/"){
        if(numchk()){   
            snum=1*Number( scrtxt.textContent.substring(1))
            renum=Number(fnum)/Number(snum)
            console.log(fnum,snum,renum)
            scrtxt.innerHTML="0"
            console.log(snum);
            tempopr="@"
            oprclk="0"
        }
        else{
            if(eqclk=="0"){
                snum=1*Number( scrtxt.textContent.substring(1))
                renum=Number(fnum)/Number(snum)
                scrtxt.innerHTML=renum
                console.log(snum)
                console.log(fnum,snum,renum)
                divclk="0"
                tempopr="@"
                eqclk++
                oprclk="0"
            }
            else{
                if(tempopr=="/"){    
                    snum=Number( scrtxt.textContent.substring(1))
                    renum=Number(fnum)/Number(snum)
                    scrtxt.innerHTML=renum
                    console.log(fnum,snum,renum)
                    divclk="0"
                    oprclk="0"
                    tempopr="@"
                }
                else{
                    fnum=renum
                    renum=Number(fnum)/Number(snum)
                    scrtxt.innerHTML=renum
                    console.log(snum)
                    oprclk="0"
                    divclk="0"    
                    
                }
            }
 
        } 
    }
    else if(opr=="-"){
        if(numchk()){   
            snum=Number(scrtxt.textContent)
            renum=Number(fnum)+Number(snum)
            console.log(fnum,snum,renum)
            console.log(snum)
            scrtxt.innerHTML="0"
            console.log(snum);
        }
        else{
            if(eqclk=="0"){
                snum=Number(scrtxt.textContent)
                renum=Number(fnum)+Number(snum)
                scrtxt.innerHTML=renum
                console.log(fnum,snum,renum)
                subclk="0"
                tempopr="@"
                eqclk++
                
            }
                else{
                    if(tempopr=="-"){
                        snum=Number(scrtxt.textContent)
                        renum=Number(fnum)+Number(snum)
                        scrtxt.innerHTML=renum
                        console.log(fnum,snum,renum)
                        subclk="0"
                        tempopr="@"
                        eqclk++
                    }
                    else{
                        fnum=renum  
                        renum=Number(fnum)+Number(snum)
                        scrtxt.innerHTML=renum
                        console.log(fnum,snum,renum)
                        subclk="0"
                    }
                }
            }
 
        } 
    }
    sizechk();
})
var mulclk="0"
btnmul.addEventListener("click",function () {
    opr="*";
    tempopr="*"

    var a;
    if(power=="on"){
        if(numchk()){
            fnum="1"
            fnum=Number(scrtxt.innerHTML);
            scrtxt.innerHTML="x"
            console.log(fnum,"3");
        }
        else if(oprchk()){
            scrtxt.innerHTML="x"
        }
        else{
            if(mulclk=="0"){
                fnum=Number(scrtxt.textContent)
                console.log(fnum,"1");
                scrtxt.innerHTML="x"
                mulclk++
            }
            else{
                fnum=Number(fnum)*Number(scrtxt.textContent.substring(1))
                console.log(fnum,"2");
                scrtxt.innerHTML="x" 
               
            }
    }
    }
})

btnsub.addEventListener("click",function () {
    opr="-"
    tempopr="-"
    if(power=="on"){
        if(numchk()){
            
            scrtxt.innerHTML="-"
            console.log(fnum,"3");
        }
        else if(oprchk()){
            scrtxt.innerHTML="-"
        }
        else{
            if(subclk=="0"){
                fnum=Number(scrtxt.textContent)
                console.log(fnum,"1");
                scrtxt.innerHTML="-"
                subclk++
            }
            else{
                console.log(fnum);
                console.log(scrtxt.textContent);
                fnum=Number(fnum)+Number(scrtxt.textContent)
                console.log(fnum,"2");
                scrtxt.innerHTML="-" 
               
            }
    }
}
})
