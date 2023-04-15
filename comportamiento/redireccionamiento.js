function Pagina() {
  const pagina = document.getElementById("figura");
  const figuraS = document.getElementById("figura_select");

  if (figuraS.value === "cuadrado") {
    pagina.setAttribute("action", "./contenido/cuadrado.html");
  } else if (figuraS.value === "triangulo")
    pagina.setAttribute("action", "./contenido/triangulo.html");
  else if (figuraS.value === "circulo")
    pagina.setAttribute("action", "./contenido/circulo.html");
}
