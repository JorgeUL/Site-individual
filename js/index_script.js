function entrar_sobre() {
    window.location.href = "sobre.html";
}

function entrar_cadastro() {
    window.location.href = "cadastro.html";
}


window.onscroll = function() {myFunction()};

var header = document.getElementById("headersite");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}