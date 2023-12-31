import fs from 'node:fs'

const input = fs.readFileSync('./input').toString()
const lines = input.split('\n')
let racesPossibilities = []

for (let i = 0; i < lines.length; i++) {
    lines[i] = lines[i].split(" ").filter(l => l).slice(1)
}

for (let i = 0; i < lines[0].length; i++) {
    let possibilities = 0
    for (let milliseconds = 0; milliseconds < lines[0][i]; milliseconds++) {
            const remainingMilliseconds = lines[0][i] - milliseconds
            const distance = milliseconds * remainingMilliseconds

            if (distance > lines[1][i]) possibilities++
    }
    racesPossibilities.push(possibilities)
}

console.log(racesPossibilities.reduce((a, b) => a * b))