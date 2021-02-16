
/* Tools */
function ausgabe(outputStr) {
    console.log(outputStr);
}

/** Definition DOM-Elemente */
item_body = document.body;
item_h1 = document.body.children[0];
item_p = document.body.children[1];

// ausgabe(item_body);
// ausgabe(item_h1);
// ausgabe(item_p);

/** Definition Btn */
let btn;
btn = document.getElementById("trigBtn");


/** Event-Überwachung, hier: KLick! */
btn.addEventListener("click", actOnClick);


//actOnClick();
function actOnClick() {
    ausgabe("hier wurde geklickt!");

    if (true) { // ??
        switchToNightMode();
    } else {
        switchToDayMode()
    }
}

function switchToDayMode() {
    item_body.className = "day";
    item_h1.className = "day";
    item_p.className = "day";
}

//switchToNightMode();
function switchToNightMode() {
    item_body.className = "night";
    item_h1.className = "night";
    item_p.className = "night";
}

