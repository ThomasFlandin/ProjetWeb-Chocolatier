//
//
//  Permet de gérer le menu accordéon dans le header pour les terminaux mobiles
//
//

var header = document.getElementsByTagName('header')[0];

header.addEventListener("click", function () 
{
    //console.log("click souris");

    //On recherche le premier élément ul de la page (donc le menu)
    var visibiliteMenu = document.getElementsByTagName('nav')[0];
    var style = visibiliteMenu.style;

    //Si on est sur un terminal mobil
    if (window.matchMedia("(max-width: 750px)").matches) 
    {
        //Système de bascule
        if (style.display == "inherit") 
        {
            style.display = 'none';
            header.style.height = "88px";
        }
        else 
        {
            style.display = 'inherit';
            header.style.height = "275px";
        }
    }
});


//Lorsque la résolution de la page change, on execute ce code
function resizeWindows() 
{
    //On recherche le premier élément ul de la page (donc le menu)
    var visibiliteMenu = document.getElementsByTagName('nav')[0];
    var style = visibiliteMenu.style;

    //Si on est sur un terminal mobil
    if (window.matchMedia("(max-width: 750px)").matches) 
    {
        style.display = 'none';
        header.style.height = "88px";
    }
    else
    {
        style.display = 'inherit';
        header.style.height = "110px";
    }
}