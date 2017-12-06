const teams = [
  {
    name: "Rusia",
    box: 0,
    federation: "Conmebol",
    group: "A"
  },
  {
    name: "Argentina",
    box: 1,
    federation: "Conmebol",
    group: ""
  },
  {
    name: "Alemania",
    box: 1,
    federation: "UEFA",
    group: ""
  },
  {
    name: "Brasil",
    box: 1,
    federation: "Conmebol",
    group: ""
  },
  {
    name: "Francia",
    box: 1,
    federation: "UEFA",
    group: ""
  },
  {
    name: "Portugal",
    box: 1,
    federation: "UEFA",
    group: ""
  },
  {
    name: "Polonia",
    box: 1,
    federation: "UEFA",
    group: ""
  },
  {
    name: "Bélgica",
    box: 1,
    federation: "UEFA",
    group: ""
  },
  {
    name: "España",
    box: 2,
    federation: "UEFA",
    group: ""
  },
  {
    name: "Peru",
    box: 2,
    federation: "Conmebol",
    group: ""
  },
  {
    name: "Suiza",
    box: 2,
    federation: "UEFA",
    group: ""
  },
  {
    name: "Inglaterra",
    box: 2,
    federation: "UEFA",
    group: ""
  },
  {
    name: "Colombia",
    box: 2,
    federation: "Conmebol",
    group: ""
  },
  {
    name: "Mexico",
    box: 2,
    federation: "Concacaf",
    group: ""
  },
  {
    name: "Uruguay",
    box: 2,
    federation: "Conmebol",
    group: ""
  },
  {
    name: "Croacia",
    box: 2,
    federation: "UEFA",
    group: ""
  },
  {
    name: "Dinamarca",
    box: 3,
    federation: "UEFA",
    group: ""
  },
  {
    name: "Islandia",
    box: 3,
    federation: "UEFA",
    group: ""
  },
  {
    name: "Costa Rica",
    box: 3,
    federation: "Concacaf",
    group: ""
  },
  {
    name: "Suecia",
    box: 3,
    federation: "UEFA",
    group: ""
  },
  {
    name: "Túnez",
    box: 3,
    federation: "Africa",
    group: ""
  },
  {
    name: "Egipto",
    box: 3,
    federation: "Africa",
    group: ""
  },
  {
    name: "Senegal",
    box: 3,
    federation: "Africa",
    group: ""
  },
  {
    name: "Iran",
    box: 3,
    federation: "Asia",
    group: ""
  },
  {
    name: "Serbia",
    box: 4,
    federation: "UEFA",
    group: ""
  },
  {
    name: "Nigeria",
    box: 4,
    federation: "Africa",
    group: ""
  },
  {
    name: "Australia",
    box: 4,
    federation: "Oceania",
    group: ""
  },
  {
    name: "Japón",
    box: 4,
    federation: "Asia",
    group: ""
  },
  {
    name: "Marruecos",
    box: 4,
    federation: "Africa",
    group: ""
  },
  {
    name: "Panama",
    box: 4,
    federation: "Concacaf",
    group: ""
  },
  {
    name: "Corea del Sur",
    box: 4,
    federation: "Asia",
    group: ""
  },
  {
    name: "Arabia Saudita",
    box: 4,
    federation: "Asia",
    group: ""
  }
];


/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getTeamsForBox(n) {
  return teams.filter(t => t.box === n);
}

function getTeamsForFederation(name) {
  return teams.filter(t => t.federation === name);
}

function getTeamsForGroup(group) {
  return teams.filter(t => t.group === group);
}


/** 
 * Rusia entra directo como cabeza de serie al grupo A (país organizador)
 * del box 1 sale cada cabeza de serie (para el grupo B al H)
 * del box 2 salen los 3ros de cada grupo
 * del box 3 uno a cada grupo y lo mismo del 4
 */
function simulate() {
  const groups = ["A", "B", "C", "D", "E", "F", "G", "H"];

  for (let i = 1; i <= 4; i++) {
    let teamsForBox = shuffle(getTeamsForBox(i));

    teamsForBox.forEach((team, index) => {
      if (i === 1) {
        index++;
      }
      team.group = groups[index];
    });
  }

  console.log("Resultado del sorteo")
  groups.forEach(g => {
    console.log(`Grupo ${g}:`);
    let teamNames = getTeamsForGroup(g).map(t => t.name);
    console.log(teamNames.join(", "));
  })
}

simulate();