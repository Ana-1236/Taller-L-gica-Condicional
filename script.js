function ejercicio_1() {
    let edad = prompt("Ingrese su edad: ");
    if (edad >= 18) {
        console.log("Eres mayor de edad.")
    }
    else {
        console.log("Eres menor de edad.")
    }
}

function ejercicio_2() {
    let numeroUsuario = prompt("Ingrese un número: ")
    if (numeroUsuario >= 0) {
        console.log("El número es positivo.")
    }
    else {
        console.log("El número es negativo.")
    }

}

function ejercicio_3() {
    let numeroUsuarioParOImpar = prompt("Ingrese un número: ")
    if (numeroUsuarioParOImpar % 2 == 0) {
        console.log("El número es par.")
    }
    else {
        console.log("El número es impar.")
    }

}

function ejercicio_4() {
    let totalCompra = prompt("Ingrese el total de una compra: ")
    if (totalCompra > 100) {
        let descuento = totalCompra * 0.1
        totalCompra = totalCompra - descuento
        console.log("Tienes un descuento del 10% y el total es: " + totalCompra)
    }
    else {
        console.log("No tienes descuento")
    }

}

function ejercicio_5() {
    let numeroUno = prompt("Ingrese el primer número: ")
    let numeroDos = prompt("Ingrese el segundo número: ")
    if (numeroUno > numeroDos) {
        console.log("El primer número es mayor que el segundo")
    }
    else if (numeroUno < numeroDos) {
        console.log("El segundo número es mayor que el primero")
    }
    else {
        console.log("Los números son iguales")
    }

}