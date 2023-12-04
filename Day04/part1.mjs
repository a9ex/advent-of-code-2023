import fs from 'node:fs'

const input = fs.readFileSync('./input').toString()
const games = input.split('\n')
let ans = 0

for (const game of games) {
    console.log(game)
    const parts = game.split(':')[1].split('|')
    const winningCards = parts[0].split(' ').filter(c => c)
    const playerCards = parts[1].split(' ').filter(c => c)

    const matchedCards = winningCards.filter(card => playerCards.includes(card)).length

    ans += matchedCards ? Math.pow(2, matchedCards - 1) : 0
}

console.log(ans)