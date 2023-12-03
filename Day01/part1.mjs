import fs from 'node:fs'

const input = fs.readFileSync('./input').toString()
const words = input.split('\n')
let result = 0

for (const word of words) {
    let firstNumber;
    let lastNumber;

    for (let i = 0; i < word.length; i++) {
        if (!isNaN(word[i])) {
            firstNumber ??= word[i]
            lastNumber = word[i]
        }
    }
    result += Number(firstNumber + lastNumber)
}

console.log(result)