
window.addEventListener('load', listSelect);

const mainCards = document.querySelector("main");
const selectProducts = document.getElementById("select-products");

const btnAddProduct = document.getElementById("btnAddProduct");
const closeContain = document.getElementById("closeContain");
const placeProducts = document.querySelector(".placeProducts");
const efecttBlur = document.getElementById("efecttBlur");

const nameShoes =  document.getElementById("nameShoes");
const priceShoes =  document.getElementById("priceShoes");
const imgShoes =  document.getElementById("imgShoes");

// ========   EVENTOS   ======== //
selectProducts.addEventListener('change', renderCards);
btnAddProduct.addEventListener("click", funAddContain);
closeContain.addEventListener("click", funCloseContain);




// ========  C R E A R   C A R D S  (MANUALMENTE)   ======== //
function funAddContain() {
  placeProducts.style.visibility ="visible";
  efecttBlur.style.visibility ="visible";
}

function funCloseContain() { // 
  placeProducts.style.visibility ="hidden";
  efecttBlur.style.visibility ="hidden";
}

function imgCreate() { 
}

function CreateCards() { 
}




// ========   C  A  R  D  S  ======== //
function renderCards() {
  nikeForceOne.map(nikeForceOne => {
    if (nikeForceOne.product === selectProducts.value){createCards(nikeForceOne);}}); 
}

function listSelect() {
  nikeForceOne.map (nikeForceOne =>{
    let listSelect = document.createElement('option');
    listSelect.textContent = nikeForceOne.product;
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






