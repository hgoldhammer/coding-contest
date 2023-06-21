export function a3(line: string): string {
    let result = ''

    const allCounts = line.split(' ')

    let rockCount = 0;
    let paperCount = 0;
    let scissorCount = 0;

    allCounts.forEach((countElement) => {
        if (countElement.includes('R')) {
            rockCount = parseInt(countElement)
        } else if(countElement.includes('P') ){
            paperCount = parseInt(countElement)
        } else if(countElement.includes('S')) {
            scissorCount = parseInt(countElement)
        }
    })

    const quotient = Math.floor(rockCount/3);
    const remainder = rockCount % 3;
    let remainderPaper = paperCount - quotient

    result = `PRRR`.repeat(quotient)

    let rest = ''
    if(remainder !== 0){
        rest = `P${'R'.repeat(remainder)}`
        remainderPaper -= 1
    }

    result = `${result}${rest}${'P'.repeat(remainderPaper)}${'S'.repeat(scissorCount)}`

    return result
}