var i = 0;
var tableau = [];
document.getElementById("envoyer-1").addEventListener("click",function(){
    var taille = document.getElementById("taille").value;
    document.getElementById("envoyer-2").addEventListener("click",function(){
        
       if(i < taille) {
           var chiffre = document.getElementById("tab").value;
           tableau.push(chiffre);
           i++;
       }else{
           console.log(tableau);
           document.getElementById("envoyer-2").value = "Générer";
           document.getElementById("envoyer-2").addEventListener("mouseover",function(){
               document.getElementById("moyenne").textContent = moyenne(tableau);
               document.getElementById("variance").textContent = variance(tableau);
               document.getElementById("ecart-type").textContent = ecartType(tableau);
           });
       }
        
        
    });
       
});

document.getElementById("reset-1").addEventListener("click",function(){
    document.location.reload(true);
});

document.getElementById("reset-2").addEventListener("click",function(){
    document.location.reload(true);
});

function moyenne(tableau){
    var sum =0;
    var calcul = 0;
    for(var i = 0; i<tableau.length; i++){
        sum += parseInt(tableau[i]);
        i++;
    }
    
    calcul = sum / tableau.length;
    return calcul;
}

function variance(tableau){
    var moy = moyenne(tableau);
    var sum = 0;
    var calcul = 0;
    for(var i =0; i<tableau.length; i++){
        sum += (parseInt(tableau[i])-moy) * (parseInt(tableau[i])-moy);
        i++;
    }
    calcul = sum / tableau.length;
    return calcul;
}

function ecartType(tableau){
    var racine = variance(tableau);
    return Math.sqrt(racine);
}