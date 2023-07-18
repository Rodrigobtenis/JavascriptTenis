/* let numerouno = 10;
let numerodos = 20;
let resultadosuma = numerouno + numerodos;
console.log (resultadosuma);

let saludo = "hola";
let nombre = "Rodrigo";

let nombreCompleto = saludo + " " +nombre;
console.log(nombreCompleto); */

/* let numero1 = prompt("Ingresa el primer número:");
numero1 = parseFloat(numero1);

let numero2 = prompt("Ingresa el segundo número:");
numero2 = parseFloat(numero2);

let suma = numero1 + numero2;
console.log("La suma es: " + suma);

alert("La suma es: " + suma);
 */





/* let nombre = prompt("Ingrese el nombre");
let apellido = prompt("Ingrese el apellido");

if (nombre != "" && apellido != "") {
  alert("Hola " + nombre + " " + apellido);
} else {
  alert("El nombre y el apellido deben ser ingresados");
}


let edad = parseInt(prompt("Que edad tienes?"));

if (edad < 14) {
    alert("No puedes entrar a la fiesta");
} else if(edad < 18) {
    alert("Puedes entrar con un adulto");

}  else  {
    alert("Puedes entrar a la fiesta");
} */


/* let numero = parseInt(prompt("Ingrese un numero"));

if (numero > 1000){
    alert ("Puedes Entrar a la web");
}
else{
    alert ("No puedes entrar a la web")
} */


/* let letras = prompt("Ingrese sus caracteres");
if (letras === "hola"){
    alert ("Es correcto");
}
else if (letras === "chau"){
    alert ("Tambien es correcto");

}
else {
    alert ("No es correcto");
}
 */

/* let numero = parseInt(prompt("Ingrese un numero"));
if (numero > 10 && numero < 50 ){
    alert ("Es correcto esa edad");
}


else {
    alert ("No es correcta la edad");
} */

/* let edad = parseInt(prompt("Desde que edad juegas tenis?"));

if (edad >= 1 && edad <=20 ){
    alert ("Debes ser un profesional");}
    else if (edad <= 15) {
        alert("Debes jugar como un campeon!");    }
        else{
            alert("Juegas bien, pero te falta entrenamiento");
        }
         */

      /* let numero = parseInt(prompt("Ingrese un numero para Multiplicar"))

      for (let i = 1; i <=9 ; i++){

      let resultado = numero + 1;

      alert(`${numero}  x  + ${i}  =  + ${resultado}`);
      } */

      /* let numero = parseInt(prompt("Ingrese su numero"));

      for (let i = 1; i <=10 ; i++ ){
        let resultado = numero * i;
        alert(`${numero} * ${i} = ${resultado}`)


      }
 */

     
      
      /* 
        let numero = parseInt(prompt("Ingresa un número (1: Tomate, 2: Papa, 3: Carne, 4: Pollo) o 'esc' para finalizar:"));
      
        if (numero !== "esc") {
          
      
          switch (numero) {
            case 1:
              alert("Tomate");
              break;
            case 2:
              alert("Papa");
              break;
            case 3:
              alert("Carne");
              break;
            case 4:
              alert("Pollo");
              break;
            default:
              alert("Número no válido. Intenta nuevamente.");
              break;
          }
        }
       while (input !== "esc"); */
      
      function calculadora  (num1, num2, operacion) {
switch (operacion) {
    case "+":
    return num1 + num2;
    break;
    
    case "-":
        return num1 - num2;
        break;

        case "*":
            return num1 * num2;
            break;
            
            case "/":
                return num1 / num2;
                break;

                default:
                    return "operacion no encontrada";
                    break;

}}



                let numeroUno = parseInt(prompt("Ingrese el primer numero"));
                let numeroDos = parseInt(prompt("Ingrese el segundo numero"));
                let operacion = prompt("ingrese la operacion");

                let resultado = calculadora(numeroUno, numeroDos, operacion);

                alert(`el resultado es ${resultado}`);
                




