//On récupère le div qui contient le tableau
var fraisLivraison = document.getElementById("fraisLivraison");

//On récupère le "bouton" 'voir les frais le livraison'
boutonFrais = document.getElementsByTagName('section')[0].getElementsByTagName('div')[2].getElementsByTagName('p')[3];

window.addEventListener('resize', gestionAffichageFraisLivraison);
window.addEventListener('load', gestionAffichageFraisLivraison);

function gestionAffichageFraisLivraison()
{
    //Pour les PC
    if (window.matchMedia("(min-width: 1300px)").matches)
    {
        var urlActuel = window.location.href;
        //Si le liens contient l'ancre #fraisLivraison
        if(urlActuel.indexOf("#fraisLivraison") >= 0)
        {
            var url = window.location.href.split('#')[0];
            window.location.href = url;
        }

        //On ajoute le style pour les PC
        fraisLivraison.classList.add('fraisPourPc');
        fraisLivraison.style.display = "none";

        //On ajoute des évènements lors du hover
        boutonFrais.removeEventListener('mouseover', afficherFrais);
        boutonFrais.addEventListener('mouseover', afficherFrais);

        boutonFrais.removeEventListener('mouseout', masquerFrais);
        boutonFrais.addEventListener('mouseout', masquerFrais);

        //On enlève le lien, s'il y en a un
        boutonFrais.removeEventListener('click', lienFrais);

    }
    // Pours les mobiles et tablettes
    else if(window.matchMedia("(max-width: 1300px)").matches)
    {
        //On enlève les évènements lors du hover
        boutonFrais.removeEventListener('mouseover', afficherFrais);
        boutonFrais.removeEventListener('mouseout', masquerFrais);
        
        //On enlève le styel propre aux PC
        fraisLivraison.classList.remove('fraisPourPc');
        fraisLivraison.style.display = "inherit";


        //On ajoute des évènements au clique
        boutonFrais.removeEventListener('click', lienFrais);
        boutonFrais.addEventListener('click', lienFrais);
    }
}

function afficherFrais()
{
    fraisLivraison.style.display = "inherit";
}

function masquerFrais()
{
    fraisLivraison.style.display = "none";
}

function lienFrais()
{
    window.location.href = "#fraisLivraison";
}