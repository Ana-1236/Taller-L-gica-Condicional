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

function ejercicio_8() {
    let opcionMenu = parseInt(prompt("Elija una opción de menú (1- Pizza 2- Hamburguesa 3- Tacos): "))

    switch (opcionMenu) {
        case 1:
            console.log("Seleccionaste una Pizza")
            break;
        case 2:
            console.log("Seleccionaste una Hamburguesa")
            break;
        case 3:
            console.log("Seleccionaste un Taco")
            break;

        default:
            console.log("Opción no válida")
            break;
    }

}

function ejercicio_9() {
    let ladoTriangulo1 = prompt("Ingrese el primer lado de un triángulo: ")
    let ladoTriangulo2 = prompt("Ingrese el segundo lado de un triángulo: ")
    let ladoTriangulo3 = prompt("Ingrese el tercer lado de un triángulo: ")
    if (ladoTriangulo1 == ladoTriangulo2 == ladoTriangulo3) {
        console.log("El triángulo es equilátero")
    }
    else if (ladoTriangulo1 === ladoTriangulo2 || ladoTriangulo2 === ladoTriangulo3 || ladoTriangulo3 === ladoTriangulo1) {
        console.log("El triángulo es isósceles")
    }
    else {
        console.log("El triángulo es escaleno")
    }

}

function ejercicio_10() {
    let adivinaNumero = prompt("Adivina un número entre 1 y 10 : ")
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1
    if (adivinaNumero == numeroAleatorio) {
        console.log("¡Has acertado!")
    }
    else {
        console.log("Intenta de nuevo")
    }

}

function ejercicio_11() {
    let precioBase = prompt("Ingresa el precio base de un producto: ")
    if (precioBase > 500) {
        let descuento = precioBase * 0.15
        console.log("El precio final es : " + (precioBase - descuento))
    }
    if (precioBase >= 300 && precioBase < 500) {

        let descuento = precioBase * 0.10
        console.log("El precio final es : " + (precioBase - descuento))
    }
    else {
        let descuento = precioBase * 0.5
        console.log("El precio final es: " + (precioBase - descuento))
    }

}

function ejercicio_12() {
    let ano = prompt('Ingresa un año: ')
    function esBisiesto(anio) {
        if (anio % 4 === 0) {
            if (anio % 100 === 0) {
                return anio % 400 === 0;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }
    if (esBisiesto(ano)) {
        console.log('El año es bisiesto')
    }
    else {
        console.log('El ' + ano + ' no es bisiesto')
    }

}

function ejercicio_13() {
    let nombreUsuario = prompt("Ingrese un nombre de usuario: ")
    let contraseña = prompt("Ingrese una contraseña: ")
    if (nombreUsuario === "admin" && contraseña === "1234") {
        console.log("Acceso concedido.")
    }
    else {
        console.log("Acceso denegado.")
    }

}

function ejercicio_14() {
    let hora = prompt(" ingrese una hora (solo el número de la hora, de 0 a 23): ")
    if (hora >= 6 && hora < 12) {
        console.log("Buenos días")
    }
    else if (hora >= 12 && hora < 18) {
        console.log("Buenas tardes")
    }
    else if ((hora >= 18 && hora < 24) || (hora >= 0 && hora < 6)) {
        console.log("Buenas noches");
    } else {
        console.log("Hora no válida.");
    }

}

function ejercicio_15() {
    let peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
    let altura = parseFloat(prompt("Ingrese su altura en metros:"));

    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        console.log("Bajo peso");
    }
    else if (imc >= 18.5 && imc < 24.9) {
        console.log("Peso normal");
    }
    else if (imc >= 25 && imc < + 29.9) {
        console.log("Sobrepeso");
    }
    else {
        console.log("Obesidad");
    }

}

let numeroEjercicio = parseInt(prompt("Elije un ejercicio del 1 al 15: "))
switch (numeroEjercicio) {
    case 1:
        ejercicio_1();
        break;
    case 2:
        ejercicio_2();
        break;
    case 3:
        ejercicio_3();
        break;
    case 4:
        ejercicio_4();
        break;
    case 5:
        ejercicio_5();
        break;
    case 6:
        ejercicio_6();
        break;
    case 7:
        ejercicio_7();
        break;
    case 8:
        ejercicio_8();
        break;
    case 9:
        ejercicio_9();
        break;
    case 10:
        ejercicio_10();
        break;
    case 11:
        ejercicio_11();
        break;
    case 12:
        ejercicio_12();
        break;
    case 13:
        ejercicio_13();
        break;
    case 14:
        ejercicio_14();
        break;
    case 15:
        ejercicio_15();
        break;
    default:
        console.log("Opción no valida.")
        break

}