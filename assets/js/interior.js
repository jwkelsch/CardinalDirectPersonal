//check if user signed in
buttons = document.querySelectorAll("button");

function getUserEmail(){
	let url = window.location.href;
	let idx = url.indexOf("?user=");
	let endidx = url.indexOf("&entrance=");
	let user = "";
	if(idx !== -1 && endidx === -1){ // There is no date in the url
		user = url.substring(idx+6);
	}
	else if(idx !== -1 && endidx !== -1){ // There is a date in the url
		user = url.substring(idx+6, endidx);
	}
	return user+"@noctrl.edu";
}

document.addEventListener('DOMContentLoaded', e => {
	let email = getUserEmail();
	if (email === null){
		document.querySelector("#logout").style.display = "none";
	}
	else{		
    console.log(email);
		fetch('http://127.0.0.1:3000/get_username', {
		method : 'POST',
		headers: {'Content-Type': 'application/json'},
		body : JSON.stringify({"email" : email})
		})
		.then(response => {
			if (!response.ok){
				throw new Error('HTTP error: ${response.status}');
			}
			return response.json();
		})
		.then(data => {
			console.log(data);
		})
		.catch(error => {
			console.log(error);
		});		
	}
});

document.getElementById("backButton").addEventListener('click', e => {
	let url = window.location.href;
	let idx = url.indexOf("?user=");
	let endidx = url.indexOf("&entrance=");
	let user = "";
	if(idx !== -1 && endidx === -1){ // There is no date in the url
		user = url.substring(idx);
	}
	else if(idx !== -1 && endidx !== -1){ // There is a date in the url
		user = url.substring(idx, endidx);
	}
	window.location.href = 'choose_entrance.html' + user;
});

//"Logout" button
document.getElementById("logout").addEventListener('click', e => {window.location.href = 'login.html';});

var curr;
var pic = document.getElementById("current"); //html element
console.log(pic.src);

//grab entrance from url
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  
var entrance = params.entrance;
console.log("entrance= " + entrance);

//if NW, curr = NW_e
if(entrance == 'nw'){
    pic.src = F1_NW_east.src;
    curr = F1_NW_east;
}

//if SW, curr = SW_e
if(entrance == 'sw'){
    pic.src = F1_SW_east.src;
    curr = F1_SW_east;
}
 
//if SE, curr = SE_w
if(entrance == 'se'){
    pic.src = F1_SE_west.src;
    curr = F1_SE_west;
}
  
//if NE, curr = NE_w
if(entrance == 'ne'){
    pic.src = F1_NE_west.src;
    curr = F1_NE_west;
}

document.getElementById("roomsLeft").innerHTML = curr.attributes.leftRooms.value;
document.getElementById("roomsRight").innerHTML = curr.attributes.rightRooms.value; 

//hasattribute - directionals - if doesnt, change css to grey out
if(!curr.hasAttribute("forwardVar")){
    document.getElementById("forwardBtn").style.opacity= "0.1"; 
  }
  else{
    document.getElementById("forwardBtn").style.opacity ="1"; 
  }
  if(!curr.hasAttribute("leftVar")){
    document.getElementById("forwardBtn").style.opacity= "0.1"; 
  }
  else{
    document.getElementById("forwardBtn").style.opacity ="1"; 
  }
  if(!curr.hasAttribute("rightVar")){
    document.getElementById("forwardBtn").style.opacity= "0.1"; 
  }
  else{
    document.getElementById("forwardBtn").style.opacity ="1";  
  }
  if(!curr.hasAttribute("backwardVar")){
    document.getElementById("forwardBtn").style.opacity= "0.1";  
  }
  else{
    document.getElementById("forwardBtn").style.opacity ="1";  
  }
  if(!curr.hasAttribute("upVar")){
    document.getElementById("forwardBtn").style.opacity= "0.1"; 
  }
  else{
    document.getElementById("forwardBtn").style.opacity ="1";  
  }
  if(!curr.hasAttribute("downVar")){
    document.getElementById("forwardBtn").style.opacity= "0.1"; 
  }
  else{
    document.getElementById("forwardBtn").style.opacity ="1";  
  }




