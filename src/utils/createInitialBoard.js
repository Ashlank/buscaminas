export default function createInitialBoard() {
  const initialBoard = new Array(8)
  for (let i = 0; i < initialBoard.length; i++) {
    initialBoard[i] = new Array(8).fill({ bomb: false, visible: false, number: 0});
  }
  return initialBoard
}