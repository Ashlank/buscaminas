export default function deepCopy(matr) {
  const copy = matr.map(row => row.map( item => {
    return {...item}
  }))
  return copy
}