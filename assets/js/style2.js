const number1 = prompt("Ingresa un número mayor a cero:");
const number2 = prompt("Ingresa un número distinto al anterior:");
if (number1 === number2) {
  alert("Los números deben ser diferentes entre si");
} 
else {
  alert("El número ingresado cumple con lo solicitado");
}
if (number1 === 0) {
  alert("El número ingresado no puede ser igual a cero");
}
if (number2 === 0) {
  alert("El número ingresado debe ser distinto de cero");
}
alert("la suma de " + number1 + " más " + number2 + " es igual a " + (parseInt(number1) + parseInt(number2)));
alert("la resta de " + number1 + " menos " + number2 + " es igual a " + (parseInt(number1) - parseInt(number2)));
alert("la multiplicación de " + number1 + " por " + number2 + " es igual a " + (parseInt(number1) * parseInt(number2)));  
alert("la división de " + number1 + " entre " + number2 + " es igual a " + (parseInt(number1) / parseInt(number2)));
alert("el módulo de " + number1 + " mas " + number2 + " es igual a " + (parseInt(number1) % parseInt(number2)));