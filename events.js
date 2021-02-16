
/* Tools */
function ausgabe(outputStr) {
    console.log(outputStr);
}


/** Definition Btn */
let btn;
btn = document.getElementById("trigBtn");
//btn = document.body;
//ausgabe(btn);

/** Event-Überwachung, hier: KLick! */
btn.addEventListener("click", actOnClick);


//actOnClick();
function actOnClick() {
    ausgabe("hier wurde geklickt!");
}

