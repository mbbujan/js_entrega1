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
    if(this.intentos>1){
        console.log("Intentaron ingresar "+this.intentos-1+" veces.");
    }
    console.log("Eso es todo " + this.nombre + "!");
  };

  accesoCorrecto = function (usuario2, pass2) {
    this.intentos +=1;
    if (this.usuario == usuario2 && this.pass == pass2) {
      return true;
    } else {
      alert(
        "El nombre de usuario o la contraseña no coincide con lo cargado anteriormente. Volve a intentarlo!"
      );
      return false;
    }
  };
}

let nombre = prompt("Tu nombre: ");
let nombreUsuario = prompt("Alta nombre de usuario: ");
let pass = prompt("Alta contraseña: ");

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
