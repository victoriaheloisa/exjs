function calcular(){
    var valor = parseFloat(document.getElementById("a").value);
    var resp = document.getElementById("resposta");

    if(document.getElementById("m").checked==true)
    resp.innerHTML = m(valor).toFixed(3);
    if(document.getElementById("f").checked==true)
    resp.innerHTML = f(valor).toFixed(3);
    
}

function m(x){
    return((72.7*x)-58);
}

function f(x){
    return((62.1*x)-44.7);
}