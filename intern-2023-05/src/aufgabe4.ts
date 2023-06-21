export function a4(line: string, participantsCount: number): string {
    let result = ''

    const roundCount = Math.log2(participantsCount);

    console.log('\n\nstart')
    console.log('line', line)
    console.log('participantsCount', participantsCount)
    console.log('roundCount', roundCount)

    // Parse element counts
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
    
    let remainderPaper = paperCount;
    let remainderRocks = rockCount;
    let divident = (participantsCount / 2 - 1)
    console.log('divident', divident)
    for(let i = 0; i < roundCount; i++) {
        const quotient = Math.floor(remainderRocks/divident);
        console.log('quotient', quotient)
        if(quotient > 0 ) {
            result = `${result}P${'R'.repeat(divident)}`; 
            remainderRocks -= divident
            remainderPaper -=1
        } else if(remainderRocks >= 1) {
            result = `${result}P${'R'.repeat(remainderRocks)}`
            console.log('divident', divident)
            console.log('remainderRocks', remainderRocks)
            console.log('divident - remainderRocks', divident - remainderRocks)
            remainderPaper -= 1 
            remainderRocks = 0
        } else {
            break
        }


        divident = Math.floor(divident / 2)
        console.log('divident', divident)
        console.log('remainderPaper', remainderPaper)
        console.log(`result ${i}st loop`, result)

    }

    let rest = ''
    console.log('remainderPaper', remainderPaper)
    if(remainderPaper > 0){
        rest = `${'P'.repeat(remainderPaper)}`
    }

    result = `${result}${rest}${'S'.repeat(scissorCount)}`

    console.log('result', result)
    console.log('len', result.length)
    return result
}