let bgLayerTop = document.getElementById('parallax');
let header = document.getElementById("header");
let aboutme = document.getElementById("aboutme");
let tensionbar = document.getElementById("tensionbar");


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    bgLayerTop.style.top= value * -0.75 +'px';
    header.style.top = value * - 1.05 +'px';
    tensionbar.style.top = value * 1.75 +'px';
    
    console.log(value);

})

