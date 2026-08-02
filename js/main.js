
const nombre = prompt('Ingrese su nombre');
const apellido = prompt('Ingrese su apellido');
let localidad = prompt('Ingrese su localidad');
let nacimiento = parseInt (prompt('Ingrese su año de nacimiento'));
let edadactual = parseInt (prompt('Ingrese el año actual para calcular su edad'));
const nombrecompleto = nombre + ' ' + apellido;
edadactual= 2026 - nacimiento;
console.log(nombrecompleto);
console.log(localidad);
console.log(nacimiento);
console.log(edadactual);
alert(`Bienvenido a la base de datos de Proyectos Di&Bere. Los datos ingresados son los siguientes: 
    Nombre Completo: ${nombrecompleto} 
    Localidad: ${localidad} 
    Nacimiento: ${nacimiento} 
    Edad Actual: ${edadactual} 
    Para finalizar haga click en el botón de Aceptar`);


//CONCATENAR TODOS LOS DATOS PARA QUE ESTEN EN UNA SOLA LINEA:s
//let resultado = nombre + " " + apellido + " " + edad + " " + nacimiento + " ";