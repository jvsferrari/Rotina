const tbody = document.querySelector('#tbody');

let height = 10;

function makeGrid(height) {
	for (let r = 1; r <= height; r++) {
		row = document.createElement('tr');
		row.classList.add(r);
		for (let c = 1; c <= 7; c++) {
			cell = document.createElement('td');
			cell.classList.add(`r${r}`);
			cell.classList.add(`c${c}`);
			row.appendChild(cell);
		}
		tbody.appendChild(row);
	}
}

makeGrid(height);
