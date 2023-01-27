class Usuario {
  constructor(nombre, usuario, pass) {
    this.nombre = nombre;
    this.usuario = usuario;
    this.pass = pass;
    this.intentos = 0;
  }
  saludoInicial = function () {
    console.log("Hola " + this.nombre);
  };

  saludoFinal = function () {
    console.log("Ingresaste correctamente!");
    if (this.intentos > 0) {
      console.log("Intentaron ingresar " + this.intentos + " veces.");
    }
    console.log("Eso es todo " + this.nombre + "!");
  };

  accesoCorrecto = function (usuario2, pass2) {
    let isCorrecto = false;
    if (this.usuario == usuario2 && this.pass == pass2) {
      isCorrecto = true;
    } else {
      this.intentos += 1;
      alert(
        "El nombre de usuario o la contraseña no coincide con lo cargado anteriormente. Volve a intentarlo!"
      );
      isCorrecto = false;
    }
    return isCorrecto;
  };
}
function chequeoVacio(texto, mensaje) {
  let textoNuevo = texto;
  while (textoNuevo === null || textoNuevo === "") {
    textoNuevo = prompt(mensaje);
  }
  return textoNuevo;
}

let nombre = prompt("Tu nombre: ");
nombre = chequeoVacio(nombre, "No se permiten textos vacios! Ingresa tu nombre: ");
let nombreUsuario = prompt("Alta nombre de usuario: ");
nombreUsuario = chequeoVacio(
  nombreUsuario,
  "No se permiten textos vacios! Ingresa tu nombre de usuario: "
);
let pass = prompt("Alta contraseña: ");
pass = chequeoVacio(pass, "No se permiten textos vacios! Ingresa tu contraseña: ");

const altaUsuario = new Usuario(nombre, nombreUsuario, pass);

altaUsuario.saludoInicial();
console.log(altaUsuario.usuario);
console.log(altaUsuario.pass);
alert("Vamos a logearnos con los datos que ingresaste en el alta :)");
let logUsuario;
let logPass;
do {
  logUsuario = prompt("Tu nombre de usuario: ");
  logPass = prompt("Tu contraseña: ");
} while (!altaUsuario.accesoCorrecto(logUsuario, logPass));
altaUsuario.saludoFinal();
