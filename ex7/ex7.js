var lista = []
        var letras = lista.length
        // inserir
        function inserir () {
            let numero = document.getElementById("campo").value
            lista.push(numero)
        }
        // todos
        function mostrar () {
            document.getElementById("resultado").innerText=lista
        }
        // maior
        function maior() {
           lista.sort()
           lista.reverse()
            let letras = lista.length
            document.getElementById("resultado").innerText=lista[0]
        }
        // menor
        function menor() {
            lista.sort()
            document.getElementById("resultado").innerText=lista[letras]
        }