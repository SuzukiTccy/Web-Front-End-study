//这是Web Workers的外部JavaScript文件
//作用：计数


var i = 0;
function timedCount()
{
    i=i+1;
    postMessage(i);
    setTimeout(timedCount(),1);
}

timedCount();


