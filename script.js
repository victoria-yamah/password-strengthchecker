let passWord=document.getElementById("password");
let msg=document.getElementById("message")
let str=document.getElementById("strength")
let box= document.querySelector(".container");
const check =/^(?=.*[A-Z])(?=.*\d).{6,}$/;

passWord.addEventListener("input", ()=>{
    if(passWord.value.length>0){
        msg.style.display="block";
    }
    else{
        msg.style.display="none"; 
    }
    if(passWord.value.length<4){
        str.innerHTML="weak";
        box.style.borderColor="#832424";
        msg.style.color="#832424";
    }
    else if(passWord.value.length>=4 && passWord.value.length<8){
        str.innerHTML="medium";
        box.style.borderColor="#9b5d0b";
        msg.style.color="#9b5d0b";
    }
    else if(passWord.value.length>8){
        str.innerHTML="strong";
        box.style.borderColor="#127a4f";
        msg.style.color="#127a4f";
    }
})

