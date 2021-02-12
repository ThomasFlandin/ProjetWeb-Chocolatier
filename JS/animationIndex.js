var NumDerniereSection = document.getElementsByTagName("section").length - 1;
var derniereSection = document.getElementsByTagName("section")[NumDerniereSection];
            
for(var i=0; i< derniereSection.getElementsByTagName('div').length; i++)
{
    var div = derniereSection.getElementsByTagName('div')[i];
            
    div.setAttribute("class", "scrollReveal")
}

ScrollReveal().reveal('.scrollReveal', { delay: 250, duration:1000 });