function setUpGrid(cells = 4) {
	grid.textContent = '';
	for (let i = 0; i < cells; i++) {
		const row = document.createElement('div');
		row.classList.toggle('flex');
		for (let j = 0; j < cells; j++) {
			const gridSquare = document.createElement('div');
			gridSquare.style.background = '#FFFFFF';
			gridSquare.classList.toggle('cell');
			row.appendChild(gridSquare);
		}
		grid.appendChild(row);
	}
}

function colorCell(e) {
	//checking to see if we are clicking on a cell
	if (e.target.classList.contains('cell') && e.buttons === 1) {
		e.target.style.background = 'black';
	}
}

function setupColorListeners() {
	grid.addEventListener('mousedown', colorCell);

	grid.addEventListener('mouseover', colorCell);
}

function clearGrid() {
	const rows = grid.childNodes;

	rows.forEach((row) => {
		const cells = row.childNodes;
		cells.forEach((cell) => {
			cell.style.background = '#FFFFFF';
		});
	});
}

function changeGridText() {
	const cellAmount = document.querySelector('.cell-amount');
	cellAmount.textContent = `${slider.value} X ${slider.value}`;
}

const grid = document.querySelector('.sketchgrid');

const slider = document.querySelector('.slider');
slider.addEventListener('input', changeGridText);
slider.addEventListener('mouseup', (e) => {
	setUpGrid(parseInt(e.target.value));
});

const clearGridBtn = document.querySelector('.clear-grid');
clearGridBtn.addEventListener('click', clearGrid);

setUpGrid();
setupColorListeners();
changeGridText();
