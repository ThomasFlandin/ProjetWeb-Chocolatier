//////////////////////////////////////////////////////////////////////
//
//
//      SCRIPT QUI PERMET DE CHANGER LES IMAGES DU LISTING          //
//
//
//

// On cherche le paramètre 'type' dans l'url
var url_string = window.location.href;
var url = new URL(url_string);
var type = url.searchParams.get("type");
bouton = [];


// On récupère les boutons qui permettent de changer d'images
recupererBoutons();

//On stock les images en fonction des variantes
tableauImage = ['Images/Boutique/Listing/TabletteChocolatLait.jpg', 'Images/Boutique/Listing/TabletteListingLait.jpg', 'Images/Boutique/Listing/MiseEnSceneChocolat.jpg'];
tripletPhotosChocolatLait = ['Images/Boutique/Listing/TabletteChocolatLait.jpg', 'Images/Boutique/Listing/TabletteListingLait.jpg', 'Images/Boutique/Listing/MiseEnSceneChocolat.jpg'];
tripletPhotosChocolatBlanc = ['Images/Boutique/Listing/TabletteChocolatBlanc.jpg', 'Images/Boutique/Listing/TabletteListingBlanc.jpg', 'Images/Boutique/Listing/MiseEnSceneChocolat.jpg'];
tripletPhotosChocolatNoir = ['Images/Boutique/Listing/TabletteChocolatNoir.jpg', 'Images/Boutique/Listing/TabletteListingNoir.jpg', 'Images/Boutique/Listing/MiseEnSceneChocolat.jpg'];


//On récupère l'élément qui affiche l'image sélectionnée
affichageImage = document.getElementsByTagName('section')[0].getElementsByTagName('div')[0].getElementsByTagName('img')[0];

// On gère les différents cas des valeurs de 'type'
if(type == null || type == "lait")
{
    console.log("Hey, hey tu veux acheter du chocolat au lait");

    //On change les images
    tableauImage = ['Images/Boutique/Listing/TabletteChocolatLait.jpg', 'Images/Boutique/Listing/TabletteListingLait.jpg', 'Images/Boutique/Listing/MiseEnSceneChocolat.jpg'];
    
    //On les applique sur les boutons
    miseAJoutBoutons(bouton, tripletPhotosChocolatLait);

    //On change la photo qui est affichée
    affichageImage.setAttribute("src", tripletPhotosChocolatLait[0]);
}
else if(type == "noir")
{
    console.log("Hey, hey tu veux acheter du chocolat noir");
    tableauImage = ['Images/Boutique/Listing/TabletteChocolatNoir.jpg', 'Images/Boutique/Listing/TabletteListingNoir.jpg', 'Images/Boutique/Listing/MiseEnSceneChocolat.jpg'];

    miseAJoutBoutons(bouton, tripletPhotosChocolatNoir);
    affichageImage.setAttribute("src", tripletPhotosChocolatNoir[0]);
}
else if(type == "blanc")
{
    console.log("Hey, hey tu veux acheter du chocolat blanc");
    tableauImage = ['Images/Boutique/Listing/TabletteChocolatBlanc.jpg', 'Images/Boutique/Listing/TabletteListingBlanc.jpg', 'Images/Boutique/Listing/MiseEnSceneChocolat.jpg'];;

    miseAJoutBoutons(bouton, tripletPhotosChocolatBlanc);
    affichageImage.setAttribute("src", tripletPhotosChocolatBlanc[0]);
}
else
{
    // Si la valeur est incorrecte on enlève les paramètres de l'url
    var url = window.location.href.split('?')[0];
    window.location.href = url;
}

//Fonction qui récupère les éléments html qui servent de boutons pour changer d'images
function recupererBoutons()
{
    var i = 1;

    // Tant qu'il y a des boutons de sélection d'image.
    while (true)
    {
        //On recherche les boutons images dans le html
        var temp = document.getElementsByTagName('section')[0].getElementsByTagName('div')[0].getElementsByTagName('img')[i];
        
        //S'il éxiste, on l'enregistre et on passe au suivant, sinon on arrête de chercher
        if(temp != undefined)
        {
            bouton[i-1] = temp;
        }
        else
        {
            break;
        }
        i++;
    }
}

//Ajoute un gestionnaire d'évènement à chaque boutons
function miseAJoutBoutons(tableauDeBoutons, tabImages)
{
    //Pour chaque bouton
    for(var i=0; i < tableauDeBoutons.length; i++)
    {
        //On change l'image du bouton
        tableauDeBoutons[i].setAttribute('src', tabImages[i]);
        tableauDeBoutons[i].setAttribute("id", i); //On stock i pour pouvoir le retrouver

        //console.log(tableauDeBoutons[i]);

        //On met à jour les évènements lors du clique sur les boutons
        tableauDeBoutons[i].addEventListener('click', function(){
            var i = this.getAttribute("id");
            affichageImage.setAttribute('src', tableauImage[i]);

        });
    }
}