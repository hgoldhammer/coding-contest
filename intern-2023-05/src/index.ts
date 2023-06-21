import * as fs from 'fs'
import { fight } from './aufgabe1';
import * as _ from 'lodash';
import { fightRounds } from './aufgabe2';
import { a3 } from './aufgabe3';
import { a4 } from './aufgabe4';
const lines = fs.readFileSync('./src/level4_5.txt').toString().split('\r\n')
const firstLine = lines.shift() ?? '';

const roundsCount = Math.log2(getParticipantsCount(firstLine))

const result = lines.map((line) => a4(line, getParticipantsCount(firstLine)));

console.log('lines', lines)
console.log('firstElement', firstLine)
console.log('result', result)

fs.writeFileSync('./src/outputAufgabe5.txt', result.join('\n'))



function getParticipantsCount(firstLine: string): number {
    return Number(firstLine.split(' ')[1])
}

a4('26R 4P 2S', 32)
