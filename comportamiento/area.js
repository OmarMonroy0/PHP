function AreaCuadrado() {
  const lado = document.getElementById("lado").value;
  const formulario = document.getElementById("cuadrado");

  if (!lado) {
    window.alert("No puedes dejar el campo vacio");
    formulario.setAttribute("action", "./cuadrado.html");
    return;
  } else if (lado <= 0) {
    window.alert("No puedes ingresar un valor negativo");
    formulario.setAttribute("action", "./cuadrado.html");
    return;
  }
  const area = lado * lado;
  window.alert(`El area del cuadrado es: ${area}`);
  fetch("../servidor/index.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ figura: "cuadrado", lado, area }),
  }).then((_) => {
    console.log("Todo funcionando de manera correcta");
  });
  window.alert("Se ingresaron los datos en la base de datos");
}

function AreaCirculo() {
  const radio = document.getElementById("radio").value;
  const formulario = document.getElementById("circulo");

  if (!radio) {
    window.alert("No puedes dejar el campo vacio");
    formulario.setAttribute("action", "./circulo.html");
    return;
  } else if (radio <= 0) {
    window.alert("No puedes ingresar un valor negativo");
    formulario.setAttribute("action", "./circulo.html");
    return;
  }
  const area = Math.PI * radio * radio;

  window.alert(`El area del circulo es: ${area}`);
  fetch("../servidor/index.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ figura: "circulo", radio, area }),
  }).then((_) => {
    console.log("Todo funcionando de manera correcta");
  });
  window.alert("Se ingresaron los datos en la base de datos");
}

function AreaTriangulo() {
  const base = document.getElementById("base").value;
  const altura = document.getElementById("altura").value;

  const formulario = document.getElementById("triangulo");

  if (!base) {
    window.alert("No puedes dejar el campo de la base vacio");
    formulario.setAttribute("action", "./triangulo.html");
    return;
  } else if (base <= 0) {
    window.alert("No puedes ingresar un valor negativo");
    formulario.setAttribute("action", "./triangulo.html");
    return;
  } else if (!altura) {
    window.alert("No puedes dejar el campo de la altura vacio");
    formulario.setAttribute("action", "./triangulo.html");
    return;
  } else if (altura <= 0) {
    window.alert("No puedes ingresar un valor negativo");
    formulario.setAttribute("action", "./triangulo.html");
    return;
  }

  const area = base * altura * 0.5;

  window.alert(`El area del triangulo es: ${area}`);
  fetch("../servidor/index.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ figura: "triangulo", base, altura, area }),
  }).then((_) => {
    console.log("Todo funcionando de manera correcta");
  });
  window.alert("Se ingresaron los datos en la base de datos");
}
