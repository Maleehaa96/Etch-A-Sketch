/*
TODO:

1. 16x16 div 
2. use CSS grid
3. when the mouse passes through a div have it change color - use hover
4. allow user to specify how big to make the grid w/ a max limit of 100

*/

let container = document.querySelector('.container');
let customize = document.querySelector('.customize');

let userInput = "";

let g1 = document.createElement('div');
let g2 = document. createElement('div');
let g3 = document.createElement('div');


/*
container.appendChild(g1);
container.appendChild(g2);
container.appendChild(g3);
g1.style.outline = 'solid';
g2.style.outline = 'solid';
g3.style.outline = 'solid';

*/

customize.addEventListener("click", e => getUserInput(e));

function getUserInput(e) {

    userInput = prompt("Enter the number of tiles for your new grid ");
    clearGrid(container);
    createGrid(userInput);
    
}

function createGrid(tiles){
    console.log("number of tiltes "+ tiles);
    
    let i = 0;
    while(i<tiles) {
        let t = document.createElement('div');
        t.style.outline = 'solid';
        container.append(t);
        console.log("tile added..");
        i++;

    }

}

function clearGrid(container) {

        while (container.firstChild) {
            
            container.removeChild(container.firstChild);
        }
}