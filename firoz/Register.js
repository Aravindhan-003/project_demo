//var data=[];
//var JsData={};
//window.addEventListener("DOMContentLoaded",loadfully);

//function loadfully(){

let reg = document.getElementById("regis");
reg.addEventListener("click", validate);

function creatData(name, employeeId,locationorder, email, password) {
    // JsData={
    //        name:localStorage.setItem("name",name),
    //        employeeId:localStorage.setItem("employeeId",employeeId),
    //        email:localStorage.setItem("email",email),
    //        password:localStorage.setItem("password",password)
    //    }
    //    data.push(JsData);

    localStorage.setItem("name", name),
        localStorage.setItem("employeeId", employeeId),
        localStorage.setItem("locationo", locationorder),
        localStorage.setItem("email", email),
        localStorage.setItem("password", password)

        console.log("inside create func");

}
//console.log(JsData);

function validate(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var employeeId = document.getElementById("employeeId").value;
    var locationorder = document.getElementById("location-order").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var pattern = new RegExp("([A-Z]{4}[a-z]{4,}[0-9])\\w+", "g");
    var result = password.match(pattern);
    let str = String(email);
    let num = str.indexOf('@');
    console.log();

    var loct=document.getElementById("location-order");
    var locet=document.getElementById("locate-order");

    if (name == "" || employeeId == "" || email == "" || password == "" || locationorder == "") {
        alert("All fields must be filled out");
        return false;
    } else{
        if(locationorder == "none"){
            
            loct.classList.add("location-ordershow");
            locet.classList.add("locate-ordershow");
            locet.classList.remove("locate-orders");
            return false;
        }else{
    if (result) {
        //loct.classList.remove("location-ordershow");
        if(locet.classList.value=="locate-ordershow"){
            locet.classList.remove("locate-ordershow");
            locet.classList.add("locate-orders");
            if(loct.classList.value == "location-ordershow"){
                loct.classList.remove("location-ordershow");
            }
        }else{
        
console.log("first if condi");
  
          if(num == -1){
            email = email+"@mphasis.com";
            creatDa();
            return true;
          }
        else if (str.substring(num + 1,) == "mphasis.com"){
               console.log("inside mphasis if");
               creatDa();
               return true;
        } else if(str.substring(num + 1,) != "mphasis.com"){
            alert("Create valid company mailID.");
            return false;
        }
    }
}
    else {
        alert("Create email and password correctly..");
        console.log(password);
    }
}
}
    console.log(email);

function creatDa(){
    if (localStorage.getItem("name") == name && localStorage.getItem("email") == email) {
        alert("You already registerd!..Please login directly.");
        return false;
    } else {
        creatData(name, employeeId,locationorder, email, password);
        //console.log(data);
        alert("Registration successful!");
   }
}
}
//}