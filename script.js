const botao = document, querySelector("button")
    botao.addEventListener('clic', curtir)

    function curtir(){
        let curtidas = document. querySelector("span")
        curtidas.textContent++;
    }

    // BOTÃO DO TAMANHO
    const tamanho = document.getElementById("tamanho")
    tamanho.addEventListener("click", aumentarForte)

    // FUNÇÃO
    function aumentarForte(){
        fonte++;
        document.body.style.fontSize = fonte + "px"; 

    }