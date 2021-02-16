

//On récupère l'élément qui affiche l'image sélectionnée
var Image = document.getElementsByTagName('section')[0].getElementsByTagName('div')[0].getElementsByTagName('img')[0];

//On récupère l'image zoomée
var zoomDiv = document.getElementById("zoomImageJs");
var zoomImg = zoomDiv.getElementsByTagName("img")[0];



//On ajoute les évènement à l'image
Image.addEventListener('mouseover', function(){

    if (window.matchMedia("(min-width: 1000px)").matches) 
    {
        //On affiche le zoom
        zoomDiv.style.display = "inherit";
        Image.style.cursor = "pointer";
    }
    else
    {
        //On cahce le zoom
        zoomDiv.style.display = "none";
        Image.style.cursor = "normal";
    }
});

Image.addEventListener('mouseout', function(){
    
    //On affiche le zoom
    zoomDiv.style.display = "none";
    Image.style.cursor = "normal";
});

Image.addEventListener('mousemove', mouvementZoom)


function mouvementZoom(event)
{
    //On récupère la position de la souris sur l'image
    var x = event.offsetX;
    var y = event.offsetY;

    //Onn récupère la taille de l'image zommée
    var zoomImgHeight = zoomImg.height;
    var zoomImgWidth = zoomImg.width;

    //On fait notre produit en croix
    var positionZoomX = ((x/Image.width) * zoomImgWidth);
    var positionZoomY = ((y/Image.height) * zoomImgHeight);

    //On applique à l'image zoomée un déplacement.
    zoomImg.style.left = "-"+(positionZoomX - (500/2))+"px";
    zoomImg.style.top = "-"+(positionZoomY  - (500/2))+"px";
}