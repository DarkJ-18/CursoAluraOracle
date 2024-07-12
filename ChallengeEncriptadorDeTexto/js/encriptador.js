function encriptar(traduccion) {
    const warning = document.querySelector("#warning");
    const textarea = document.querySelector("#texto");
    const texto = textarea.value.trim();
    const areaDefault = document.querySelector("#default");
    const areaResult = document.querySelector("#result");
    const textoOut = document.querySelector("#texto_out");

    warning.removeAttribute("style");

    if (texto === "") {
        areaDefault.classList.remove("invisible");
        areaResult.classList.add("invisible");
        return;
    }

    if (!/^[a-z ]+$/.test(texto)) {
        warning.style.color = "red";
        warning.style.fontSize = "16px";
        return;
    }

    let out = "";
    for (let i = 0; i < texto.length; i++) {
        out += traduccion[texto[i]] || texto[i];
    }

    areaDefault.classList.add("invisible");
    areaResult.classList.remove("invisible");
    textoOut.innerHTML = out;
}
const traduccion = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};
const enc = document.querySelector('#enc');


enc.addEventListener( 'click', function() {encriptar(traduccion);} );
des.addEventListener( 'click', function() {desencriptar(traduccion);} );
copy.addEventListener( 'click', function() {clipboard();} );