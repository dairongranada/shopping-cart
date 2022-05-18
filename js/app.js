
window.addEventListener('load', listSelect);

const mainCards = document.querySelector("main");
const selectProducts = document.getElementById("select-products");
///////////////////////////////////////////////////////////////
const btnAddProduct = document.getElementById("btnAddProduct");
const closeContain = document.getElementById("closeContain");
const placeProducts = document.querySelector(".placeProducts");
const efecttBlur = document.getElementById("efecttBlur");
///////////////////////////////////////////////////////////////
const nameShoes =  document.getElementById("nameShoes");
const priceShoes =  document.getElementById("priceShoes");
const imgShoes =  document.getElementById("imgShoes");
const btnAddCard =  document.getElementById("btnAddCard");
///////////////////////////////////////////////////////////////
const filterProducts = document.getElementById("filterProducts")

////////////////      EVENTOS         /////////////////
selectProducts.addEventListener('change', renderCards);
btnAddProduct.addEventListener("click", funAddContain);
closeContain.addEventListener("click", funCloseContain);

btnAddCard.addEventListener("click", funcBtnAddCard);
imgShoes.addEventListener("change", importImg)

filterProducts.addEventListener("change",filterPrice);

let imgSelected = "";
let idTextShoess = "NikeShoes-";
let idNumShoess = 7;




// ========  C R E A R   C A R D S  (MANUALMENTE)   ======== //


function funAddContain() { //Funcion Para que Aparezca (EL MODAL)
  placeProducts.style.visibility ="visible";
  efecttBlur.style.visibility ="visible";
}
function funCloseContain() { //Funcion Para Cerrar (EL MODAL)
  placeProducts.style.visibility ="hidden";
  efecttBlur.style.visibility ="hidden";
}
function importImg(event){ //Funcion Para Crear URL a la img En el local
  const courrentImg = event.target.files[0];
  const objectUrl = URL.createObjectURL(courrentImg);
  imgSelected = objectUrl;
  console.log(objectUrl);
}



function funcBtnAddCard(event){ //CAPTURA EL TITULO, PRECIO Y LA IMG 
  const idFinish = idTextShoess + (idNumShoess++);

  const shoesAdd = {
    id: idFinish,
    product: nameShoes.value,
    price: priceShoes.value,
    image: imgSelected
  }
  nikeForceOne.unshift(shoesAdd);
  nikeForceOne.forEach(element =>  {
    console.log(element);
  });
  listSelect();

  ////////////////    S T Y L O S   ////////////////
  placeProducts.style.visibility ="hidden";
  efecttBlur.style.visibility ="hidden";
  nameShoes.value = "";
  priceShoes.value = ""; // vaciar Los inputs 
}

function filterPrice(event){ //Funcion Para Filtar Precios
    const response = event.target.value === "100k"
    ? nikeForceOne.filter(nikeForceOne => nikeForceOne.price < 200.000)
    : event.target.value === "200k"
    ? nikeForceOne.filter(nikeForceOne => nikeForceOne.price > 200.000)
    : event.target.value === ("all")
    ? nikeForceOne.filter(nikeForceOne => nikeForceOne.price < 500.000)
    :null;

  mainCards.innerHTML=''; 
  response.map(element => createCards(element));
  
}


// ========   C  A  R  D  S  ======== //
function renderCards() {
  nikeForceOne.map(element => {
    if (element.product === selectProducts.value){createCards(element);}}); 
}

function listSelect() {
  selectProducts.innerHTML = "";
    nikeForceOne.map (element =>{

    let listSelect = document.createElement('option');
    listSelect.value = element.product;
    listSelect.textContent = element.product;
    selectProducts.appendChild(listSelect);

  });
}

function createCards(nikeForceOne) {
  const {product,image,id,price} = nikeForceOne; // DESTRUCTURY

    let contentCard = document.createElement('div');
    contentCard.classList.add('card-product');

    let imgCard = document.createElement('img');
    imgCard.setAttribute('src',image);
    imgCard.classList.add('img-product');

    let nameProduct = document.createElement('h6');
    nameProduct.textContent = product;
    nameProduct.classList.add('name-product');

    let priceProduct = document.createElement('p');
    priceProduct.classList.add('price-product');
    priceProduct.textContent = price; 
    
    let btnAdd = document.createElement('button');
    btnAdd.setAttribute('id',id);
    btnAdd.classList.add('btn-add');
    btnAdd.textContent = 'COMPRAR';

    let btnDelete = document.createElement('button');
    btnDelete.setAttribute('id', id);
    btnDelete.classList.add('deleteCards');
    btnDelete.textContent = 'X';

    btnDelete.addEventListener('click', deleteCards); // EVENTO PARA ELIMINAR LA CARD

  function deleteCards() { // FUNCION PARA ELIMINAR LA CARD
    contentCard.remove(); 
  }

    contentCard.appendChild(imgCard);
    contentCard.appendChild(nameProduct);
    contentCard.appendChild(priceProduct); 
    contentCard.appendChild(btnAdd);
    contentCard.appendChild(btnDelete);
    mainCards.appendChild(contentCard);
}






