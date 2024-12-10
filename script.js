/////////////////////////////////////////////
const savedUsername=JSON.parse(localStorage.getItem('users')) || [];
console.log(savedUsername);


function saveData(){
    let email=document.getElementById("email").value;
    let User=document.getElementById("userName").value;
    let users = [];
    users.push({name : User , usernames : email});
    localStorage.setItem('users' , JSON.stringify(users));
}
const Wname = document.getElementById('textuser');
const loginbtn = document.querySelector('#Mlogin');
const login = document.querySelector('#login');
const logedout = document.getElementById('logout');


if(savedUsername.length === 0){
    Wname.innerHTML ='Login to complete the purchase';
    logedout.style.display = 'none';
}else{
    Wname.innerHTML = `Welcome <strong style='color: rgb(226, 50, 50)'>${savedUsername[0].name}</strong>  to <br/> our Gaming Shop`;
    loginbtn.style.display = 'none';
    login.style.display = 'none';
    document.getElementById('namess').textContent = `${savedUsername[0].name}`
    document.getElementById('emailss').textContent = `${savedUsername[0].usernames}`
}
function logedin(){
    window.location.href='index.html';
}
function logout(){
window.location.href='index.html';
localStorage.removeItem('users');
}
























//this for shpping cart



// the data of the products
const products = {
  gear:[{
    id:1,
    Name:"Gaming Keyboard",
    price:19.99,
    image:"https://static.wixstatic.com/media/c837a6_7c11d47692f04c1f92a024ad095274ae~mv2.jpg/v1/fill/w_255,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_7c11d47692f04c1f92a024ad095274ae~mv2.jpg",
},
{
    id:2,
    Name:"Gaming Chair",
    price:30.99,
    image:"https://static.wixstatic.com/media/c837a6_85410586580e46ce94659e34046a48c8~mv2.jpg/v1/fill/w_255,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_85410586580e46ce94659e34046a48c8~mv2.jpg",
},
{
    id:3,
    Name:"Gaming Headset",
    price:19.99,
    image:"https://static.wixstatic.com/media/c837a6_9a2583f0a17e48efb075913d90da0dbf~mv2.jpg/v1/fill/w_255,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_9a2583f0a17e48efb075913d90da0dbf~mv2.jpg",
},
{

    id:4,
    Name:"X-2 WIRELESS Mouse",
    price:19.99,
    image:"https://static.wixstatic.com/media/c837a6_0067919b3086427cad03a54e61452958~mv2.jpg/v1/fill/w_255,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_0067919b3086427cad03a54e61452958~mv2.jpg"
},
{
    id:5,
    Name:"Dualshock PS4",
    price:30.99,
    image:"https://static.wixstatic.com/media/c837a6_58812d9bb7ba47638549b64970fe3bbe~mv2.jpg/v1/fill/w_255,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_58812d9bb7ba47638549b64970fe3bbe~mv2.jpg"
},
{
    id:6,
    Name:"ghost runner",
    price:30.99,
    image:"https://upload.wikimedia.org/wikipedia/en/2/2c/Ghostrunner_cover_art.jpg",    
},
{
    id:7,
    Name:"chronospilit",
    price:30.99,
    image:"https://static.wixstatic.com/media/c837a6_261f4ef2535f451faedabc197c6e4a71~mv2.jpg/v1/fill/w_255,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_261f4ef2535f451faedabc197c6e4a71~mv2.jpg",    
},
{
    id:8,
    Name:"PlayStation 5",
    price:220.99,
    image:"https://m.media-amazon.com/images/I/51oLSJq1WrL.jpg",
},
{
    id:9,
    Name:"Minecraft",
    price:20.99,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHNf00IFAqt0GlCmCW8UfYPqYXrI7EybwyDg&s",
},
{
    id:10,
    Name:"PS5 Headset",
    price:15.99,
    image:"https://sonyworld.qa/cdn/shop/products/Elite_01_PR_CMYK.jpg?v=1705475761&width=1080",
},
{
    id:11,
    Name:"Marvel Spider-man",
    price:30.99,
    image:"https://www.games2egypt.com/Images/Products/78669?fileFormat=1&height=500",
},
{
    id:12,
    Name:"PlayStation 4 Pro",
    price:199.99,
    image:"https://i.ebayimg.com/images/g/T0kAAOSw83pghzgy/s-l500.jpg",
},
],
}

/////////////////////////////////////////////////////










var gridiv = document.querySelector('#gridpro'); //div list id


for(let i = 0 ; i < products.gear.length ; i++){
    let pro = `<div class="card" style="width: 13rem;height:auto ;max-height:400px" id='${products.gear[i].id}'>
                <img src=${products.gear[i].image} class="card-img-top" alt="pro">
                <div class="card-body">
                    <h5 class="card-title">${products.gear[i].Name}</h5>
                    <p  class="card-text">${products.gear[i].price}$</p>
                    <button class="addToCart btn btn-dark">buy now</button>
                </div>
            </div>`
            gridiv.innerHTML += pro;
}



function closeCartBtn(){ // to close the cart
    document.getElementById('Bcart').style.display = 'none';
}
function openCartBtn(){ //to open the cart only if logged in
    if(savedUsername.length === 0 ){ 
        alert('you must login first')
    }else{
    document.getElementById('Bcart').style.display = 'flex';
}
}



let btnCart = document.querySelectorAll('.addToCart') //the buy now button

let cart = []; //array thst saved in local storage

let totalPrice = 0;

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function clicksale(){
    document.getElementById('clicksale').click
} 




btnCart.forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const productImg = productElement.parentElement.getElementsByTagName('img')[0].src;
        const productId = productElement.parentElement.id; // Use parentElement to get the card id
        const productName = productElement.querySelector('.card-title').textContent; // Get the product name
        const productPrice = parseFloat(productElement.querySelector('.card-text').textContent); // Get the product price
         // Check if the product is already in the cart
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
             // If it exists, increment the quantity
            existingProduct.quantity += 1;
        } 
        else {
             // If it does not exist, add a new product object
            cart.push({ id: productId, name: productName, price: productPrice, imge: productImg, quantity: 1 });
        }
        totalPrice += productPrice;
        
        // Update the cart display
        updateCartDisplay()
        saveCartToLocalStorage()
        console.log(cart)
        
    });
});





function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<img src='${item.imge}' class='img-fluid'  alt='dsd' />
        <div class='itemTitle'>${item.name}<br/> $${(item.price * item.quantity).toFixed(2)}</div>
        <div class='quantitybtn'>
            <button onclick="updateQuantity('${item.id}', -1)">-</button>
            ${item.quantity} 
            <button onclick="updateQuantity('${item.id}', 1)">+</button>
        </div>
        <button style='color:red' onclick="removeFromCart('${item.id}')"><i class="fa-solid fa-trash"></i></button>`;
        cartItems.appendChild(li);
        let final = totalPrice + 2.99 + (totalPrice * 0.2);
        document.getElementById('numbers').innerHTML = cart.length;
        document.getElementById('total-price').textContent = `SubTotal: $${totalPrice.toFixed(2)}`;
        document.getElementById('finaltotal').textContent = `Total: $${final.toFixed(2)} `;
        document.getElementById('itemscount').textContent = `items ${cart.length}`;
        totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    });
    saveCartToLocalStorage()
    updateCartIcon()
}

// the cart icons show only if cart has an item
function updateCartIcon() {
    if (cart.length > 0) {
        document.querySelector('#carticon').style.display = 'flex'; // Show cart icon if cart is empty
        document.querySelector('#car').style.display = 'inline';
    } else {
        document.querySelector('#car').style.display = 'none'; // Hide cart button from navbar
        document.querySelector('#carticon').style.display = 'none'; // Hide cart icon if cart has items
        closeCartBtn();

    }
}


function updateQuantity(productId, change) {
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += change;
        if (existingProduct.quantity <= 0) {
            removeFromCart(productId); // Remove item if quantity is zero or less
            totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        }
    }
    totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0); // Recalculate total price
    updateCartDisplay();
    saveCartToLocalStorage()
}

// Function to remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    updateCartDisplay();
    saveCartToLocalStorage()
    updateCartIcon()
}



document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your purchase!');
        // Clear the cart
        localStorage.removeItem('carts');
        cart.length == 0;
        cart =[];
        totalPrice = 0;
        updateCartDisplay();
    }
}); 




function loadCartFromLocalStorage() {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = savedCart;
    totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    updateCartDisplay();
    
}


// Call this function when the page loads
loadCartFromLocalStorage();