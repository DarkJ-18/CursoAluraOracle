function 


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



function desencriptar(traduccion) {
    const warning = document.querySelector("#warning");
    warning.removeAttribute("style");
    const textarea = document.querySelector("#texto");
    let texto = textarea.value.trim();
    const areaDefault = document.querySelector("#default");
    const areaResult = document.querySelector("#result");
    const textoOut = document.querySelector("#texto_out");

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

    Object.keys(traduccion).forEach(vocal => {
        texto = texto.replace(new RegExp(traduccion[vocal], "g"), vocal);
    });

    areaDefault.classList.add("invisible");
    areaResult.classList.remove("invisible");
    textoOut.innerHTML = texto;
}

function clipboard() {
    const textoOut = document.querySelector("#texto_out");
    navigator.clipboard.writeText(textoOut.innerHTML); // Cambiado a innerHTML si texto_out es un contenedor y no un input/textarea
}

const enc = document.querySelector('#enc');
const des = document.querySelector('#des');
const copy = document.querySelector('#copiar');

const traduccion = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

enc.addEventListener('click', function() { encriptar(traduccion); });
des.addEventListener('click', function() { desencriptar(traduccion); });
copy.addEventListener('click', function() { clipboard(); });