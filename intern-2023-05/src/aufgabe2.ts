import { fight } from './aufgabe1';

export function fightRounds(line: string): string {
    const round1 = getPairs(line).map((pair) => fight(pair));
    const round2 = getPairs(round1.join('')).map((pair) => fight(pair))

    return round2.join('');
}

function getPairs(line: string): string[] {
    return line.match(/.{1,2}/g) ?? []
}