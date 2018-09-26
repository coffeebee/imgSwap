var pics = new Array();
pics[0] = 'cat.jpg';
pics[1] = 'dog.jpg';
pics[2] = 'panda.jpg';
pics[3] = 'piggy.jpg';



function nxtImg(pic){
    if (document.getElementById("thumb").src == "") 
    {
        document.getElementById("mainImg").src = "";
    }
    else 
    {
        document.getElementById("thumb").src = "";
    }
}