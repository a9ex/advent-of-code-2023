import fs from 'node:fs'

const input = fs.readFileSync('./input').toString()
const histories = input.split('\n')
let extrapolatedValues = 0

for (const history of histories) {
    const sequences = [history.split(' ').map(Number)]
    while (!sequences.at(-1).every(el => el === 0)) {
        const newSequence = []
        for (let i = 0; i < sequences.at(-1).length - 1; i++) {
            newSequence.push(sequences.at(-1)[i + 1] - sequences.at(-1)[i])
        }
        sequences.push(newSequence)
    }
    for (let i = 0; i < sequences.length - 1; i++) {
        sequences.at(-2 - i).push(sequences.at(-1 - i).at(-1) + sequences.at(-2 - i).at(-1))
    }
    extrapolatedValues += sequences[0].at(-1)
}

console.log(extrapolatedValues)