//zonder hoofdletters pokemon zoeken
document.getElementById('searchBtn').addEventListener('click', getData);
let userInput;



function getData() {
	getUserInput();
	fetchData();
}

function getUserInput() {
	userInput = document.getElementById('inputField').value;
}

// gegevens krijgen (api) 
function fetchData() {
	fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}/`)
	.then(res => res.json()) 
	.then(result => {showData(result); });

	fetch(`https://pokeapi.co/api/v2/pokemon-species/${userInput}/`)
	.then(res => res.json()) 
	.then(result => {showEvolution(result); });
}

function showData(serverData) {
	let nameHeader = document.getElementById("nameHeader")
	nameHeader.innerHTML = "pokemon name: <br>" + serverData.name;

// console.log(serverData);
// console.log(serverData.name);

	let idHeader = document.getElementById("idHeader")
	idHeader.innerHTML = "pokemon id: <br>" + serverData.id;
	sprite.src = serverData.sprites.front_default;	

//forloops opstellen 
let moveSet = [];
for (i = 0; i != 4; i += 1) {
	moveSet.push(serverData.moves[i].move.name);
	document.getElementsByClassName("move")[i].innerHTML = moveSet[i];

	let weightHeader = document.getElementById('weightHeader');
	weightHeader.innerHTML = "pokemon weight <br>" + serverData.weight;
}};

function showEvolution(serverData) {
	let evolution = document.getElementById('evolution');

	if (serverData.evolves_from_species == null) {
		evolution.innerHTML = "No evolution found"
	} else {
		evolution.innerHTML = 'evolve from: <br>' + serverData.evolves_from_species.name;
	}
}