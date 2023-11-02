import useGetBoard from "../hooks/useGetBoard"
import Tile from "./Tile"

export default function Container() {
  const [ board, handleTileClick ] = useGetBoard()

  return (
    <div className="grid grid-cols-8 w-fit m-auto mt-20">
      {
        board.map((row, i) => {
          return row.map((tile, j) => {
            return <Tile key={i+j} tile={tile} onClick={() => handleTileClick({i, j})}/>
          })
        })
      }
    </div>
  )
}
