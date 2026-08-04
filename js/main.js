const nombre = prompt('Bienvenido a la página de Proyectos Di&Bere. Ingrese su nombre:');
const apellido = prompt('Ingrese su apellido:');
let localidad = prompt('Ingrese su localidad:');
let celular = parseInt (prompt('Ingrese su número de celular (sin puntos):'));
const nacimiento = parseInt (prompt('Ingrese su año de nacimiento (sin puntos):'));
const añoactual = parseInt (prompt('Ingrese el año actual para calcular su edad (sin puntos):'));
const nombrecompleto = nombre + " " + apellido;
const edadactual= añoactual - nacimiento;
console.log(nombrecompleto);
console.log(localidad);
console.log(celular);
console.log(nacimiento);
console.log(edadactual);
alert(`Bienvenido a la base de datos de Proyectos Di&Bere. La información ingresada es la siguiente: 
    Nombre Completo: ${nombrecompleto} 
    Localidad: ${localidad} 
    Celular: ${celular}
    Nacimiento: ${nacimiento} 
    Edad Actual: ${edadactual} 
    Para finalizar haga click en el botón de Aceptar`);


//CONCATENAR TODOS LOS DATOS PARA QUE ESTEN EN UNA SOLA LINEA:s
//let resultado = nombre + " " + apellido + " " + edad + " " + nacimiento + " ";
// OPCIONAL PARA INGRESAR LUEGO:
//Para continuar con la carga de datos puede dar click en la opción ACEPTAR o CANCELAR en caso de no seguir con el procedimiento.