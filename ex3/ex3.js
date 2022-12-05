function calcular(){
    n1 = document.getElementById("n1").value;
    v1 = parseFloat(document.getElementById("v1").value);
    q1 = parseFloat(document.getElementById("q1").value);

    n2 = document.getElementById("n2").value;
    v2 = parseFloat(document.getElementById("v2").value);
    q2 = parseFloat(document.getElementById("q2").value);

    n3 = document.getElementById("n3").value;
    v3 = parseFloat(document.getElementById("v3").value);
    q3 = parseFloat(document.getElementById("q3").value);

    var p = v1*q1+v2*q2+v3*q3;
    document.getElementById("produtos").innerHTML=q1+"."+n1+"+"+q2+"."+n2+"+"+q3+"."+n3;
    document.getElementById("resultado").innerHTML="R$"+p.toFixed(2);
}
