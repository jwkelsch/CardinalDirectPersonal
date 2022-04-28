
/*//USE FOR MANUAL TESTING   
wsc.createEdges();
wsc.runDijkstra("f1 sw");
let path = wsc.getPathTo("f1  e");
console.log(path);//array
*/

var createRoute = document.getElementById("createRoute");
var count = 0; //counting variable to keep track of current instruction, used in button cohesion

createRoute.addEventListener("click", function(e){
    e.preventDefault();//only works if button is clicked, not with the  "enter" key
    
	//grab entrance from url
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    
    var entrance = params.entrance;
    
	if (entrance == "ne"){
		entrance = "f1 ne";
	}
	else if (entrance == "nw"){
		entrance = "f1 nw";
	}
	else if (entrance == "se"){
		entrance = "f1 se";
	}
	else{//entrance = "sw"
		entrance = "f1 sw";
	}
	console.log(entrance);

	//set destination to what the user enters in search bar
	var destination = document.getElementById('destination').value;
    console.log(destination);

    //INTERSECTION-LOCATION ASSIGNMENTS //CLEAN UP REPEATING FLOORS AT THE END
    var location = document.createElement('destination');
    //NE ENTRANCE 
    if (entrance == "f1 ne"){
        //FLOOR 0
        if (destination == "034" || destination == "036"){
            location.setAttribute("destination", "f0 ne");
        }
        if (destination == "028" || destination == "026" || destination == "024" || destination == "022" || 
        destination == "020"){
            location.setAttribute("destination", "f0 ne");
            //turn left
        }
        if (destination == "010" || destination == "005" ){
            location.setAttribute("destination", "f0  e");
        }
        if (destination == "013" || destination == "015" || destination == "038" || destination == "040" || destination == "042"){
            location.setAttribute("destination", "f0  w");  
        }
        if (destination == "002"){
            location.setAttribute("destination", "f0 se");  
        }
        //FLOOR 1
        if (destination == "154" || destination == "156"){
            alert("You are already here.");
        }
        if (destination == "111" || destination == "109" || destination == "107" || destination == "144" || destination == "142" || destination == "138" ||
        destination == "136" || destination == "134" || destination == "132"){
            location.setAttribute("destination", "f1 ne");
        }
        if (destination == "103" || destination == "101" || destination == "128" || destination == "126" || destination == "124" || destination == "122" ||
        destination == "118" || destination == "116" || destination == "112"){
            location.setAttribute("destination", "f1  e");
        }
        if (destination == "113" || destination == "115" || destination == "119" || destination == "121"){
            location.setAttribute("destination", "f1 nw");  
        }
        if (destination == "104" || destination == "106"){
            location.setAttribute("destination", "f1 se");  
        }
        //FLOOR 2
        if (destination == "254" || destination == "256"){
            location.setAttribute("destination", "f2 ne");
        }
        if (destination == "232" || destination == "234" || destination == "236" || destination == "238" || 
        destination == "213" || destination == "215" || destination == "242" || destination == "244"){
            location.setAttribute("destination", "f2 ne");
            //turn left
        }
        if (destination == "205" || destination == "216" || destination == "218" || destination == "222" || destination == "224" || destination == "226" ||
        destination == "228"){
            location.setAttribute("destination", "f2  e");
        }
        if (destination == "217" || destination == "219" || destination == "221" || destination == "223"){
            location.setAttribute("destination", "f2  w");  
        }
        //FLOOR 3
        if (destination == "354" || destination == "356"){
            location.setAttribute("destination", "f3 ne");
        }
        if (destination == "317" || destination == "315" || destination == "313" || destination == "332" || destination == "334" || destination == "336" ||
        destination == "338" || destination == "342" || destination == "344" || destination == "348" || destination == "350" || destination == "352"){
            location.setAttribute("destination", "f3 ne");
            //turn left
        }
        if (destination == "319" || destination == "321" || destination == "323" || destination == "325"){
            location.setAttribute("destination", "f3  w");  
        }
        if (destination == "307" || destination == "328" || destination == "326" || destination == "324" || destination == "322" || destination == "318" ||
        destination == "316" || destination == "312" || destination == "310" || destination == "308"){
            location.setAttribute("destination", "f3  e");
        }
        if (destination == "301"){
            location.setAttribute("destination", "f3 se");  
        }   
    }
    //NW ENTRANCE
    if (entrance == "f1 nw"){
        //FLOOR 0
        if (destination == "034" || destination == "036"){
            location.setAttribute("destination", "f0 ne");
        }
        if (destination == "013" || destination == "015" || destination == "038" || destination == "040" || destination == "042"){
            location.setAttribute("destination", "f0 nw");
        }
        if (destination == "010" || destination == "005"){
            location.setAttribute("destination", "f0  e");
        }
        if (destination == "002"){
            location.setAttribute("destination", "f0 sw");
        }
        if (destination == "028" || destination == "026" || destination == "024" || destination == "022" || 
                    destination == "020"){
            location.setAttribute("destination", "f0 ne");
        }
        //FLOOR 1
        if (destination == "154" || destination == "156"){
            alert("You are already here.");
        }
        if (destination == "113" || destination == "115"){
            location.setAttribute("destination", "f1 nw");
        }
        if (destination == "119" || destination == "121" || destination == "101"){
            location.setAttribute("destination", "f1  w");
        }
        if (destination == "128" || destination == "126" || destination == "124" || destination == "122" || destination == "118" || destination == "116" ||
        destination == "101" || destination == "103"){
            location.setAttribute("destination", "f1  e");
        }
        if (destination == "104" || destination == "106"){
            location.setAttribute("destination", "f1 sw");
        }
        if (destination == "107" || destination == "109" || destination == "111" || destination == "132" || destination == "134" || destination == "136" ||
        destination == "138" || destination == "144" || destination == "148" || destination == "150"){
            location.setAttribute("destination", "f1 ne");
        }
        //FLOOR 2
        if (destination == "254" || destination == "256"){
            location.setAttribute("destination", "f2 ne");
        }
        if (destination == "217" || destination == "219"){
            location.setAttribute("destination", "f2 nw");
        }
        if (destination == "221" || destination == "223"){
            location.setAttribute("destination", "f2  w");
        }
        if (destination == "205" || destination == "228" || destination == "226" || destination == "224" || destination == "222" || destination == "218" ||
        destination == "216"){
            location.setAttribute("destination", "f2  e");
        }
        if (destination == "213" || destination == "215" || destination == "232" || destination == "234" || destination == "236" || destination == "238" ||
        destination == "242" || destination == "244" || destination == "248" || destination == "250" || destination == "252"){
            location.setAttribute("destination", "f2 ne");
            //turn left
        }
        //FLOOR 3
        if (destination == "354" || destination == "356"){
            //location.setAttribute("destination", "f3 nw");
            location.setAttribute("destination", "f3 ne");
        }
        if (destination == "319" || destination == "321"){
            location.setAttribute("destination", "f3  w");
            //turn left
        }
        if (destination == "323" || destination == "325"){
            location.setAttribute("destination", "f3  w");
        }
        if (destination == "307" || destination == "328" || destination == "326" || destination == "324" || destination == "322" || destination == "318" ||
        destination == "316" || destination == "312" || destination == "310" || destination == "308"){
            location.setAttribute("destination", "f3  e");
        }
        if (destination == "301"){
            location.setAttribute("destination", "f3 sw");
        }
        if (destination == "317" || destination == "315" || destination == "313" || destination == "332" || destination == "334" || destination == "336" ||
        destination == "338" || destination == "342" || destination == "344" || destination == "348" || destination == "350" || destination == "352"){
            location.setAttribute("destination", "f3 ne");
        }
    }
    //SW ENTRANCE
    if (entrance == "f1 sw"){
        //FLOOR 0
        if (destination == "034" || destination == "036"){
            location.setAttribute("destination", "f0 ne");
        }
        if (destination == "028" || destination == "026" || destination == "024" || destination == "022" || 
        destination == "020"){
            location.setAttribute("destination", "f0  e");
        }
        if (destination == "010" || destination == "005" ){
            location.setAttribute("destination", "f0 se");
        }
        if (destination == "013" || destination == "015" || destination == "038" || destination == "040" || destination == "042"){
            location.setAttribute("destination", "f0 nw");  
        }
        if (destination == "002"){
            location.setAttribute("destination", "f0 se");  
        }
        //FLOOR 1
        if (destination == "104" || destination == "106"){
            alert("You are already here.");
        }
        if (destination == "119" || destination == "121" || destination == "101"){
            location.setAttribute("destination", "f1 sw");
        }
        if (destination == "113" || destination == "115"){
            location.setAttribute("destination", "f1  w");
        }
        if (destination == "107" || destination == "109" || destination == "111" || destination == "132" || destination == "134" || destination == "136" ||
        destination == "138" || destination == "144" || destination == "148" || destination == "150"){
            location.setAttribute("destination", "f1  e");
        }
        if (destination == "154" || destination == "156"){
            location.setAttribute("destination", "f1 nw");
        }
        if (destination == "103" || destination == "112" || destination == "116" || destination == "118" || destination == "122" ||
        destination == "124" || destination == "126" || destination == "128"){
            location.setAttribute("destination", "f1 se");
        }
        //FLOOR 2
        if (destination == "254" || destination == "256"){
            location.setAttribute("destination", "f2 ne");
        }
        if (destination == "217" || destination == "219"){
            location.setAttribute("destination", "f2  w");
        }
        if (destination == "221" || destination == "223"){
            location.setAttribute("destination", "f2  w");
        }
        if (destination == "205" || destination == "228" || destination == "226" || destination == "224" || destination == "222" || destination == "218" ||
        destination == "216"){
            location.setAttribute("destination", "f2 se");
        }
        if (destination == "213" || destination == "215" || destination == "232" || destination == "234" || destination == "236" || destination == "238" ||
        destination == "242" || destination == "244" || destination == "248" || destination == "250" || destination == "252"){
            location.setAttribute("destination", "f2  e");
        }
        //FLOOR 3
        if (destination == "354" || destination == "356"){
            location.setAttribute("destination", "f3 ne");
        }
        if (destination == "319" || destination == "321"){
            location.setAttribute("destination", "f3  w");
        }
        if (destination == "323" || destination == "325"){
            location.setAttribute("destination", "f3  w");
        }
        if (destination == "307" || destination == "328" || destination == "326" || destination == "324" || destination == "322" || destination == "318" ||
        destination == "316" || destination == "312" || destination == "310" || destination == "308"){
            location.setAttribute("destination", "f3 se");
        }
        if (destination == "301"){
            location.setAttribute("destination", "f3 sw");
        }
        if (destination == "317" || destination == "315" || destination == "313" || destination == "332" || destination == "334" || destination == "336" ||
        destination == "338" || destination == "342" || destination == "344" || destination == "348" || destination == "350" || destination == "352"){
            location.setAttribute("destination", "f3  e");
        }
        
    }
    //SE ENTRANCE
    if (entrance == "f1 se"){
        //FLOOR 0
        if (destination == "034" || destination == "036"){
            location.setAttribute("destination", "f0 ne");
        }
        if (destination == "013" || destination == "015" || destination == "038" || destination == "040" || destination == "042"){
            location.setAttribute("destination", "f0  w");
        }
        if (destination == "010" || destination == "005"){
            location.setAttribute("destination", "f0 se");
        }
        if (destination == "002"){
            location.setAttribute("destination", "f0 sw");
        }
        if (destination == "028" || destination == "026" || destination == "024" || destination == "022" || 
                    destination == "020"){
            location.setAttribute("destination", "f0  e");
        }
        //FLOOR 1
        if (destination == "104" || destination == "106"){
            alert("You are already here.");
        }
        if (destination == "101" || destination == "103" || destination == "112" || destination == "116" || destination == "118" || destination == "122" ||
        destination == "124" || destination == "126" || destination == "128"){
            location.setAttribute("destination", "f1 se");
        }
        if (destination == "107" || destination == "109" || destination == "111" || destination == "132" || destination == "134" || destination == "136" ||
        destination == "138" || destination == "144" || destination == "148" || destination == "150"){
            location.setAttribute("destination", "f1  e");
        }
        if (destination == "113" || destination == "115" || destination == "119" || destination == "121"){
            location.setAttribute("destination", "f1  w");
            
        }
        if (destination == "154" || destination == "156"){
            location.setAttribute("destination", "f1 ne");
        }
        //FLOOR 2
        if (destination == "254" || destination == "256"){
            location.setAttribute("destination", "f2 ne");
        }
        if (destination == "232" || destination == "234" || destination == "236" || destination == "238" || 
        destination == "213" || destination == "215" || destination == "242" || destination == "244"){
            location.setAttribute("destination", "f2  e");
        }
        if (destination == "205" || destination == "216" || destination == "218" || destination == "222" || destination == "224" || destination == "226" ||
        destination == "228"){
            location.setAttribute("destination", "f2 se");
        }
        if (destination == "217" || destination == "219" || destination == "221" || destination == "223"){
            location.setAttribute("destination", "f2  w");  
        }
        //FLOOR 3
        if (destination == "354" || destination == "356"){
            location.setAttribute("destination", "f3 ne");
        }
        if (destination == "317" || destination == "315" || destination == "313" || destination == "332" || destination == "334" || destination == "336" ||
        destination == "338" || destination == "342" || destination == "344" || destination == "348" || destination == "350" || destination == "352"){
            location.setAttribute("destination", "f3  e");
        }
        if (destination == "319" || destination == "321" || destination == "323" || destination == "325"){
            location.setAttribute("destination", "f3  w");  
        }
        if (destination == "307" || destination == "328" || destination == "326" || destination == "324" || destination == "322" || destination == "318" ||
        destination == "316" || destination == "312" || destination == "310" || destination == "308"){
            location.setAttribute("destination", "f3 se");
        }
        if (destination == "301"){
            location.setAttribute("destination", "f3 sw");  
        } 
    }
    
    console.log(location);
    console.log(destination);
    
    wsc.createEdges();
    wsc.runDijkstra(entrance);
    let path = wsc.getPathTo(location.getAttribute("destination"));

    console.log(path);//array

    if(path.length > 1){
        for (let i = 0; i < path.length-1; i++){
            if(path[i] != null){
                //NE corner
                if (path[i].includes("ne")){
                    if (path[i+1] != null && path[i+1].includes("nw")){
                        if(destination == "013" || destination == "015" || destination == "038" || destination == "040" || destination == "042"){
                            path[i] = "Go Downstairs";
                            path[i+1] = "Arrived!";
                        }
                        else{
                            path[i] = "Go Straight";
                            path[i+1] = "Turn Left";
                        }
                        if (destination == "217" || destination == "219" || destination == "319" || destination == "321"){
                            path[i+1] = "Turn Left";
                        }
                    }
                    if (destination == "317" || destination == "315" || destination == "313" || destination == "332" || destination == "334" || destination == "336" ||
                    destination == "338" || destination == "342" || destination == "344" || destination == "348" || destination == "350" || destination == "352" ){
                        path[i] = "Go Upstairs";
                        path[i+1] = "Go Upstairs";
                        path[i+2] = "Turn Left"; 
                        path[i+3] = "Arrived!";
                    } 
                    if (destination == "321" || destination == "319"){
                        path[i] = "Turn Left";
                        path[i+1] = "Go Straight";
                        path[i+2] = "Turn Right";
                        path[i+3] = "Go Straight";
                        path[i+4] = "Go Upstairs";
                        path[i+5] = "Go Upstairs";
                        path[i+6] = "Turn Left";
                    }
                    if (destination == "323" || destination == "325"){
                        path[i] = "Turn Left";
                        path[i+1] = "Go Straight";
                        path[i+2] = "Turn Right";
                        path[i+3] = "Go Straight";
                        path[i+4] = "Go Upstairs";
                        path[i+5] = "Go Upstairs";
                        path[i+6] = "Turn Right";
                    }
                    if (destination == "217" || destination == "219"){
                        path[i] = "Turn Left";
                        path[i+1] = "Go Straight";
                        path[i+2] = "Turn Right";
                        path[i+3] = "Go Straight";
                        path[i+4] = "Go Upstairs";
                        path[i+5] = "Turn Left";
                    }
                    if (destination == "221" || destination == "223"){
                        path[i] = "Turn Left";
                        path[i+1] = "Go Straight";
                        path[i+2] = "Turn Right";
                        path[i+3] = "Go Straight";
                        path[i+4] = "Go Upstairs";
                        path[i+5] = "Turn Right";
                    }
                    if (destination == "301"){
                        path[i] = "Turn Left";
                        path[i+1] = "Go Straight";
                        path[i+2] = "Go Straight";
                        path[i+3] = "Go Upstairs";
                        path[i+4] = "Go Upstairs";
                        path[i+5] = "Go Straight";
                    }
         
                    if (path[i+1] != null && path[i+1].includes("e",4)){
                        if(path[i].charAt(1) === path[i+1].charAt(1)){//if on the same floor
                            path[i] = "Turn Left";
                            path[i+1] = "Go Straight"
                            if(path[i+2] != null && path[i+2].includes("w",4)){
                                path[i+2] = "Turn Right";
                                path[i+3] = "Go Straight";
                                //113+115 NOT WORKING
                                if (destination == "115" || destination == "113"){
                                    path.length+=1;
                                    path[i+4] = "Turn Right";
                                }
                                //need to change to w
                                if (destination == "321" || destination == "319"){
                                    path[i] = "Turn Left";
                                    path[i+1] = "Go Straight";
                                    path[i+2] = "Turn Right";
                                    path[i+3] = "Go Straight";
                                    path[i+4] = "Go Upstairs";
                                    path[i+5] = "Go Upstairs";
                                    path[i+6] = "Turn Right";
                                }
                                if (destination == "323" || destination == "325"){
                                    path[i] = "Turn Left";
                                    path[i+1] = "Go Straight";
                                    path[i+2] = "Turn Right";
                                    path[i+3] = "Go Straight";
                                    path[i+4] = "Go Upstairs";
                                    path[i+5] = "Go Upstairs";
                                    path[i+6] = "Turn Right";
                                }
                                
                                else{
                                    path.length+=1;
                                    path[i+4] = "Turn Left";
                                }
                            }
                            if(path[i+2] != null && path[i+2].includes("e", 4)){
                                path[i+2] = "Go Straight";
                                if (destination == "002"){
                                    path[i+3] = "Turn Right";
                                }
                                if (destination == "104" || destination == "106"){
                                    path[i+3] = "Turn Right";
                                }    
                                   
                            }
                        }
                    }
                }  
                //NW corner
                if (path[i].includes("nw")){
                    if (path[i+1].includes("ne")){
                        path[i] = "Go Straight";
                        if (destination == "107" || destination == "109" || destination == "111" || destination == "132" || destination == "134" || destination == "136" ||
                        destination == "138" || destination == "144" || destination == "148" || destination == "150"){
                            path[i+1] = "Turn Right";
                        }
                        if(path[i+2] != null && path[i+2].includes("e", 4) && path[i+2].charAt(1) == path[i+1].charAt(1)){
                            path[i+1] = "Turn Right";
                            path[i+2] = "Go Straight";
                        }  
                        if (destination == "307" || destination == "328" || destination == "326" || destination == "324" || destination == "322" || destination == "318" ||
                        destination == "316" || destination == "312" || destination == "310" || destination == "308"){
                            path[i+1] = "Go Upstairs";
                            path[i+2] = "Go Upstairs";
                            path[i+3] = "Turn Left";
                            path[i+4] = "Go Straight";
                        }
                        if (destination == "217" || destination == "219"){
                            path[i+1] = "Go Upstairs";
                            path[i+2] = "Go Straight";
                            path[i+3] = "Turn Left";

                        }   
                    }
                    //w
                    if (path[i+1].includes("w",4)){
                        path[i] = "Turn Right";
                        path[i+1] = "Go Straight";
                        if (path[i+2] != null && path[i+2].includes("sw")){
                            path[i+2] = "Go Straight";
                            if (destination == "104" || destination == "106"  ){
                                path.length+=1;
                                path[i+4] = "Turn Left";
                            }
                        }   
                        if (destination == "319" || destination == "321"){
                            path[i+2] = "Go Upstairs";
                            path[i+3] = "Go Upstairs";
                            path[i+4] = "Turn Left";  
                            path[i+5] = "Arrived!"; 
                        }
                        if (destination == "221" || destination == "223"){
                            path[i+2] = "Go Upstairs";
                            path[i+3] = "Turn Right";
                        }
                    }
                }
                //SE corner
                if (path[i].includes("se")){
                    if (path[i+1].includes("sw")){
                        if (destination == "002"){
                            path[i] = "Turn Right";//vending machine
                            path[i+3] = "Go Straight";   
                        }
                        else{
                            path[i] = "Go Straight";
                        } 
                    }
                    if (destination == "205" || destination == "216" || destination == "218" || destination == "222" || destination == "224" || destination == "226" ||destination == "228"){
                        path[i] = "Go Upstairs";
                        path[i+1] = "Turn Right";
                    }
                    if (destination == "217" || destination == "219"){
                        path[i] = "Turn Right";
                        path[i+1] = "Go Straight";
                        path[i+2] = "Turn Left";
                        path[i+3] = "Go Straight";
                        path[i+4] = "Go Upstairs";
                        path[i+5] = "Turn Left";
                    }
                    if (destination == "221" || destination == "223"){
                        path[i] = "Turn Right";
                        path[i+1] = "Go Straight";
                        path[i+2] = "Turn Left";
                        path[i+3] = "Go Straight";
                        path[i+4] = "Go Upstairs";
                        path[i+5] = "Turn Right";
                    }
                    //vending machine
                    if(path[i+1].includes("v",4)){
                        path[i] = "Go Downstairs";
                        path[i+1] = "Turn Right";
                        path[i+2] = "Go Straight";

                    if (destination == "002"){
                        path[i+3] = "Go Straight";   
                    }
                    if (destination == "010" || destination == "005" ){
                        path[i+3] = "Turn Right";
                    }
                    if (destination == "028" || destination == "026" || destination == "024" || destination == "022" || 
                        destination == "020"){
                        path[i+3] = "Turn Right";
                        path[i+4] = "Go Straight";
                    }
                    if (destination == "013" || destination == "015" || destination == "038" || destination == "040" || destination == "042"){
                        path[i+3] = "Turn Right";
                        path[i+4] = "Go Straight";
                        path[i+5] = "Turn Left";
                        path[i+6] = "Go Straight";
                        path[i+7] = "Turn Right";
                        }
                    }
                    //e
                    if (path[i+1].includes("e",4)){
                        if(path[i].charAt(1) === path[i+1].charAt(1)){//if on the same floor                           
                                path[i] = "Turn Right";
                                path[i+1] = "Go Straight";

                        if (destination == "254" || destination == "256"){
                            path[i+2] = "Go Straight";
                            path[i+3] = "Go Upstairs";
                        }
                        if(path[i+2] != null && path[i+2].includes("ne")){
                            
                            if(destination == "034" || destination == "036"){
                                path[i+2] = "Go Straight";
                                path[i+3] = "Go Downstairs"    
                            }
                            if(destination == "354" || destination == "356"){
                                path[i+2] = "Go Straight"
                            }
                            if (destination == "154" || destination == "156"){
                                path[i+2] = "Go Straight";
                                path[i+3] = "Turn Left";
                            }
                            if(destination == "034" || destination == "036"){
                                path[i+2] = "Go Straight";
                                path[i+3] = "Go Downstairs";  
                            }
                            if (destination == "354" || destination == "356"){
                                path[i+2] = "Go Straight";
                            }
                            else{
                                path[i+2] = "Turn Left";
                            }
                        }   
                        if(path[i+2] != null && path[i+2].includes("w",4)){
                            path[i+2] = "Turn Left";
                            path[i+3] = "Go Straight";
                        
                            if (destination == "217" || destination == "219"){
                                path[i+4] = "Go Upstairs";
                                path[i+5] = "Turn Right";
                            }
                            if (destination == "221" || destination == "223"){
                                path.length+=1;
                                path[i+4] = "Go Upstairs";
                                path.length+=1;
                                path[i+5] = "Turn Left";
                            }
                            if (destination == "013" || destination == "015" || destination == "038" || destination == "040" || destination == "042"){
                                path[i+4] = "Turn Right";
                            }
                            if (destination == "115" || destination == "113"){
                                path.length+=1;
                                path[i+4] = "Turn Right";
                            }
                            if (destination == "217" || destination == "219" || destination == "221" || destination == "223"){
                                path[i+4] = "Go Upstairs";
                                path[i+5] = "Turn Left";
                            }
                            if (destination == "317" || destination == "315" || destination == "313" || destination == "332" || destination == "334" || destination == "336" ||
                            destination == "338" || destination == "342" || destination == "344" || destination == "348" || destination == "350" || destination == "352"){
                                path[i+4] = "Go Upstairs";
                            }
                            if (destination == "113" || destination == "115"){
                                path[i+4] = "Turn Right";
                            }
                            if (destination == "319" || destination == "321"){
                                path[i+4] = "Go Upstairs";
                                path[i+5] = "Go Upstairs";
                                path[i+6] = "Turn Left";
                                path[i+7] = "Arrived!";
                            }
                            else{
                                if (destination == "323" || destination == "325"){
                            
                                    path[i+4] = "Go Upstairs";
                                    path[i+5] = "Go Upstairs";
                                    path[i+6] = "Turn Right";
                                    path[i+7] = "Arrived!";
                                }
                                else{
                                    path[i+4] = "Turn Left";
                                }
                            }
                        }
                    }
                    if(path[i+2] != null && parseInt(path[i].charAt(1)) < parseInt(path[i+1].charAt(1)) && parseInt(path[i+1].charAt(1)) < parseInt(path[i+2].charAt(1))){
                        path[i] = "Go Upstairs";
                        path[i+1] = "Go Upstairs";
                        if (destination == "301"){
                            path[i+2] = "Go Straight";
                            path[i+3] = "Arrived!";
                        }
                        if (destination == "307" || destination == "328" || destination == "326" || destination == "324" || destination == "322" || destination == "318" ||
                        destination == "316"){
                            path[i+2] = "Turn Right";
                        }
                        if (destination == "312" || destination == "310" || destination == "308"){
                            path[i+2] = "Turn Left";
                        }
                    }
                    if(path[i-1] != null && parseInt(path[i-1].charAt(1)) < parseInt(path[i].charAt(1))){
                        path[i] = "Go Upstairs";
                        
                    }
                    if (path[i+2] != null && path[i+2].includes("ne") && path[i].charAt(1) === path[i+1].charAt(1)){//if "e" is not the destination
                        path[i+2] = "Turn Left";
                    }
                }
            }
               //SW corner
               if (path[i] != null && path[i].includes("sw")){
                if (path[i+1] != null && path[i+1].includes("se")){
                    path[i] = "Go Straight";
                    
                    console.log(destination);
                    //002 NOT WORKING
                    if(destination == "002"){
                        path[i+2] = "Go Downstairs"; 
                        path[i+3] = "Turn Right";
                        path[i+4] = "Go Straight";//v
                        path[i+5] = "Go Straight";
                    }
                    if (destination == "028" || destination == "026" || destination == "024" || destination == "022" || destination == "020"){
                        path[i+2] = "Go Downstairs";
                        path[i+3] = "Turn Right";
                        path[i+4] = "Go Straight";
                        path[i+5] = "Turn Right";
                        path[i+6] = "Go Straight";
                    }
                    if (destination == "205" || destination == "216" || destination == "218" || destination == "222" || destination == "224" || destination == "226" || 
                        destination == "228"){
                        path[i+2] = "Go Upstairs"; 
                        path[i+3] = "Turn Right";
                    }
                    if (destination == "301"){
                        path[i+2] = "Go Upstairs";
                        path[i+3] = "Go Upstairs";
                        path[i+4] = "Go Straight";
                        path[i+5] = "Arrived!";
                    }
                    if (destination == "307" || destination == "328" || destination == "326" || destination == "324" || destination == "322" || destination == "318" ||
                    destination == "316" || destination == "312" || destination == "310" || destination == "308"){
                        path[i+2] = "Go Upstairs";
                        path[i+3] = "Go Upstairs";
                        path[i+4] = "Turn Right";
                    }
                    if (destination == "317" || destination == "315" || destination == "313" || destination == "332" || destination == "334" || destination == "336" ||
                    destination == "338" || destination == "342" || destination == "344" || destination == "348" || destination == "350" || destination == "352"){
                        path[i+2] = "Go Upstairs";
                        path[i+3] = "Go Upstairs";
                        path[i+4] = "Turn Right";
                        path[i+5] = "Go Straight";
                    }
                    if(destination=="005" || destination=="010"){
                        path[i+1] = "Go Downstairs"; 
                        path[i+2] = "Turn Right";
                        path[i+3] = "Turn Right";
                    }
                    
                    else{
                        path[i+1] = "Turn Left";
                    }
                    if(path[i+2] != null && path[i+2].includes("e", 4)){
                        if (destination == "205" || destination == "216" || destination == "218" || destination == "222" || destination == "224" || destination == "226" ||
                        destination == "228"){
                            path[i+2] = "Turn Left";
                        }
                       else{
                            path[i+2] = "Go Straight";
                        }
                        if (destination == "232" || destination == "234" || destination == "236" || destination == "238" || 
                        destination == "213" || destination == "215" || destination == "242" || destination == "244"){
                            path[i+3] = "Go Straight";
                            path[i+4] = "Go Upstairs";
                            path[i+5] = "Turn Left";
                        }
                        if(path[i+3] != null && path[i+3].includes("ne")){
                            path[i+3] = "Go Straight";
                            if (destination == "254" || destination == "256"){
                                path[i+4] = "Go Upstairs";
                            }
                            if(destination == "034" || destination == "036"){
                                path[i+4] = "Go Downstairs";
                            }
                            if(destination == "013" || destination == "015" ||
                            destination == "038" || destination == "040" || destination == "042"){
                                path[i+4] = "Go Downstairs";
                                path[i+5] = "Go Straight";
                                path[i+6] = "Turn Left";
                            }
                        }
                    }
                }
                //w
                if (path[i+1] != null && path[i+1].includes("w",4)){
                    if(destination=="005" || destination=="010"){
                        path[i+1] = "Go Downstairs"; 
                        path[i+2] = "Turn Right";
                        path[i+3] = "Go Straight";
                        path[i+4] = "Turn Right";
                    }
                    else{
                        path[i] = "Turn Left";
                        path[i+1] = "Go Straight";
                    }
                    if (destination == "217" || destination == "219"){
                        path[i+2] = "Go Upstairs";
                        path.length+=1;
                        path[i+3] = "Turn Left";
                    }
                    if(destination == "221" || destination == "223"){
                        path[i+2] = "Go Upstairs";
                        path.length+=1;
                        path[i+3] = "Turn Right";
                    }
                    if(path[i+2] != null && path[i+2].includes("nw")){
                        path[i+2] = "Go Straight";
                        path.length+=1;
                        path[i+3] = "Turn Right";
                    }
                }
            }
        }
        //STAIRS
        if (path[i] != null && path[i+1] != null && path[i].charAt(3) === path[i+1].charAt(3) && path[i].charAt(4) === (path[i+1].charAt(4))){
            if(parseInt(path[i].charAt(1)) < parseInt(path[i+1].charAt(1))) {
                path[i] = "Go Upstairs";

                if (destination == "301"){
                    path[i+1] = "Go Upstairs";
                    path[i+2] = "Turn Right";
                    path[i+3] = "Go Straight";
                    path[i+4] = "Turn Left";
                }
                
                if (destination == "205" || destination == "216" || destination == "218" || destination == "222" || destination == "224" || destination == "226" ||destination == "228"){
                    if(path[i+1].includes("e")){
                        path[i+1] = "Turn Left";
                        path[i+2] = "Go Straight";
                    }else{
                        path[i+1] = "Turn Right";
                        path[i+2] = "Go Straight";
                    }                   
                }
             
                if (destination == "254" || destination == "256"){
                    path[i+1] = "Arrived!";
                    if (path[i+2] != null){
                        path.length = path.length - 1;
                    }
                }
                if (destination == "354" || destination == "356"){
                    path[i+1] = "Go Upstairs"
                    path[i+2] = "Arrived!";
                }
                
                if (destination == "317" || destination == "315" || destination == "313" || destination == "332" || destination == "334" || destination == "336" ||
                destination == "338" || destination == "342" || destination == "344" || destination == "348" || destination == "350" || destination == "352"){
                        path[i+1] = "Go Upstairs";
                        path[i+2] = "Go Straight";
                        path[i+3] = "Turn Left";  
                        path[i+4] = "Arrived!";   
                }
                if(destination == "321" || destination == "319"){
                    path[i+1] = "Go Upstairs";
                    path[i+2] = "Turn Left";  
                    path[i+3] = "Arrived!";  
                }
                if (destination == "232" || destination == "234" || destination == "236" || destination == "238" || 
                destination == "213" || destination == "215" || destination == "242" || destination == "244"){
                    if(path[i+1].includes("se")){
                        path[i+1] = "Turn Right"
                        if(path[i+2] != null && path[i+2].includes(" e")){
                            path[i+2] = "Go Straight";
                        }
                    }
                    else{
                        path[i+1] = "Turn Left";
                    }
                }
                if (destination == "323" || destination == "325" ){
                    path[i+1] = "Go Upstairs"; 
                    path[i+2] = "Turn Right"; 
                }
            }
            if(parseInt(path[i].charAt(1)) > parseInt(path[i+1].charAt(1))) {
                path[i] = "Go Downstairs";
                if (destination == "034" || destination == "036"){
                    path[i+1] = "Arrived!";
                }
                if (destination == "028" || destination == "026" || destination == "024" || destination == "022" || destination == "020"){
                    path[i+1] = "Turn Left"; 
                }
                if (destination == "013" || destination == "015" || destination == "038" || destination == "040" || destination == "042"){
                    path[i+1] = "Go Straight";
                    path[i+2] = "Turn Left";
                    if (path[i+3] != null && path[i+3].includes("w")){
                        console.log("hello");
                        path[i+3] = "Arrived!";  
                    }
                }
            } 
        }
    }
}
    //user only needs to turn left/right to arrive at destination
    if (path[0].includes("ne") && path.length == 1){
        path[0] = "Turn Left";  
    }
    if (path[0].includes("sw") && path.length == 1){
        path[0] = "Turn Left";  
    }
    if (path[0].includes("nw") && path.length == 1){
        path[0] = "Turn Right";  
    }
    if (path[0].includes("se") && path.length == 1){
        path[0] = "Turn Right";  
    }

    //initial route buttons UI update, from clicking create route
    const pathSize = path.length;
    routeButtonsUI();
    document.getElementById("createRoute").disabled = true;
    document.getElementById("createRoute").style.cssText += "opacity: .1";

    //Click through directions-->
    directions = document.getElementById("currentInstruction");
    btn = document.getElementById("next");

    btn.addEventListener("onmousedown", stopEvent, false);
    btn.addEventListener("click", nextDirection);

    directions.innerHTML = path[0];
    index = 0;
    function stopEvent(ev) {
        ev.stopPropagation();
    }
    
    function nextDirection() {
        if (index < path.length - 1){
            index++;
        }
        index %= path.length;
        directions.innerHTML = path[index]; 
     
        if(path[i-1] != "Arrived!"){
            path.length +=1 ;
            path[path.length-1] = "Arrived!";
        }
    }

    //image cohesion - next btn
    //gets initial instruction when create route is clicked, hides explore buttons
   let instruc = document.getElementById("currentInstruction").innerHTML;

    //use stacks to store routing direction moves, prev button will pop the stacks to get info
    var prevpicStack = [];
    var prevsrcStack = [];
    var boolArrived = false;
    //next btn listener
    document.getElementById("next").onclick = function() {
        if(count<pathSize){ //count keeps track of current path index, but uses const so it doesnt mess with your algorithm
            count++;
        }
        routeButtonsUI();
        if(instruc == "Arrived!"){
            boolArrived = true;
        }
        if(boolArrived == false){
            prevpicStack.push(curr);
            prevsrcStack.push(pic.src);
            
            switch (instruc){
                case "Go Straight":
                    pic.src = curr.attributes.forwardImg.value;
                    curr = window[curr.attributes.forwardVar.value]; //sets curr to pic it changes to
                    break;
                case "Turn Right":
                    pic.src = curr.attributes.rightImg.value;
                    curr = window[curr.attributes.rightVar.value];
                    break;
                case "Turn Left":
                    pic.src = curr.attributes.leftImg.value;
                    curr = window[curr.attributes.leftVar.value];
                    break;
                case "Go Upstairs":
                    pic.src = curr.attributes.upImg.value;
                    curr = window[curr.attributes.upVar.value];
                    break;
                case "Go Downstairs":
                    pic.src = curr.attributes.downImg.value;
                    curr = window[curr.attributes.downVar.value];
                    break;
                default:
                    console.log("invalid instruction / done");
                    break;
                }
                //grab next instruc for next time is clicked
                instruc = document.getElementById("currentInstruction").innerHTML;
                UIupdate();
            }
        }

    //end of next btn image cohesion



    //prev
    btn = document.getElementById("prev");
    btn.addEventListener("onmousedown", stopEvent, false);
    btn.addEventListener("click", prevDirection);

    //prev button image cohesion - uses stack variables declared above
    document.getElementById("prev").onclick = function(){
        count--;
        routeButtonsUI();
        boolArrived = false;
        if(prevpicStack === undefined || prevpicStack.length == 0){
            instruc = document.getElementById("currentInstruction").innerHTML;
        }
        else{
            curr = prevpicStack.pop();
            pic.src = prevsrcStack.pop();
            instruc = document.getElementById("currentInstruction").innerHTML;
        }
        UIupdate();
    }
    
    function stopEvent(ev) {
        ev.stopPropagation();
    }

    function prevDirection() {
        if (index > 0){
            index--;
        }
    
        index %= path.length;
        directions.innerHTML = path[index]; 
    }    
     
    //updates explore button UI, and current room #'s
    function UIupdate(){
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
    }
  
    //function to add responsiveness to route buttons
    function routeButtonsUI(){
        if(count==0){
            //disable prev
            document.getElementById("prev").disabled = true;
            document.getElementById("prev").style.cssText += "opacity: .1";
            //enable next
            document.getElementById("next").disabled = false;
            document.getElementById("next").style.cssText += "opacity: 1";
            }
        if(count>0 && count != pathSize){
            //enable both
            document.getElementById("prev").disabled = false;
            document.getElementById("prev").style.cssText += "opacity: 1";
            document.getElementById("next").disabled = false;
            document.getElementById("next").style.cssText += "opacity: 1";
        }
        if(count == pathSize){
            //disable next
            document.getElementById("next").disabled = true;
            document.getElementById("next").style.cssText += "opacity: .1";
            //enable prev
            document.getElementById("prev").disabled = false;
            document.getElementById("prev").style.cssText += "opacity: 1";
        }
        //workaround for routes with only 2 instructions
        if(pathSize == 1 && count ==1){
            document.getElementById("currentInstruction").innerHTML = "Arrived!";
        }
        //another workaround for some routes
        if(document.getElementById("currentInstruction").innerHTML=="Arrived!"){
            //disable next
            document.getElementById("next").disabled = true;
            document.getElementById("next").style.cssText += "opacity: .1";
            //enable prev
            document.getElementById("prev").disabled = false;
            document.getElementById("prev").style.cssText += "opacity: 1";
        }
    }
});












       
       
