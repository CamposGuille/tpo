//  document.getElementById("prueba").value = "hola";

const url = `http://camposguille.pythonanywhere.com/admin`;
function culo(event){
    event.preventDefault();
    alert("entro");
    fetch(url)
        .then(data => {
            return data.json();
        })
        .then(dataJSON => {
            if (dataJSON.cod === '404') {
                console.log('Error con la carga de datos ...');
            } else {
                let lista3= JSON.parse(dataJSON);
                alert(lista3);
                generaTarjetas(dataJSON);
            }
        })
        .catch(error => {
            console.log(error);
        })
}

function generaTarjetas(data){
    const obj= JSON.parse(data);
    alert(data);
    // const content = document.createElement('div');
    alert("entro al genera");
    // document.getElementById("prueba").value = lista;
    document.getElementById("demo").innerHTML = obj.usuario+ " " + obj.nivel;
    // result.appendChild(content);
}
