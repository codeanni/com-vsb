
function showData() {
    

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var adhaar = document.getElementById("adhaar").value;
    var address = document.getElementById("address").value;
    var date = document.getElementById("date").value;
    
//Storing Data.

       var nm=localStorage.setItem("name" , name);
       var mail=localStorage.setItem("email" , email);
       var age1=localStorage.setItem("age" , age);
       var ph=localStorage.setItem("phone" , phone);
       var adhr=localStorage.setItem("adhaar" , adhaar);
       var adrs=localStorage.setItem("address" , address);
       var dt=localStorage.setItem("date" , date);

    }

