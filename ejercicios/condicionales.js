// Condicionales
// if y else
// si tu me quieres dame una sonrisa
// si no me quieres, no me hagas caso.

// un if evalua una condicion
// que en caso de ser cumplida
// hará una acción
// en caso de que no se cumpla
// hará una acción compensatoria.

const meQuiereMiNovia = false;

if (meQuiereMiNovia == true) {
    console.log('Pronto me voy a casar');
} else {
    console.log('Bajo tinder');
}

const trajoDisfraz = false;

if (trajoDisfraz) {
    console.log('Me ganare un punto por ello');
} else {
    console.log('Me quedaré sin punto extra');
}

// Ir a ver al Joker
// 1. Que ya este disponible en cines
// 2. Que estén aquí en CDMX
// 3. Que puedan ir el próximo Jueves 31 de Octubre
// 4. Tener al menos 100 pesos para dulceria

const estaDisponibleLaPelicula = false;
const estoyActualmenteEnCDMX = false;
const puedoIrJueves31 = true;
const tengo100Pesos = true;

if (estaDisponibleLaPelicula) {
    // hacer todas las demás condiciones
    if (estoyActualmenteEnCDMX) {
        // puedo continuar con las condiciones
        if (puedoIrJueves31) {
            // puedo continuar con las condiciones
            if (tengo100Pesos) {
                // podre ir al cine con el profe y mis compañeraqs
                console.log('Disfrutaré la película del Joker con el profe y el grupo 52');
            } else {
                console.log('No comeré nada en el cine, mientras todos comen nachos y palomitas');
            }
        } else {
            console.log('No puedo ese día, tengo clase de habilidades blandas');
        }
    } else {
        console.log('Esperare a que el profe haga gira en mi estado');
    }
} else {
    console.log('Las llevaré a ver otra película');
}