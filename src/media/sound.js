const winSound = new Audio('win.mp3')
const loseSound = new Audio('lose.mp3')

winSound.volume = 1
loseSound.volume = 0.5

export { winSound, loseSound }