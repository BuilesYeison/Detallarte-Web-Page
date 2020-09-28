const gallery = document.querySelectorAll('.gallery-content .img-card img'); //hacemos conexion con nuestro css
const modal = document.querySelector('.modal');
const imgModal = document.querySelector('#imgModal');
const caption = document.querySelector('#caption');
const closeModal = document.querySelector('#closeModal');
const btnMenu = document.querySelector('.btn-menu')
const menu = document.querySelector('.list-container');
let on_off = true;

//menu adaptable
btnMenu.addEventListener('click', () =>{
  if(on_off){
    menu.style.left = '0';//para mostra el menu
    menu.style.transition = '300ms';
    on_off = false;
  }else{//esconder Menu
    menu.style.left = '-100%';
    menu.style.transition = '300ms';
    on_off = true;
  }
});

//Gallery

gallery.forEach((images) => { //recorremos la galeria con las imagenes
  images.addEventListener('click', (event) =>{ //añadimos un evento al dar click en cada imagen
    modal.style.display = "block";
    let srcImg = event.target.src;//guardamos el src de la imagen clickeada
    let altImg = event.target.alt;

    imgModal.src= srcImg;//agregamos a la imagen modal el src de la imagen clickeada
    caption.innerHTML = altImg;
  });
});

//Cerrar Modal
closeModal.addEventListener('click', ()=>{
  modal.style.display = "none";
});
