let text = document.querySelector(".text-field");
let textResult = document.querySelector("#text-result");
let buttonEncrypt = document.getElementById("encrypt");
let dencryptButton = document.getElementById("dencrypt");

const vocal = /([aeiou])+/g;
//matchea cualquier consonantes (cualquier rango de NO vocales) .Cualquier caracter |O string especifico
const desc = /(?![aieou]).|(ai|enter|imes|ober|ufat)/g;

async function myData(){
    let response = await fetch('./jsonfile/deencrypt.json');
    return response.json();
}


function cifrar(){
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


const descifrar= async ()=>{
    let cypher="";
    let map = new Map(Object.entries(await myData()));
    console.log(map);
    let match=text.value.match(desc);
    match.forEach(data=>{
        if(map.has(data)){
            cypher+=map.get(data)
        }else{
            cypher+=data;
        }
    });
    return cypher;

}

buttonEncrypt.addEventListener("click",e=>{
    e.preventDefault();
    textResult.textContent=cifrar();
});

dencryptButton.addEventListener("click",e=>{
    e.preventDefault();
    descifrar()
    .then(data=>textResult.textContent=data);
})
