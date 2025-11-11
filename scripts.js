import { data } from "./data.js";

const mostrar = document.getElementById("container")

console.log(data)
mostrar.innerHTML+=""


// ---------- mostrar imagenes
data.forEach(element => {
  mostrar.innerHTML += `
    <div class="row" style="display: flex; align-items: center; margin-bottom: 20px;">
      <div class="col-4" style="flex: 1;">
        <h1 class="display-1">${element.letra}</h1>
        <h3>${element.Name}</h3>
      </div>
      <div class="col-8" style="flex: 2;">
        <img src="${element.URL}" class="img-thumbnail" style="max-width: 100%; border-radius: 10px;">
      </div>
      <Button>Color</Button>
    </div>
  `;
});


// ---------- generar Color



//-----------------aplicarcolor





