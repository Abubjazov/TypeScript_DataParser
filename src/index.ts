import { CsvFileReader, MatchResult } from './classes/CsvFileReader'

const data = new CsvFileReader('football.csv')
data.read()

let wins = 0

for (let match of data.data) {
    if ((match.homeTeam === 'Man United' && match.matchResult === MatchResult.HomeWin) || (match.awayTeam === 'Man United' && match.matchResult === MatchResult.AwayWin)) {
        wins++
    }
}

console.log(`Your team wins: ${ wins }`)
