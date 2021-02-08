
//
//          GESTION HOVER LOGO INSTAGRAM
//

/*Variables qui permettent de modifier les paramètres du hover*/
var couleurLogoInstagramDeBase = "#dab76d";
var couleurLogoInstagramHover = "white";
var dureeTransition = "0.5s"

/*Création des gestionnaires d'évènements*/
var logoInsta = document.getElementById("logoInstagram");
var elementsColoresLogoInsta = document.getElementsByClassName("couleurLogoInstagram");

logoInsta.addEventListener('mouseover', function(){
    for(var i=0; i < elementsColoresLogoInsta.length; i++ )
    {
        elementsColoresLogoInsta[i].style = "fill:"+couleurLogoInstagramHover+";transition:"+dureeTransition+";";
    }
});

logoInsta.addEventListener('mouseout', function(){
    for(var i=0; i < elementsColoresLogoInsta.length; i++ )
    {
        elementsColoresLogoInsta[i].style = "fill:"+couleurLogoInstagramDeBase+";transition:"+dureeTransition+";";
    }
});


//
//          GESTION HOVER LOGO PINTEREST
//

/*Variables qui permettent de modifier les paramètres du hover*/
var couleurLogoPinterestDeBase = "#dab76d";
var couleurLogoPinterestHover = "white";

/*Création des gestionnaires d'évènements*/
var logoPinterest = document.getElementById("logoPinterest");
var elementsColoresLogologoPinterest = document.getElementsByClassName("couleurLogoPinterest");

logoPinterest.addEventListener('mouseover', function(){
    for(var i=0; i < elementsColoresLogologoPinterest.length; i++ )
    {
        elementsColoresLogologoPinterest[i].style = "fill:"+couleurLogoPinterestHover+";transition:"+dureeTransition+";";
    }
});

logoPinterest.addEventListener('mouseout', function(){
    for(var i=0; i < elementsColoresLogoInsta.length; i++ )
    {
        elementsColoresLogologoPinterest[i].style = "fill:"+couleurLogoPinterestDeBase+";transition:"+dureeTransition+";";
    }
});