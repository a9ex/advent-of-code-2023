import fs from 'node:fs'

const input = fs.readFileSync('./input').toString().trim()
const lines = input.split('\n')
let ans = 0

for (let i = 0; i < lines.length; i++) {
    let number = ''
    let hasSymbol = false
    for (let j = 0; j < lines.length; j++) {
        const character = lines[i][j]
        if (!isNaN(character)) {
            if (checkAdjacent(lines, i, j)) hasSymbol = true
            number += character
        }
        else {
            if (number && hasSymbol) ans += Number(number)
            number = ''
            hasSymbol = false
        }
    }
    // catch numbers in EOL
    if (number && hasSymbol) ans += Number(number)
}

console.log(ans)

function checkAdjacent(lines, i, j) {
    if (!!lines[i - 1]?.[j] && isNaN(lines[i - 1]?.[j]) && lines[i - 1]?.[j] != '.') return true
    if (!!lines[i + 1]?.[j] && isNaN(lines[i + 1]?.[j]) && lines[i + 1]?.[j] != '.') return true
    if (!!lines[i]?.[j - 1] && isNaN(lines[i]?.[j - 1]) && lines[i]?.[j - 1] != '.') return true
    if (!!lines[i]?.[j + 1] && isNaN(lines[i]?.[j + 1]) && lines[i]?.[j + 1] != '.') return true
    if (!!lines[i - 1]?.[j - 1] && isNaN(lines[i - 1]?.[j - 1]) && lines[i - 1]?.[j - 1] != '.') return true
    if (!!lines[i - 1]?.[j + 1] && isNaN(lines[i - 1]?.[j + 1]) && lines[i - 1]?.[j + 1] != '.') return true
    if (!!lines[i + 1]?.[j - 1] && isNaN(lines[i + 1]?.[j - 1]) && lines[i + 1]?.[j - 1] != '.') return true
    if (!!lines[i + 1]?.[j + 1] && isNaN(lines[i + 1]?.[j + 1]) && lines[i + 1]?.[j + 1] != '.') return true
    return false
}