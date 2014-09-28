mathdoku-UI
===========

An interface for mathdoku/kenken style puzzles

##Reasoning behind project:

I love puzzles, particularly sudoku-style puzzles. Lately I've ~wasted~ spent a lot of time playing the puzzles on [mathdoku.com](http://www.mathdoku.com/); I love the puzzles, but hate the interface. Tabbing around row by row and editing a three-character text box to enter each field just seems so tedious. With that in mind, I decided to figure out a way to write a lightweight interface for this and similar puzzles based on the following requirements:

1. Users should be able to navigate the cells of the puzzle in *any* direction with arrow keys.
2. Solution checking must still be possible.
3. The UI must degrade gracefully when certain required features are not available on a browser
4. Clicking a cell to edit, or typing a number, should still be possible.
