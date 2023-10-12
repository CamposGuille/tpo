const listaDeCompra = [];

function agregarAlCarrito(idDesc,idPrec){
    let descripcion = document.getElementById(idDesc).textContent;
    let precio = document.getElementById(idPrec).textContent;
    localStorage.setItem("auxDescripcion", descripcion);
    localStorage.setItem("auxPrecio", precio);
    listaDeCompra.push(descripcion);
    listaDeCompra.push(precio);
    console.log(listaDeCompra);
    //console.log(precio);
    alert("Agregado al carrito");
}

function actualizarCarrito(){
    let descripcion = localStorage.getItem("auxDescripcion");
    let precio = localStorage.getItem("auxPrecio");
    document.getElementById("liDesc").innerHTML= descripcion;
    document.getElementById("liPrec").innerHTML= precio;
    console.log(listaDeCompra);
}

function limpiarCarrito(){
    localStorage.clear();
    document.getElementById("liDesc").innerHTML= "Descripción";
    document.getElementById("liPrec").innerHTML= "Precio";
 }