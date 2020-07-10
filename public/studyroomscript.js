console.log("js working");

//判断摄像头on/off
var camera_on= false;//后端判断
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
    console.log("exit!!!")
    window.location.replace("homepage.html");
}

//start of 点赞
var num_thumb=0;
function numthumb(){
    num_thumb=num_thumb+1;
    document.getElementById("thumb_abled").style.display="none";
    document.getElementById("thumb_disabled").style.display="block";
    document.getElementById("thumb_disabled").style.color="orange";
}
document.getElementById("thumb_abled").addEventListener("click",numthumb);
//end of 点赞

//摄像头
var t1=document.getElementById("v1");

//camera-off 左1
function sitdown1(){
    document.getElementById("c1").style.display="block";
    console.log("???");
    document.getElementById("sitdownbtns").style.display="none";
}
function showc1studyplan(){
    document.getElementById("c1studyplan").style.display="block";
}
function hidec1studyplan(){
    document.getElementById("c1studyplan").style.display="none";

}
// end of camera-off 左一


//camera-on 左1
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
//camera-off 左1






//camera-off 左2
function sitdown2(){
    document.getElementById("c2").style.display="block";
    console.log("???");
    document.getElementById("sitdownbtns").style.display="none";
}
function showc2studyplan(){
    document.getElementById("c2studyplan").style.display="block";
}
function hidec2studyplan(){
    document.getElementById("c2studyplan").style.display="none";

}
//end of camera-off 左2


//camera-on 左2
function csitdown2(){
    document.getElementById("cc2").style.display="block";
    console.log("???");
    document.getElementById("csitdownbtns").style.display="none";
    t1.style.display="block";
    t1.style.left="450px";
    t1.style.top="470px";
    // document.getElementById('countdown_events1').data('countdown').data-start="true";
}
function showcc2studyplan(){
    document.getElementById("cc2studyplan").style.display="block";
}
function hidecc2studyplan(){
    document.getElementById("cc2studyplan").style.display="none";

}



//camera-off 左3
function sitdown3(){
    document.getElementById("c3").style.display="block";
    console.log("???");
    document.getElementById("sitdownbtns").style.display="none";
}
function showc3studyplan(){
    document.getElementById("c3studyplan").style.display="block";
}
function hidec3studyplan(){
    document.getElementById("c3studyplan").style.display="none";

}
//end of camera-off 左3


//camera-on 左3
function csitdown3(){
    document.getElementById("cc3").style.display="block";
    console.log("???");
    document.getElementById("csitdownbtns").style.display="none";
    t1.style.display="block";
    t1.style.left="450px";
    t1.style.top="270px";
    // document.getElementById('countdown_events1').data('countdown').data-start="true";
}
function showcc3studyplan(){
    document.getElementById("cc3studyplan").style.display="block";
}
function hidecc3studyplan(){
    document.getElementById("cc3studyplan").style.display="none";

}