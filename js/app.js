
const mainCards = document.querySelector("main");
const selectProducts = document.getElementById("select-products");

window.addEventListener('load', listSelect);
selectProducts.addEventListener('change', renderCards);


function renderCards() {
  nikeForceOne.map(nikeForceOne => {
    if (nikeForceOne.product === selectProducts.value){
      createCards(nikeForceOne);
    }
  }); 
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

    let btnClose = document.createElement('button');
    btnClose.classList.add('deleteCards');
    btnClose.textContent = '❌';

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


    contentCard.appendChild(btnClose);
    contentCard.appendChild(imgCard);
    contentCard.appendChild(nameProduct);
    contentCard.appendChild(priceProduct);
    contentCard.appendChild(btnAdd);
    contentCard.appendChild(btnClose);


    mainCards.appendChild(contentCard);

}


