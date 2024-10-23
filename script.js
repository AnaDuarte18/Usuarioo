class Usuario{
    constructor(nombre, apellido, dni, telefono, correo, saldo){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.telefono = telefono
        this.correo = correo
        this.saldo = saldo
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
    getSaldo(){
        return this.saldo
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
const saldo = document.getElementById("saldo").value

function registro(){
    nuevoUsuario = new Usuario(document.getElementById("nombre").value, document.getElementById("apellido").value, document.getElementById("dni").value, document.getElementById("telefono").value, document.getElementById("correo").value, document.getElementById("saldo").value);
    lista.push(nuevoUsuario);
    mostrarInfo();
}

button.addEventListener('click', () => {
    if (container.style.display === 'none' || container.style.display === '') {
        container.style.display = 'block'; 
    } else {
        container.style.display = 'none'; 
    }
});

function mostrarInfo() {
    if (lista.length > 0) {
        document.getElementById("nombreInfo").innerHTML = lista[i].getNombre();
        document.getElementById("apellidoInfo").innerHTML = lista[i].getApellido();
        document.getElementById("dniInfo").innerHTML = lista[i].getDni();
        document.getElementById("telefonoInfo").innerHTML = lista[i].getTelefono();
        document.getElementById("correoInfo").innerHTML = lista[i].getCorreo();
        document.getElementById("saldoInfo").innerHTML = lista[i].getSaldo();
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