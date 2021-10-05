class Film{
    constructor(nev, rendezo, kiadasiEV){
    this.nev = nev;
    this.rendezo = rendezo;
    this.kiadasiEV = kiadasiEV;
    }
}

let filmAdatok = [];

function hozzaAdGomb(){
    let nev = document.getElementById("nev").value;
    let rendezo = document.getElementById("rendezo").value;
    let kiadasiEV = document.getElementById("kiAdasiEv").value;
    filmAdatok.push(nev,rendezo,kiadasiEv);
}

