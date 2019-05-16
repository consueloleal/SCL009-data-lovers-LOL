const rootNode     = document.getElementById('root');
const rootStatNode = document.getElementById('stats');
var championStats, filteredData;

document.addEventListener("DOMContentLoaded", load, false);

function load(){
  loadChampion(ourData);
  championStats = window.computeStats(ourData);
  loadStats(championStats);
  selectTag.onchange = function(e) {
    e.preventDefault();
    filteredData = window.filterData(ourData, {tags: selectTag.value});
    removeAll();
    if (selectSortBy.value !== "Normal")
      filteredData = sortData(filteredData, "name", selectSortBy.value)
    loadChampion(filteredData);
    championStats = window.computeStats(filteredData);
    loadStats(championStats);
  }
  selectSortBy.onchange = function(e){
    e.preventDefault();
    filteredData = window.filterData(ourData, {tags: selectTag.value});
    removeAll();
    if (selectSortBy.value !== "Normal")
      filteredData = sortData(filteredData, "name", selectSortBy.value)
    loadChampion(filteredData);
    championStats = window.computeStats(filteredData);
    loadStats(championStats);
  }
}

function removeAll(){
  while (rootNode.firstChild) {
    rootNode.removeChild(rootNode.firstChild);
  }
  while (rootStatNode.firstChild) {
    rootStatNode.removeChild(rootStatNode.firstChild);
  }
}


function loadStats(stats){
  for (var key in stats){
    const statNode = document.createElement("div");
    statNode.className = "statNode col-sm-3";
    statNode.innerHTML = "<span class='statLabel'>" + key.replace("_", " ") + ":</span> " + stats[key];
    rootStatNode.appendChild(statNode);
  }
};

function loadChampion(data){
  data.forEach(function(champion) {
    const championNode = document.createElement("div");

    championNode.id = champion.name;
    championNode.className = "championNode col-sm-3";
    champion.tags.forEach(function(championTag){
      championNode.className += " " + championTag;
    });
    championNode.innerHTML =  '<div class="card" style="width: 15rem;">' + 
                                '<img id="image"src="' + champion.img + '"></img>' + 
                                '<div class="card-body">' + 
                                  '<h5 class="card-title">' + champion.key + " - " + champion.name + '</h5>' + 
                                  // '<span class="card-span">Altura: </span><em>' + champion.height + '</em></br>' +
                                  // '<span class="card-span">Peso: </span><em>' + champion.weight + '</em></br>' +
                                  '<span class="card-span">Tipo: </span><em>' + champion.tags + '</em></br>' +
                                  // '<span class="card-span">Debilidad: </span><em>' + champion.weaknesses + '</em></br>' +
                                  // '<span class="card-span">Eclosión: </span><em>' + champion.egg + '</em></br>' +
                                '</div>' + 
                              '</div>';
    rootNode.appendChild(championNode);
  });
}