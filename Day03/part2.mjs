import fs from 'node:fs'

const input = fs.readFileSync('./input').toString().trim()
const lines = input.split('\n')
const positions = {}
let ans = 0

for (let i = 0; i < lines.length; i++) {
    let number = ''
    let symbol
    for (let j = 0; j < lines.length; j++) {
        const character = lines[i][j]
        if (!isNaN(character)) {
            symbol ??= checkAdjacent(lines, i, j)
            number += character
        }
        else {
            if (number && symbol) positions[symbol] ? positions[symbol].push(number) : positions[symbol] = [number]
            number = ''
            symbol = undefined
        }
    }
    // catch numbers in EOL
    if (number && symbol) positions[symbol] ? positions[symbol].push(number) : positions[symbol] = [number]
}

for (const position of Object.keys(positions))
    if (positions[position].length === 2) ans += Number(positions[position][0]) * Number(positions[position][1])

console.log(ans)

function checkAdjacent(lines, i, j) {
    if (!!lines[i - 1]?.[j] && isNaN(lines[i - 1]?.[j]) && lines[i - 1]?.[j] != '.') return `${i - 1},${j}`
    if (!!lines[i + 1]?.[j] && isNaN(lines[i + 1]?.[j]) && lines[i + 1]?.[j] != '.') return `${i + 1},${j}`
    if (!!lines[i]?.[j - 1] && isNaN(lines[i]?.[j - 1]) && lines[i]?.[j - 1] != '.') return `${i},${j - 1}`
    if (!!lines[i]?.[j + 1] && isNaN(lines[i]?.[j + 1]) && lines[i]?.[j + 1] != '.') return `${i},${j + 1}`
    if (!!lines[i - 1]?.[j - 1] && isNaN(lines[i - 1]?.[j - 1]) && lines[i - 1]?.[j - 1] != '.') return `${i - 1},${j - 1}`
    if (!!lines[i - 1]?.[j + 1] && isNaN(lines[i - 1]?.[j + 1]) && lines[i - 1]?.[j + 1] != '.') return `${i - 1},${j + 1}`
    if (!!lines[i + 1]?.[j - 1] && isNaN(lines[i + 1]?.[j - 1]) && lines[i + 1]?.[j - 1] != '.') return `${i + 1},${j - 1}`
    if (!!lines[i + 1]?.[j + 1] && isNaN(lines[i + 1]?.[j + 1]) && lines[i + 1]?.[j + 1] != '.') return `${i + 1},${j + 1}`
    return undefined
}