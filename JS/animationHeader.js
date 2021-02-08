
var logoLindt = document.getElementById('logoLindt');
var header = document.getElementsByTagName("header")[0];
const headerHauteurInitiale = "110";

window.addEventListener("scroll", function(){
    var scroll = window.scrollY;

    if(scroll > 10)
    {
        logoLindt.style.transform = "scale(0.8)";
        header.style.height = headerHauteurInitiale*0.8+"px" ;
        logoLindt.style.transition = "0.5s";
    }
    else
    {
        logoLindt.style.transform = "scale(1)";
        header.style.height = headerHauteurInitiale+"px" ;
        logoLindt.style.transition = "0.5s";
    }
});