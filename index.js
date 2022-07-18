let price = 0;
const PreisproNachtfüreinePerson = 50;
const AufschlagfürjedeweiterePerson= 10;
const PreisfürjedesFrühstück= 8;

function run(){
    let anreiseDatum = document.querySelector("#anreiseDatum").value;
    let abreiseDatum = document.querySelector("#abreiseDatum").value;
    
    var d1 = new Date(anreiseDatum);
    var d2 = new Date(abreiseDatum);
    const einTag = 24 * 60 * 60 * 1000;

    // let Datum = d1.getDate() - d2.getDate();
    let Datum = Math.round(Math.abs(d1 - d2))/einTag;

    // let Datum = d.setDate(d.anreiseDatum - d.abreiseDatum);

    // let  Datum = anreiseDatum - abreiseDatum;
    // let AnzahlderNächte = document.querySelector("#AnzahlderNächte").value
    let AnzahlderGäste = document.querySelector("#AnzahlderGäste").value;
    let withBreakfast = document.querySelector("#breakfast").checked;
    calculation(Datum,AnzahlderGäste,withBreakfast);
    document.querySelector("#ausgabe").innerHTML = "Der gesamte Betrag lautet: " + price + "€";
}

function calculation(Datum,AnzahlderGäste,withBreakfast){
    
    Datum = parseInt(Datum);
    AnzahlderGäste = parseInt(AnzahlderGäste);
    
    if (AnzahlderGäste == 1) {
        price = Datum * PreisproNachtfüreinePerson;
    } 
    else {
        price = (Datum * PreisproNachtfüreinePerson * AnzahlderGäste) +(AnzahlderGäste-1) * AufschlagfürjedeweiterePerson;
    }
    if (withBreakfast == true) {
        price = price + (Datum * AnzahlderGäste *8);
    }
    return(price)
}


