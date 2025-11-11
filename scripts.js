import { data } from "./data.js";

const mostrar = document.getElementById("container")

console.log(data)
mostrar.innerHTML+=""



function randomColor() {
  const randomHex = () => Math.floor(Math.random() * 256);
  return `rgb(${randomHex()}, ${randomHex()}, ${randomHex()})`;
}


function aplicarGradienteColor(element) {
  const c1 = randomColor();
  const c2 = randomColor();
  const c3 = randomColor();
  element.style.background = `linear-gradient(135deg, ${c1}, ${c2}, ${c3})`;
  element.style.color = "white";
}

data.forEach(element => {
  
  const div = document.createElement("div");
  div.classList.add("row");
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.marginBottom = "20px";
  div.style.borderRadius = "10px";
  div.style.padding = "10px";
  div.style.background = "#ddd";

  
  div.innerHTML = `
    <div class="col-4" style="flex: 1;">
      <h1 class="display-1">${element.letra}</h1>
      <h3>${element.Name}</h3>
    </div>
    <div class="col-8" style="flex: 2;">
      <img src="${element.URL}" class="img-thumbnail" style="max-width: 100%; border-radius: 10px;">
    </div>
  `;

  
  const boton = document.createElement("button");
  boton.textContent = "Color";
  boton.style.marginLeft = "10px";
  boton.style.padding = "6px 10px";
  boton.style.borderRadius = "8px";
  boton.style.border = "1px solid #888";
  boton.style.cursor = "pointer";

  
  boton.addEventListener("click", (e) => {
    e.stopPropagation();
    aplicarGradienteColor(div);
  });

  
  div.appendChild(boton);

  
  mostrar.appendChild(div);
});





