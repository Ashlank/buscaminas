export default function Tile({ tile, onClick }) {

  const tileStyles = `w-10 h-10
                      bg-slate-500 border-solid
                      border-black border-[2px]
                      flex items-center justify-center cursor-pointer
                      ${tile.visible ? 'bg-slate-300' : ''}`

  return (
    <span onClick={onClick}
          className={tileStyles}
    >
      {
        tile.visible && tile.number ? tile.number : null
      }
      {
        tile.visible && tile.bomb ? '💣' : null
      }
    </span>
  )
}

