const testeUrl =
  "https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/teste";
const url =
  "https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo275";

function enviarDatos() {
  let no = document.getElementById("nombre").value;
  let ap = document.getElementById("apellido").value;
  let gr = document.getElementById("grupo").value;
  let sa = document.getElementById("sala").value;
  fetch(testeUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ nombre: no, apellido: ap, grupo: gr, sala: sa }),
  });
}

function mostrarDatos() {
  var div = document.getElementById("mostrar");
  div.innerHTML = "";
  fetch(testeUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      var posicion = data.length - 1;
      var dato = data[posicion];
      div.innerHTML += `
      <h4>ID generado: ${dato._id}</h4>
      <p>Nombre: ${dato.nombre} ${dato.apellido}</p>
      <p>Grupo: ${dato.grupo}</p>
      <p>Sala: ${dato.sala}</p>
    `;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  var boton = document.getElementById("enviar");
  boton.addEventListener("click", function () {
    enviarDatos();
    setTimeout(mostrarDatos(), 15000);
  });
});
