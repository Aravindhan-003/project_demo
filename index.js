var subjectObject = {
  "Pantry": {
      "Milk": ["Spoiled", "Shortage","No coffee","Others"],
      "Machine": ["Not working", "Sound issue","Others"] 
    },
  "Cabin": {
    "ODC": ["TowerB", "TowerE", "TowerF","Others"],
    "Training room": ["Keller", "Fedex","Others"] 
  },
  "General": {
    "Restroom": ["Water issue", "Smell issue", "Damage issue","Others"],
    "Water can": ["Replace Empty can", "Water issue", "No glass","Others"]
  }
}
document.addEventListener("DOMContentLoaded",loadDocument);

function loadDocument(){
dropdown();
//giveback();
}
//dropdown functions
function dropdown(){
  var subjectSel = document.getElementById("fedtype");
  var topicSel = document.getElementById("topic");
  var chapterSel = document.getElementById("chapter");
  
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    topicSel.length = 1;
    chapterSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]){
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  }
  topicSel.onchange = function() {
    //empty Chapters dropdown
    chapterSel.length = 1;
    //display correct values
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  }
}


var arrys=[];


var parent=document.querySelector(".tickshow");
var parenttwo=document.querySelector(".tickshows");
var child=document.querySelector(".ticfield");
//console.log(parent.firstElementChild.classList.contains("detail"));
document.getElementById("btn").addEventListener("click",function(e){

 e.preventDefault();
 
//  while (parent.firstElementChild.classList.contains("tickfield")) {
//      child.remove();
//   }

  var data=document.getElementById("formdata");
  var name=data.elements.item(0).value;
  var empid=data.elements.item(1).value;
  var categories=data.elements.item(2).value;
  var place=data.elements.item(3).value;
  var issues=data.elements.item(4).value;
  var comment=data.elements.item(5).value;

  if(name=="" || empid=="" || categories=="" || place =="" || issues == ""){
     alert("please fill all the fields!..");
  }else{
    helo(name,empid,categories,place,issues,comment);
  }
data.reset();
});

console.log();
function helo(name,empid,categories,place,issues,comment){
  const dummydata = {
  name:name,
  empid:empid,
  categories:categories,
  place:place,
  issues:issues,
  comment:comment
};
var js=JSON.stringify(dummydata);
arrys.push(dummydata);
//window.open()
creatArry(arrys);
}
var ctele=document.createElement("div");
let fltcont=document.getElementById("floatcontain");
function creatArry(arrys){
console.log(arrys);
  let ele="";
  let elem="";
  var caele=document.createElement("div");
  caele.setAttribute("class","box");
  var cmele=document.createElement("div");
  cmele.setAttribute("class","boxs");
  //var ctele=document.createElement("div");
  
          //going through array one by one
          for(var i=0;i<arrys.length;i++){
            var arrticks = document.querySelectorAll(".emptytick");
            arrticks.forEach((arrtick)=>{
               arrtick.classList.remove("emptytick");
               arrtick.classList.add("emptytickclose");
            });
            console.log("inside for loop");
            elem=`<div class="ticfield">
              <p>Your Ticket:${arrys[i].empid}${Math.random().toFixed(5).substring(2,4)}</p>
              <p id="expand">Created on:${Date().substring(4,15)}</p> 
           </div> 
               <p>Employee ID:${arrys[i].empid}</p>
               <p><span>Problem In:</span>
               ${arrys[i].categories},${arrys[i].place}</p>
               <p><span>Reason:</span>
                ${arrys[i].issues},${arrys[i].comment} 
               </p>`
               ele=`<div class="ticfields">
              <p>Your Ticket:${arrys[i].empid}${Math.random().toFixed(5).substring(2,4)}</p>
              <p id="expand">Created on:${Date().substring(4,15)}</p> 
           </div> 
           <p id="chgcolor" class="chgpending">pending</p>`
               console.log("for loop");
               caele.innerHTML=elem;
               cmele.innerHTML=ele;
               parent.appendChild(caele);
              //  tell.innerHTML=ele;
              parenttwo.appendChild(cmele);
              setTimeout(chgcolor,20000)
              }  
        var color=document.getElementById("chgcolor");
        function chgcolor(){
             color.innerHTML="Resolved";
             color.classList.remove("chgpending");
             color.classList.add("chgpendingclose");
        }
       
}
fltEle=`<p>Name:${localStorage.getItem("name")}</p>
<p>EmpID:${localStorage.getItem("employeeId")}</p>
<p>Location:${localStorage.getItem("locationo")}</p>
<a href="mailto:helpddesk@example.com">ReportTo:helpddesk@example.com</a>
        <p>Logout <span id="logout" style="color:black;cursor: pointer;" class="material-symbols-outlined">
            logout
            </span></p>`
ctele.innerHTML=fltEle;
fltcont.appendChild(ctele);


var logout=document.getElementById("logout");

logout.addEventListener("click",()=>{
  localStorage.clear();
  window.open("firoz/Register.html","_self");
})

var toll=document.getElementById("ticket");
var tolls=document.getElementById("tickets");
var tickcross=document.getElementById("tickcross");
var tick=document.getElementById("tick");
tick.addEventListener('click',()=>{
    toll.classList.remove('container');
     toll.classList.add('containershow');
});
tickcross.addEventListener('click',()=>{
  toll.classList.remove('containershow');
    toll.classList.add('container');
});

var ticks=document.getElementById("ticks");
ticks.addEventListener('click',()=>{
  tolls.classList.remove('containertwo');
   tolls.classList.add('containertwoshow');
});
var tickcrosstwo=document.getElementById("tickcrosstwo");
tickcrosstwo.addEventListener('click',()=>{
  tolls.classList.remove('containertwoshow');
    tolls.classList.add('containertwo');
});

let prof=document.getElementById("profile");

prof.addEventListener("click",()=>{
  if(fltcont.classList.value == 'floatcontain'){
    fltcont.classList.add("floatcontainshow");
    fltcont.classList.remove("floatcontain");
  }else{
    fltcont.classList.remove("floatcontainshow");
    fltcont.classList.add("floatcontain");
  }
});


// async function sendEmail(name, email, subject, message) {
//   const data = JSON.stringify({
//     "Messages": [{
//       "From": {"Email": "aaravindhanravi@gmail.com", "Name": "Aravindhan"},
//       "To": [{"Email": email, "Name": name}],
//       "Subject": subject,
//       "TextPart": message
//     }]
//   });


//   const axios = require('axios');
//   const config = {
//     method: 'post',
//     url: 'https://api.mailjet.com/v3.1/send',
//     //url:'https://mailtrap.io',
//     data: data,
//     headers: {'Content-Type': 'application/json'},
//     auth: {username: '142f335c2cacd38920745d17722a3840', password: 'bf7db3db5de50b01d3be0b20aa59abbe'},
//   };

//   return axios(config)
//     .then(function (response) {
//       console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

// }

// // define your own email api which points to your server.
// app.post('http:/sendemail/', function (req, res) {
//   const {name, email, subject, message} = req.body;
//   //implement your spam protection or checks.
//  // sendEmail(name, email, subject, message);
//  sendEmail("jeswanth","jaswanthjunnu@gmail.com", "This dummy mail","Hi from firoz and aravindh how are you!!..");
// });



// function sendMail(name, email, subject, message) {
//   const myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   myHeaders.set('Authorization', 'Basic ' + btoa('142f335c2cacd38920745d17722a3840'+":" +'bf7db3db5de50b01d3be0b20aa59abbe'));

//   const data = JSON.stringify({
//     "Messages": [{
//       "From": {"Email": "bopato9739@lanxi8.com", "Name": "Ramraja"},
//       "To": [{"Email": email, "Name": name}],
//       "Subject": subject,
//       "TextPart": message
//     }]
//   });

//   const requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: data,
//   };

//   fetch("https://api.mailjet.com/v3.1/send", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// }

// sendMail('Test Name',"jaswanthjunnu@gmail.com",'Test Subject','Test Message')