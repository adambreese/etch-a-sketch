/*
Pseudo:

3. Set up a 'hover' effect so that the grid divs change color when
your mouse passes over them, leaving a (pixelated) trail through
your grid like a pen would

Add event listener when mouse enters a .box div
Change backgroundColor of div to gray

Add event listener when mouse leaves a .box div
Change backgroundColor back to white

4. Add button to get grid side dimension (number) Limit to 100.

Add button that runs js when clicked

js:

Get userInputNum

if (userInputNum <= 100)
Remove existing grid
function makeGrid (userInputNum)
loop userInputNum times
-- Add .column div
-- loop userInputNum times
---- Add .box div

else( "your number is too big, gotta be less than 100")

*/

const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.width = '960px';
container.style.height = '960px';
container.style.backgroundColor = 'teal';

function makeGrid(gridSize) {
    for (i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.display = 'flex';
        row.style.width = '100%';
        row.style.height = '1000px';
        row.style.backgroundColor = 'white';
        container.appendChild(row);
        for (j = 0; j < gridSize; j++) {
            const block = document.createElement('div');
            block.classList.add('block');
            block.style.display = 'flex';
            block.style.width = '100%';
            block.style.justifyContent = 'space-between';
            row.appendChild(block);
        }
    }
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

const makeGridButton = document.querySelector('#makeGridButton');
makeGridButton.addEventListener('click', () => {
    let gridSize = prompt("What size grid should we make?");
    if (gridSize <= 100) {
        removeGrid();
        makeGrid(gridSize);
    }
})
