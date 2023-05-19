const [usuario, senha] = document.querySelectorAll("input");
const botaoSeta = document.querySelector(".arrow-button");

function verificar(){
    if(usuario.value && senha.value.length>=8){
        botaoSeta.classList.add("ativarCor")
        //console.log(botaoSeta);
        botaoSeta.removeAttribute("disabled");
    }else{
        botaoSeta.classList.remove("ativarCor");
        botaoSeta.setAttribute("disabled", "disabled");
    }
}

usuario.addEventListener("input", verificar);
senha.addEventListener("input", verificar);