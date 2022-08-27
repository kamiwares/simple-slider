var i = 0;

var slider = ['slides/slide1.jpg','slides/slide2.jpg','slides/slide3.jpg','slides/slide4.jpg']

var elem = document.getElementsByClassName('slider-item');


//Setting slider background

for(i = 0; i<slider.length; i++){
    elem[i].style.backgroundImage = 'url('+slider[i]+')';
}


//Moving slider

var count = 0;

var slideDuration = 4000;

setInterval(() => {
        if(count<slider.length){
            document.getElementById('slider').style.left = (-100*count)+'%';
            console.log((-100*count)+'%');
            count++;
        }
        else{
            count = 0;
        }

}, slideDuration);