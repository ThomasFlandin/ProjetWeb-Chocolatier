//On démarre l'animation
var inter = setInterval(chrono, 1000);

seconde=0;

//On récupère les éléments
text1 = document.getElementById('_1848');
text2 = document.getElementById('_1899');
text3 = document.getElementById('_1920');
text4 = document.getElementById('_2014');

chemin1 = document.getElementById('Segment1');
chemin2 = document.getElementById('Segment2');
chemin3 = document.getElementById('Segment3');

cercle1 = document.getElementById('groupe_1848');
cercle2 = document.getElementById('groupe_1899');
cercle3 = document.getElementById('groupe_1920');
cercle4 = document.getElementById('groupe_2014');


function chrono()
{
    if(seconde == 2)
    {
      chemin1.classList.add("animation");
    }
    else if(seconde == 4)
    {
      text2.classList.add("animation");
      cercle2.classList.add("animation");
    }
    else if(seconde == 6)
    {
      chemin2.classList.add("animation");
    }
    else if(seconde == 8)
    {
      text3.classList.add("animation");
      cercle3.classList.add("animation");
    }
    else if(seconde == 10)
    {
      chemin3.classList.add("animation");
    }
    else if(seconde == 12)
    {
      text4.classList.add("animation");
      cercle4.classList.add("animation");
    }
    else if(seconde == 14)
    {
      clearInterval(inter);
    }

    seconde++;
}