import deepCopy from "../utils/deepCopy"

export default function placeBombs(pos, board) {
  const gridSize = 8
  const tilesPlaced = [[pos.x, pos.y]]
  const boardCopy = deepCopy(board)
  const matches = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]

  function getRandomCoords(gridSize) {
    const x = Math.floor(Math.random() * gridSize)
    const y = Math.floor(Math.random() * gridSize)

    const isAlreadyPlaced = tilesPlaced.find( elem => elem[0] === x && elem[1] === y)

    return { x, y, isAlreadyPlaced }
  }

  // Colocando bombas aleatoriamente
  for(let i=0; i < gridSize; i++) {
    let x, y, isAlreadyPlaced;
    do {
      ({ x, y, isAlreadyPlaced } = getRandomCoords(gridSize))

    } while(isAlreadyPlaced)

    tilesPlaced.push([x,y])
    boardCopy[x][y] = {...boardCopy[x][y], bomb: true}
  }

  // Colocando la primer casilla clickeada como visible
  boardCopy[pos.x][pos.y] = {...boardCopy[pos.x][pos.y], visible: true}
  tilesPlaced.shift();

  // Colocando los números de bombas aledañas
  tilesPlaced.forEach( bomb => {
    const [x, y] = [...bomb]
    for(const match of matches) {
      if(x-match[0] >= 0 && x-match[0] < gridSize && y-match[1] >= 0 && y-match[1] < gridSize) {
        if(boardCopy[x-match[0]][y-match[1]].bomb) continue;
        boardCopy[x-match[0]][y-match[1]].number++;
      }
    }
  })

  return [boardCopy, tilesPlaced];
}