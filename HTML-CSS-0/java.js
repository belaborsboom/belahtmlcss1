let plaatje = document.getElementById("tijger");
plaatje.addEventListener("click", plaatgroot)
function plaatgroot(){
  plaatje.outerHTML = '<img id="tijger2" src="https://belaborsboom.github.io/HTML-CSS-0/belatomaat.jpeg"></img>';
  let plaatje2 = document.getElementById("tijger2");
  plaatje2.style.heigth = 117px;
  plaatje2.style.width = 100px;
}

