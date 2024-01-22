

var subjectObject = {
    "Pen": {
      "Ball Pens": ['Blue', 'Black', 'Red', 'Green'],
      "Rollerball Pens": ['Blue', 'Black', 'Red', 'Green'],
      "Gel Pens": ['Blue', 'Black', 'Red', 'Green' ],
      "Marker Pens": ['Blue', 'Black', 'Red', 'Green'],
      "Stylus Pens": ['Blue', 'Black', 'Red', 'Green']
    },
    "Paper": {
      "Printing Papers": ['Note books', 'NewsPrinting', 'Magazines','Catalog'],
      "Drawing Papers": ['Catridge Paper'],
       
    },
    "Tapes":{
      "Cloth Tape" : ['Medical Clinic', 'Book-Binding'],
      "Decorative Tape" : ['Art Projects', 'Ballons', 'Flowers', 'Geometric Designs'],
      "Electrical Tape" :['Wiring'],
      "Masking Tape" :['Painting'],
    },
    "Cables" : {
    "HDMI":['Media Streamers', 'DVD Players', 'TVs'], 
    "VGA":['Computers'], 
    "ETHERNET":['WiFi router', 'telephone line', 'CCTV Cameras'],
},
   
}

var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
window.onload=function(){
    
    for(var x in subjectObject){
        // console.log(x);
        first.options[first.options.length] = new Option(x)
    }

    first.onchange = function(){
        second.length = 1
        third.length = 1

        second.style.display = 'block'
        third.style.display = 'none'

        for(var y in subjectObject[this.value]){
            // console.log(y);
            second.options[second.options.length] = new Option(y)
        }
    }


    second.onchange = function(){
        third.length = 1

        third.style.display = 'block'
        z = subjectObject[first.value][this.value]
        for(let i=0; i<z.length; i++){
            third.options[third.options.length] = new Option(z[i])
        }
    }
    
    var carvi=document.querySelector('#stationary-cart-back');
    var cart=document.querySelector('.Cart');
    cart.addEventListener('click',()=>{
        carvi.classList.remove('container-s-cart-none');
        carvi.classList.add('container-s-cart-display');
    });
    
    var cartclose=document.querySelector('#cart-close');
    
    cartclose.addEventListener('click',()=>{
        carvi.classList.remove('container-s-cart-display');
        carvi.classList.add('container-s-cart-none');
    
    });
    
    var buttonstationary=document.querySelector("#btn");
    
    var content=document.querySelector('#content');
    var element=document.createElement("div");
    
    var contain=document.querySelector('.Container1');
    
    var ItemList=[];
        buttonstationary.addEventListener('click',(e)=>{
          //  e.preventDefault();
            data ={
                first:first.value,
                second:second.value,
                third:third.value
            }
            console.log(data.third);
            //if(ItemList.length>2){
            console.log(ItemList.third);
           // }
            let check;
            // ItemList.forEach((check)=>{
            //     console.log(ItemList.find.name==check.third);
            // });
            for(var $i=0;$i<ItemList.length;$i++){
                for(var $j=0;$j<ItemList.length;$j++){
                   // console.log(ItemList[$j]);
                }
            }
            ItemList.push(data);
                loopdata();
                contain.reset();
                second.style.display="none";
                third.style.display="none";
                
        })
     //});
       
    //}
    
    
    
    
    var data;
    function loopdata(){
       $i=0;
       let ele=" ";
        ItemList.forEach(data => {

            ele+=`<span style="color: red;">Order Number :</span><span style="margin-right: 50px;">${Math.random().toFixed(5).substring(2,4)}</span>
                <div>
                <p>Catagories :<span>${data.first}</span></p>
                <p>Type :<span>${data.second}</span></p>
                <p>Items:<span>${data.third}</span></p>
                </div>`;
            //createItem(data);
            $i++;
        });
        element.innerHTML=ele;
        content.appendChild(element);
    }
}

//document.addEventListener("DOMContentLoaded",()=>{




//});

