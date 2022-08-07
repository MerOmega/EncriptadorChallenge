let text = document.querySelector(".text-field");
let textResult = document.querySelector("#text-result");
let buttonEncrypt = document.getElementById("encrypt");
let dencryptButton = document.getElementById("dencrypt");

const vocal = /([aeiou])+/g;

function myValue(){
    let cypher="";   
    let arr = text.value.toLowerCase().split("");
    arr.forEach(data => {
            if(vocal.test(data)){
                switch (data){
                    case "a":cypher+="ai"; break;
                    case "e":cypher+="enter";break;
                    case "i":cypher+="imes";break;
                    case "o":cypher+="ober";break;
                    case "u":cypher+="ufat";break;
                }
        }else{
            cypher+=data;
        }
    });
    return cypher;
}

buttonEncrypt.addEventListener("click",e=>{
    e.preventDefault();
    textResult.textContent=myValue();
});

dencryptButton.addEventListener("click",e=>{
    e.preventDefault();
    console.log("Desencryptar");
})
