import fs from 'node:fs'
import lcm from 'compute-lcm'

const input = fs.readFileSync('./input').toString()
const nodes = input.split('\n').slice(2)
const instructions = input.split('\n')[0]
const nodesInt = []
let steps = 0
let nextNodes = nodes.filter(node => node[2].endsWith('A')).map(node => node.match(/([A-Z]+) =/).at(1))

for (let i = 0; i < instructions.length; i = (i === instructions.length - 1) ? 0 : ++i) {
    if (!nextNodes.length) break;
    nextNodes = nodes.filter(node => nextNodes.includes(node.slice(0, 3))).map(node => node.match(/\(([A-Z]+), ([A-Z]+)\)/).at((instructions[i] === 'L') ? 1 : 2))
    steps++
    if (nextNodes.some(node => node.endsWith('Z'))) {
        const nbr = nextNodes.filter(node => node.endsWith('Z')).length
        for (let j = 0; j < nbr; j++) nodesInt.push(steps)
        nextNodes = nextNodes.filter(node => !node.endsWith('Z'))
    }
}

console.log(lcm(nodesInt))