//js file to set flags of all images
//attributes will be in attribute.value (upStairs.value)
//console.log(E_east.attributes.forward.value); //this is how to grab specific value
//var naming convention - floor_intersection_direction

//********************************************************************************************************************
//--------------------------------------------------------------------------------------------------------------------
//FLOOR 0  *********************************************************************************************************** 
//--------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************
//NE intersection
var F0_NE_west = document.createElement('img'); //*******************************
F0_NE_west.src='assets/images/building interiors/floor0/ne_intersection/west.jpg';
//left
F0_NE_west.setAttribute("leftImg", "assets/images/building interiors/floor0/ne_intersection/south.jpg");
F0_NE_west.setAttribute("leftVar", "F0_NE_south");
//forward
F0_NE_west.setAttribute("forwardImg", "assets/images/building interiors/floor0/nw_intersection/west.jpg");
F0_NE_west.setAttribute("forwardVar", "F0_NW_west");
//upstairs
F0_NE_west.setAttribute("upImg", "assets/images/building interiors/floor1/ne_intersection/west.jpg");
F0_NE_west.setAttribute("upVar", "F1_NE_west");
//rooms
F0_NE_west.setAttribute("leftRooms", "stairs, 28");
F0_NE_west.setAttribute("rightRooms", "34, 36");

var F0_NE_south = document.createElement('img'); //*******************************
F0_NE_south.src='assets/images/building interiors/floor0/ne_intersection/south.jpg';
//right
F0_NE_south.setAttribute("rightImg", "assets/images/building interiors/floor0/ne_intersection/west.jpg");
F0_NE_south.setAttribute("rightVar", "F0_NE_west");
//forward
F0_NE_south.setAttribute("forwardImg", "assets/images/building interiors/floor0/e_intersection/south.jpg");
F0_NE_south.setAttribute("forwardVar", "F0_E_south");
//upstairs
F0_NE_south.setAttribute("upImg", "assets/images/building interiors/floor1/ne_intersection/west.jpg");
F0_NE_south.setAttribute("upVar", "F1_NE_west");
//rooms
F0_NE_south.setAttribute("leftRooms", "stairs, 28, 26 24, 22, 20");
F0_NE_south.setAttribute("rightRooms", "34");

var F0_NE_north = document.createElement('img'); //*******************************
F0_NE_north.src='assets/images/building interiors/floor0/ne_intersection/south.jpg';
//backward
F0_NE_north.setAttribute("backwardImg", "assets/images/building interiors/floor0/e_intersection/north.jpg");
F0_NE_north.setAttribute("backwardVar", "F0_E_north");
//left
F0_NE_north.setAttribute("leftImg", "assets/images/building interiors/floor0/ne_intersection/west.jpg");
F0_NE_north.setAttribute("leftVar", "F0_NE_west");
//right
F0_NE_north.setAttribute("rightImg", "assets/images/building interiors/floor0/ne_intersection/east.jpg");
F0_NE_north.setAttribute("rightVar", "F0_NE_east");
//upstairs
F0_NE_north.setAttribute("upImg", "assets/images/building interiors/floor1/ne_intersection/west.jpg");
F0_NE_north.setAttribute("upVar", "F1_NE_west");
//rooms
F0_NE_north.setAttribute("leftRooms", "34");
F0_NE_north.setAttribute("rightRooms", "stairs");

var F0_NE_east = document.createElement('img'); //*******************************
F0_NE_east.src='assets/images/building interiors/floor0/ne_intersection/east.jpg';
//right
F0_NE_east.setAttribute("rightImg", "assets/images/building interiors/floor0/ne_intersection/south.jpg");
F0_NE_east.setAttribute("rightVar", "F0_NE_south");
//backward
F0_NE_east.setAttribute("backwardImg", "assets/images/building interiors/floor0/nw_intersection/east.jpg");
F0_NE_east.setAttribute("backwardVar", "F0_NW_east");
//upstairs
F0_NE_east.setAttribute("upImg", "assets/images/building interiors/floor1/ne_intersection/west.jpg");
F0_NE_east.setAttribute("upVar", "F1_NE_west");
//rooms
F0_NE_east.setAttribute("leftRooms", "34");
F0_NE_east.setAttribute("rightRooms", "stairs, 28");


//---------------------------------------------------
//NW intersection
//---------------------------------------------------
var F0_NW_east = document.createElement('img');  //*******************************
F0_NW_east.src='assets/images/building interiors/floor0/nw_intersection/east.jpg';
//forward
F0_NW_east.setAttribute("forwardImg", "assets/images/building interiors/floor0/ne_intersection/east.jpg");
F0_NW_east.setAttribute("forwardVar", "F0_NE_east");
//right
F0_NW_east.setAttribute("rightImg", "assets/images/building interiors/floor0/nw_intersection/south.jpg");
F0_NW_east.setAttribute("rightVar", "F0_NW_south");
//rooms
F0_NW_east.setAttribute("leftRooms", "36, 34");
F0_NW_east.setAttribute("rightRooms", "38, 13");

var F0_NW_south = document.createElement('img');  //*******************************
F0_NW_south.src='assets/images/building interiors/floor0/nw_intersection/south.jpg';
//left
F0_NW_south.setAttribute("leftImg", "assets/images/building interiors/floor0/nw_intersection/east.jpg");
F0_NW_south.setAttribute("leftVar", "F0_NW_east");
//forward
F0_NW_south.setAttribute("forwardImg", "assets/images/building interiors/floor0/w_intersection/south.jpg");
F0_NW_south.setAttribute("forwardVar", "F0_W_south");
//rooms
F0_NW_south.setAttribute("leftRooms", "13, 15");
F0_NW_south.setAttribute("rightRooms", "38, 40, 42C");

var F0_NW_north = document.createElement('img');  //*******************************
F0_NW_north.src='assets/images/building interiors/floor0/nw_intersection/north.jpg';
//backward
F0_NW_north.setAttribute("backwardImg", "assets/images/building interiors/floor0/w_intersection/north.jpg");
F0_NW_north.setAttribute("backwardVar", "F0_W_north");
//right
F0_NW_north.setAttribute("rightImg", "assets/images/building interiors/floor0/nw_intersection/east.jpg");
F0_NW_north.setAttribute("rightVar", "F0_NW_east");
//rooms
F0_NW_north.setAttribute("leftRooms", "38");
F0_NW_north.setAttribute("rightRooms", "13");

var F0_NW_west = document.createElement('img');  //*******************************
F0_NW_west.src='assets/images/building interiors/floor0/nw_intersection/west.jpg';
//backward
F0_NW_west.setAttribute("backwardImg", "assets/images/building interiors/floor0/ne_intersection/west.jpg");
F0_NW_west.setAttribute("backwardVar", "F0_NE_west");
//left
F0_NW_west.setAttribute("leftImg", "assets/images/building interiors/floor0/nw_intersection/south.jpg");
F0_NW_west.setAttribute("leftVar", "F0_NW_south");
//rooms
F0_NW_west.setAttribute("leftRooms", "13, 38");
F0_NW_west.setAttribute("rightRooms", "36");

//---------------------------------------------------
//vending-stairs intersection (SE+)
//---------------------------------------------------
var F0_VEN_west = document.createElement('img');  //*******************************
F0_VEN_west.src='assets/images/building interiors/floor0/vending-stairs_se/west.jpg';
//forward
F0_VEN_west.setAttribute("forwardImg", "assets/images/building interiors/floor0/se_intersection/west.jpg");
F0_VEN_west.setAttribute("forwardVar", "F0_SE_west");
//right
F0_VEN_west.setAttribute("rightImg", "assets/images/building interiors/floor0/vending-stairs_se/north.jpg");
F0_VEN_west.setAttribute("rightVar", "F0_VEN_north");
//upstairs
F0_VEN_west.setAttribute("upImg", "assets/images/building interiors/floor1/se_intersection/west.jpg");
F0_VEN_west.setAttribute("upVar", "F1_SE_west");
//rooms
F0_VEN_west.setAttribute("leftRooms", " ");
F0_VEN_west.setAttribute("rightRooms", "stairs");

var F0_VEN_east = document.createElement('img');  //*******************************
F0_VEN_east.src='assets/images/building interiors/floor0/vending-stairs_se/east.jpg';
//left
F0_VEN_east.setAttribute("leftImg", "assets/images/building interiors/floor0/vending-stairs_se/north.jpg");
F0_VEN_east.setAttribute("leftVar", "F0_VEN_north");
//backward
F0_VEN_east.setAttribute("backwardImg", "assets/images/building interiors/floor0/se_intersection/east.jpg");
F0_VEN_east.setAttribute("backwardVar", "F0_SE_east");
//upstairs
F0_VEN_east.setAttribute("upImg", "assets/images/building interiors/floor1/se_intersection/west.jpg");
F0_VEN_east.setAttribute("upVar", "F1_SE_west");
//rooms
F0_VEN_east.setAttribute("leftRooms", "stairs");
F0_VEN_east.setAttribute("rightRooms", " ");

var F0_VEN_south = document.createElement('img');  //*******************************
F0_VEN_south.src='assets/images/building interiors/floor0/vending-stairs_se/south.jpg';
//right
F0_VEN_south.setAttribute("rightImg", "assets/images/building interiors/floor0/vending-stairs_se/west.jpg");
F0_VEN_south.setAttribute("rightVar", "F0_VEN_west");
//upstairs
F0_VEN_south.setAttribute("upImg", "assets/images/building interiors/floor1/se_intersection/west.jpg");
F0_VEN_south.setAttribute("upVar", "F1_SE_west");
//rooms
F0_VEN_south.setAttribute("leftRooms", "stairs");
F0_VEN_south.setAttribute("rightRooms", " ");

var F0_VEN_north = document.createElement('img');  //*******************************
F0_VEN_north.src='assets/images/building interiors/floor0/vending-stairs_se/north.jpg';
//upstairs
F0_VEN_north.setAttribute("upImg", "assets/images/building interiors/floor1/se_intersection/west.jpg");
F0_VEN_north.setAttribute("upVar", "F1_SE_west");
//left
F0_VEN_north.setAttribute("leftImg", "assets/images/building interiors/floor0/vending-stairs_se/west.jpg");
F0_VEN_north.setAttribute("leftVar", "F0_VEN_west");
//rooms
F0_VEN_north.setAttribute("leftRooms", " ");
F0_VEN_north.setAttribute("rightRooms", "stairs");

//---------------------------------------------------
//SE intersection
//---------------------------------------------------
var F0_SE_west = document.createElement('img');  //*******************************
F0_SE_west.src='assets/images/building interiors/floor0/se_intersection/west.jpg';
//forward
F0_SE_west.setAttribute("forwardImg", "assets/images/building interiors/floor0/sw_intersection/west.jpg");
F0_SE_west.setAttribute("forwardVar", "F0_SW_west");
//backward
F0_SE_west.setAttribute("backwardImg", "assets/images/building interiors/floor0/vending-stairs_se/west.jpg");
F0_SE_west.setAttribute("backwardVar", "F0_VEN_west");
//right
F0_SE_west.setAttribute("rightImg", "assets/images/building interiors/floor0/se_intersection/north.jpg");
F0_SE_west.setAttribute("rightVar", "F0_SE_north");
//rooms
F0_SE_west.setAttribute("leftRooms", "2");
F0_SE_west.setAttribute("rightRooms", "5");

var F0_SE_east = document.createElement('img');  //*******************************
F0_SE_east.src='assets/images/building interiors/floor0/se_intersection/east.jpg';
//forward
F0_SE_east.setAttribute("forwardImg", "assets/images/building interiors/floor0/vending-stairs_se/east.jpg");
F0_SE_east.setAttribute("forwardVar", "F0_VEN_east");
//backward
F0_SE_east.setAttribute("backwardImg", "assets/images/building interiors/floor0/sw_intersection/east.jpg");
F0_SE_east.setAttribute("backwardVar", "F0_SW_east");
//left
F0_SE_east.setAttribute("leftImg", "assets/images/building interiors/floor0/se_intersection/north.jpg");
F0_SE_east.setAttribute("leftVar", "F0_SE_north");
//rooms
F0_SE_east.setAttribute("leftRooms", "5");
F0_SE_east.setAttribute("rightRooms", " ");

var F0_SE_south = document.createElement('img');  //*******************************
F0_SE_south.src='assets/images/building interiors/floor0/se_intersection/south.jpg';
//backward
F0_SE_south.setAttribute("backwardImg", "assets/images/building interiors/floor0/e_intersection/south.jpg");
F0_SE_south.setAttribute("backwardVar", "F0_E_south");
//right
F0_SE_south.setAttribute("rightImg", "assets/images/building interiors/floor0/se_intersection/west.jpg");
F0_SE_south.setAttribute("rightVar", "F0_SE_west");
//left
F0_SE_south.setAttribute("leftImg", "assets/images/building interiors/floor0/vending-stairs_se/east.jpg");
F0_SE_south.setAttribute("leftVar", "F0_VEN_east");
//rooms
F0_SE_south.setAttribute("leftRooms", "10");
F0_SE_south.setAttribute("rightRooms", "5");

var F0_SE_north = document.createElement('img');  //*******************************
F0_SE_north.src='assets/images/building interiors/floor0/se_intersection/north.jpg';
//forward
F0_SE_north.setAttribute("forwardImg", "assets/images/building interiors/floor0/e_intersection/north.jpg");
F0_SE_north.setAttribute("forwardVar", "F0_E_north");
//right
F0_SE_north.setAttribute("rightImg", "assets/images/building interiors/floor0/se_intersection/east.jpg");
F0_SE_north.setAttribute("rightVar", "F0_SE_east");
//left
F0_SE_north.setAttribute("leftImg", "assets/images/building interiors/floor0/se_intersection/west.jpg");
F0_SE_north.setAttribute("leftVar", "F0_SE_west");
//rooms
F0_SE_north.setAttribute("leftRooms", "5");
F0_SE_north.setAttribute("rightRooms", "10");


//---------------------------------------------------
//SW intersection
//---------------------------------------------------
var F0_SW_east = document.createElement('img'); //*******************************
F0_SW_east.src='assets/images/building interiors/floor0/sw_intersection/east.jpg';
//forward
F0_SW_east.setAttribute("forwardImg", "assets/images/building interiors/floor0/se_intersection/east.jpg");
F0_SW_east.setAttribute("forwardVar", "F0_SE_east");
//left
F0_SW_east.setAttribute("leftImg", "assets/images/building interiors/floor0/sw_intersection/north.jpg");
F0_SW_east.setAttribute("leftVar", "F0_SW_north");
//rooms
F0_SW_east.setAttribute("leftRooms", " ");
F0_SW_east.setAttribute("rightRooms", "2");

var F0_SW_north = document.createElement('img'); //*******************************
F0_SW_north.src='assets/images/building interiors/floor0/sw_intersection/north.jpg';
//forward
F0_SW_north.setAttribute("forwardImg", "assets/images/building interiors/floor0/w_intersection/north.jpg");
F0_SW_north.setAttribute("forwardVar", "F0_W_north");
//right
F0_SW_north.setAttribute("rightImg", "assets/images/building interiors/floor0/sw_intersection/east.jpg");
F0_SW_north.setAttribute("rightVar", "F0_SW_east");
//rooms
F0_SW_north.setAttribute("leftRooms", "2");
F0_SW_north.setAttribute("rightRooms", " ");

var F0_SW_west = document.createElement('img'); //*******************************
F0_SW_north.src='assets/images/building interiors/floor0/sw_intersection/west.jpg';
//backward
F0_SW_west.setAttribute("backwardImg", "assets/images/building interiors/floor0/se_intersection/west.jpg");
F0_SW_west.setAttribute("backwardVar", "F0_SE_west");
//right
F0_SW_west.setAttribute("rightImg", "assets/images/building interiors/floor0/sw_intersection/north.jpg");
F0_SW_west.setAttribute("rightVar", "F0_SW_north");
//rooms
F0_SW_west.setAttribute("leftRooms", "2");
F0_SW_west.setAttribute("rightRooms", " ");

var F0_SW_south = document.createElement('img'); //*******************************
F0_SW_north.src='assets/images/building interiors/floor0/sw_intersection/south.jpg';
//backward
F0_SW_south.setAttribute("backwardImg", "assets/images/building interiors/floor0/w_intersection/south.jpg");
F0_SW_south.setAttribute("backwardVar", "F0_W_south");
//left
F0_SW_south.setAttribute("leftImg", "assets/images/building interiors/floor0/sw_intersection/east.jpg");
F0_SW_south.setAttribute("leftVar", "F0_SW_east");
//rooms
F0_SW_south.setAttribute("leftRooms", " ");
F0_SW_south.setAttribute("rightRooms", "2");



//---------------------------------------------------
//E intersection
//---------------------------------------------------
var F0_E_east = document.createElement('img'); //*******************************
F0_E_east.src='assets/images/building interiors/floor0/e_intersection/east.jpg';
//backward
F0_E_east.setAttribute("backwardImg", "assets/images/building interiors/floor0/w_intersection/east.jpg");
F0_E_east.setAttribute("backwardVar", "F0_W_east");
//right
F0_E_east.setAttribute("rightImg", "assets/images/building interiors/floor0/e_intersection/south.jpg");
F0_E_east.setAttribute("rightVar", "F0_E_south");
//left
F0_E_east.setAttribute("leftImg", "assets/images/building interiors/floor0/e_intersection/north.jpg");
F0_E_east.setAttribute("leftVar", "F0_E_north");
//rooms
F0_E_east.setAttribute("leftRooms", "20");
F0_E_east.setAttribute("rightRooms", "10");

var F0_E_south = document.createElement('img'); //*******************************
F0_E_south.src='assets/images/building interiors/floor0/e_intersection/south.jpg';
//forward
F0_E_south.setAttribute("forwardImg", "assets/images/building interiors/floor0/se_intersection/south.jpg");
F0_E_south.setAttribute("forwardVar", "F0_SE_south");
//backward
F0_E_south.setAttribute("backwardImg", "assets/images/building interiors/floor0/ne_intersection/south.jpg");
F0_E_south.setAttribute("backwardVar", "F0_NE_south");
//right
F0_E_south.setAttribute("rightImg", "assets/images/building interiors/floor0/e_intersection/west.jpg");
F0_E_south.setAttribute("rightVar", "F0_E_west");
//rooms
F0_E_south.setAttribute("leftRooms", "10");
F0_E_south.setAttribute("rightRooms", "5");

var F0_E_north = document.createElement('img'); //*******************************
F0_E_north.src='assets/images/building interiors/floor0/e_intersection/north.jpg';
//backward
F0_E_north.setAttribute("backwardImg", "assets/images/building interiors/floor0/se_intersection/north.jpg");
F0_E_north.setAttribute("backwardVar", "F0_SE_north");
//forward
F0_E_north.setAttribute("forwardImg", "assets/images/building interiors/floor0/ne_intersection/north.jpg");
F0_E_north.setAttribute("forwardVar", "F0_NE_north");
//left
F0_E_north.setAttribute("leftImg", "assets/images/building interiors/floor0/e_intersection/west.jpg");
F0_E_north.setAttribute("leftVar", "F0_E_west");
//rooms
F0_E_north.setAttribute("leftRooms", " ");
F0_E_north.setAttribute("rightRooms", "20, 22, 24, 26, 28");

var F0_E_west = document.createElement('img'); //*******************************
F0_E_west.src='assets/images/building interiors/floor0/e_intersection/west.jpg';
//forward
F0_E_west.setAttribute("forwardImg", "assets/images/building interiors/floor0/w_intersection/west.jpg");
F0_E_west.setAttribute("forwardVar", "F0_W_west");
//left
F0_E_west.setAttribute("leftImg", "assets/images/building interiors/floor0/e_intersection/south.jpg");
F0_E_west.setAttribute("leftVar", "F0_E_south");
//right
F0_E_west.setAttribute("rightImg", "assets/images/building interiors/floor0/e_intersection/north.jpg");
F0_E_west.setAttribute("rightVar", "F0_E_north");
//rooms
F0_E_west.setAttribute("leftRooms", " ");
F0_E_west.setAttribute("rightRooms", " ");


//---------------------------------------------------
//W intersection
//---------------------------------------------------
var F0_W_east = document.createElement('img'); //*******************************
F0_W_east.src='assets/images/building interiors/floor0/w_intersection/east.jpg';
//forward
F0_W_east.setAttribute("forwardImg", "assets/images/building interiors/floor0/e_intersection/east.jpg");
F0_W_east.setAttribute("forwardVar", "F0_E_east");
//left
F0_W_east.setAttribute("leftImg", "assets/images/building interiors/floor0/w_intersection/north.jpg");
F0_W_east.setAttribute("leftVar", "F0_W_north");
//right
F0_W_east.setAttribute("rightImg", "assets/images/building interiors/floor0/w_intersection/south.jpg");
F0_W_east.setAttribute("rightVar", "F0_W_south");
//rooms
F0_W_east.setAttribute("leftRooms", " ");
F0_W_east.setAttribute("rightRooms", " ");

var F0_W_west = document.createElement('img'); //*******************************
F0_W_west.src='assets/images/building interiors/floor0/w_intersection/west.jpg';
//backward
F0_W_west.setAttribute("backwardImg", "assets/images/building interiors/floor0/e_intersection/west.jpg");
F0_W_west.setAttribute("backwardVar", "F0_E_west");
//right
F0_W_west.setAttribute("rightImg", "assets/images/building interiors/floor0/W_intersection/north.jpg");
F0_W_west.setAttribute("rightVar", "F0_W_north");
//left
F0_W_west.setAttribute("leftImg", "assets/images/building interiors/floor0/W_intersection/south.jpg");
F0_W_west.setAttribute("leftVar", "F0_W_south");
//rooms
F0_W_west.setAttribute("leftRooms", " ");
F0_W_west.setAttribute("rightRooms", "42C, 15");

var F0_W_south = document.createElement('img'); //*******************************
F0_W_south.src='assets/images/building interiors/floor0/w_intersection/south.jpg';
//forward
F0_W_south.setAttribute("forwardImg", "assets/images/building interiors/floor0/sw_intersection/south.jpg");
F0_W_south.setAttribute("forwardVar", "F0_SW_south");
//backward
F0_W_south.setAttribute("backwardImg", "assets/images/building interiors/floor0/nw_intersection/south.jpg");
F0_W_south.setAttribute("backwardVar", "F0_NW_south");
//left
F0_W_south.setAttribute("leftImg", "assets/images/building interiors/floor0/w_intersection/east.jpg");
F0_W_south.setAttribute("leftVar", "F0_W_east");
//rooms
F0_W_south.setAttribute("leftRooms", " ");
F0_W_south.setAttribute("rightRooms", " ");

var F0_W_north = document.createElement('img'); //*******************************
F0_W_north.src='assets/images/building interiors/floor0/w_intersection/north.jpg';
//forward
F0_W_north.setAttribute("forwardImg", "assets/images/building interiors/floor0/nw_intersection/north.jpg");
F0_W_north.setAttribute("forwardVar", "F0_NW_north");
//backward
F0_W_north.setAttribute("backwardImg", "assets/images/building interiors/floor0/sw_intersection/north.jpg");
F0_W_north.setAttribute("backwardVar", "F0_SW_north");
//right
F0_W_north.setAttribute("rightImg", "assets/images/building interiors/floor0/w_intersection/east.jpg");
F0_W_north.setAttribute("rightVar", "F0_W_east");
//rooms
F0_W_north.setAttribute("leftRooms", "42C, 40, 38");
F0_W_north.setAttribute("rightRooms", "15, 13");





//********************************************************************************************************************
//--------------------------------------------------------------------------------------------------------------------
//FLOOR 1  ***********************************************************************************************************  
//--------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************
//NE intersection
var F1_NE_west = document.createElement('img'); //*******************************
F1_NE_west.src='assets/images/building interiors/floor1/ne_intersection/west.jpg';
//left
F1_NE_west.setAttribute("leftImg", "assets/images/building interiors/floor1/ne_intersection/south.jpg");
F1_NE_west.setAttribute("leftVar", "F1_NE_south");
//forward
F1_NE_west.setAttribute("forwardImg", "assets/images/building interiors/floor1/nw_intersection/west.jpg");
F1_NE_west.setAttribute("forwardVar", "F1_NW_west");
//right
F1_NE_west.setAttribute("rightImg", "assets/images/building interiors/floor1/ne_intersection/offices.jpg");
F1_NE_west.setAttribute("rightVar", "F1_NE_offices");
//upstairs
F1_NE_west.setAttribute("upImg", "assets/images/building interiors/floor2/ne_intersection/west.jpg");
F1_NE_west.setAttribute("upVar", "F2_NE_west");
//downstairs
F1_NE_west.setAttribute("downImg", "assets/images/building interiors/floor0/ne_intersection/west.jpg");
F1_NE_west.setAttribute("downVar", "F0_NE_west");
//rooms
F1_NE_west.setAttribute("leftRooms", "stairs");
F1_NE_west.setAttribute("rightRooms", "154, 156");

var F1_NE_offices = document.createElement('img'); //*******************************
F1_NE_offices.src='assets/images/building interiors/floor1/ne_intersection/offices.jpg';
//backward
F1_NE_offices.setAttribute("backwardImg", "assets/images/building interiors/floor1/ne_intersection/north.jpg")
F1_NE_offices.setAttribute("backwardVar", "F1_NE_north");
//left
F1_NE_offices.setAttribute("leftImg", "assets/images/building interiors/floor1/ne_intersection/west.jpg")
F1_NE_offices.setAttribute("leftVar", "F1_NE_west");
//upstairs
F1_NE_offices.setAttribute("upImg", "assets/images/building interiors/floor2/ne_intersection/west.jpg");
F1_NE_offices.setAttribute("upVar", "F2_NE_west");
//downstairs
F1_NE_offices.setAttribute("downImg", "assets/images/building interiors/floor0/ne_intersection/west.jpg");
F1_NE_offices.setAttribute("downVar", "F0_NE_west");
//rooms
F1_NE_offices.setAttribute("leftRooms", " ");
F1_NE_offices.setAttribute("rightRooms", "stairs, 154, 156");

var F1_NE_south = document.createElement('img'); //*******************************
F1_NE_south.src='assets/images/building interiors/floor1/ne_intersection/south.jpg';
//right
F1_NE_south.setAttribute("rightImg", "assets/images/building interiors/floor1/ne_intersection/west.jpg");
F1_NE_south.setAttribute("rightVar", "F1_NE_west");
//forward
F1_NE_south.setAttribute("forwardImg", "assets/images/building interiors/floor1/e_intersection/south.jpg");
F1_NE_south.setAttribute("forwardVar", "F1_E_south");
//upstairs
F1_NE_south.setAttribute("upImg", "assets/images/building interiors/floor2/ne_intersection/west.jpg");
F1_NE_south.setAttribute("upVar", "F2_NE_west");
//downstairs
F1_NE_south.setAttribute("downImg", "assets/images/building interiors/floor0/ne_intersection/west.jpg");
F1_NE_south.setAttribute("downVar", "F0_NE_west");
//rooms
F1_NE_south.setAttribute("leftRooms", "stairs, 150, 148, 144, 142, 138, 136, 134, 132");
F1_NE_south.setAttribute("rightRooms", "111, 109, 107");

var F1_NE_north = document.createElement('img'); //*******************************
F1_NE_north.src='assets/images/building interiors/floor1/ne_intersection/south.jpg';
//backward
F1_NE_north.setAttribute("backwardImg", "assets/images/building interiors/floor1/e_intersection/north.jpg");
F1_NE_north.setAttribute("backwardVar", "F1_E_north");
//forward
F1_NE_north.setAttribute("forwardImg", "assets/images/building interiors/floor1/ne_intersection/offices.jpg");
F1_NE_north.setAttribute("forwardVar", "F1_NE_offices");
//left
F1_NE_north.setAttribute("leftImg", "assets/images/building interiors/floor1/ne_intersection/west.jpg");
F1_NE_north.setAttribute("leftVar", "F1_NE_west");
//upstairs
F1_NE_north.setAttribute("upImg", "assets/images/building interiors/floor2/ne_intersection/west.jpg");
F1_NE_north.setAttribute("upVar", "F2_NE_west");
//downstairs
F1_NE_north.setAttribute("downImg", "assets/images/building interiors/floor0/ne_intersection/west.jpg");
F1_NE_north.setAttribute("downVar", "F0_NE_west");
//rooms
F1_NE_north.setAttribute("leftRooms", "111");
F1_NE_north.setAttribute("rightRooms", "stairs, 144, 148, 150");

var F1_NE_east = document.createElement('img'); //*******************************
F1_NE_east.src='assets/images/building interiors/floor1/ne_intersection/east.jpg';
//right
F1_NE_east.setAttribute("rightImg", "assets/images/building interiors/floor1/ne_intersection/south.jpg");
F1_NE_east.setAttribute("rightVar", "F1_NE_south");
//left
F1_NE_east.setAttribute("leftImg", "assets/images/building interiors/floor1/ne_intersection/offices.jpg");
F1_NE_east.setAttribute("leftVar", "F1_NE_offices");
//backward
F1_NE_east.setAttribute("backwardImg", "assets/images/building interiors/floor1/nw_intersection/east.jpg");
F1_NE_east.setAttribute("backwardVar", "F1_NW_east");
//upstairs
F1_NE_east.setAttribute("upImg", "assets/images/building interiors/floor2/ne_intersection/west.jpg");
F1_NE_east.setAttribute("upVar", "F2_NE_west");
//downstairs
F1_NE_east.setAttribute("downImg", "assets/images/building interiors/floor0/ne_intersection/west.jpg");
F1_NE_east.setAttribute("downVar", "F0_NE_west");
//rooms
F1_NE_east.setAttribute("leftRooms", "154, 148, 150");
F1_NE_east.setAttribute("rightRooms", "stairs");


//---------------------------------------------------
//NW intersection
//---------------------------------------------------
var F1_NW_east = document.createElement('img');  //*******************************
F1_NW_east.src='assets/images/building interiors/floor1/nw_intersection/east.jpg';
//forward
F1_NW_east.setAttribute("forwardImg", "assets/images/building interiors/floor1/ne_intersection/east.jpg");
F1_NW_east.setAttribute("forwardVar", "F1_NE_east");
//right
F1_NW_east.setAttribute("rightImg", "assets/images/building interiors/floor1/nw_intersection/south.jpg");
F1_NW_east.setAttribute("rightVar", "F1_NW_south");
//rooms
F1_NW_east.setAttribute("leftRooms", "156, 154");
F1_NW_east.setAttribute("rightRooms", " ");

var F1_NW_south = document.createElement('img');  //*******************************
F1_NW_south.src='assets/images/building interiors/floor1/nw_intersection/south.jpg';
//left
F1_NW_south.setAttribute("leftImg", "assets/images/building interiors/floor1/nw_intersection/east.jpg");
F1_NW_south.setAttribute("leftVar", "F1_NW_east");
//forward
F1_NW_south.setAttribute("forwardImg", "assets/images/building interiors/floor1/w_intersection/south.jpg");
F1_NW_south.setAttribute("forwardVar", "F1_W_south");
//rooms
F1_NW_south.setAttribute("leftRooms", "113, 115");
F1_NW_south.setAttribute("rightRooms", " ");

var F1_NW_north = document.createElement('img');  //*******************************
F1_NW_north.src='assets/images/building interiors/floor1/nw_intersection/north.jpg';
//backward
F1_NW_north.setAttribute("backwardImg", "assets/images/building interiors/floor1/w_intersection/north.jpg");
F1_NW_north.setAttribute("backwardVar", "F1_W_north");
//right
F1_NW_north.setAttribute("rightImg", "assets/images/building interiors/floor1/nw_intersection/east.jpg");
F1_NW_north.setAttribute("rightVar", "F1_NW_east");
//rooms
F1_NW_north.setAttribute("leftRooms", " ");
F1_NW_north.setAttribute("rightRooms", " ");

var F1_NW_west = document.createElement('img');  //*******************************
F1_NW_west.src='assets/images/building interiors/floor1/nw_intersection/west.jpg';
//backward
F1_NW_west.setAttribute("backwardImg", "assets/images/building interiors/floor1/ne_intersection/west.jpg");
F1_NW_west.setAttribute("backwardVar", "F1_NE_west");
//left
F1_NW_west.setAttribute("leftImg", "assets/images/building interiors/floor1/nw_intersection/south.jpg");
F1_NW_west.setAttribute("leftVar", "F1_NW_south");
//rooms
F1_NW_west.setAttribute("leftRooms", " ");
F1_NW_west.setAttribute("rightRooms", "156");

//---------------------------------------------------
//SE intersection
//---------------------------------------------------
var F1_SE_west = document.createElement('img');  //*******************************
F1_SE_west.src='assets/images/building interiors/floor1/se_intersection/west.jpg';
//forward
F1_SE_west.setAttribute("forwardImg", "assets/images/building interiors/floor1/sw_intersection/west.jpg");
F1_SE_west.setAttribute("forwardVar", "F1_SW_west");
//right
F1_SE_west.setAttribute("rightImg", "assets/images/building interiors/floor1/se_intersection/north.jpg");
F1_SE_west.setAttribute("rightVar", "F1_SE_north");
//upstairs
F1_SE_west.setAttribute("upImg", "assets/images/building interiors/floor2/se_intersection/west.jpg");
F1_SE_west.setAttribute("upVar", "F2_SE_west");
//downstairs 
F1_SE_west.setAttribute("downImg", "assets/images/building interiors/floor0/vending-stairs_se/south.jpg");
F1_SE_west.setAttribute("downVar", "F0_VEN_south");
//rooms
F1_SE_west.setAttribute("leftRooms", "106, 104");
F1_SE_west.setAttribute("rightRooms", "stairs");

var F1_SE_east = document.createElement('img');  //*******************************
F1_SE_east.src='assets/images/building interiors/floor1/se_intersection/east.jpg';
//backward
F1_SE_east.setAttribute("backwardImg", "assets/images/building interiors/floor1/sw_intersection/east.jpg");
F1_SE_east.setAttribute("backwardVar", "F1_SW_east");
//left
F1_SE_east.setAttribute("leftImg", "assets/images/building interiors/floor1/se_intersection/north.jpg");
F1_SE_east.setAttribute("leftVar", "F1_SE_north");
//upstairs
F1_SE_east.setAttribute("upImg", "assets/images/building interiors/floor2/se_intersection/west.jpg");
F1_SE_east.setAttribute("upVar", "F2_SE_west");
//downstairs
F1_SE_east.setAttribute("downImg", "assets/images/building interiors/floor0/vending-stairs_se/south.jpg");
F1_SE_east.setAttribute("downVar", "F0_VEN_south");
//rooms
F1_SE_east.setAttribute("leftRooms", "stairs");
F1_SE_east.setAttribute("rightRooms", "106, 112");

var F1_SE_south = document.createElement('img');  //*******************************
F1_SE_south.src='assets/images/building interiors/floor1/se_intersection/south.jpg';
//backward
F1_SE_south.setAttribute("backwardImg", "assets/images/building interiors/floor1/e_intersection/south.jpg");
F1_SE_south.setAttribute("backwardVar", "F1_E_south");
//upstairs
F1_SE_south.setAttribute("upImg", "assets/images/building interiors/floor2/se_intersection/west.jpg");
F1_SE_south.setAttribute("upVar", "F2_SE_west");
//downstairs 
F1_SE_south.setAttribute("downImg", "assets/images/building interiors/floor0/vending-stairs_se/south.jpg");
F1_SE_south.setAttribute("downVar", "F0_VEN_south");
//right
F1_SE_south.setAttribute("rightImg", "assets/images/building interiors/floor1/se_intersection/west.jpg");
F1_SE_south.setAttribute("rightVar", "F1_SE_west");
//rooms
F1_SE_south.setAttribute("leftRooms", "stairs, 112");
F1_SE_south.setAttribute("rightRooms", "101");

var F1_SE_north = document.createElement('img');  //*******************************
F1_SE_north.src='assets/images/building interiors/floor1/se_intersection/north.jpg';
//forward
F1_SE_north.setAttribute("forwardImg", "assets/images/building interiors/floor1/e_intersection/north.jpg");
F1_SE_north.setAttribute("forwardVar", "F1_E_north");
//left
F1_SE_north.setAttribute("leftImg", "assets/images/building interiors/floor1/se_intersection/west.jpg");
F1_SE_north.setAttribute("leftVar", "F1_SE_west");
//upstairs
F1_SE_north.setAttribute("upImg", "assets/images/building interiors/floor2/se_intersection/west.jpg");
F1_SE_north.setAttribute("upVar", "F2_SE_west");
//downstairs 
F1_SE_north.setAttribute("downImg", "assets/images/building interiors/floor0/vending-stairs_se/south.jpg");
F1_SE_north.setAttribute("downVar", "F0_VEN_south");
//rooms
F1_SE_north.setAttribute("leftRooms", "103, 101");
F1_SE_north.setAttribute("rightRooms", "stairs, 116, 118, 122, 124, 126, 128");


//---------------------------------------------------
//SW intersection
//---------------------------------------------------
var F1_SW_east = document.createElement('img'); //*******************************
F1_SW_east.src='assets/images/building interiors/floor1/sw_intersection/east.jpg';
//forward
F1_SW_east.setAttribute("forwardImg", "assets/images/building interiors/floor1/se_intersection/east.jpg");
F1_SW_east.setAttribute("forwardVar", "F1_SE_east");
//left
F1_SW_east.setAttribute("leftImg", "assets/images/building interiors/floor1/sw_intersection/north.jpg");
F1_SW_east.setAttribute("leftVar", "F1_SW_north");
//rooms
F1_SW_east.setAttribute("leftRooms", " ");
F1_SW_east.setAttribute("rightRooms", "104, 106");

var F1_SW_north = document.createElement('img'); //*******************************
F1_SW_north.src='assets/images/building interiors/floor1/sw_intersection/north.jpg';
//forward
F1_SW_north.setAttribute("forwardImg", "assets/images/building interiors/floor1/w_intersection/north.jpg");
F1_SW_north.setAttribute("forwardVar", "F1_W_north");
//right
F1_SW_north.setAttribute("rightImg", "assets/images/building interiors/floor1/sw_intersection/east.jpg");
F1_SW_north.setAttribute("rightVar", "F1_SW_east");
//rooms
F1_SW_north.setAttribute("leftRooms", " ");
F1_SW_north.setAttribute("rightRooms", "101, 121, 119");

var F1_SW_west = document.createElement('img'); //*******************************
F1_SW_north.src='assets/images/building interiors/floor1/sw_intersection/west.jpg';
//backward
F1_SW_west.setAttribute("backwardImg", "assets/images/building interiors/floor1/se_intersection/west.jpg");
F1_SW_west.setAttribute("backwardVar", "F1_SE_west");
//right
F1_SW_west.setAttribute("rightImg", "assets/images/building interiors/floor1/sw_intersection/north.jpg");
F1_SW_west.setAttribute("rightVar", "F1_SW_north");
//rooms
F1_SW_west.setAttribute("leftRooms", " ");
F1_SW_west.setAttribute("rightRooms", " ");

var F1_SW_south = document.createElement('img'); //*******************************
F1_SW_north.src='assets/images/building interiors/floor1/sw_intersection/south.jpg';
//backward
F1_SW_south.setAttribute("backwardImg", "assets/images/building interiors/floor1/w_intersection/south.jpg");
F1_SW_south.setAttribute("backwardVar", "F1_W_south");
//left
F1_SW_south.setAttribute("leftImg", "assets/images/building interiors/floor1/sw_intersection/east.jpg");
F1_SW_south.setAttribute("leftVar", "F1_SW_east");
//rooms
F1_SW_south.setAttribute("leftRooms", "101");
F1_SW_south.setAttribute("rightRooms", " ");



//---------------------------------------------------
//E intersection
//---------------------------------------------------
var F1_E_east = document.createElement('img'); //*******************************
F1_E_east.src='assets/images/building interiors/floor1/e_intersection/east.jpg';
//backward
F1_E_east.setAttribute("backwardImg", "assets/images/building interiors/floor1/w_intersection/east.jpg");
F1_E_east.setAttribute("backwardVar", "F1_W_east");
//right
F1_E_east.setAttribute("rightImg", "assets/images/building interiors/floor1/e_intersection/south.jpg");
F1_E_east.setAttribute("rightVar", "F1_E_south");
//left
F1_E_east.setAttribute("leftImg", "assets/images/building interiors/floor1/e_intersection/north.jpg");
F1_E_east.setAttribute("leftVar", "F1_E_north");
//rooms
F1_E_east.setAttribute("leftRooms", " ");
F1_E_east.setAttribute("rightRooms", " ");

var F1_E_south = document.createElement('img'); //*******************************
F1_E_south.src='assets/images/building interiors/floor1/e_intersection/south.jpg';
//forward
F1_E_south.setAttribute("forwardImg", "assets/images/building interiors/floor1/se_intersection/south.jpg");
F1_E_south.setAttribute("forwardVar", "F1_SE_south");
//backward
F1_E_south.setAttribute("backwardImg", "assets/images/building interiors/floor1/ne_intersection/south.jpg");
F1_E_south.setAttribute("backwardVar", "F1_NE_south");
//right
F1_E_south.setAttribute("rightImg", "assets/images/building interiors/floor1/e_intersection/west.jpg");
F1_E_south.setAttribute("rightVar", "F1_E_west");
//rooms
F1_E_south.setAttribute("leftRooms", "128, 126, 124, 122, 118, 116, 112");
F1_E_south.setAttribute("rightRooms", "103, 101");

var F1_E_north = document.createElement('img'); //*******************************
F1_E_north.src='assets/images/building interiors/floor1/e_intersection/north.jpg';
//backward
F1_E_north.setAttribute("backwardImg", "assets/images/building interiors/floor1/se_intersection/north.jpg");
F1_E_north.setAttribute("backwardVar", "F1_SE_north");
//forward
F1_E_north.setAttribute("forwardImg", "assets/images/building interiors/floor1/ne_intersection/north.jpg");
F1_E_north.setAttribute("forwardVar", "F1_NE_north");
//left
F1_E_north.setAttribute("leftImg", "assets/images/building interiors/floor1/e_intersection/west.jpg");
F1_E_north.setAttribute("leftVar", "F1_E_west");
//rooms
F1_E_north.setAttribute("leftRooms", "107, 109, 111");
F1_E_north.setAttribute("rightRooms", "132, 134, 136, 138, 142, 144, 148, 150");

var F1_E_west = document.createElement('img'); //*******************************
F1_E_west.src='assets/images/building interiors/floor1/e_intersection/west.jpg';
//forward
F1_E_west.setAttribute("forwardImg", "assets/images/building interiors/floor1/w_intersection/west.jpg");
F1_E_west.setAttribute("forwardVar", "F1_W_west");
//left
F1_E_west.setAttribute("leftImg", "assets/images/building interiors/floor1/e_intersection/south.jpg");
F1_E_west.setAttribute("leftVar", "F1_E_south");
//right
F1_E_west.setAttribute("rightImg", "assets/images/building interiors/floor1/e_intersection/north.jpg");
F1_E_west.setAttribute("rightVar", "F1_E_north");
//rooms
F1_E_west.setAttribute("leftRooms", " ");
F1_E_west.setAttribute("rightRooms", " ");


//---------------------------------------------------
//W intersection
//---------------------------------------------------
var F1_W_east = document.createElement('img'); //*******************************
F1_W_east.src='assets/images/building interiors/floor1/w_intersection/east.jpg';
//forward
F1_W_east.setAttribute("forwardImg", "assets/images/building interiors/floor1/e_intersection/east.jpg");
F1_W_east.setAttribute("forwardVar", "F1_E_east");
//left
F1_W_east.setAttribute("leftImg", "assets/images/building interiors/floor1/w_intersection/north.jpg");
F1_W_east.setAttribute("leftVar", "F1_W_north");
//right
F1_W_east.setAttribute("rightImg", "assets/images/building interiors/floor1/w_intersection/south.jpg");
F1_W_east.setAttribute("rightVar", "F1_W_south");
//upstairs
F1_W_east.setAttribute("upImg", "assets/images/building interiors/floor2/w_intersection/east.jpg");
F1_W_east.setAttribute("upVar", "F2_W_east");
//rooms
F1_W_east.setAttribute("leftRooms", " ");
F1_W_east.setAttribute("rightRooms", "stairs");

var F1_W_west = document.createElement('img'); //*******************************
F1_W_west.src='assets/images/building interiors/floor1/w_intersection/west.jpg';
//backward
F1_W_west.setAttribute("backwardImg", "assets/images/building interiors/floor1/e_intersection/west.jpg");
F1_W_west.setAttribute("backwardVar", "F1_E_west");
//right
F1_W_west.setAttribute("rightImg", "assets/images/building interiors/floor1/W_intersection/north.jpg");
F1_W_west.setAttribute("rightVar", "F1_W_north");
//left
F1_W_west.setAttribute("leftImg", "assets/images/building interiors/floor1/W_intersection/south.jpg");
F1_W_west.setAttribute("leftVar", "F1_W_south");
//upstairs
F1_W_west.setAttribute("upImg", "assets/images/building interiors/floor2/w_intersection/east.jpg");
F1_W_west.setAttribute("upVar", "F2_W_east");
//rooms
F1_W_west.setAttribute("leftRooms", "stairs");
F1_W_west.setAttribute("rightRooms", " ");

var F1_W_south = document.createElement('img'); //*******************************
F1_W_south.src='assets/images/building interiors/floor1/w_intersection/south.jpg';
//forward
F1_W_south.setAttribute("forwardImg", "assets/images/building interiors/floor1/sw_intersection/south.jpg");
F1_W_south.setAttribute("forwardVar", "F1_SW_south");
//backward
F1_W_south.setAttribute("backwardImg", "assets/images/building interiors/floor1/nw_intersection/south.jpg");
F1_W_south.setAttribute("backwardVar", "F1_NW_south");
//left
F1_W_south.setAttribute("leftImg", "assets/images/building interiors/floor1/w_intersection/east.jpg");
F1_W_south.setAttribute("leftVar", "F1_W_east");
//upstairs
F1_W_south.setAttribute("upImg", "assets/images/building interiors/floor2/w_intersection/east.jpg");
F1_W_south.setAttribute("upVar", "F2_W_east");
//rooms
F1_W_south.setAttribute("leftRooms", "119, 121, 101");
F1_W_south.setAttribute("rightRooms", "stairs");

var F1_W_north = document.createElement('img'); //*******************************
F1_W_north.src='assets/images/building interiors/floor1/w_intersection/north.jpg';
//forward
F1_W_north.setAttribute("forwardImg", "assets/images/building interiors/floor1/nw_intersection/north.jpg");
F1_W_north.setAttribute("forwardVar", "F1_NW_north");
//backward
F1_W_north.setAttribute("backwardImg", "assets/images/building interiors/floor1/sw_intersection/north.jpg");
F1_W_north.setAttribute("backwardVar", "F1_SW_north");
//right
F1_W_north.setAttribute("rightImg", "assets/images/building interiors/floor1/w_intersection/east.jpg");
F1_W_north.setAttribute("rightVar", "F1_W_east");
//upstairs
F1_W_north.setAttribute("upImg", "assets/images/building interiors/floor2/w_intersection/east.jpg");
F1_W_north.setAttribute("upVar", "F2_W_east");
//rooms
F1_W_north.setAttribute("leftRooms", "stairs");
F1_W_north.setAttribute("rightRooms", "115, 113");



//********************************************************************************************************************
//--------------------------------------------------------------------------------------------------------------------
//FLOOR 2  *********************************************************************************************************** 
//--------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************
//NE intersection
var F2_NE_west = document.createElement('img'); //*******************************
F2_NE_west.src='assets/images/building interiors/floor2/ne_intersection/west.jpg';
//left
F2_NE_west.setAttribute("leftImg", "assets/images/building interiors/floor2/ne_intersection/south.jpg");
F2_NE_west.setAttribute("leftVar", "F2_NE_south");
//forward
F2_NE_west.setAttribute("forwardImg", "assets/images/building interiors/floor2/nw_intersection/west.jpg");
F2_NE_west.setAttribute("forwardVar", "F2_NW_west");
//right
F2_NE_west.setAttribute("rightImg", "assets/images/building interiors/floor2/ne_intersection/offices.jpg");
F2_NE_west.setAttribute("rightVar", "F2_NE_offices");
//upstairs
F2_NE_west.setAttribute("upImg", "assets/images/building interiors/floor3/ne_intersection/west.jpg");
F2_NE_west.setAttribute("upVar", "F3_NE_west");
//downstairs
F2_NE_west.setAttribute("downImg", "assets/images/building interiors/floor1/ne_intersection/west.jpg");
F2_NE_west.setAttribute("downVar", "F1_NE_west");
//rooms
F2_NE_west.setAttribute("leftRooms", "stairs, 244");
F2_NE_west.setAttribute("rightRooms", "242, 254, 256");

var F2_NE_offices = document.createElement('img'); //*******************************
F2_NE_offices.src='assets/images/building interiors/floor2/ne_intersection/offices.jpg';
//backward
F2_NE_offices.setAttribute("backwardImg", "assets/images/building interiors/floor2/ne_intersection/north.jpg");
F2_NE_offices.setAttribute("backwardVar", "F2_NE_north");
//left
F2_NE_offices.setAttribute("leftImg", "assets/images/building interiors/floor2/ne_intersection/west.jpg");
F2_NE_offices.setAttribute("leftVar", "F2_NE_west");
//upstairs
F2_NE_offices.setAttribute("upImg", "assets/images/building interiors/floor3/ne_intersection/west.jpg");
F2_NE_offices.setAttribute("upVar", "F3_NE_west");
//downstairs
F2_NE_offices.setAttribute("downImg", "assets/images/building interiors/floor1/ne_intersection/west.jpg");
F2_NE_offices.setAttribute("downVar", "F1_NE_west");
//rooms
F2_NE_offices.setAttribute("leftRooms", " ");
F2_NE_offices.setAttribute("rightRooms", "stairs, 242, 250, 252");

var F2_NE_south = document.createElement('img'); //*******************************
F2_NE_south.src='assets/images/building interiors/floor2/ne_intersection/south.jpg';
//right
F2_NE_south.setAttribute("rightImg", "assets/images/building interiors/floor2/ne_intersection/west.jpg");
F2_NE_south.setAttribute("rightVar", "F2_NE_west");
//forward
F2_NE_south.setAttribute("forwardImg", "assets/images/building interiors/floor2/e_intersection/south.jpg");
F2_NE_south.setAttribute("forwardVar", "F2_E_south");
//upstairs
F2_NE_south.setAttribute("upImg", "assets/images/building interiors/floor3/ne_intersection/west.jpg");
F2_NE_south.setAttribute("upVar", "F3_NE_west");
//downstairs
F2_NE_south.setAttribute("downImg", "assets/images/building interiors/floor1/ne_intersection/west.jpg");
F2_NE_south.setAttribute("downVar", "F1_NE_west");
//rooms
F2_NE_south.setAttribute("leftRooms", "stairs, 244, 242, 238, 236, 234, 232");
F2_NE_south.setAttribute("rightRooms", "215, 213");

var F2_NE_north = document.createElement('img'); //*******************************
F2_NE_north.src='assets/images/building interiors/floor2/ne_intersection/south.jpg';
//backward
F2_NE_north.setAttribute("backwardImg", "assets/images/building interiors/floor2/e_intersection/north.jpg");
F2_NE_north.setAttribute("backwardVar", "F2_E_north");
//left
F2_NE_north.setAttribute("leftImg", "assets/images/building interiors/floor2/ne_intersection/west.jpg");
F2_NE_north.setAttribute("leftVar", "F2_NE_west");
//forward
F2_NE_north.setAttribute("forwardImg", "assets/images/building interiors/floor2/ne_intersection/offices.jpg");
F2_NE_north.setAttribute("forwardVar", "F2_NE_offices");
//upstairs
F2_NE_north.setAttribute("upImg", "assets/images/building interiors/floor3/ne_intersection/west.jpg");
F2_NE_north.setAttribute("upVar", "F3_NE_west");
//downstairs
F2_NE_north.setAttribute("downImg", "assets/images/building interiors/floor1/ne_intersection/west.jpg");
F2_NE_north.setAttribute("downVar", "F1_NE_west");
//rooms
F2_NE_north.setAttribute("leftRooms", "215");
F2_NE_north.setAttribute("rightRooms", "244, stairs, 242");

var F2_NE_east = document.createElement('img'); //*******************************
F2_NE_east.src='assets/images/building interiors/floor1/ne_intersection/east.jpg';
//right
F2_NE_east.setAttribute("rightImg", "assets/images/building interiors/floor2/ne_intersection/south.jpg");
F2_NE_east.setAttribute("rightVar", "F2_NE_south");
//backward
F2_NE_east.setAttribute("backwardImg", "assets/images/building interiors/floor2/nw_intersection/east.jpg");
F2_NE_east.setAttribute("backwardVar", "F2_NW_east");
//left
F2_NE_east.setAttribute("leftImg", "assets/images/building interiors/floor2/ne_intersection/offices.jpg");
F2_NE_east.setAttribute("leftVar", "F2_NE_offices");
//upstairs
F2_NE_east.setAttribute("upImg", "assets/images/building interiors/floor3/ne_intersection/west.jpg");
F2_NE_east.setAttribute("upVar", "F3_NE_west");
//downstairs
F2_NE_east.setAttribute("downImg", "assets/images/building interiors/floor1/ne_intersection/west.jpg");
F2_NE_east.setAttribute("downVar", "F1_NE_west");
//rooms
F2_NE_east.setAttribute("leftRooms", "254");
F2_NE_east.setAttribute("rightRooms", "stairs");


//---------------------------------------------------
//NW intersection
//---------------------------------------------------
var F2_NW_east = document.createElement('img');  //*******************************
F2_NW_east.src='assets/images/building interiors/floor2/nw_intersection/east.jpg';
//forward
F2_NW_east.setAttribute("forwardImg", "assets/images/building interiors/floor2/ne_intersection/east.jpg");
F2_NW_east.setAttribute("forwardVar", "F2_NE_east");
//right
F2_NW_east.setAttribute("rightImg", "assets/images/building interiors/floor2/nw_intersection/south.jpg");
F2_NW_east.setAttribute("rightVar", "F2_NW_south");
//rooms
F2_NW_east.setAttribute("leftRooms", "256, 254");
F2_NW_east.setAttribute("rightRooms", "217");

var F2_NW_south = document.createElement('img');  //*******************************
F2_NW_south.src='assets/images/building interiors/floor2/nw_intersection/south.jpg';
//left
F2_NW_south.setAttribute("leftImg", "assets/images/building interiors/floor2/nw_intersection/east.jpg");
F2_NW_south.setAttribute("leftVar", "F2_NW_east");
//forward
F2_NW_south.setAttribute("forwardImg", "assets/images/building interiors/floor2/w_intersection/south.jpg");
F2_NW_south.setAttribute("forwardVar", "F2_W_south");
//rooms
F2_NW_south.setAttribute("leftRooms", "217, 219");
F2_NW_south.setAttribute("rightRooms", " ");

var F2_NW_north = document.createElement('img');  //*******************************
F2_NW_north.src='assets/images/building interiors/floor2/nw_intersection/north.jpg';
//backward
F2_NW_north.setAttribute("backwardImg", "assets/images/building interiors/floor2/w_intersection/north.jpg");
F2_NW_north.setAttribute("backwardVar", "F2_W_north");
//right
F2_NW_north.setAttribute("rightImg", "assets/images/building interiors/floor2/nw_intersection/east.jpg");
F2_NW_north.setAttribute("rightVar", "F2_NW_east");
//rooms
F2_NW_north.setAttribute("leftRooms", " ");
F2_NW_north.setAttribute("rightRooms", "217");

var F2_NW_west = document.createElement('img');  //*******************************
F2_NW_west.src='assets/images/building interiors/floor2/nw_intersection/west.jpg';
//backward
F2_NW_west.setAttribute("backwardImg", "assets/images/building interiors/floor2/ne_intersection/west.jpg");
F2_NW_west.setAttribute("backwardVar", "F2_NE_west");
//left
F2_NW_west.setAttribute("leftImg", "assets/images/building interiors/floor2/nw_intersection/south.jpg");
F2_NW_west.setAttribute("leftVar", "F2_NW_south");
//rooms
F2_NW_west.setAttribute("leftRooms", "217");
F2_NW_west.setAttribute("rightRooms", "256");

//---------------------------------------------------
//SE intersection
//---------------------------------------------------
var F2_SE_west = document.createElement('img');  //*******************************
F2_SE_west.src='assets/images/building interiors/floor2/se_intersection/west.jpg';
//forward
F2_SE_west.setAttribute("forwardImg", "assets/images/building interiors/floor2/sw_intersection/west.jpg");
F2_SE_west.setAttribute("forwardVar", "F2_SW_west");
//right
F2_SE_west.setAttribute("rightImg", "assets/images/building interiors/floor2/se_intersection/north.jpg");
F2_SE_west.setAttribute("rightVar", "F2_SE_north");
//upstairs
F2_SE_west.setAttribute("upImg", "assets/images/building interiors/floor3/se_intersection/west.jpg");
F2_SE_west.setAttribute("upVar", "F3_SE_west");
//downstairs
F2_SE_west.setAttribute("downImg", "assets/images/building interiors/floor1/se_intersection/west.jpg");
F2_SE_west.setAttribute("downVar", "F1_SE_west");
//rooms
F2_SE_west.setAttribute("leftRooms", " ");
F2_SE_west.setAttribute("rightRooms", "stairs, 216");

var F2_SE_east = document.createElement('img');  //*******************************
F2_SE_east.src='assets/images/building interiors/floor2/se_intersection/east.jpg';
//backward
F2_SE_east.setAttribute("backwardImg", "assets/images/building interiors/floor2/sw_intersection/east.jpg");
F2_SE_east.setAttribute("backwardVar", "F2_SW_east");
//left
F2_SE_east.setAttribute("leftImg", "assets/images/building interiors/floor2/se_intersection/north.jpg");
F2_SE_east.setAttribute("leftVar", "F2_SE_north");
//upstairs
F2_SE_east.setAttribute("upImg", "assets/images/building interiors/floor3/se_intersection/west.jpg");
F2_SE_east.setAttribute("upVar", "F3_SE_west");
//downstairs
F2_SE_east.setAttribute("downImg", "assets/images/building interiors/floor1/se_intersection/west.jpg");
F2_SE_east.setAttribute("downVar", "F1_SE_west");
//rooms
F2_SE_east.setAttribute("leftRooms", "stairs");
F2_SE_east.setAttribute("rightRooms", " ");

var F2_SE_south = document.createElement('img');  //*******************************
F2_SE_south.src='assets/images/building interiors/floor2/se_intersection/south.jpg';
//backward
F2_SE_south.setAttribute("backwardImg", "assets/images/building interiors/floor2/e_intersection/south.jpg");
F2_SE_south.setAttribute("backwardVar", "F2_E_south");
//right
F2_SE_south.setAttribute("rightImg", "assets/images/building interiors/floor2/se_intersection/west.jpg");
F2_SE_south.setAttribute("rightVar", "F2_SE_west");
//upstairs
F2_SE_south.setAttribute("upImg", "assets/images/building interiors/floor3/se_intersection/west.jpg");
F2_SE_south.setAttribute("upVar", "F3_SE_west");
//downstairs
F2_SE_south.setAttribute("downImg", "assets/images/building interiors/floor1/se_intersection/west.jpg");
F2_SE_south.setAttribute("downVar", "F1_SE_west");
//rooms
F2_SE_south.setAttribute("leftRooms", "216, stairs");
F2_SE_south.setAttribute("rightRooms", "205");

var F2_SE_north = document.createElement('img');  //*******************************
F2_SE_north.src='assets/images/building interiors/floor2/se_intersection/north.jpg';
//forward
F2_SE_north.setAttribute("forwardImg", "assets/images/building interiors/floor2/e_intersection/north.jpg");
F2_SE_north.setAttribute("forwardVar", "F2_E_north");
//left
F2_SE_north.setAttribute("leftImg", "assets/images/building interiors/floor2/se_intersection/west.jpg");
F2_SE_north.setAttribute("leftVar", "F2_SE_west");
//upstairs
F2_SE_north.setAttribute("upImg", "assets/images/building interiors/floor3/se_intersection/west.jpg");
F2_SE_north.setAttribute("upVar", "F3_SE_west");
//downstairs 
F2_SE_north.setAttribute("downImg", "assets/images/building interiors/floor1/se_intersection/west.jpg");
F2_SE_north.setAttribute("downVar", "F1_SE_west");
//rooms
F2_SE_north.setAttribute("leftRooms", "205");
F2_SE_north.setAttribute("rightRooms", "216, 218, 222, 224, 226, 228");


//---------------------------------------------------
//SW intersection
//---------------------------------------------------
var F2_SW_east = document.createElement('img'); //*******************************
F2_SW_east.src='assets/images/building interiors/floor2/sw_intersection/east.jpg';
//forward
F2_SW_east.setAttribute("forwardImg", "assets/images/building interiors/floor2/se_intersection/east.jpg");
F2_SW_east.setAttribute("forwardVar", "F2_SE_east");
//left
F2_SW_east.setAttribute("leftImg", "assets/images/building interiors/floor2/sw_intersection/north.jpg");
F2_SW_east.setAttribute("leftVar", "F2_SW_north");
//rooms
F2_SW_east.setAttribute("leftRooms", "223");
F2_SW_east.setAttribute("rightRooms", " ");

var F2_SW_north = document.createElement('img'); //*******************************
F2_SW_north.src='assets/images/building interiors/floor2/sw_intersection/north.jpg';
//forward
F2_SW_north.setAttribute("forwardImg", "assets/images/building interiors/floor2/w_intersection/north.jpg");
F2_SW_north.setAttribute("forwardVar", "F2_W_north");
//right
F2_SW_north.setAttribute("rightImg", "assets/images/building interiors/floor2/sw_intersection/east.jpg");
F2_SW_north.setAttribute("rightVar", "F2_SW_east");
//rooms
F2_SW_north.setAttribute("leftRooms", " ");
F2_SW_north.setAttribute("rightRooms", "223, 221");

var F2_SW_west = document.createElement('img'); //*******************************
F2_SW_north.src='assets/images/building interiors/floor2/sw_intersection/west.jpg';
//backward
F2_SW_west.setAttribute("backwardImg", "assets/images/building interiors/floor2/se_intersection/west.jpg");
F2_SW_west.setAttribute("backwardVar", "F2_SE_west");
//right
F2_SW_west.setAttribute("rightImg", "assets/images/building interiors/floor2/sw_intersection/north.jpg");
F2_SW_west.setAttribute("rightVar", "F2_SW_north");
//rooms
F2_SW_west.setAttribute("leftRooms", " ");
F2_SW_west.setAttribute("rightRooms", "223");

var F2_SW_south = document.createElement('img'); //*******************************
F2_SW_north.src='assets/images/building interiors/floor2/sw_intersection/south.jpg';
//backward
F2_SW_south.setAttribute("backwardImg", "assets/images/building interiors/floor2/w_intersection/south.jpg");
F2_SW_south.setAttribute("backwardVar", "F2_W_south");
//left
F2_SW_south.setAttribute("leftImg", "assets/images/building interiors/floor2/sw_intersection/east.jpg");
F2_SW_south.setAttribute("leftVar", "F2_SW_east");
//rooms
F2_SW_south.setAttribute("leftRooms", "223");
F2_SW_south.setAttribute("rightRooms", " ");



//---------------------------------------------------
//E intersection
//---------------------------------------------------
var F2_E_east = document.createElement('img'); //*******************************
F2_E_east.src='assets/images/building interiors/floor2/e_intersection/east.jpg';
//backward
F2_E_east.setAttribute("backwardImg", "assets/images/building interiors/floor2/w_intersection/east.jpg");
F2_E_east.setAttribute("backwardVar", "F2_W_east");
//right
F2_E_east.setAttribute("rightImg", "assets/images/building interiors/floor2/e_intersection/south.jpg");
F2_E_east.setAttribute("rightVar", "F2_E_south");
//left
F2_E_east.setAttribute("leftImg", "assets/images/building interiors/floor2/e_intersection/north.jpg");
F2_E_east.setAttribute("leftVar", "F2_E_north");
//rooms
F2_E_east.setAttribute("leftRooms", "232");
F2_E_east.setAttribute("rightRooms", "228");

var F2_E_south = document.createElement('img'); //*******************************
F2_E_south.src='assets/images/building interiors/floor2/e_intersection/south.jpg';
//forward
F2_E_south.setAttribute("forwardImg", "assets/images/building interiors/floor2/se_intersection/south.jpg");
F2_E_south.setAttribute("forwardVar", "F2_SE_south");
//backward
F2_E_south.setAttribute("backwardImg", "assets/images/building interiors/floor2/ne_intersection/south.jpg");
F2_E_south.setAttribute("backwardVar", "F2_NE_south");
//right
F2_E_south.setAttribute("rightImg", "assets/images/building interiors/floor2/e_intersection/west.jpg");
F2_E_south.setAttribute("rightVar", "F2_E_west");
//rooms
F2_E_south.setAttribute("leftRooms", "228, 226, 224, 222, 218, 216");
F2_E_south.setAttribute("rightRooms", "205");

var F2_E_north = document.createElement('img'); //*******************************
F2_E_north.src='assets/images/building interiors/floor2/e_intersection/north.jpg';
//backward
F2_E_north.setAttribute("backwardImg", "assets/images/building interiors/floor2/se_intersection/north.jpg");
F2_E_north.setAttribute("backwardVar", "F2_SE_north");
//forward
F2_E_north.setAttribute("forwardImg", "assets/images/building interiors/floor2/ne_intersection/north.jpg");
F2_E_north.setAttribute("forwardVar", "F2_NE_north");
//left
F2_E_north.setAttribute("leftImg", "assets/images/building interiors/floor2/e_intersection/west.jpg");
F2_E_north.setAttribute("leftVar", "F2_E_west");
//rooms
F2_E_north.setAttribute("leftRooms", "232, 234, 236, 238, 242, 244");
F2_E_north.setAttribute("rightRooms", "215, 213");

var F2_E_west = document.createElement('img'); //*******************************
F2_E_west.src='assets/images/building interiors/floor2/e_intersection/west.jpg';
//forward
F2_E_west.setAttribute("forwardImg", "assets/images/building interiors/floor2/w_intersection/west.jpg");
F2_E_west.setAttribute("forwardVar", "F2_W_west");
//left
F2_E_west.setAttribute("leftImg", "assets/images/building interiors/floor2/e_intersection/south.jpg");
F2_E_west.setAttribute("leftVar", "F2_E_south");
//right
F2_E_west.setAttribute("rightImg", "assets/images/building interiors/floor2/e_intersection/north.jpg");
F2_E_west.setAttribute("rightVar", "F2_E_north");
//rooms
F2_E_west.setAttribute("leftRooms", " ");
F2_E_west.setAttribute("rightRooms", " ");


//---------------------------------------------------
//W intersection
//---------------------------------------------------
var F2_W_east = document.createElement('img'); //*******************************
F2_W_east.src='assets/images/building interiors/floor2/w_intersection/east.jpg';
//forward
F2_W_east.setAttribute("forwardImg", "assets/images/building interiors/floor2/e_intersection/east.jpg");
F2_W_east.setAttribute("forwardVar", "F2_E_east");
//left
F2_W_east.setAttribute("leftImg", "assets/images/building interiors/floor2/w_intersection/north.jpg");
F2_W_east.setAttribute("leftVar", "F2_W_north");
//right
F2_W_east.setAttribute("rightImg", "assets/images/building interiors/floor2/w_intersection/south.jpg");
F2_W_east.setAttribute("rightVar", "F2_W_south");
//upstairs
F2_W_east.setAttribute("upImg", "assets/images/building interiors/floor3/w_intersection/east.jpg");
F2_W_east.setAttribute("upVar", "F3_W_east");
//downstairs
F2_W_east.setAttribute("downImg", "assets/images/building interiors/floor1/w_intersection/east.jpg");
F2_W_east.setAttribute("downVar", "F1_W_east");
//rooms
F2_W_east.setAttribute("leftRooms", " ");
F2_W_east.setAttribute("rightRooms", "stairs");

var F2_W_west = document.createElement('img'); //*******************************
F2_W_west.src='assets/images/building interiors/floor2/w_intersection/west.jpg';
//backward
F2_W_west.setAttribute("backwardImg", "assets/images/building interiors/floor2/e_intersection/west.jpg");
F2_W_west.setAttribute("backwardVar", "F2_E_west");
//right
F2_W_west.setAttribute("rightImg", "assets/images/building interiors/floor2/W_intersection/north.jpg");
F2_W_west.setAttribute("rightVar", "F2_W_north");
//left
F2_W_west.setAttribute("leftImg", "assets/images/building interiors/floor2/W_intersection/south.jpg");
F2_W_west.setAttribute("leftVar", "F2_W_south");
//upstairs
F2_W_west.setAttribute("upImg", "assets/images/building interiors/floor3/w_intersection/east.jpg");
F2_W_west.setAttribute("upVar", "F3_W_east");
//downstairs
F2_W_west.setAttribute("downImg", "assets/images/building interiors/floor1/w_intersection/east.jpg");
F2_W_west.setAttribute("downVar", "F1_W_east");
//rooms
F2_W_west.setAttribute("leftRooms", "stairs");
F2_W_west.setAttribute("rightRooms", " ");

var F2_W_south = document.createElement('img'); //*******************************
F2_W_south.src='assets/images/building interiors/floor2/w_intersection/south.jpg';
//forward
F2_W_south.setAttribute("forwardImg", "assets/images/building interiors/floor2/sw_intersection/south.jpg");
F2_W_south.setAttribute("forwardVar", "F2_SW_south");
//backward
F2_W_south.setAttribute("backwardImg", "assets/images/building interiors/floor2/nw_intersection/south.jpg");
F2_W_south.setAttribute("backwardVar", "F2_NW_south");
//left
F2_W_south.setAttribute("leftImg", "assets/images/building interiors/floor2/w_intersection/east.jpg");
F2_W_south.setAttribute("leftVar", "F2_W_east");
//upstairs
F2_W_south.setAttribute("upImg", "assets/images/building interiors/floor3/w_intersection/east.jpg");
F2_W_south.setAttribute("upVar", "F3_W_east");
//downstairs
F2_W_south.setAttribute("downImg", "assets/images/building interiors/floor1/w_intersection/east.jpg");
F2_W_south.setAttribute("downVar", "F1_W_east");
//rooms
F2_W_south.setAttribute("leftRooms", "221, 223");
F2_W_south.setAttribute("rightRooms", "stairs");

var F2_W_north = document.createElement('img'); //*******************************
F2_W_north.src='assets/images/building interiors/floor2/w_intersection/north.jpg';
//forward
F2_W_north.setAttribute("forwardImg", "assets/images/building interiors/floor2/nw_intersection/north.jpg");
F2_W_north.setAttribute("forwardVar", "F2_NW_north");
//backward
F2_W_north.setAttribute("backwardImg", "assets/images/building interiors/floor2/sw_intersection/north.jpg");
F2_W_north.setAttribute("backwardVar", "F2_SW_north");
//right
F2_W_north.setAttribute("rightImg", "assets/images/building interiors/floor2/w_intersection/east.jpg");
F2_W_north.setAttribute("rightVar", "F2_W_east");
//upstairs
F2_W_north.setAttribute("upImg", "assets/images/building interiors/floor3/w_intersection/east.jpg");
F2_W_north.setAttribute("upVar", "F3_W_east");
//downstairs
F2_W_north.setAttribute("downImg", "assets/images/building interiors/floor1/w_intersection/east.jpg");
F2_W_north.setAttribute("downVar", "F1_W_east");
//rooms
F2_W_north.setAttribute("leftRooms", "stairs");
F2_W_north.setAttribute("rightRooms", "219, 217");

//********************************************************************************************************************
//--------------------------------------------------------------------------------------------------------------------
//FLOOR 3  *********************************************************************************************************** 
//--------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************
//NE intersection
var F3_NE_west = document.createElement('img'); //*******************************
F3_NE_west.src='assets/images/building interiors/floor3/ne_intersection/west.jpg';
//left
F3_NE_west.setAttribute("leftImg", "assets/images/building interiors/floor3/ne_intersection/south.jpg");
F3_NE_west.setAttribute("leftVar", "F3_NE_south");
//forward
F3_NE_west.setAttribute("forwardImg", "assets/images/building interiors/floor3/nw_intersection/west.jpg");
F3_NE_west.setAttribute("forwardVar", "F3_NW_west");
//right
F3_NE_west.setAttribute("rightImg", "assets/images/building interiors/floor3/ne_intersection/offices.jpg");
F3_NE_west.setAttribute("rightVar", "F3_NE_offices");
//downstairs
F3_NE_west.setAttribute("downImg", "assets/images/building interiors/floor2/ne_intersection/west.jpg");
F3_NE_west.setAttribute("downVar", "F2_NE_west");
//rooms
F3_NE_west.setAttribute("leftRooms", "stairs, 344");
F3_NE_west.setAttribute("rightRooms", " 348, 354, 356");

var F3_NE_offices = document.createElement('img'); //*******************************
F3_NE_offices.src='assets/images/building interiors/floor3/ne_intersection/offices.jpg';
//backward
F3_NE_offices.setAttribute("backwardImg", "assets/images/building interiors/floor3/ne_intersection/north.jpg")
F3_NE_offices.setAttribute("backwardVar", "F3_NE_north");
//left
F3_NE_offices.setAttribute("leftImg", "assets/images/building interiors/floor3/ne_intersection/west.jpg")
F3_NE_offices.setAttribute("leftVar", "F3_NE_west");
//downstairs
F3_NE_offices.setAttribute("downImg", "assets/images/building interiors/floor2/ne_intersection/west.jpg");
F3_NE_offices.setAttribute("downVar", "F2_NE_west");
//rooms
F3_NE_offices.setAttribute("leftRooms", " ");
F3_NE_offices.setAttribute("rightRooms", "stairs, 348, 350, 352");

var F3_NE_south = document.createElement('img'); //*******************************
F3_NE_south.src='assets/images/building interiors/floor3/ne_intersection/south.jpg';
//right
F3_NE_south.setAttribute("rightImg", "assets/images/building interiors/floor3/ne_intersection/west.jpg");
F3_NE_south.setAttribute("rightVar", "F3_NE_west");
//forward
F3_NE_south.setAttribute("forwardImg", "assets/images/building interiors/floor3/e_intersection/south.jpg");
F3_NE_south.setAttribute("forwardVar", "F3_E_south");
//downstairs
F3_NE_south.setAttribute("downImg", "assets/images/building interiors/floor2/ne_intersection/west.jpg");
F3_NE_south.setAttribute("downVar", "F2_NE_west");
//rooms
F3_NE_south.setAttribute("leftRooms", "stairs, 344, 342, 338, 336, 334, 332");
F3_NE_south.setAttribute("rightRooms", "317, 315, 313");

var F3_NE_north = document.createElement('img'); //*******************************
F3_NE_north.src='assets/images/building interiors/floor3/ne_intersection/south.jpg';
//backward
F3_NE_north.setAttribute("backwardImg", "assets/images/building interiors/floor3/e_intersection/north.jpg");
F3_NE_north.setAttribute("backwardVar", "F3_E_north");
//forward
F3_NE_north.setAttribute("forwardImg", "assets/images/building interiors/floor3/ne_intersection/offices.jpg");
F3_NE_north.setAttribute("forwardVar", "F3_NE_offices");
//left
F3_NE_north.setAttribute("leftImg", "assets/images/building interiors/floor3/ne_intersection/west.jpg");
F3_NE_north.setAttribute("leftVar", "F3_NE_west");
//downstairs
F3_NE_north.setAttribute("downImg", "assets/images/building interiors/floor2/ne_intersection/west.jpg");
F3_NE_north.setAttribute("downVar", "F2_NE_west");
//rooms
F3_NE_north.setAttribute("leftRooms", "317");
F3_NE_north.setAttribute("rightRooms", "stairs, 348");

var F3_NE_east = document.createElement('img'); //*******************************
F3_NE_east.src='assets/images/building interiors/floor3/ne_intersection/east.jpg';
//right
F3_NE_east.setAttribute("rightImg", "assets/images/building interiors/floor3/ne_intersection/south.jpg");
F3_NE_east.setAttribute("rightVar", "F3_NE_south");
//left
F3_NE_east.setAttribute("leftImg", "assets/images/building interiors/floor3/ne_intersection/offices.jpg");
F3_NE_east.setAttribute("leftVar", "F3_NE_offices");
//backward
F3_NE_east.setAttribute("backwardImg", "assets/images/building interiors/floor3/nw_intersection/east.jpg");
F3_NE_east.setAttribute("backwardVar", "F3_NW_east");
//downstairs
F3_NE_east.setAttribute("downImg", "assets/images/building interiors/floor2/ne_intersection/west.jpg");
F3_NE_east.setAttribute("downVar", "F2_NE_west");
//rooms
F3_NE_east.setAttribute("leftRooms", "354, 348");
F3_NE_east.setAttribute("rightRooms", "stairs, 344, 317");


//---------------------------------------------------
//NW intersection
//---------------------------------------------------
var F3_NW_east = document.createElement('img');  //*******************************
F3_NW_east.src='assets/images/building interiors/floor3/nw_intersection/east.jpg';
//forward
F3_NW_east.setAttribute("forwardImg", "assets/images/building interiors/floor3/ne_intersection/east.jpg");
F3_NW_east.setAttribute("forwardVar", "F3_NE_east");
//right
F3_NW_east.setAttribute("rightImg", "assets/images/building interiors/floor3/nw_intersection/south.jpg");
F3_NW_east.setAttribute("rightVar", "F3_NW_south");
//rooms
F3_NW_east.setAttribute("leftRooms", "356, 354");
F3_NW_east.setAttribute("rightRooms", " ");

var F3_NW_south = document.createElement('img');  //*******************************
F3_NW_south.src='assets/images/building interiors/floor3/nw_intersection/south.jpg';
//left
F3_NW_south.setAttribute("leftImg", "assets/images/building interiors/floor3/nw_intersection/east.jpg");
F3_NW_south.setAttribute("leftVar", "F3_NW_east");
//forward
F3_NW_south.setAttribute("forwardImg", "assets/images/building interiors/floor3/w_intersection/south.jpg");
F3_NW_south.setAttribute("forwardVar", "F3_W_south");
//rooms
F3_NW_south.setAttribute("leftRooms", "319, 321");
F3_NW_south.setAttribute("rightRooms", " ");

var F3_NW_north = document.createElement('img');  //*******************************
F3_NW_north.src='assets/images/building interiors/floor3/nw_intersection/north.jpg';
//backward
F3_NW_north.setAttribute("backwardImg", "assets/images/building interiors/floor3/w_intersection/north.jpg");
F3_NW_north.setAttribute("backwardVar", "F3_W_north");
//right
F3_NW_north.setAttribute("rightImg", "assets/images/building interiors/floor3/nw_intersection/east.jpg");
F3_NW_north.setAttribute("rightVar", "F3_NW_east");
//rooms
F3_NW_north.setAttribute("leftRooms", " ");
F3_NW_north.setAttribute("rightRooms", "319 ");

var F3_NW_west = document.createElement('img');  //*******************************
F3_NW_west.src='assets/images/building interiors/floor3/nw_intersection/west.jpg';
//backward
F3_NW_west.setAttribute("backwardImg", "assets/images/building interiors/floor3/ne_intersection/west.jpg");
F3_NW_west.setAttribute("backwardVar", "F3_NE_west");
//left
F3_NW_west.setAttribute("leftImg", "assets/images/building interiors/floor3/nw_intersection/south.jpg");
F3_NW_west.setAttribute("leftVar", "F3_NW_south");
//rooms
F3_NW_west.setAttribute("leftRooms", " ");
F3_NW_west.setAttribute("rightRooms", "356");

//---------------------------------------------------
//SE intersection
//---------------------------------------------------
var F3_SE_west = document.createElement('img');  //*******************************
F3_SE_west.src='assets/images/building interiors/floor3/se_intersection/west.jpg';
//forward
F3_SE_west.setAttribute("forwardImg", "assets/images/building interiors/floor3/sw_intersection/west.jpg");
F3_SE_west.setAttribute("forwardVar", "F3_SW_west");
//right
F3_SE_west.setAttribute("rightImg", "assets/images/building interiors/floor3/se_intersection/north.jpg");
F3_SE_west.setAttribute("rightVar", "F3_SE_north");
//downstairs
F3_SE_west.setAttribute("downImg", "assets/images/building interiors/floor2/se_intersection/west.jpg");
F3_SE_west.setAttribute("downVar", "F2_SE_west");
//rooms
F3_SE_west.setAttribute("leftRooms", " ");
F3_SE_west.setAttribute("rightRooms", "stairs");

var F3_SE_east = document.createElement('img');  //*******************************
F3_SE_east.src='assets/images/building interiors/floor3/se_intersection/east.jpg';
//backward
F3_SE_east.setAttribute("backwardImg", "assets/images/building interiors/floor3/sw_intersection/east.jpg");
F3_SE_east.setAttribute("backwardVar", "F3_SW_east");
//left
F3_SE_east.setAttribute("leftImg", "assets/images/building interiors/floor3/se_intersection/north.jpg");
F3_SE_east.setAttribute("leftVar", "F3_SE_north");
//downstairs
F3_SE_east.setAttribute("downImg", "assets/images/building interiors/floor2/se_intersection/west.jpg");
F3_SE_east.setAttribute("downVar", "F2_SE_west");
//rooms
F3_SE_east.setAttribute("leftRooms", "stairs ");
F3_SE_east.setAttribute("rightRooms", " ");

var F3_SE_south = document.createElement('img');  //*******************************
F3_SE_south.src='assets/images/building interiors/floor3/se_intersection/south.jpg';
//backward
F3_SE_south.setAttribute("backwardImg", "assets/images/building interiors/floor3/e_intersection/south.jpg");
F3_SE_south.setAttribute("backwardVar", "F3_E_south");
//right
F3_SE_south.setAttribute("rightImg", "assets/images/building interiors/floor3/se_intersection/west.jpg");
F3_SE_south.setAttribute("rightVar", "F3_SE_west");
//downstairs
F3_SE_south.setAttribute("downImg", "assets/images/building interiors/floor2/se_intersection/west.jpg");
F3_SE_south.setAttribute("downVar", "F2_SE_west");
//rooms
F3_SE_south.setAttribute("leftRooms", "stairs, 312, 310, 308");
F3_SE_south.setAttribute("rightRooms", " ");

var F3_SE_north = document.createElement('img');  //*******************************
F3_SE_north.src='assets/images/building interiors/floor3/se_intersection/north.jpg';
//forward
F3_SE_north.setAttribute("forwardImg", "assets/images/building interiors/floor3/e_intersection/north.jpg");
F3_SE_north.setAttribute("forwardVar", "F3_E_north");
//left
F3_SE_north.setAttribute("leftImg", "assets/images/building interiors/floor3/se_intersection/west.jpg");
F3_SE_north.setAttribute("leftVar", "F3_SE_west");
//downstairs 
F3_SE_north.setAttribute("downImg", "assets/images/building interiors/floor2/se_intersection/west.jpg");
F3_SE_north.setAttribute("downVar", "F2_SE_west");
//rooms
F3_SE_north.setAttribute("leftRooms", "307");
F3_SE_north.setAttribute("rightRooms", "stairs, 316, 318, 322, 324, 326, 328");


//---------------------------------------------------
//SW intersection
//---------------------------------------------------
var F3_SW_east = document.createElement('img'); //*******************************
F3_SW_east.src='assets/images/building interiors/floor3/sw_intersection/east.jpg';
//forward
F3_SW_east.setAttribute("forwardImg", "assets/images/building interiors/floor3/se_intersection/east.jpg");
F3_SW_east.setAttribute("forwardVar", "F3_SE_east");
//left
F3_SW_east.setAttribute("leftImg", "assets/images/building interiors/floor3/sw_intersection/north.jpg");
F3_SW_east.setAttribute("leftVar", "F3_SW_north");
//rooms
F3_SW_east.setAttribute("leftRooms", "301");
F3_SW_east.setAttribute("rightRooms", " ");

var F3_SW_north = document.createElement('img'); //*******************************
F3_SW_north.src='assets/images/building interiors/floor3/sw_intersection/north.jpg';
//forward
F3_SW_north.setAttribute("forwardImg", "assets/images/building interiors/floor3/w_intersection/north.jpg");
F3_SW_north.setAttribute("forwardVar", "F3_W_north");
//right
F3_SW_north.setAttribute("rightImg", "assets/images/building interiors/floor3/sw_intersection/east.jpg");
F3_SW_north.setAttribute("rightVar", "F3_SW_east");
//rooms
F3_SW_north.setAttribute("leftRooms", " ");
F3_SW_north.setAttribute("rightRooms", "325, 323");

var F3_SW_west = document.createElement('img'); //*******************************
F3_SW_north.src='assets/images/building interiors/floor3/sw_intersection/west.jpg';
//backward
F3_SW_west.setAttribute("backwardImg", "assets/images/building interiors/floor3/se_intersection/west.jpg");
F3_SW_west.setAttribute("backwardVar", "F3_SE_west");
//right
F3_SW_west.setAttribute("rightImg", "assets/images/building interiors/floor3/sw_intersection/north.jpg");
F3_SW_west.setAttribute("rightVar", "F3_SW_north");
//rooms
F3_SW_west.setAttribute("leftRooms", " ");
F3_SW_west.setAttribute("rightRooms", "301");

var F3_SW_south = document.createElement('img'); //*******************************
F3_SW_north.src='assets/images/building interiors/floor3/sw_intersection/south.jpg';
//backward
F3_SW_south.setAttribute("backwardImg", "assets/images/building interiors/floor3/w_intersection/south.jpg");
F3_SW_south.setAttribute("backwardVar", "F3_W_south");
//left
F3_SW_south.setAttribute("leftImg", "assets/images/building interiors/floor3/sw_intersection/east.jpg");
F3_SW_south.setAttribute("leftVar", "F3_SW_east");
//rooms
F3_SW_south.setAttribute("leftRooms", "325");
F3_SW_south.setAttribute("rightRooms", " ");



//---------------------------------------------------
//E intersection
//---------------------------------------------------
var F3_E_east = document.createElement('img'); //*******************************
F3_E_east.src='assets/images/building interiors/floor3/e_intersection/east.jpg';
//backward
F3_E_east.setAttribute("backwardImg", "assets/images/building interiors/floor3/w_intersection/east.jpg");
F3_E_east.setAttribute("backwardVar", "F3_W_east");
//right
F3_E_east.setAttribute("rightImg", "assets/images/building interiors/floor3/e_intersection/south.jpg");
F3_E_east.setAttribute("rightVar", "F3_E_south");
//left
F3_E_east.setAttribute("leftImg", "assets/images/building interiors/floor3/e_intersection/north.jpg");
F3_E_east.setAttribute("leftVar", "F3_E_north");
//rooms
F3_E_east.setAttribute("leftRooms", "322");
F3_E_east.setAttribute("rightRooms", "328");

var F3_E_south = document.createElement('img'); //*******************************
F3_E_south.src='assets/images/building interiors/floor3/e_intersection/south.jpg';
//forward
F3_E_south.setAttribute("forwardImg", "assets/images/building interiors/floor3/se_intersection/south.jpg");
F3_E_south.setAttribute("forwardVar", "F3_SE_south");
//backward
F3_E_south.setAttribute("backwardImg", "assets/images/building interiors/floor3/ne_intersection/south.jpg");
F3_E_south.setAttribute("backwardVar", "F3_NE_south");
//right
F3_E_south.setAttribute("rightImg", "assets/images/building interiors/floor3/e_intersection/west.jpg");
F3_E_south.setAttribute("rightVar", "F3_E_west");
//rooms
F3_E_south.setAttribute("leftRooms", "328, 326, 324, 322, 318, 316");
F3_E_south.setAttribute("rightRooms", "307");

var F3_E_north = document.createElement('img'); //*******************************
F3_E_north.src='assets/images/building interiors/floor3/e_intersection/north.jpg';
//backward
F3_E_north.setAttribute("backwardImg", "assets/images/building interiors/floor3/se_intersection/north.jpg");
F3_E_north.setAttribute("backwardVar", "F3_SE_north");
//forward
F3_E_north.setAttribute("forwardImg", "assets/images/building interiors/floor3/ne_intersection/north.jpg");
F3_E_north.setAttribute("forwardVar", "F3_NE_north");
//left
F3_E_north.setAttribute("leftImg", "assets/images/building interiors/floor3/e_intersection/west.jpg");
F3_E_north.setAttribute("leftVar", "F3_E_west");
//rooms
F3_E_north.setAttribute("leftRooms", "313, 315, 317");
F3_E_north.setAttribute("rightRooms", "332, 334, 336, 338, 342, 344");

var F3_E_west = document.createElement('img'); //*******************************
F3_E_west.src='assets/images/building interiors/floor3/e_intersection/west.jpg';
//forward
F3_E_west.setAttribute("forwardImg", "assets/images/building interiors/floor3/w_intersection/west.jpg");
F3_E_west.setAttribute("forwardVar", "F3_W_west");
//left
F3_E_west.setAttribute("leftImg", "assets/images/building interiors/floor3/e_intersection/south.jpg");
F3_E_west.setAttribute("leftVar", "F3_E_south");
//right
F3_E_west.setAttribute("rightImg", "assets/images/building interiors/floor3/e_intersection/north.jpg");
F3_E_west.setAttribute("rightVar", "F3_E_north");
//rooms
F3_E_west.setAttribute("leftRooms", " ");
F3_E_west.setAttribute("rightRooms", " ");


//---------------------------------------------------
//W intersection
//---------------------------------------------------
var F3_W_east = document.createElement('img'); //*******************************
F3_W_east.src='assets/images/building interiors/floor3/w_intersection/east.jpg';
//forward
F3_W_east.setAttribute("forwardImg", "assets/images/building interiors/floor3/e_intersection/east.jpg");
F3_W_east.setAttribute("forwardVar", "F3_E_east");
//left
F3_W_east.setAttribute("leftImg", "assets/images/building interiors/floor3/w_intersection/north.jpg");
F3_W_east.setAttribute("leftVar", "F3_W_north");
//right
F3_W_east.setAttribute("rightImg", "assets/images/building interiors/floor3/w_intersection/south.jpg");
F3_W_east.setAttribute("rightVar", "F3_W_south");
//downstairs
F3_W_east.setAttribute("downImg", "assets/images/building interiors/floor2/w_intersection/east.jpg");
F3_W_east.setAttribute("downVar", "F2_W_east");
//rooms
F3_W_east.setAttribute("leftRooms", " ");
F3_W_east.setAttribute("rightRooms", "stairs");

var F3_W_west = document.createElement('img'); //*******************************
F3_W_west.src='assets/images/building interiors/floor3/w_intersection/west.jpg';
//backward
F3_W_west.setAttribute("backwardImg", "assets/images/building interiors/floor3/e_intersection/west.jpg");
F3_W_west.setAttribute("backwardVar", "F3_E_west");
//right
F3_W_west.setAttribute("rightImg", "assets/images/building interiors/floor3/W_intersection/north.jpg");
F3_W_west.setAttribute("rightVar", "F3_W_north");
//left
F3_W_west.setAttribute("leftImg", "assets/images/building interiors/floor3/W_intersection/south.jpg");
F3_W_west.setAttribute("leftVar", "F3_W_south");
//downstairs
F3_W_west.setAttribute("downImg", "assets/images/building interiors/floor2/w_intersection/east.jpg");
F3_W_west.setAttribute("downVar", "F2_W_east");
//rooms
F3_W_west.setAttribute("leftRooms", "stairs");
F3_W_west.setAttribute("rightRooms", " ");

var F3_W_south = document.createElement('img'); //*******************************
F3_W_south.src='assets/images/building interiors/floor3/w_intersection/south.jpg';
//forward
F3_W_south.setAttribute("forwardImg", "assets/images/building interiors/floor3/sw_intersection/south.jpg");
F3_W_south.setAttribute("forwardVar", "F3_SW_south");
//backward
F3_W_south.setAttribute("backwardImg", "assets/images/building interiors/floor3/nw_intersection/south.jpg");
F3_W_south.setAttribute("backwardVar", "F3_NW_south");
//left
F3_W_south.setAttribute("leftImg", "assets/images/building interiors/floor3/w_intersection/east.jpg");
F3_W_south.setAttribute("leftVar", "F3_W_east");
//downstairs
F3_W_south.setAttribute("downImg", "assets/images/building interiors/floor2/w_intersection/east.jpg");
F3_W_south.setAttribute("downVar", "F2_W_east");
//rooms
F3_W_south.setAttribute("leftRooms", "323, 325");
F3_W_south.setAttribute("rightRooms", "stairs");

var F3_W_north = document.createElement('img'); //*******************************
F3_W_north.src='assets/images/building interiors/floor3/w_intersection/north.jpg';
//forward
F3_W_north.setAttribute("forwardImg", "assets/images/building interiors/floor3/nw_intersection/north.jpg");
F3_W_north.setAttribute("forwardVar", "F3_NW_north");
//backward
F3_W_north.setAttribute("backwardImg", "assets/images/building interiors/floor3/sw_intersection/north.jpg");
F3_W_north.setAttribute("backwardVar", "F3_SW_north");
//right
F3_W_north.setAttribute("rightImg", "assets/images/building interiors/floor3/w_intersection/east.jpg");
F3_W_north.setAttribute("rightVar", "F3_W_east");
//downstairs
F3_W_north.setAttribute("downImg", "assets/images/building interiors/floor2/w_intersection/east.jpg");
F3_W_north.setAttribute("downVar", "F2_W_east");
//rooms
F3_W_north.setAttribute("leftRooms", "stairs");
F3_W_north.setAttribute("rightRooms", "321, 319");


