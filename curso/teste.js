function Enviar() {
    var inputNumero = document.getElementById('numero')
    var numero = inputNumero.value

    if (numero % 2) {
        alert('É um número impar!')
        console.log(numero % 2)
    } else {
        alert('É um número par!')
        console.log(numero % 2)
    }
}