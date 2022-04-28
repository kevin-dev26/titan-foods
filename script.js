// Seção do Banner

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
  nextImage();
}, 7000)

function nextImage(){
  count++;
  if(count>4){
    count = 1;
  }

  document.getElementById("radio"+count).checked = true;

}

// Seção Menu Lateral

const botaoMenu = document.querySelector(".cabecalho-menu-lateral")
const menu = document.querySelector(".menu-lateral")

botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-lateral--ativo");
})