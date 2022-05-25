window.onload=pageLoad;
function pageLoad(){
	var Form = document.getElementById("form1");
	Form.onsubmit= validate;
}
// function validate(){
// 	// var check = true;
// 	var mail = document.getElementById("email").value;
// 	var phone = document.getElementById("telephone").value;
// 	var password = document.getElementById("password").value;
// 	if(mail == ""){
// 		alert("E-mail is required !");
// 		// 
//       return false;
// 	}

// 	if(password == ""){
// 		alert("Password is required !");
// 		// check= false;
//       return false;
// 	}
	
// 	if (phone == "") {
// 		alert("Phone is required !");
//       return false;
//    }
	
// 	// if (!Fname.match(/^[A-Za-z ]+$/)){ 
// 	// 	alert("only letters or space allowed in name field");
// 	// 	check= false;
//    //    return check;
// 	// }
	
// 	if (!mail.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)){
// 		alert("Email is Not Valid");
// 		// check=false;
//       // return check;
//       return false;
// 	}

// 	if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/)){
// 		alert("Password is Not Valid, It must contain 8 characters: 1 uppercase, at least one lowercase, one number and one special character at least");
// 		// check=false;
//       // return check;
//       return false;
//    }
	
	
// 	if (!phone.match(/^[0-9]{11}$/)){

// 		alert("Phone is not valid");
// 		// 
//       return false;
// 	}
// 	// if(check==true){
// 	// 	alert('thanks '+Fname+" "+Lname+' for join to us');
// 	// 	window.location.href='index.html';
// 	// }
// 	// return check;
// }


function check(){
   var password=document.getElementById("password").value;
   var phone=document.getElementById("phone").value;

if(phone == ""){
  alert("fill the phone");  
return false;
}



if (!phone.match(/^[0-1]{2}[0-9]{9}$/)){
  alert("only 11 number 01xxxxxxxxx");
   // document.getElementById("message00").innerHTML = "**telephone must be 11 number only!";
      return false;
  }
if(password == ""){
//    document.getElementById("message1").innerHTML = "**Fill the password";
alert("fill the password");  

return false;
}
if(password.charAt(0) !=password.charAt(0).toUpperCase()){
alert(" password not start with uppercase letter");
return false;
}

if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/)){
 alert("password must include 8 characters only, one special character at last, include one digit and no space ") ;
 return false;
}


}
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());