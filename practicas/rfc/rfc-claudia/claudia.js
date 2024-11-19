



function crearRfc() {
  ///Declarar variables
var nombre = document.getElementById('nombre2').value.toUpperCase().substring(0,1); //variable que toma la primer letra del nombre
var apellidoP_1 = document.getElementById('a_paterno').value.toUpperCase().substring(0,1); // variable que toma la primer letra del apellido
var apellidoP_2 = document.getElementById('a_paterno').value.toUpperCase().substring(1,2); // variable que toma la segunda letra del apellido
var apellidoP_3 = document.getElementById('a_paterno').value.toUpperCase().substring(2,3); // variable que toma la tercer letra del apellido
var apellidoP_4 = document.getElementById('a_paterno').value.toUpperCase().substring(3,4);
var aMaterno = document.getElementById('a_materno').value.toUpperCase().substring(0,1);// variable que toma la primer letra del apellido
var bday = (document.getElementById('bday2').value); //variable que toma el dia de nacimiento
var mday = (document.getElementById('mday2').value); //variable que toma el mes de nacimiento
var yday = (document.getElementById('yday2').value); //variable que toma el año de nacimiento

//Condicion que asegura que los valores sean ingresados
if (!nombre || !apellidoP_1|| !apellidoP_2 || !apellidoP_3) {
  alert('Por favor, Ingresa los Datos Requeridos');
  return;
}
//Condicion que asegura que no se ingresen valores negativos
if(bday < 0 || mday < 0 || yday < 0) {
  alert('Por favor Ingresa un Numero Positivo');
  return;
}
//condicion que asegura que el valor sea un numero
if (isNaN(bday)|| isNaN(mday) || isNaN(yday)){
  alert('Por favor Ingresa un Numero');
  return;
}
// Condicion que verifica que tanto el mes como el dia aparezcan en dos digitos. Si no se ingresan dos digitos en el año, envia un mensaje de alerta.
if (mday.length === 1) mday = '0' + mday;
    if (bday.length === 1) bday = '0' + bday;
    if (yday.length === 1) alert ('Por favor ingresa el año en dos digitos');
  //Condicion que asegura que se ingrese un valor valido para dia y mes.
    if (bday > 31 ){
      alert('Por favor introduce un Dia Valido');
      return;
    }
    if ( mday > 12) {
      alert('Por Favor introduce un Mes valido')
    }
//Condiciona que el segundo valor del rfc sea una vocal, si no es, toma el tercer valor del apellido paterno.Si la tercer letra tampoco es vocal, mostrara la cuarta letra.
  switch (apellidoP_2 ) {
    case 'A':
        resultado.innerHTML = ('SU RFC ES: ' + apellidoP_1 + apellidoP_2  + aMaterno + nombre + yday + mday + bday +'XXX');
        break;
        case 'E':
          resultado.innerHTML =  ('SU RFC ES: ' + apellidoP_1 + apellidoP_2  + aMaterno+ nombre + yday + mday + bday +'XXX');
            break;
            case 'I':
              resultado.innerHTML =  ('SU RFC ES: ' + apellidoP_1  + apellidoP_2 + aMaterno + nombre + yday + mday + bday +'XXX');
                break;
                case 'O':
                  resultado.innerHTML =  ('SU RFC ES: ' + apellidoP_1  + apellidoP_2 +  aMaterno+ nombre + yday + mday + bday +'XXX');
                    break;
                    case 'U':
                      resultado.innerHTML = ('SU RFC ES: ' + apellidoP_1 + apellidoP_2+ aMaterno + nombre + yday + mday + bday +'XXX');
                        break;
                        default:
                          if (apellidoP_3 == 'A'|| apellidoP_3 ==='E' || apellidoP_3 == 'I' || apellidoP_3 == 'O' || apellidoP_3 == 'U'){
                            resultado.innerHTML = ('SU RFC ES: ' + apellidoP_1  + apellidoP_3 + aMaterno+  nombre + yday + mday + bday +'XXX');
                          } else {
                            resultado.innerHTML = ('SU RFC ES: ' + apellidoP_1  + apellidoP_4 + aMaterno+  nombre + yday + mday + bday +'XXX');
                          }
                            break;
  }
}