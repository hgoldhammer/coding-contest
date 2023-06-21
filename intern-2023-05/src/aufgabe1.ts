
export function fight(fightingStyles: string): string {
    switch (fightingStyles) {
        case 'PR':
        case 'RP':
        case 'PP':
            return 'P';
        case 'PS':
        case 'SP':
        case 'SS':
            return 'S';
        case 'RS':
        case 'SR':
        case 'RR':
            return 'R';
        default:
            return 'ERROR';
    }
}
