import fs from 'node:fs'

const input = fs.readFileSync('./input').toString()
const games = input.split('\n')
let ans = 0

for (const [index, game] of games.entries()) {
    const sets = game.split(';')
    let overflow = false;
    for (const set of sets) {
        const red = set.match(/(\d+) red/)?.at(1)
        const blue = set.match(/(\d+) blue/)?.at(1)
        const green = set.match(/(\d+) green/)?.at(1)

        if (red > 12 || green > 13 || blue > 14) overflow = true;
    }
    if (overflow) continue;
    ans += index + 1
}

console.log(ans)