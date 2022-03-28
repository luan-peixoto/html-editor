/* listener de quando mudar conteúdo da div */

document.getElementById("content-box").addEventListener("input", function() {
    console.log("input event fired");
    let html = document.getElementById("content-box").innerHTML;
    document.getElementById("result-box").innerText = html;
}, false);


/* copiar texto */

function copiarTexto() {
    let texto = document.getElementById("content-box").innerText;
  
    navigator.clipboard.writeText(texto);
  
    /* Alert the copied text */
    alert("Texto copiado para área de transfêrencia");
};


function setEstilo(estilo) {
    if (estilo == 'createLink' || estilo == 'insertImage') {
        let url = prompt('Digite o url:', 'https://');
        return document.execCommand(estilo, false, url);
    }
    document.execCommand(estilo, false, null);
};