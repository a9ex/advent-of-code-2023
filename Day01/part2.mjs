import fs from 'node:fs'

const input = formatInput(fs.readFileSync('./input').toString())
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


function formatInput(input) {
    return input.replaceAll('one', 'o1e') // prevent burning letters, ex: 'eightwothree' -> 'two' will be replaced before 'eight' but we don't want that
                .replaceAll('two', 't2o')
                .replaceAll('three', 't3e')
                .replaceAll('four', 'f4r')
                .replaceAll('five', 'f5e')
                .replaceAll('six', 's6x')
                .replaceAll('seven', 's7n')
                .replaceAll('eight', 'e8t')
                .replaceAll('nine', 'n9e')
}
