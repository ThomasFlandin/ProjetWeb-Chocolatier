
// On cherche le paramètre 'type' dans l'url
var url_string = window.location.href;
var url = new URL(url_string);
var type = url.searchParams.get("type");

// On gère les différents cas des valeurs de 'type'
if(type == null || type == "lait")
{
    console.log("Hey, hey tu veux acheter du chocolat au lait");
}
else if(type == "noir")
{
    console.log("Hey, hey tu veux acheter du chocolat noir");
}
else if(type == "blanc")
{
    console.log("Hey, hey tu veux acheter du chocolat blanc");
}
else
{
    // Si la valeur est incorrecte on enlève les paramètres de l'url
    var url = window.location.href.split('?')[0];
    window.location.href = url;
}
