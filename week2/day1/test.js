let nombre = "Pablo";
let apellido = "Ibañez";
let nacimiento = "17-08-1989";
let hobbies = ["cocinar", "dibujar", "futbol"];
let educacion = ["Grado Ingenieria diseño", "Front End Ironhack"];

let hoy = "25-07-2022";

let dia_hoy = parseInt(hoy.slice(0,2));
let mes_hoy = parseInt(hoy.slice(3,5));
let anio_hoy = parseInt(hoy.slice(6,10));

let anio_nacimiento = parseInt(nacimiento.slice(-4));

let edad = anio_hoy - anio_nacimiento;

let anio_80 = anio_nacimiento + 80;

console.log(`\nBuenas! Soy ${nombre} y nací en ${nacimiento}. \nMe encanta ${hobbies[0]}, ${hobbies[1]} y jugar a ${hobbies[2]}. \nEstudié ${educacion[0]} y ahora estoy cursando ${educacion[1]}. \nActualmente tengo ${edad} años y en ${anio_80}, dentro de ${anio_80-anio_hoy} tendré 80 años.  `)

console.log (`\n--------Datos de ${nombre} ${apellido}--------`);
console.log (`   - Fecha de nacimiento: ${nacimiento}`);
console.log (`   - Hobbies: ${hobbies[0]}, ${hobbies[1]},${hobbies[2]}`);
console.log (`   - Educación: ${educacion[0]}, ${educacion[1]}`);
console.log (`   - Edad Actual: ${edad} años.`);
console.log (`   - En ${anio_80}, dentro de ${anio_80-anio_hoy} tendré 80 años.\n`);