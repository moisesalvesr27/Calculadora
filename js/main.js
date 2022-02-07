function calcular(tipo, valor) { 
    if(tipo==='acao'){
        if (valor ==='c') {
            document.getElementById('resultado').value =''
        }
            if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.' || valor ==='(' || valor ===')' || valor ==='%'){
            document.getElementById('resultado').value += valor
        }
        if (valor === 'p'){
            document.getElementById('resultado').value += '/100'
            var valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
        }
            if(valor === '='){
            var valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
        }
    } else if(tipo ==='valor'){
        document.getElementById('resultado').value += valor
    }
}
