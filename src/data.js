/* Manejo de data */
const myData = LOL.data;

const ourData = Object.values(LOL.data);

const filterData = (data, condition) => {
  for (var key in condition) {
    if (condition[key] === "All")
      delete condition[key]
  }
  return data.filter(function(champion) {
    for (var key in condition) {
      if (champion[key] === undefined || !champion[key].includes(condition[key]))
        return false;
    }
    return true;
  });
};

const sortData = (championData, sortBy, sortOrder) => {
  let ordenaChampions = championData;

  if (sortOrder == "a-z"){
    ordenaChampions.sort((a,b)=> {
      if (a[sortBy] < b[sortBy]) {return -1;}
      if (a[sortBy] > b[sortBy]) {return  1;}
      return 0;
    })
  }

  if (sortOrder == "z-a"){
    ordenaChampions.sort((a,b)=> {
      if (a[sortBy] > b[sortBy]) {return -1;}
      if (a[sortBy] < b[sortBy]) {return  1;}
      return 0;
    })
  }

  return ordenaChampions;
};

const computeStats = (data) => {
  var hpAverage, maxHp, apAverage, maxAp;
  var healthPoints = data.map(champion => champion["stats"]["hp"]);
  var attackPoints = data.map(champion => champion["info"]["attack"]);
  hpAverage = (healthPoints.reduce(function(a, b){ return a + b; }) / data.length).toFixed(2);
  apAverage = (attackPoints.reduce(function(a, b){ return a + b; }) / data.length).toFixed(2);
  maxHp = Math.max(...healthPoints);
  maxAp = Math.max(...attackPoints);

  return {Salud_Promedio: hpAverage, Ataque_Promedio: apAverage, Salud_Máxima: maxHp, Ataque_Máximo: maxAp};
};

window.filterData = filterData;
window.sortData = sortData;
window.computeStats = computeStats;
