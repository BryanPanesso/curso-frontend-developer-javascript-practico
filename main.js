const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener('click', ToggleDesktopMenu);
menuHamIcon.addEventListener('click', ToggleMobileMenu);
menuCarritoIcon.addEventListener('click', ToggleCarritoAside);

function ToggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains("inactive");
 
    if(!isAsideClosed){
        aside.classList.add("inactive"); 
     }

    desktopMenu.classList.toggle("inactive");

}

function ToggleMobileMenu() {
const isAsideClosed = aside.classList.contains("inactive");
    

    if(!isAsideClosed){
        aside.classList.add("inactive"); 
     }

    mobileMenu.classList.toggle("inactive");

}

function ToggleCarritoAside() {
    const ismobileMenuClosed = mobileMenu.classList.contains("inactive");
    
        if(!ismobileMenuClosed){
           mobileMenu.classList.add("inactive"); 
        }

        aside.classList.toggle("inactive");

}

const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({

    name: "Computador",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({

    name: "Televisor",
    price: 100,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProduct(arr){
for (product of productList){

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    //product={name,price,image}->product.image
    const Productimg = document.createElement("img");
    Productimg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");
    
    const productPrice = document.createElement("div");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("div");
    productName.inertText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(Productimg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
}

renderProduct(productList);