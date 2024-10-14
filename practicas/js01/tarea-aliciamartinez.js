/* Instrucciones de la tarea */

/* Calculadora 
    Suma
    Resta
    Multiplicación
    División 
    
    Crear una función que a través de 3 parámetros
    permita hacer la operación solicitada

    Ejemplo: Suma de 2 + 2;
    */

    let respuesta = "";

    do{
        console.log("1.- Suma");
        console.log("2.- Resta");
        console.log("3.- Multiplicación");
        console.log("4.- División");
        console.log("5.- Salir");
        respuesta = interface.question("¿Qué operación desea realizar?, escriba el número: ");

        if(respuesta != "5"){
            const primerNumero = interface.question("Agregue el primer número: ");
            const segundoNumero = interface.question("Agregue el segundo número: ");

            switch(respuesta){
                case "1":
                    var resultado = parseInt(primerNumero) + parseInt(segundoNumero);
                    console.log("El resultado es: "+resultado);
                    break;
                    case "2":
                        var resultado = parseInt(primerNumero) - parseInt(segundoNumero);
                        console.log("El resultado es: "+resultado);
                        break;
                        case "3":
                            var resultado = parseInt(primerNumero) * parseInt(segundoNumero);
                            console.log("El resultado es: "+resultado);
                            break;
                            case "4":
                                var resultado = parseInt(primerNumero) / parseInt(segundoNumero);
                                console.log("El resultado es: "+resultado);
                                break;
                                default:
                                break;
            }
            interface.question("Presione enter para continuar");
        }
    }while(respuesta != "5");  