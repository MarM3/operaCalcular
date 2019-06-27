function multiplica() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var patron = /^[1-9]+$/;

    if (!patron.test(num1)) {
        alert("El primer número introducido no es correcto.");
        return false;
    }
    if (!patron.test(num2)) {
        alert("El segundo número introducido no es correcto.");
        return false;
    }
    document.getElementById("resultado").innerHTML = num1 * num2;
}

function divide() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var patron = /^[1-9]+$/;

    if (!patron.test(num1)) {
        alert("El primer número introducido no es correcto.");
        return false;
    }
    if (!patron.test(num2)) {
        alert("El segundo número introducido no es correcto.");
        return false;
    }
    document.getElementById("resultado").innerHTML = num1 / num2;
}

var mult = document.getElementById("multiplicar");
mult.onclick = multiplica;
var div = document.getElementById("dividir");
div.onclick = divide;