const grid = document.getElementById("grid-container");
const reset = document.getElementById("reset");
const blackColor = document.getElementById("black")
const rainbowColor = document.getElementById("rainbow");
const div = document.getElementsByClassName("cell-item");

let gridSize = 16
createGrid(gridSize);
createDiv(gridSize);


reset.addEventListener("click", clearBoard)

blackColor.addEventListener("click", function toBlack(){
	
	[...div].forEach(cell => {
		cell.removeEventListener("mouseover", drawColor)
		cell.addEventListener("mouseover", drawBlack)
	})

})
rainbowColor.addEventListener("click", function toColor(){
	
	[...div].forEach(cell => {
		cell.removeEventListener("mouseover", drawBlack)
		cell.addEventListener("mouseover", drawColor)


	})
	
		
	
})


function createDiv(gridSize){
	for(let i=0;i<(gridSize*gridSize);i++){

		const newDiv = document.createElement("div");
		grid.appendChild(newDiv)
		newDiv.style.height = `${500/gridSize} px`;
		newDiv.style.width = `${500/gridSize} px`;
		newDiv.classList.add("cell-item");
	}
}

function createGrid(gridSize){
	grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
	grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
}
function clearBoard(e){
	[...div].forEach(cell =>{
		cell.style.backgroundColor = ""
		cell.classList.remove("black")
		cell.classList.remove("color")
	})
	let input = window.prompt("How many fields per site ? (max 32)")
	input>32 ? alert("too many"):gridSize = input;
	console.log(gridSize)
	createGrid(gridSize);
	createDiv(gridSize);


}
function drawBlack(e){
	cell = e.target;
	cell.style.backgroundColor=""
	cell.classList.add("black")
}
function drawColor(e){
	cell = e.target
	cell.classList.add("color")
	cell.style.backgroundColor = `${'#'+(Math.random()*0xFFFFFF<<0).toString(16)}`;
}


