// Amb querySelector
function enviarSalutacio() {
    var nom = document.querySelector("#nom").value;
    var cognom = document.querySelector("#cognom").value;
    document.getElementById("salutacio").innerHTML = "HOLA " + nom + " "+ cognom + ", GRACIES PER OMPLIR EL FORMULARI";

}


// Utilirzant name de HTML

// function enviarSalutacio() {
//     var nom = document.form.nom.value;
//     var cognom = document.form.cognom.value;
//     document.getElementById("salutacio").innerHTML = "HOLA " + nom + " "+ cognom + ", GRACIES PER OMPLIR EL FORMULARI";
// } 