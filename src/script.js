let text = document.querySelector(".text-field");
let textResult = document.querySelector("#text-result");
let buttonEncrypt = document.getElementById("encrypt");
let dencryptButton = document.getElementById("dencrypt");
let copyButton = document.getElementById("copy");

const vocal = /([aeiou])+/g;
//matchea cualquier consonantes (cualquier rango de NO vocales) .Cualquier caracter |O string especifico
const desc = /(?![aieou]).|(ai|enter|imes|ober|ufat)/g;

async function myData(file){
    let response = await fetch(file);
    return response.json();
}

function getValue(map,val){
    for(let[key,value] of map.entries()){
        if(value==val){
            return key;
        }
    }
}

const cifrar=async()=>{
    let cypher="";   
    let arr = text.value.toLowerCase().split("");
    let map = new Map(Object.entries(await myData('./jsonfile/deencrypt.json')));
    arr.forEach(data => {
            if(vocal.test(data)){
                cypher+=getValue(map,data);
        }else{
            cypher+=data;
        }
    });
    return cypher;
}


const descifrar= async ()=>{
    let cypher="";
    let map = new Map(Object.entries(await myData('./jsonfile/deencrypt.json')));
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
    cifrar()
    .then(data=>textResult.textContent=data);
});

dencryptButton.addEventListener("click",e=>{
    e.preventDefault();
    descifrar()
    .then(data=>textResult.textContent=data);
})

copyButton.addEventListener("click",async ()=>{
    await navigator.clipboard.writeText(textResult.value);
});