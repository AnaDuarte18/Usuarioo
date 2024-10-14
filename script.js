class Usuario{
    constructor(nombre, apellido, dni, telefono, correo){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.telefono = telefono
        this.correo = correo
    }
    getNombre(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }
    getDni(){
        return this.dni;
    }
    getTelefono(){
        return this.telefono
    }
    getCorreo(){
        return this.correo
    }
}

function inicio(){
    window.location.href="registro.html"
}

lista = [];
i = 0
const nombre = document.getElementById("nombre").value
const apellido = document.getElementById("apellido").value
const dni = document.getElementById("dni").value
const telefono = document.getElementById("telefono").value
const correo = document.getElementById("correo").value

function registro(){
    nuevoUsuario = new Usuario(document.getElementById("nombre").value, document.getElementById("apellido").value, document.getElementById("dni").value, document.getElementById("telefono").value, document.getElementById("correo").value);
    lista.push(nuevoUsuario);
    mostrarInfo();
}



function mostrarInfo() {
    if (lista.length > 0) {
        document.getElementById("nombre").innerHTML = lista[i].getNombre();
        document.getElementById("apellido").innerHTML = lista[i].getApellido();
        document.getElementById("dni").innerHTML = lista[i].getDni();
        document.getElementById("telefono").innerHTML = lista[i].getTelefono();
        document.getElementById("correo").innerHTML = lista[i].getCorreo();
    }else{
        alert("No hay personas");
    }
}

function siguiente() {
    if (lista.length > 0) {
        if (i < lista.length - 1) {
            i++;
            mostrarInfo();
        }
    }else{
        alert("No hay personas");
    }
    
}

function anterior() {
    if (lista.length > 0) {
        if (i > 0) {
            i--;
            mostrarInfo();
        }
    }else{
        alert("No hay personas");
    }
}