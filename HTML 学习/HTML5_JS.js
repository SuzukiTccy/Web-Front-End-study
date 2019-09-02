//这是绘制红色矩形
var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75);


//这是添加渐变
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

//创建渐变 
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "White");

//填充渐变
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);


/********************************************************************** */



//拖动
function allowDrop(ev) {
    ev.stopPropagation(); //阻止事件冒泡
    ev.preventDefault(); //阻止事件默认
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
    ev.stopPropagation(); //阻止事件冒泡
    ev.preventDefault(); //阻止事件默认
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}



/********************************************************************** */




//这是地理定位
var x = document.getElementById("location");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "定位服务不能使用";
    }
}

function showPosition(position) {
    x.innerHTML = "纬度:" + position.coords.latitude +
        "<br/>经度:" + position.coords.longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "用户拒绝获取地理位置的请求";
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "位置信息不可用";
            break;
    }
}


/********************************************************************** */




//Web 存储
function clickCount() {
    if (typeof (Storage) != "undefined") {
        if (sessionStorage.clickCount) {
            sessionStorage.clickCount = Number(sessionStorage.clickCount) + 1;
        } else {
            sessionStorage.clickCount = 1;
        }
        document.getElementById("result").innerHTML = "你已经点击了" + sessionStorage.clickCount + "次";
    } else {
        document.getElementById("result").innerHTML = "你的浏览器不支持Web存储";
    }
}




//Web Workers

function StartWork() {
    if (typeof (Worker) != "undefined") {
        if (typeof (w) == "undefined") {
           var w = new Worker("demo_Workers.js");
        }
        w.onmessage = function (event) {
            document.getElementById("Web_Workers").innerHTML = event.data;
        };
    } else {
        document.getElementById("Web_Workers").innerHTML = "抱歉，你的浏览器不支持Web Workers";
    }
}

function StopWork() {
    w.terminate();
    w = undefined;
}
