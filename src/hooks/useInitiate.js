import { useState } from "react"
import createInitialBoard from "../utils/createInitialBoard.js"
import deepCopy from "../utils/deepCopy.js"
import placeBombs from "../utils/placeBombs.js"

export default function useInitiate() {
  const [board, setBoard] = useState(() => createInitialBoard())
  const [bombs, setBombs] = useState([])
  const [wasGameStarted, setWasGameStarted] = useState(false)
  const [remainingTiles, setRemainingTiles] = useState((8*8)-8)

  const reset = () => {
    setBombs([])
    setWasGameStarted(false)
    setBoard(() => createInitialBoard())
    setRemainingTiles((8*8)-8)
  }

  const revealTile = ({ i, j }) => {
    setBoard( prev => {
      const copy = deepCopy(prev)
      copy[i][j].visible = true
      return copy
    })
    setRemainingTiles(prev => prev - 1)
  }

  const createGame = ({ i, j }) => {
    const [boardReady, tilesPlaced] = placeBombs({ x: i, y: j }, board)
    setBoard(boardReady)
    setBombs(tilesPlaced)
    setWasGameStarted(true)
    setRemainingTiles(prev => prev - 1)
  }

  return { board, bombs, wasGameStarted, remainingTiles, reset, revealTile, createGame }
}