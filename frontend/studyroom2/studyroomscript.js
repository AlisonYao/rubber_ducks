console.log("js working");

//判断摄像头on/off
var camera_on= true;//后端判断
if(camera_on==true){
    document.getElementById("camera-on").style.display="block";
    document.getElementById("camera-off").style.display="none";
}else{
    document.getElementById("camera-on").style.display="none";
    document.getElementById("camera-off").style.display="block";
}

//登出
function exitroom(){
    //判断是否完成计划时间
    //记录登出时间
    window.location.href("homepage.html");
}



function sitdown(){
    // document.getElementById("image").style.backgroundColor="yellow";
    console.log("!!!");
}

var t1=document.getElementById("v1");

function sitdown1(){
    document.getElementById("c1").style.display="block";
    console.log("???");
    document.getElementById("sitdownbtns").style.display="none";
}

function csitdown1(){
    document.getElementById("cc1").style.display="block";
    console.log("???");
    document.getElementById("csitdownbtns").style.display="none";
    t1.style.display="block";
    t1.style.left="50px";
    t1.style.top="470px";
    
    // document.getElementById('countdown_events1').data('countdown').data-start="true";
}
function showcc1studyplan(){
    document.getElementById("cc1studyplan").style.display="block";
}
function hidecc1studyplan(){
    document.getElementById("cc1studyplan").style.display="none";

}
function startcountdown(){

}
document.getElementById("alarm1").addEventListener("click",startcountdown);

var num_thumb=0;
function numthumb(){
    num_thumb=num_thumb+1;
    document.getElementById("thumb_abled").style.display="none";
    document.getElementById("thumb_disabled").style.display="block";
    document.getElementById("thumb_disabled").style.color="orange";
}
document.getElementById("thumb_abled").addEventListener("click",numthumb);

function showc1studyplan(){
    document.getElementById("c1studyplan").style.display="block";
}
function hidec1studyplan(){
    document.getElementById("c1studyplan").style.display="none";

}









function sitdown2(){
    document.getElementById("c2").style.display="block";
    console.log("???");
    document.getElementById("sitdownbtns").style.display="none";
}
// document.getElementById("c2").addEventListener("click",sitdown1);




// start from here
// function sitdown1(){
//     document.getElementById("c1").style.display="block";
//     console.log("???");
//     document.getElementById("sitdownbtns").style.display="none";
//     // document.getElementById('countdown_events1').data('countdown').data-start="true";
// }
function startcountdown(){

}
document.getElementById("alarm2").addEventListener("click",startcountdown);

var num_thumb=0;
function numthumb(){
    num_thumb=num_thumb+1;
    document.getElementById("thumb_abled").style.display="none";
    document.getElementById("thumb_disabled").style.display="block";
    document.getElementById("thumb_disabled").style.color="orange";
}
document.getElementById("thumb_abled").addEventListener("click",numthumb);

function showc2studyplan(){
    document.getElementById("c2studyplan").style.display="block";
}
function hidec2studyplan(){
    document.getElementById("c2studyplan").style.display="none";

}