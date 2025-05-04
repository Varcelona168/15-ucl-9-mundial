let ismDom = prompt (`Ismingiz`)
let yoshDom = prompt (`yoshingiz`)
let p = document.createElement("p")
p.textContent = "Ismingiz: " + ismDom + ", Yoshingiz: " + yoshDom;

p.style.fontSize = "20px";
p.style.color = "white";
p.style.fontWeight = "bold";
p.style.backgroundColor = "black"



document.body.appendChild(p);