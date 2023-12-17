# Simple Sudoku Solver

A web-based Sudoku solver that allows users to input a Sudoku puzzle and solve it. Users can also reset the puzzle board.

**Live Demo:** [Sudoku Solver](https://mridulkaushik.github.io/Sudoku-Solver-/)

## Usage

1. Open the `index.html` file in a web browser.
2. Input the initial Sudoku puzzle values by filling the cells with numbers (1-9).
3. Click the "Solve Sudoku" button to automatically solve the puzzle.
4. To reset the Sudoku board, click the "Reset Board" button.

## Files

### `index.html`

Contains the HTML structure of the Sudoku solver. It includes the Sudoku grid, buttons for solving and resetting, and links to the CSS and JavaScript files.

### `styles.css`

Defines the styles for the Sudoku solver, including fonts, colors, and button styles.

### `Soduku_Solver.js`

Implements the Sudoku-solving logic. It dynamically generates the Sudoku grid, handles user input, solves the puzzle, and provides a reset functionality.

## Features

- **Solve Sudoku:** Clicking the "Solve Sudoku" button uses a backtracking algorithm to find and display the solution for the entered Sudoku puzzle.

- **Reset Board:** Clicking the "Reset Board" button clears the Sudoku grid, allowing users to input a new puzzle.

- **User Input:** Users can input their Sudoku puzzles, and the solver visually distinguishes between user-input and solved cells.

## Technologies Used

- HTML
- CSS
- JavaScript

## Dependencies

- Google Fonts:
  - Rubik Doodle Shadow
  - Barlow
  - Rubik Scribble

## Additional Notes

- The solver uses a backtracking algorithm to find a solution to the Sudoku puzzle.
- Fonts are imported from Google Fonts for a visually appealing design.
- The "Reset Board" button is disabled when there are no user-input cells to clear.

Feel free to explore and use this Simple Sudoku Solver for your Sudoku puzzle-solving needs!
