window.onload = function() {
    // console.log("网页可见区域宽：" + document.body.clientWidth);
    // console.log("网页可见区域高：" + document.body.clientHeight);
    // console.log("网页可见区域宽：（包括边线的宽）" + document.body.offsetWidth );
    // console.log("网页可见区域高：（包括边线的宽）" + document.body.offsetHeight);
    // console.log("网页正文全文宽：" + document.body.scrollWidth);
    // console.log("网页正文全文高：" + document.body.scrollHeight);
    // console.log("网页被卷去的高：" + document.body.scrollTop);
    // console.log("网页被卷去的左：" + document.body.scrollLeft);
    // console.log("网页正文部分上：" + window.screenTop);
    // console.log("网页正文部分左：" + window.screenLeft);
    // console.log("屏幕分辨率的高：" + window.screen.height);
    // console.log("屏幕分辨率的宽：" + window.screen.width);
    // console.log("屏幕可用工作区高度：" + window.screen.availHeight);
    // console.log("屏幕可用工作区宽度：" + window.screen.availWidth);



var page1 = document.getElementById("page1");
var p1_lantern = document.getElementById("p1_lantern");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");
var page4 = document.getElementById("page4");
var page5 = document.getElementById("page5");
var page6 = document.getElementById("page6");
var page7 = document.getElementById("page7");
var page8 = document.getElementById("page8");
var page9 = document.getElementById("page9");
var page10 = document.getElementById("page10");
var music = document.getElementById("music");
var next = document.getElementById("next");
var link = document.getElementById("link");
var audio = document.getElementsByTagName("audio")[0];
//当音乐播放完停止时，自动停止旋转,添加监听事件
audio.addEventListener("ended",function(event){
    music.setAttribute("class","");
},false);

//点击音乐图标时，控制音乐播放效果
//  music.onclick =function(){
//     if(audio.paused){
//         audio.play();       this.setAttribute("class","play");
//         //this.style.animationPlayState = "running";可惜大多设备不兼容
//     }else {
//        this.setAttribute("class","");
//         //this.style.animationPlayState = "paused";
//         audio.pause();
//     };
// };
// next.addEventListener("touchstart",function(event){

//         window.location.href='two/index.html';

// },false);
setTimeout(function(){
    $("#link p").fadeIn(500);
},60000)


link.addEventListener("touchstart",function(event){
    $("body").css("background","#fff");
    $("#mainDiv").fadeOut(500);
    $("#page1").fadeIn(3000);
},false)


music.addEventListener("touchstart",function(event){
    if(audio.paused){
        audio.play();
        this.setAttribute("class","play");
    }else {
        audio.pause();
        this.setAttribute("class","");
    };
},false);
p1_lantern.addEventListener("touchstart",function(event){
    page1.style.display="none";
    // $("#page1").fadeIn(3000);
    // page2.style.display="block";
    $("#page2").fadeIn(3000);

setTimeout(function(){
        var str = "一直期盼你的出现.........";
    var box = $("#ppp");
    for (var i=0; i<str.length; i++){
  (function(i){
      setTimeout(function(){
         box.text( box.text() + str[i]);
      },i*300);
  })(i);
}
    },1000);
    setTimeout(function(){
    $("#page2").fadeOut(500);
        setTimeout(function(){
    $("#page3").fadeIn(2000);
        },1000);
        setTimeout(function(){
    $("#page3").fadeOut(500);
        setTimeout(function(){
    $("#page4").fadeIn(2000);
        },1000);
        setTimeout(function(){
    $("#page4").fadeOut(500);
        setTimeout(function(){
    $("#page5").fadeIn(2000);
        },1000);
        setTimeout(function(){
    $("#page5").fadeOut(500);
    $("#page6").fadeIn(2000);
        setTimeout(function(){
    $("#page6").fadeOut(500);
    $("#page7").fadeIn(2000);
        setTimeout(function(){
        $("#page7").fadeOut(500);
        setTimeout(function(){

    $("body").css("background","#ffe");
        $("#page8").fadeIn(1000);
        },2000);
    },4500);
    },4500);
    },4500);
    },4500);
    },4500);
    },6000);

},false);


};
