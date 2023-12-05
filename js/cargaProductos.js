traeProductos();

function traeProductos(){
        const url='https://camposguille.pythonanywhere.com/productos';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.productos = data;
            tarjetas(data);
            this.cargando=false
        })
        .catch(err => {
            console.error(err);
            this.error=true
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
// const { createApp } = Vue
// createApp({
//     data() {
//         return {
//             productos:[],
//             url:'https://camposguille.pythonanywhere.com/productos',
//             error:false,
//             cargando:true,
//             id:0,
//             descripcion:"",
//             imagen:"",
//             stock:0,
//             precio:0,
//         }
//     },
// methods: {
//     fetchData(url) {
//         fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             this.productos = data;
//             this.cargando=false
//         })
//         .catch(err => {
//             console.error(err);
//             this.error=true
//         })
//     },
//     eliminar(producto) {
//         const url = this.url+'/' + producto;
//         var options = {
//             method: 'DELETE',
//         }
//         fetch(url, options)
//         .then(res => res.text()) 
//         .then(res => {
//             location.reload();
//         })
//     },
//     grabar(){
//         let producto = {
//             descripcion:this.descripcion,
//             precio: this.precio,
//             stock: this.stock,
//             imagen:this.imagen
//         }
//         var options = {
//             body:JSON.stringify(producto),
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             redirect: 'follow'
//         }
//         fetch(this.url, options)
//         .then(function () {
//             window.location.href = "./prod.html";
//         })
//         .catch(err => {
//             console.error(err);
//             alert("Error al Grabar")
//         })
//     }
// },
// created() {
//     this.fetchData(this.url)
// },
// }).mount('#app')