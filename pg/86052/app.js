/*
lv02
빛의 경로 사이클
*/

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
]; // Up, Right, Down, Left
let visited = [];

function solution(grid) {
  let cycles = [];
  const rows = grid.length;
  const columns = grid[0].length;
  visited = Array.from(Array(rows), () =>
    Array.from(Array(columns), () => Array(4).fill(false))
  );

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      for (let direction = 0; direction < 4; direction++) {
        if (!visited[row][column][direction]) {
          let currentRow = row;
          let currentColumn = column;
          let currentDirection = direction;
          let cycleLength = 0;

          while (true) {
            if (visited[currentRow][currentColumn][currentDirection]) {
              break;
            }

            visited[currentRow][currentColumn][currentDirection] = true;
            cycleLength++;

            let nextRow = currentRow + directions[currentDirection][0];
            let nextColumn = currentColumn + directions[currentDirection][1];

            if (nextRow < 0) nextRow = rows - 1;
            if (nextRow >= rows) nextRow = 0;
            if (nextColumn < 0) nextColumn = columns - 1;
            if (nextColumn >= columns) nextColumn = 0;

            if (grid[nextRow][nextColumn] === "L")
              currentDirection = (currentDirection + 3) % 4;
            if (grid[nextRow][nextColumn] === "R")
              currentDirection = (currentDirection + 1) % 4;

            currentRow = nextRow;
            currentColumn = nextColumn;
          }
          cycles.push(cycleLength);
        }
      }
    }
  }
  cycles.sort((a, b) => a - b);
  return cycles;
}
