const grid = document.querySelector('.sketchgrid');

function setUpGrid() {
	for (let i = 0; i < 16; i++) {
		const row = document.createElement('div');
		row.classList.toggle('flex');
		for (let j = 0; j < 16; j++) {
			const gridSquare = document.createElement('div');
			gridSquare.classList.toggle('cell');
			row.appendChild(gridSquare);
		}
		grid.appendChild(row);
	}
}

function colorCell(e) {
	//checking to see if we are clicking on a cell
	if (e.target.classList.contains('cell') && e.buttons === 1) {
		console.log('youre drawing');
		e.target.style.background = 'black';
	}
}

function setupColorListeners() {
	grid.addEventListener('mousedown', colorCell);

	grid.addEventListener('mouseover', colorCell);
}

setUpGrid();
setupColorListeners();
