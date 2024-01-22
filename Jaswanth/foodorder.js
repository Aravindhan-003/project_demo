const btnCart=document.querySelector('#cart-icon');
const Cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{
    Cart.classList.add('cart-active');
});

btnClose.addEventListener('click',()=>{
    Cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
    
    loadContent();
    
}

function loadContent(){
  
    //removing Items From Cart
    let btnRemove=document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeItem);
        

    });
    //product add event
    let qtyElements=document.querySelectorAll('.cart-quantity');
    qtyElements.forEach((input)=>{
        input.addEventListener('change',changeQuantity);
    });

    // adding to cart
    let cartBtns= document.querySelectorAll('.add-cart');
    cartBtns.forEach((btn)=>{
        if(signin.classList=='account-background-none'){
            btn.addEventListener('click',addCart);
        }
    
    });

//Update Total

updateTotal();



}
function removeItem(){
    if(confirm('Are You sure to Remove')){
        let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
        itemList=itemList.filter(el=>el.title!=title);
        this.parentElement.remove();
        loadContent();
    }
    
    //clearCart();
}


function changeQuantity(){
    
    if (this.value>10) {
        this.value=10;  
        alert('Maximum Quantity is 10');  
    } else {
        this.value=Math.round(this.value);
        
    }
    loadContent();
}

let itemList=[];




//Add Cart
function addCart(){
    let food=this.parentElement;
    let title=food.querySelector('.food-title').innerHTML;
    let price=food.querySelector('.food-price').innerHTML;
    let imgSrc=food.querySelector('.food-img').src;

    let newProduct={title,price,imgSrc}
//Check Product whether it is already Installed or Not
    if(itemList.find((el)=>el.title==newProduct.title)){
        alert("Product Already in Cart");
        return;
    }
    else{
        itemList.push(newProduct);
    }



    let newProductElement= createCartProduct(title,price,imgSrc);
    let element=document.createElement('div');
    element.setAttribute("class","cart-del");
    element.innerHTML=newProductElement;
    
    let cartBasket=document.querySelector('.cart-content');
    cartBasket.append(element);
    loadContent();
    
    
}

function createCartProduct(title,price,imgSrc){

    return `
    <div class="cart-box">
            <img src="${imgSrc}" class="cart-img">
            <div class="detail-box">
                <div id="deta" class="cart-food-title">${title}</div>
                <div class="price-box">
                    <div class="cart-price">${price}</div>
                    <div class="cart-amt">${price}</div>
                </div>
                <input type="number" value="1" class="cart-quantity">
            </div>

            <a class="cart-remove"> <span class="material-symbols-outlined">
                delete
                </span></a>
        </div>
    `;

}
const placeorder=document.getElementById('place-order');
var count=itemList.length;

function updateTotal(){
    const statusbar=document.getElementById('Status-bar');
    
    const cartItems=document.querySelectorAll('.cart-box');
    const totalValue=document.querySelector('.total-price');
    
    let total=0;
    
    // console.log(price*qty);

    cartItems.forEach(product=>{
        let priceElement=product.querySelector('.cart-price');
        let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
        let qty=product.querySelector('.cart-quantity').value;
        total=total+(price*qty);
        product.querySelector('.cart-amt').innerText="Rs."+(price*qty);
        

    });

    totalValue.innerHTML='Rs.'+total;

    //product Quantity Cart Count
    const cartCount=document.querySelector('#cart-count');
    var count=itemList.length;
    cartCount.innerHTML=count;
    if (count==0){
        
        cartCount.style.display='none';
    }
    else{
        cartCount.style.display='block';
    }

    
}

placeorder.addEventListener('click',()=>{
    if (itemList.length==0){
        alert('Please Add some Item cart');
    }
    else{
    var ja= confirm('Confirm With Your Order!');
    }
    if(ja){
        alert('Order is Placed');
        createItem();
        setTimeout(jashu,200);
        os();
        setTimeout(preparing,7000);
        setTimeout(finished,12000);
         
        return statusbardisplay();      
    }            
});

function os(){
    var osdisplay=document.querySelector('#os-none');
        osdisplay.classList.remove('os-none');
        osdisplay.classList.add('os-display');
        
}

function preparing(){
    var orderstatedes=document.querySelector('#orderstatedes');
    orderstatedes.innerHTML='Preparing';
    orderstatedes.classList.remove('red');
    orderstatedes.classList.add('yellow');
}

function finished(){
    var orderstatedes=document.querySelector('#orderstatedes');
    orderstatedes.innerHTML='Finished';
    orderstatedes.classList.remove('yellow');
    orderstatedes.classList.add('green');
}




function jashu(){
    var noti=document.getElementById("notification");
        noti.classList.remove('notification-none');
        noti.classList.add("notification-card");
        setTimeout(notificationb,2500);
}
function notificationb(){
    var noti=document.getElementById("notification");
        noti.classList.add('notification-none');
        noti.classList.remove("notification-card"); 
}


function statusbardisplay(){

    var statusbar=document.querySelector('#Status-bar');
    statusbar.classList.remove('statusbar-none');
    statusbar.classList.add('statusbar-display');
};

var statuss=document.querySelector('#Status-bar');
var statusvisible=document.querySelector('#status-visible');
var statusclose=document.querySelector('#status-close');

statuss.addEventListener('click',()=>{
    statusvisible.classList.remove('cartsec-none');
    statusvisible.classList.add('cartsec-display');
});

statusclose.addEventListener('click',()=>{
    statusvisible.classList.add('cartsec-none');
    statusvisible.classList.remove('cartsec-display');
});


const nonveg=document.querySelector('.counter1-color');
const veg=document.querySelector('.counter2');
const vegdisplay=document.querySelector('.veg-items-none');
const nonvegdisappear=document.querySelector('.nonveg-items');


veg.addEventListener('click',()=>{
     nonvegdisappear.classList.remove('nonveg-items');
     nonvegdisappear.classList.add('nonveg-items-none');
     vegdisplay.classList.add('veg-items');
     veg.classList.add('counter2-color');
     nonveg.classList.remove('counter1-color');
     nonveg.classList.add('counter1');
});

nonveg.addEventListener('click',()=>{
    nonvegdisappear.classList.add('nonveg-items');
    vegdisplay.classList.remove('veg-items');
    vegdisplay.classList.add('veg-items-none');
    nonveg.classList.add('counter1-color');
    veg.classList.remove('counter2-color');
})

const signout=document.querySelector('#signOut');
const signin=document.querySelector('#signIn');
const sign=document.querySelector('.account-background-none');
const none=document.querySelector('.account');

// signout.addEventListener('click',()=>{
//     signin.classList.remove('account-background-none');
//     signin.classList.add('account-background-view');  
// });

const account=document.querySelector('.account');
const accountdata=document.querySelector('#accountdata');
const accountview=document.querySelector('.account-background-none');
var proEle=document.createElement("div");
const accountback=document.querySelector('#account-back');
account.addEventListener('click',()=>{
var elc="";
         
      elc=` 
      <div style="padding-bottom: 20px;"><span class="name">Name : </span><span class="name-value">${localStorage.getItem("name")}</span></br></div>
      <div style="padding-bottom: 20px;"><span class="mailid">Employee Id : </span><span class="mailid-value">${localStorage.getItem("employeeId")}</span></br></div>
      <div style="padding-bottom: 20px;"><span class="mailid">Mail Id : </span><span class="mailid-value">${localStorage.getItem("email")}</span></br></div>
      <div style="padding-bottom: 20px;"><span class="mobile">Location : </span><span class="location-value">${localStorage.getItem("locationo")}</span></br></div>
     `;

    proEle.innerHTML=elc;
    

    if(accountdata.classList== 'account-background-none') {
    accountview.classList.remove('account-background-none');
    accountview.classList.add('account-background-view');
    }else{
        accountview.classList.add('account-background-none');
        accountview.classList.remove('account-background-view');
        signin.classList.remove('account-background-view');
    }

});
localStorage.getItem("locat");
accountback.appendChild(proEle);

    signout.addEventListener('click',()=>{
        localStorage.clear();
        window.open("../firoz/Register.html")  
    });

const popadd=document.querySelector('.add-cart');
const countzero=document.querySelector('.cart-count');

popadd.addEventListener('click',()=>{
    if(signin.classList=='account-background-view'){
        alert('Please Login!');
    }
});

const button =document.getElementById('get-location-button');
let addpos=document.getElementById("location-add");
let addlong=document.getElementById('location-long');
function locationdetected(position){
    console.log(position["coords"]["latitude"]);
    addpos.innerHTML=`latitude:${position["coords"]["latitude"]}`;
    addlong.innerHTML=`longitude:${position["coords"]["longitude"]}`;

}
function failedtoload(){
    console.log('There was an Issue');
}

button.addEventListener('click',()=>{
    navigator.geolocation.getCurrentPosition(locationdetected,failedtoload);
});

var addstatus=document.getElementById("addstatus");
var elem=document.createElement("div");
function createItem(){
    let ele=" ";
    deldatacart();
        ele=`<span style="color: red;">Order Number :</span><span style="margin-right: 50px;">${Math.random().toFixed(5).substring(2,4)}</span>`;
    itemList.forEach((item)=>{
        ele+=`
        <div id="paid-amount">
        <div id="cart-foodd" class="cart-food-title" style="color:blue;">${item.title}</div>
            <div id="price-boxx" class="price-box">
                <div class="cart-price">${item.price}</div>
            </div>
        </div>`
    })
    // <span>Quantity:</span><span>${item.totalValue}</span>
    elem.innerHTML=ele;
    addstatus.appendChild(elem);
    deldatacart();
    
};

function deldatacart(){
    const cartCount=document.querySelector('#cart-count');
    var count=itemList.length;
    var to=document.querySelector('.total-price');
    cartCount.innerHTML=count;
    
    var setDatas = document.querySelector(".cart-content").childNodes;
    setDatas.forEach((data)=>{
        if(data.classList){
           var delcartbox= data;
           delcartbox.remove();
           cartCount.style.display='none';
           to.innerHTML='Rs.'+0;
        }
        
    })
    
//   itemList.forEach((item)=>{
//      var title=item.title;
//      setDatas.forEach((setData)=>{
//         console.log(setDatas);
//          if(title == setData.innerHTML){
//             console.log(setDatas);
//             console.log(setData.parentElement);
//              setData.parentElement.remove();
//              loadContent();
//          }
//      })
//   })
}








