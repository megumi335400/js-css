window.onload=function(){

    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var img = document.getElementsByTagName('img')[0];

    var imgArr=['image/1.jpg','image/2.jpg','image/3.jpg','image/4.jpg'];
    var info = document.getElementById('info')
    var index=0;

    info.innerHTML="有"+imgArr.length+'图片,这是第'+(index+1)+'张图'




    prev.onclick=function(){
        //alert(123);
        index--;
        if(index<0){
            index=imgArr.length-1;
        }
        img.src=imgArr[index];
        info.innerHTML="有"+imgArr.length+'图片+这是第'+(index+1)+'张图';
    };
    next.onclick=function(){
        //alert(123);
        index++;
        if(index>imgArr.length-1){
            index=0;
        }
        img.src=imgArr[index];
        info.innerHTML="有"+imgArr.length+'图片+这是第'+(index+1)+'张图';
        console.log(1)
    };

    var h1=document.getElementById('h1');
    var num=1;
    setInterval(function(){
        console.log(num);
    }, 1000);





};