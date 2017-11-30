function makeDough() {
  console.log("haciendo masa...");
  return new Promise((resolve, reject) => {

    const dough = {
      components: [],
      add(c) {
        this.components.push(c);
      }
    };
    setTimeout(() => resolve(dough), 1000);
  });
}

function makeSauce(tipo) {
  console.log(`haciendo salsa tipo ${tipo}...`);
  return new Promise((resolve, reject) => {

    const cheese = {
      determineCheese() {
        return;
      }
    }
    setTimeout(() => resolve(cheese), 1000);
  });
}

function grateCheese(sauce) {
  console.log("haciendo queso...");
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000);
  });
}

// example from https://medium.com/@bluepnume/even-with-async-await-you-probably-still-need-promises-9b259854c161
// |-------- dough --------> |-------- sauce --------> |-- cheese -->
async function makePizza(sauceType = 'red') {
  
  let dough  = await makeDough();
  let sauce  = await makeSauce(sauceType);
  let cheese = await grateCheese(sauce.determineCheese());
  
  dough.add(sauce);
  dough.add(cheese);
  
  return dough;
}



// quiero algo así:
// |-------- dough -------->
// |-------- sauce --------> |-- cheese -->
async function makePizza2(sauceType = 'red') {
  
  let [ dough, sauce ] = await Promise.all([ makeDough(), makeSauce(sauceType) ]);
  let cheese = await grateCheese(sauce.determineCheese());

  dough.add(sauce);
  dough.add(cheese);

  return dough;
}

// puede darme algo así:
// |-------- dough -------->
// |--- sauce --->           |-- cheese -->




// quiero algo así:
// |-------- dough -------->
// |------ sauce -----> |-- cheese -->
async function makePizza3(sauceType = 'red') {
  
  let doughPromise  = makeDough();
  let saucePromise  = makeSauce(sauceType);
  let cheesePromise = saucePromise.then(sauce => {
    return grateCheese(sauce.determineCheese());
  });
  
  return Promise.all([ doughPromise, saucePromise, cheesePromise ])
    .then(([ dough, sauce, cheese ]) => {
      
      dough.add(sauce);
      dough.add(cheese);
      
      return dough;
    });
}


// lo mismo, puramente async/await
async function makePizza4(sauceType = 'red') {
  
  let doughPromise = makeDough();
  let saucePromise = makeSauce(sauceType);
  
  let sauce  = await saucePromise;
  let cheese = await grateCheese(sauce.determineCheese());
  let dough  = await doughPromise;
  
  dough.add(sauce);
  dough.add(cheese);
  
  return dough;
}


module.exports = {
  makePizza,
  makePizza2,
  makePizza3,
  makePizza4
};