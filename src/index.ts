import fs from 'fs'

const matches = fs.readFileSync('data_source/football.csv', {
    encoding: 'utf-8'
})
.split('\n')
.map((item: string): string[] => item.split(','))

enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

const getMatchResult = (match: string[]): MatchResult => {
    if (match[5] === 'H') return MatchResult.HomeWin
    if (match[5] === 'A') return MatchResult.AwayWin
    if (match[5] === 'D') return MatchResult.Draw
    
    throw new Error('Unexpected argument')
}

let wins = 0

for (let match of matches) {
    if ((match[1] === 'Man United' && match[5] === MatchResult.HomeWin) || (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)) {
        wins++
    }
}

console.log(`Your team wins: ${ wins }`)
