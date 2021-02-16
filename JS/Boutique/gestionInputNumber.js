//GESTION de l'input number personnalisé

var Moins = document.getElementById('Moins');
var Plus = document.getElementById('Plus');

Moins.addEventListener('click', function(){
    var input = this.parentNode.getElementsByTagName('input')[0];
    input.stepDown();
});

Plus.addEventListener('click', function(){
    var input = this.parentNode.getElementsByTagName('input')[0];
    input.stepUp();
});