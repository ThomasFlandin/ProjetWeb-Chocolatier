var selecteursplit = document.getElementById('selecteurSplitJs');

var splitGauche = document.getElementById('splitChocolatJsGauche');
var splitDroit = document.getElementById('splitChocolatJsDroit');
let root = document.documentElement;

selecteursplit.addEventListener('mousedown', dragMouseDown, {passive:false});
selecteursplit.addEventListener('touchstart', dragMouseDown, {passive:false});

function dragMouseDown(e)
{
    e = e || window.event;
    e.preventDefault();

    /*document.onmouseup = closeDragElement;
    document.ontouchend = closeDragElement;*/

    document.addEventListener("mouseup", closeDragElement);
    document.addEventListener("touchend", closeDragElement);
    
    //lorsque le curseur bouge, on appel
    document.addEventListener("mousemove", dragSplit, {passive:false, cancelable:true});
    document.addEventListener("touchmove", dragSplit, {passive:false, cancelable:true, once:false});

    /*document.onmousemove = dragSplit;
    document.ontouchmove = dragSplit;*/

    if (e.cancelable) 
    {
        e.preventDefault();
    }
}


function dragSplit(e)
{

    var largeurEcran = document.body.clientWidth; //On récupère la largeur de l'écran
    var positionSouris = e.clientX;

    var pourcentagePositionSouris = ((positionSouris)/largeurEcran)*100;

    //console.log(pourcentagePositionSouris);

    if(pourcentagePositionSouris > 10 && pourcentagePositionSouris < 90)
    {
        splitGauche.style.width = pourcentagePositionSouris+"%";
        splitDroit.style.width = (100-pourcentagePositionSouris)+"%";

        root.style.setProperty('--position-selecteur-split', pourcentagePositionSouris + "vw");
        root.style.setProperty('--marge-ecran-splite-droit', ((50-pourcentagePositionSouris)*0.985)+0.3 + "vw");
    }
}

function closeDragElement() {
    //Si on relache la souris, on arrête le drag
    /*document.onmouseup = null;
    document.ontouchend = null;

    document.onmousemove = null;
    document.ontouchmove = null;*/

    document.removeEventListener("mouseup", closeDragElement);
    document.removeEventListener("touchend", closeDragElement);

    document.removeEventListener("mousemove", dragSplit);
    document.removeEventListener("touchmove", dragSplit);
  }
