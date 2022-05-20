let statoOrdine = document.getElementById("statoOrdine");
let totOrdine = document.getElementById("totOrdine");
let codice = document.getElementById("codice");
let invia = document.getElementById("submit");
let form = document.getElementById("myform");



form.addEventListener("submit", function (evt) {

    evt.preventDefault();
    console.log(statoOrdine.value);
    console.log(totOrdine.value);
    console.log(codice.value);
    

    //console.log(firstname);
    let jeson = {
        statoOrdine: statoOrdine.value,
        totOrdine: totOrdine.value,
        codice: codice.value,
    };

    console.log(jeson)
    //nostre
});