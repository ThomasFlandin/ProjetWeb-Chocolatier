var parents = document.getElementsByClassName('parent');

for(var i = 0 ; i < parents.length; i++)
{
    var image = parents[i].getElementsByTagName("img")[0];
    image.addEventListener('mouseover', animationHover);
}


function animationHover()
{
    //
    enfants = document.getElementsByClassName("enfant");
    for(var i=0; i < enfants.length; i++)
    {
        enfants[i].style.opacity = "0%";
        enfants[i].style.zIndex = "auto";
    }

    var parent = this.parentNode;
    var enfant = parent.getElementsByClassName('enfant')[0];
    enfant.style.transition = "0.6s";
    enfant.style.opacity = "100%";
    enfant.style.zIndex = "2";
}