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

function alta(usuarios) {
  let nombre = prompt("Tu nombre: ");
  nombre = chequeoVacio(
    nombre,
    "No se permiten textos vacios! Ingresa tu nombre: "
  );
  let nombreUsuario = prompt("Alta nombre de usuario: ");
  nombreUsuario = chequeoVacio(
    nombreUsuario,
    "No se permiten textos vacios! Ingresa tu nombre de usuario: "
  );

  let pass = prompt("Alta contraseña: ");
  pass = chequeoVacio(
    pass,
    "No se permiten textos vacios! Ingresa tu contraseña: "
  );

  const altaUsuario = new Usuario(nombre, nombreUsuario, pass);

  let duplicado = usuarios.some(
    (altaUsuario) => altaUsuario.usuario === nombreUsuario
  );

  while (duplicado) {
    nombreUsuario = prompt(
      "El nombre de usuario ya existe, intentá con otro: "
    );
    duplicado = usuarios.some(
      (altaUsuario) => altaUsuario.usuario === nombreUsuario
    );
  }
  altaUsuario.usuario = nombreUsuario;
  console.log(altaUsuario);
  usuarios.push(altaUsuario);
}

function ingresar(usuarios) {
  alert("Vamos a logearnos :)");
  let logUsuario;
  let logPass;
  let datosLoggeo;
  do {
    logUsuario = prompt("Tu nombre de usuario: ");
    logPass = prompt("Tu contraseña: ");
    datosLoggeo = usuarios.find(
      (altaUsuario) => altaUsuario.usuario === logUsuario
    );
  } while (!datosLoggeo.accesoCorrecto(logUsuario, logPass));
  datosLoggeo.saludoInicial();
  datosLoggeo.saludoFinal();
}

function salir() {
  alert("Adios");
}
//   PROGRAMA PRINCIPAL
const usuario1 = new Usuario("nombre 1", "usuario1", "testPass1");
const usuario2 = new Usuario("nombre 2", "usuario2", "testPass2");
let usuarios = [usuario1, usuario2];

usuarios.forEach((usuario)=>{
  console.log(usuario);
});

let opcion = parseInt(
  prompt("Menú opciones: \n 1. Alta usuario \n 2. Ingresar \n 3. Salir")
);
switch (opcion) {
  case 1:
    alta(usuarios);
    ingresar(usuarios);
    break;
  case 2:
    ingresar(usuarios);
    break;
  case 3:
    salir();
    break;
  default:
    alert("Opción invalida");
    break;
}
