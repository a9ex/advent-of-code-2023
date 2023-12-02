import fs from 'node:fs'

const input = fs.readFileSync('./input').toString()
const games = input.split('\n')
let ans = 0

for (const [index, game] of games.entries()) {
    const sets = game.split(';')
    let [mRed, mBlue, mGreen] = [0, 0, 0]
    for (const set of sets) {
        const red = Number(set.match(/(\d+) red/)?.at(1))
        const blue = Number(set.match(/(\d+) blue/)?.at(1))
        const green = Number(set.match(/(\d+) green/)?.at(1))

        mRed = (red > mRed) ? red : mRed
        mBlue = (blue > mBlue) ? blue : mBlue
        mGreen = (green > mGreen) ? green : mGreen
    }
    ans += mRed * mBlue * mGreen
}

console.log(ans)