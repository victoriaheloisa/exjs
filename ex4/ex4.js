  // 12km = 1L de gasolina
    // O tempo gasto dirigido e a velocidade média do carro
    // velocidade media = D / T
    
    var d = parseFloat(prompt("Qual foi a distância(KM) percorrida ?")); // 400KM
    var combustivel = parseFloat(prompt("Qual o valor do combustível? ")); // 50 horas
    var p = parseFloat(prompt("Quantos Km/L seu carro faz? (coloque 8)"));
    var g = (combustivel/p)*d; // 200/30 = 8KM por hora
    
    function conv(){
    document.getElementById("distancia").innerHTML="A distância percorrida foi: "+d+"<br/>";
    document.getElementById("c").innerHTML="O valor do combustível é R$"+combustivel.toFixed(2)+"<br/>";
    document.getElementById("gasto").innerHTML="A valor gasto foi: " + g.toFixed(2) +"<br/>";
    document.getElementById("possivel").innerHTML="O carro consegue percorrer "+p+"Km a cada um L"
  }