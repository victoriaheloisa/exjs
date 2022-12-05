
var w = parseFloat(prompt("Quanto de largura?"));
var c = parseFloat(prompt("Quanto tem de comprimento?"));
var p = parseFloat(prompt("Qual o valor do m² do piso? (coloque 36)"));
var m = c*w;
var v = (c*w)*p;



function calcular(){
    document.getElementById("comprimento").innerHTML=c+"m de comprimento";
    document.getElementById("largura").innerHTML=w+"m de largura";
    document.getElementById("piso").innerHTML="Você tem "+m+"m² de piso"
    document.getElementById("preço").innerHTML="O valor do m² é "+p+"R$";


    document.getElementById("valor").innerHTML="O valor total é de "+v+"R$"
}
