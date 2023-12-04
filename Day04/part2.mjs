import fs from 'node:fs'

const input = fs.readFileSync('./input').toString()
const games = input.split('\n')
const cards = Array(games.length).fill(1)
let ans = 0

for (const [i, game] of games.entries()) {

    const parts = game.split(':')[1].split('|')
    const winningCards = parts[0].split(' ').filter(c => c)
    const playerCards = parts[1].split(' ').filter(c => c)

    const matchedCards = winningCards.filter(card => playerCards.includes(card)).length

    for (let j = 1; j < matchedCards + 1; j++) cards[i + j] += 1 * cards[i]
}

console.log(cards.reduce((a, b) => a + b, 0))