import fs from 'node:fs'

const input = fs.readFileSync('./input').toString()
const nodes = input.split('\n').slice(2)
const instructions = input.split('\n')[0]
let steps = 0
let nextNode = 'AAA'

for (let i = 0; i < instructions.length; i = (i === instructions.length - 1) ? 0 : ++i) {
    nextNode = nodes.filter(node => node.startsWith(nextNode))[0].match(/\(([A-Z]+), ([A-Z]+)\)/).at((instructions[i] === 'L') ? 1 : 2)
    steps++
    if (nextNode === 'ZZZ') break;
}

console.log(steps)