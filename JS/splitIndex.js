var selecteursplit = document.getElementById('selecteurSplitJs');

var splitGauche = document.getElementById('splitChocolatJsGauche');
var splitDroit = document.getElementById('splitChocolatJsDroit');
let root = document.documentElement;

selecteursplit.addEventListener('mousedown', dragMouseDown);

function dragMouseDown(e)
{
    e = e || window.event;
    e.preventDefault();

    document.onmouseup = closeDragElement;
    
    //lorsque le curseur bouge, on appel
    document.onmousemove = dragSplit;
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
        root.style.setProperty('--marge-ecran-splite-droit', (50-pourcentagePositionSouris) + "vw");
    }
}

function closeDragElement() {
    //Si on relache la souris, on arrête le drag
    document.onmouseup = null;
    document.onmousemove = null;
  }
