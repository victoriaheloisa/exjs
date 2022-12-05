function conv(){
    var valor= parseFloat(document.getElementById("n").value);
    var resp= document.getElementById("resposta");

    if(document.getElementById("c").checked==true)
    resp.innerHTML = c(valor).toFixed(3);
    if(document.getElementById("f").checked==true)
    resp.innerHTML = f(valor).toFixed(3);
}

function c(x){
    return((x*1.8)+32);
}

function f(x){
    return ((x-32)/1.8);
}