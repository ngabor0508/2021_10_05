class Film{
    constructor(nev, rendezo, kiadasiEv){
    this.nev = nev;
    this.rendezo = rendezo;
    this.kiadasiEv = kiadasiEv;
    }
}

let filmekAdatok = [];

function hozzaAdGomb(){
    let nev = document.getElementById("nev").value;
    let rendezo = document.getElementById("rendezo").value;
    let kiadasiEv = document.getElementById("kiadasiEv").value;
    let f1 = new Film(nev,rendezo,kiadasiEv);
    filmekAdatok.push(f1);
    console.log(filmekAdatok);
}

function listazasGomb(){
    let ellenorzes = document.getElementById("tablazat_id").innerHTML;
    let tablazat = "";
    if(ellenorzes == ""){
        let tablazat = "<table><tr><th>Név</th><th>Rendező</th><th>Kiadási év</th></tr>";
        for(let i = 0; i < filmekAdatok.length; i++){
            tablazat += "<tr><td>"+filmekAdatok[i].nev+"</td>"+"<td>"+filmekAdatok[i].rendezo+"</td>"+"<td>"+filmekAdatok[i].kiadasiEv+"</td></tr>";
        }
        tablazat += "</table>";
        document.getElementById("tablazat_id").innerHTML = tablazat;
    }
    else {
        document.getElementById("tablazat_id").innerHTML = "";
    }
}
