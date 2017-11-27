function hacerSalsa() {
  return Promise.resolve();
}

function hervirFideos() {
  return Promise.resolve();
}

function ponerLaMesa() {
  return Promise.resolve();
}

Promise.all([hacerSalsa, hervirFideos, ponerLaMesa])
  .then((res) => {
    console.log("a comerrrrrrrrrr!");
  });