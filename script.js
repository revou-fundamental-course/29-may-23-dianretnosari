function onformsubmit() {
    var hasil = validationform();
}

function validationform() {
    var nama = document.forms["hasil"]["nama"].value;
    var tanggal = document.forms["hasil"]["tanggal"].value;
    var gender = document.forms["hasil"]["gender"].value;
    var pesan = document.forms["hasil"]["pesan"].value;

    if (nama == "" || tanggal == "" || gender == "" || pesan == "") {
        alert("input tidak boleh kosong");
        return false;
    }

    document.getElementById("namakamu").innerHTML = nama;
    document.getElementById("tanggallahir").innerHTML = tanggal;
    document.getElementById("yourgender").innerHTML = gender;
    document.getElementById("pesanmu").innerHTML = pesan;
    return false;
}
