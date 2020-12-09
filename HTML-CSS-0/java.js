let plaatje = document.getElementById("tijger");
plaatje.addEventListener("click", plaatgroot)
function plaatgroot(){
  plaatje.outerHTML = '<img id="tijger" src="https://belaborsboom.github.io/HTML-CSS-0/belatomaat.jpeg"></img>';
}

