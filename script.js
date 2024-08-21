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

function ejercicio_6() {
    let clasifiacionEdad = prompt("Ingresa tu edad: ")
    if (clasifiacionEdad >= 0 && clasifiacionEdad <= 12) {
        console.log("Eres un niño.")
    }
    else if (clasifiacionEdad > 12 && clasifiacionEdad < 17) {
        console.log("Eres un adolescente.")
    }
    else if (clasifiacionEdad > 18 && clasifiacionEdad < 64) {
        console.log("Eres un adulto.")
    }
    else if (clasifiacionEdad >= 65) {
        console.log("Eres un adulto mayor.")
    }

}

function ejercicio_7() {
    let nota = prompt("Ingrese una nota entre 0 y 100: ")
    if (nota >= 90 && nota <= 100) {
        console.log("Excelente.")
    }
    else if (nota >= 70 && nota <= 89) {
        console.log("Bueno.")
    }
    else if (nota >= 50 && nota <= 69) {
        console.log("Regular.")
    }
    else if (nota >= 0 && nota <= 49) {
        console.log("Insuficiente.")
    }

}