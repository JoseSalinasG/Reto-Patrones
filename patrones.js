// Clase se usa para crear nuevos usuarios.
class ModulosUsuarios {
    constructor(nombre) {
        this.nombre = nombre;
    }
    nuevosUsuarios() {
        console.log(`Usuario '${this.nombre}' agregado.`);
    }
    // Esta funcion se usa para crear la lista de los usuarios.
}
function listaUsuarios(usuarios) {
    console.log("Lista de Usuarios:");
    usuarios.forEach((usuario) => {
        console.log(`${usuario.nombre}`);
    });
}
// Constante para almacenar la lista de Usuarios.
const usuarios = [];
// Creacion de nuevos usuarios.
const Usuario1 = new ModulosUsuarios('Juan');
const Usuario2 = new ModulosUsuarios('María');
// Se imprime los nuevos usuarios.
Usuario1.nuevosUsuarios();
Usuario2.nuevosUsuarios();
// Se Agrega los usuarios a la lista.
usuarios.push(Usuario1, Usuario2);
// Se Imprime la lista de los Usuarios.
listaUsuarios(usuarios);
