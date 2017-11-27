function obtenerSemilla() {
  return Promise.resolve("ok");
}

function germinarSemilla() {
  return Promise.resolve("ok");
}

function plantarSemillaGerminada() {
  return Promise.resolve("ok");
}

function regarTierra() {
  return Promise.resolve("ok");
}

function cosecharFrutos() {
  // puede no ser una Promise
  const prob = Math.floor((Math.random() * 10)); // 0..10
  if (prob <= 2) {
    throw new Error("se honguearon :(");
  } else {
    return {
      especie: "Tomate",
      variedad: "Redondo",
      cantidad: 30
    };
  }
}

function huerta() {
  return obtenerSemilla()
    .then(germinarSemilla)
    .then(plantarSemillaGerminada)
    .then(regarTierra)
    .then(cosecharFrutos)
}

console.log("antes de evaluar por fulfilled (then): ", huerta());

huerta()
  .then((res) => {
    console.log("mi huerta dió: ", res);
  })
  .catch((err) => {
    console.log("error: ", err);
  });