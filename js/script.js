/* listener de quando mudar conteúdo da div */

document.getElementById("content-box").addEventListener("input", function() {
    console.log("input event fired");
    let html = document.getElementById("content-box").innerText;
    document.getElementById("result-box").innerHTML = html;
}, false);


/* copiar texto */

function copiarTexto() {
    let texto = document.getElementById("content-box").innerText;
  
    navigator.clipboard.writeText(texto);
  
    /* Alert the copied text */
    alert("Texto copiado para área de transfêrencia");
  }