document.getElementById("valider").addEventListener("click",function(){
    var taille = document.getElementById("infos").value;
    document.getElementById("valider-1").addEventListener("click",function(){
        var stern = document.getElementById("stern").value;
        var multipl = (taille * stern)/2;
        alert("L'aire du triangle est:"+' '+ multipl+' '+ "m²");
    })
})


document.getElementById("retry").addEventListener("click",function(){
    document.location.reload(true);
})

document.getElementById("retry-1").addEventListener("click",function(){
    document.location.reload(true);
})