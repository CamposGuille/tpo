// const url = `http://camposguille.pythonanywhere.com/admin`;

// function levantaUsuarios(){
//     const url = `http://camposguille.pythonanywhere.com/admin`;
//     fetch(url)
//         .then(data => {
//             return data.json();
//         })
//         .then(dataJSON => {
//             if (dataJSON.cod === '404') {
//                 console.log('Error con la carga de datos ...');
//             } else {
//                 validaUsuario(dataJSON);
//             }
//         })
//         .catch(error => {
//             console.log(error);
//         })
// }
function levantaUsuarios(){
    const url='https://camposguille.pythonanywhere.com/admin';
    fetch(url)
    .then(response => response.json())
    .then(data => {
        this.productos = data;
        validaUsuario(data);
        this.cargando=false
    })
    .catch(err => {
        console.error(err);
        this.error=true
    })
}


function validaUsuario(data){
    console.log(data);
    let inpUsuario = document.getElementById("usuario_login").value;
    let inpClave = document.getElementById("clave_login").value;
    for(let aux=0; aux<data.length;aux++) {
        if(data[aux].usuario == inpUsuario){
            if(data[aux].clave == inpClave){
                window.location.href = "./prod.html";
                break;
            }
            else{
                alert("El usuario o la clave son incorrectos");
                window.location.href = "./login.html";
            }
        }
        else{
            if(aux==data.length-1){
                alert("El usuario o la clave son incorrectos");
                window.location.href = "./login.html";
            }
        } 
    }
}
