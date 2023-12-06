// Brutforced manually part 2 :

// 1. Compute only 1 seed per 100,000 (or 10,000)
// 2. See the lowest location
// 3. look at the seed pair associated with the lowest location
// 3.1. Edit the input file
// 4. Only compute the lowest location for this pair of seeds
// 5. Wait, it may take more than 10 minutes

import fs from 'node:fs'

const input = fs.readFileSync('./input').toString()
let lines = input.split('\n')
const data = [[], [], [], [], [], [], []]
const locations = []
const seeds = lines.shift().split(' ').slice(1)

lines.shift()
lines.shift()

let i = 0
lines = lines.filter(l => l).forEach((line) => {
    if (!isNaN(line[0])) {
        console.log(`pushing ${line} in ${i}`)
        data[i].push(line.split(' '))
    } else {
        i++
    }
})

seeds.forEach((seed) => {
    let found = false;
    let nextLocation;
    for (const map of data) {
        found = false
        for (const mapLine of map) {
            const destination = Number(mapLine[0])
            const source = Number(mapLine[1])
            const range = Number(mapLine[2])
            const location = Number(seed ?? nextLocation)

            if (location >= source && location <= (source + range - 1)) {
                nextLocation = location + destination - source
                found = true
            }
            if (nextLocation && found) {
                seed = null
                break;
            }
        }
    }
    locations.push(nextLocation)
})

console.log(Math.min(...locations))