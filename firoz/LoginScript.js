//import { creatData as refer }from "./Register.js";
//console.log(refer.data);
var btn = document.getElementById("btn");
//window.addEventListener("DOMContentLoaded", loadedsuc);

//function loadedsuc() {

    btn.addEventListener("click", validationForme);
    function validationForme() {
        var email = document.getElementById("email").value + "@mphasis.com";
        var password = document.getElementById("password").value;
        if (email == localStorage.getItem("email") && password == localStorage.getItem("password")) {
            alert("Logged in successful!");
            document.getElementById("chgwrap").classList.add("wrapperclose");
            document.getElementById("chghome").classList.add("homepage");
            return true;
        } else if (email == "" || password == "") {
            alert("All fields must be filled out");
            return false;
        }else{
            alert("Enter correct email and password");
        }
    }
//};
let forget = document.getElementById("forgot");
forget.addEventListener("click", function () {
    document.getElementById("chgwrap").classList.add("wrapperclose");
    document.getElementById("chgpass").classList.remove("chgpassclose");
    document.getElementById("chgpass").classList.add("chgpass");
    document.getElementById("press").addEventListener("click", chello);
    function chello() {
        var forget = document.getElementById("forpass");
        var crtEle = document.createElement("div");
        var forform = document.createElement("div");
        if (forget.value == localStorage.getItem("email")) {

            console.log(localStorage.getItem("email"));
            console.log(forget.value);
            document.getElementById("chgpass").classList.add("chgpassclose");

            crtEle = `<p style="font-size: 20px;font-weight: 700;">Please create password and don't enter the previous password</p>
         <label style="font-weight: 600;" for="password">Create Password:
         <input style="padding:7px;margin: 3px;" id="crtpass" type="password"/></label>
         <label style="font-weight: 600;" for="confirpassword">Confirm Password:
         <input style="padding:7px;margin: 3px;" type="password" id="conpass"/></label>
         <button type="submit" id="sub" style="width: 80px;height: 30px;background-color: rgb(60, 60, 219);margin-left: 60%;margin-top: 3px;">Submit</button>`
            forform.innerHTML = crtEle;
            document.getElementById("passcrt").appendChild(forform);
            forform.classList.add("forpass");
            var crtpass = document.getElementById("crtpass");
            var conpass = document.getElementById("conpass");
            var btnsub = document.getElementById("sub");
            btnsub.addEventListener("click", blast);
            function blast() {
                console.log(crtpass.value);
                console.log(conpass.value);
                if (crtpass.value == conpass.value) {
                    if (crtpass.value == localStorage.getItem("password")) {
                        alert("You entered previous password");
                        return false;
                    } else {
                        localStorage.setItem("password", crtpass.value);
                        alert("Password created successfully!..");
                        location.reload();
                    }
                } else {
                    alert("Please enter a same password in both field correctly..");
                }
            }
        } else {
            alert("Please fill the registered emailID..");
        }
    }
});