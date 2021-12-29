import { CsvFileReader } from './classes/CsvFileReader'

enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

const data = new CsvFileReader('football.csv')
data.read() 

let wins = 0

for (let match of data.data) {
    if ((match[1] === 'Man United' && match[5] === MatchResult.HomeWin) || (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)) {
        wins++
    }
}

console.log(`Your team wins: ${ wins }`)
