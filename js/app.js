
window.addEventListener('load', listSelect);

const main = document.querySelector("main");
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
const filterProducts = document.getElementById("filterProducts");
const divNumberAument = document.getElementById("divNumberAument")
const numberAument = document.getElementById("numberAument")
const comingSoonShop = document.getElementById("comingSoon")

////////////////      EVENTOS         /////////////////
selectProducts.addEventListener('change', renderCards);
btnAddProduct.addEventListener("click", funAddContain);
closeContain.addEventListener("click", funCloseContain);

btnAddCard.addEventListener("click", funcBtnAddCard);
imgShoes.addEventListener("change", importImg)

filterProducts.addEventListener("change",filterPrice);

let imgSelected = "";
let idTextShoess = "NikeShoes-";
let idNumShoess = 9;
let idFinish ;



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
  idFinish = idTextShoess + (idNumShoess++);
  const shoesAdd = {
    id: idFinish,
    product: nameShoes.value,
    price: priceShoes.value,
    image: imgSelected
  }
  nikeForceOne.unshift(shoesAdd);
  // nikeForceOne.forEach(element => {console.log(element);});
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

  main.innerHTML=''; 
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
    btnAdd.classList.add('btnAddCart');
    btnAdd.textContent = 'ADD TO CART';
    btnAdd.addEventListener('click', funtionShop);

    let btnShopCart = document.createElement('button');
    btnShopCart.setAttribute('id',id);
    btnShopCart.classList.add('btnShopCart');
    btnShopCart.textContent = 'COMPRAR';
    btnShopCart.addEventListener('click', comingSoon);


  
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
    contentCard.appendChild(btnShopCart);
    contentCard.appendChild(btnDelete);
    main.appendChild(contentCard);
}

/////////////////////////////////////////////////////////////////////////////////
// ===================      P R O X I M A M E N  T  E   =================== //

function comingSoon() {
  comingSoonShop.style.visibility = "visible";
  CloseComingSoon = document.getElementById('CloseComingSoon');
  const CloseComing = () => {comingSoonShop.style.visibility = "hidden";}
  CloseComingSoon.addEventListener('click', CloseComing);
}


/////////////////////////////////////////////////////////////////////////////////
// ========      A G R E G A R   C A R R I T O   D E   C O M P R A S   ======== //

const contenProducts = document.getElementById('contenProducts');
function funtionShop(event){
  nikeForceOne.map(element =>{
    element.id === event.target.id ? createShop(element):null;
  })
}

// let total = 0;
let sh1 = 1; //let sh2= 1;let sh3= 1;let sh4= 1;let sh5= 1;let sh6= 1;let sh7= 1;let sh8= 1;let sh9= 1;let sh10 = 1;

arrayProducts = [];
let incremet = 0;
let nA = 1;

function createShop(nikeForceOne){
  const {id,product,price,image} = nikeForceOne;
  arrayProducts.push(id);

  arrayProducts.forEach(element => {
        if(element === id){incremet++; console.log(element);}
  });

  let contentCard = document.createElement('div');
  contentCard.classList.add('productShoesRecord');

  let div1 = document.createElement('div');
  let labelNameS = document.createElement('p');
  labelNameS.textContent = "Name Shoes";
  let nameS = document.createElement('p');
  nameS.setAttribute('id',id)
    nameS.classList.add('nameShoesRecord');
    nameS.textContent = product;

  let div2 = document.createElement('div');
  let labelpriceS = document.createElement('p');
  labelpriceS.textContent = "Price";
  let priceS = document.createElement('p');
    priceS.setAttribute('id',id)
    priceS.classList.add('priceShoesRecord');
    priceS.textContent = price; 

  let div3 = document.createElement('div');
  div3.setAttribute('id','contentAmountS')
  let labelAmountS = document.createElement('p');
  labelAmountS.textContent = "Amount";
  let amountS = document.createElement('p');
    amountS.setAttribute('id',id);
    let contenAmount = amountS.id;
    amountS.classList.add('amountShoesRecord');
    amountS.textContent = 1; 

  let divbtn1M = document.createElement('div');
  let labeldivbtn1MS = document.createElement('p');
  labeldivbtn1MS.textContent = "Add";
  let btn1M = document.createElement('button');
    btn1M.setAttribute('id',id)
    btn1M.classList.add('addShoesRecord');
    btn1M.textContent = "+"; 

  let divbtn2M = document.createElement('div');
  let labeldivbtn2MS = document.createElement('p');
  labeldivbtn2MS.textContent = "Erase";
  let btn2M = document.createElement('button');
    btn2M.setAttribute('id',id)
    btn2M.classList.add('eraseShoesRecord');
    btn2M.textContent = "-"; 
  
  let div4 = document.createElement('div');
  let imgS = document.createElement('img');
    imgS.setAttribute('id',id)
    imgS.setAttribute('src',image);
    imgS.classList.add('imgShoesRecord');


    if (incremet === 1) {
      div1.appendChild(labelNameS);
      div1.appendChild(nameS);

      div2.appendChild(labelpriceS);
      div2.appendChild(priceS);

      div3.appendChild(labelAmountS);
      div3.appendChild(amountS);

      div4.appendChild(imgS);

      divbtn1M.appendChild(labeldivbtn1MS)
      divbtn1M.appendChild(btn1M)

      divbtn2M.appendChild(labeldivbtn2MS)
      divbtn2M.appendChild(btn2M)

      contentCard.appendChild(div1);
      contentCard.appendChild(div2);
      contentCard.appendChild(div3);
      contentCard.appendChild(divbtn1M);
      contentCard.appendChild(divbtn2M);
      contentCard.appendChild(div4);
      contenProducts.appendChild(contentCard);

      numberAument.textContent = nA++;
      divNumberAument.style.backgroundColor = 'red';
  
  } incremet=0;
    


    //  ========== BOTON DE AUMENTO ==========

    btn1M.addEventListener("click", aggMoreValue);
    function aggMoreValue() {
      if (btn1M.id === contenAmount) {
        amountS.textContent = sh1++;
      }
    }
    //  ========== BOTON DE DES AUMENTO ==========
    btn2M.addEventListener("click", noMoreValue);
      function noMoreValue() {
        if (btn2M.id === contenAmount) {
          amountS.textContent = sh1--;
          console.log(amountS.value);
        }
      }
}


















    //  ========== BOTON DE AUMENTO  MAS QUEMADO QUE EL **** ==========
    // btn1M.addEventListener("click", aggMoreValue);
    // function aggMoreValue() {
    //   btn1M.id  == "NikeShoes-1" ? amountS.textContent = sh1++
    //   :btn1M.id == "NikeShoes-2" ? amountS.textContent = sh2++
    //   :btn1M.id == "NikeShoes-3" ? amountS.textContent = sh3++
    //   :btn1M.id == "NikeShoes-4" ? amountS.textContent = sh4++
    //   :btn1M.id == "NikeShoes-5" ? amountS.textContent = sh5++
    //   :btn1M.id == "NikeShoes-6" ? amountS.textContent = sh6++
    //   :btn1M.id == "NikeShoes-7" ? amountS.textContent = sh7++
    //   :btn1M.id == "NikeShoes-8" ? amountS.textContent = sh8++
    //   :btn1M.id == "NikeShoes-9" ? amountS.textContent = sh9++
    //   :btn1M.id == "NikeShoes-10" ? amountS.textContent = sh10++
    //   :null;
    //   } 


    



// /////////////////////////////////////////////////////////////////////////////////
// // ========      L O G O   C A R R I T O   D E   C O M P R A S       ======== //
// const shopCartContents = document.getElementById("ShopCartContent");
// const efecttBlurShops = document.getElementById("EfecttBlurShop");

// const btnCart = document.getElementById("btns")
// const closeShoesRecord = document.getElementById("closeShoesRecord");

// btnCart.addEventListener("click", funCartRecord)
// closeShoesRecord.addEventListener("click", funCartclose)
// function funCartRecord() { //Funcion Para que Aparezca El historial De Compra
//   shopCartContents.style.visibility = "visible";
//   efecttBlur.style.visibility = "visible";
// }

// function funCartclose() { 
//   shopCartContents.style.visibility = "hidden";
//   efecttBlur.style.visibility = "hidden";
// }
/////////////////////////////////////////////////////////////////////////////////