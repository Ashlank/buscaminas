import useInitiate from './useInitiate.js';
import { winSound, loseSound } from '../media/sound.js'

export default function useGetBoard() {
  const { board, bombs, wasGameStarted, remainingTiles, reset, revealTile, createGame} = useInitiate()

  const handleTileClick = ({ i, j }) => {
    if(remainingTiles === 0) {
      reset()
      return
    }
    if(board[i][j].visible) {
      return
    }
    if(!wasGameStarted) {
      createGame({ i, j })
      return
    }
    else {
      const hitBomb = bombs.find( elem => elem[0] === i && elem[1] === j)
      // Perdió
      if(hitBomb) {
        loseSound.play()
        reset()
        alert("Perdiste")
      }
      else {
        revealTile({ i, j });
        // Ganó
        if(remainingTiles === 1) {
          winSound.play()
          alert("GANASTE")
        }
      }
    }
  }

  return [ board, handleTileClick ]
}