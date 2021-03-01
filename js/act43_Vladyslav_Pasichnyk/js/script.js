function comprova() {
    var x = document.form.x.value;
    var y = document.form.y.value;
    if (x == y) {
        alert ("El password coinsideix");
    }else {
        alert ("Els paswords no coincideixen");
        alert (x);
        alert (y);
    }
}