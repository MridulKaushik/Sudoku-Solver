document.addEventListener('DOMContentLoaded', () => {
    const gridSize = 9;
    const solveButton = document.getElementById('solve-btn');
    solveButton.addEventListener('click', solveSudoku)
    
    const resetButton = document.getElementById('reset-btn');
    resetButton.disabled = true;
    resetButton.addEventListener('click', resetSudoku)

    const sudokuGrid = document.getElementById('sudoku-grid');

    // create the grid and input cells
    for(let row = 0; row < gridSize; row++) {
        const newRow = document.createElement("tr");
        for(let col = 0; col < gridSize; col++) {
            const cell = document.createElement('td');
            const input = document.createElement("input");
            input.type = "number";
            input.className = "cell";
            input.id = `cell-${row}-${col}`;
            // console.log(input.id);
            cell.appendChild(input);
            newRow.appendChild(cell);
        }
        sudokuGrid.appendChild(newRow);
    }

    // Check for non-empty cell to enable the reset button 
    sudokuGrid.addEventListener('input', checkEmptyCell);

});


const checkEmptyCell = function(){
    const cells = document.querySelectorAll('.cell');
    const isEmpty = Array.from(cells).some(cell => !cell.value);
    // console.log(Array.from(cells).length);
    document.getElementById('reset-btn').disabled = !isEmpty;
    
}

async function resetSudoku(){
    const gridSize = 9;
    for (let row = 0; row < gridSize; row++){
        for(let col = 0; col < gridSize; col++){
            const cellId = `cell-${row}-${col}`;
            const cell = document.getElementById(cellId);
            cell.value = "";
            console.log(cell.classList);
            cell.classList.remove("solved", "user-input");
        }   
    }

    document.getElementById('reset-btn').disabled = true;
}

async function solveSudoku() {
        const gridSize = 9;
        const sudokuArray = [];

        for(let row=0 ; row<gridSize ; row++){
            sudokuArray[row] = [];
            for(let col=0 ; col<gridSize; col++){
                const cellId = `cell-${row}-${col}`;
                // console.log("Cell Id - ", cellId);
                const cellValue = document.getElementById(cellId).value;
                sudokuArray[row][col] = cellValue !== "" ? parseInt(cellValue) : 0; 
            }
        }

        // Identify user-input cells and mark them
        for(let row=0 ; row< gridSize ; row++){
            for(let col=0 ; col< gridSize ; col++){
                const cellId = `cell-${row}-${col}`;
                const cell = document.getElementById(cellId);
                
                if (sudokuArray[row][col] !== 0){
                    cell.classList.add("user-input");
                }
            }
        }

        // Solving the Sudoku and display it
        if(solveSudokuHelper(sudokuArray)){
            for(let row=0; row < gridSize ; row++){
                for(let col=0 ; col< gridSize ; col++){
                    const cellId = `cell-${row}-${col}`;
                    const cell = document.getElementById(cellId);

                    // Filled in the solved values and apply animation
                    if(!cell.classList.contains('user-input')){
                        cell.value = sudokuArray[row][col];
                        cell.classList.add("solved");

                        await sleep(20); // Add a delay for visualization
                    }
                }
            }
        }
        else {
            alert ("No Solution exists for the given Sudoku Puzzle.")
        }    
}


function solveSudokuHelper(board){
    const gridSize = 9;
    
    for(let r=0; r<gridSize; r++){
        for (let c=0; c<gridSize; c++){
            if(board[r][c] === 0){
                for(let n=1;n<10; n++){
                    if(isValidMove(board, r, c, n)){
                        board[r][c] = n;
                        // console.log(board);
                        // Recursive approach 
                        if(solveSudokuHelper(board)){
                            return true;
                        }
                        // console.log(board);
                        board[r][c] = 0; // Backtrack
                    }
                }
                return false; // No Valid found
            }
        }
    }
    return true;
}

const isValidMove = function(board, row, col, number){
    const gridSize = 9;

    for (let i=0;i<gridSize;i++){
        if(board[row][i] === number || board[i][col] === number){
            return false; // Number already exists in row or column
        }
    }

    // # 3x3 box
    
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;

    for(let r=startRow; r<startRow+3; r++){
        for(let c=startCol; c<startCol+3; c++){
            if(board[r][c] === number){
                return false;
            }
        }
    }
    return true; // No conflicts found
}

function sleep(ms){
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    });
}