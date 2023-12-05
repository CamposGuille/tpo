const url = `http://camposguille.pythonanywhere.com/productos`;
cargaInicial();

function cargaInicial(){
fetch(url)
    .then(data => {
        return data.json();
    })
    .then(dataJSON => {
        if (dataJSON.cod === '404') {
            console.log('Error con la carga de datos ...');
        } else {
            tarjetas(dataJSON);
        }
    })
    .catch(error => {
        console.log(error);
    })
}

function tarjetas(data){
    console.log(data);
    for(let aux=0; aux<data.length;aux++) {
        const flex = document.querySelector(".fichas");
        const template = document.getElementById("ficha").content;
        const clone = template.cloneNode(true);
        const fragment = document.createDocumentFragment();
        let descripcion=data[aux].descripcion;
        let precio=data[aux].precio;
        let imagen=data[aux].imagen;
        clone.querySelector(".formato-img").setAttribute("src", `${imagen}`);
        clone.querySelector(".formato-descr").innerHTML = `${descripcion}`;
        clone.querySelector(".formato-precio").innerHTML = `${precio}`;
        fragment.appendChild(clone);
        flex.appendChild(fragment);
    }   
}
