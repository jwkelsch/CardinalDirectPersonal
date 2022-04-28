//for use in interior page

//forward button
document.getElementById("forwardBtn").onclick = function() {
  if(curr.hasAttribute("forwardVar")){
    //set image to corresponding image based on clicked directional
    pic.src = curr.attributes.forwardImg.value;
    //set current pic
    //curr = window["SE_east"]; //this works!
    curr = window[curr.attributes.forwardVar.value]; //sets curr to pic it changes to
  }
}

//left button
document.getElementById("leftBtn").onclick = function() {
  if(curr.hasAttribute("leftVar")){
    pic.src = curr.attributes.leftImg.value;
    curr = window[curr.attributes.leftVar.value];
  }
}

//right button
document.getElementById("rightBtn").onclick = function() {
  if(curr.hasAttribute("rightVar")){
    pic.src = curr.attributes.rightImg.value;
    curr = window[curr.attributes.rightVar.value];
  }
}

//backward button
document.getElementById("backwardBtn").onclick = function() {
  if(curr.hasAttribute("backwardVar")){
    pic.src = curr.attributes.backwardImg.value;
    curr = window[curr.attributes.backwardVar.value];
  }
}

//downstairs button
document.getElementById("down").onclick = function() {
  if(curr.hasAttribute("downVar")){
    pic.src = curr.attributes.downImg.value;
    curr = window[curr.attributes.downVar.value];
  }  
}

//upstairs button
document.getElementById("up").onclick = function() {
  if(curr.hasAttribute("upVar")){
    pic.src = curr.attributes.upImg.value;
    curr = window[curr.attributes.upVar.value];
  }  
}

//secondary click handler for button style changing + room # updates -- for every directional button**
var buttons = document.querySelectorAll(".button").length;
for (var i = 0; i < buttons ; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function() {
      //update room #'s 
      document.getElementById("roomsLeft").innerHTML = curr.attributes.leftRooms.value;
      document.getElementById("roomsRight").innerHTML = curr.attributes.rightRooms.value; 

    //hasattribute - directionals - if doesnt, change css to grey out
    if(!curr.hasAttribute("forwardVar")){
      document.getElementById("forwardBtn").style = "opacity: 0.1" 
    }
    else{
      document.getElementById("forwardBtn").style = "opacity: 1" 
    }
    if(!curr.hasAttribute("leftVar")){
      document.getElementById("leftBtn").style = "opacity: 0.1" 
    }
    else{
      document.getElementById("leftBtn").style = "opacity: 1" 
    }
    if(!curr.hasAttribute("rightVar")){
      document.getElementById("rightBtn").style = "opacity: 0.1" 
    }
    else{
      document.getElementById("rightBtn").style = "opacity: 1" 
    }
    if(!curr.hasAttribute("backwardVar")){
      document.getElementById("backwardBtn").style = "opacity: 0.1" 
    }
    else{
      document.getElementById("backwardBtn").style = "opacity: 1" 
    }
    if(!curr.hasAttribute("upVar")){
      document.getElementById("up").style = "opacity: 0.1" 
    }
    else{
      document.getElementById("up").style = "opacity: 1" 
    }
    if(!curr.hasAttribute("downVar")){
      document.getElementById("down").style = "opacity: 0.1" 
    }
    else{
      document.getElementById("down").style = "opacity: 1" 
    }
    });
  }

//toggle explore buttons, update UI accordingly
var boolToggle = false;
document.getElementById("showExplore").onclick = function(){
    if(boolToggle == false){
      document.getElementById("forwardBtn").classList.replace("hidden", "visible");
      document.getElementById("leftBtn").classList.replace("hidden", "visible");
      document.getElementById("rightBtn").classList.replace("hidden", "visible");
      document.getElementById("backwardBtn").classList.replace("hidden", "visible");
      document.getElementById("up").classList.replace("hidden", "visible");
      document.getElementById("down").classList.replace("hidden", "visible");
      //disable route buttons - have to go back to entrance page to enter new route
      document.getElementById("next").disabled = true;
      document.getElementById("next").style.cssText += "opacity: .1";
      document.getElementById("prev").disabled = true;
      document.getElementById("prev").style.cssText += "opacity: .1";
      boolToggle = true;
      }
    else{
      document.getElementById("forwardBtn").classList.replace("visible", "hidden");
      document.getElementById("leftBtn").classList.replace("visible", "hidden");
      document.getElementById("rightBtn").classList.replace("visible", "hidden");
      document.getElementById("backwardBtn").classList.replace("visible", "hidden");
      document.getElementById("up").classList.replace("visible", "hidden");
      document.getElementById("down").classList.replace("visible", "hidden");
      boolToggle = false;
      }   
    }






