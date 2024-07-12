const warning = document.querySelector("#warning");
const textarea = document.querySelector("#texto");
const areaDefault = document.querySelector("#default");
const areaResult = document.querySelector("#result");
const textoOut = document.querySelector("#texto_out");


function encriptar(traduccion) {
    warning.removeAttribute("style");

    const texto = textarea.value.trim();

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

function desencriptar(traduccion) {
    warning.removeAttribute("style");

    const texto = textarea.value.trim();

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

    let textoDesencriptado = texto;
    textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");

    areaDefault.classList.add("invisible");
    areaResult.classList.remove("invisible");
    textoOut.innerHTML = textoDesencriptado;
}

function clipboard() {
    navigator.clipboard.writeText(textoOut.value);
}

const traduccion = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};
const enc = document.querySelector('#enc');
const des = document.querySelector('#des');
const copy = document.querySelector('#copy');

enc.addEventListener('click', () => encriptar(traduccion));
des.addEventListener('click', () => desencriptar(traduccion));
copy.addEventListener('click', clipboard);