// import { MatchReader } from './classes/MatchReader'
import { MatchResult } from './utils/MatchResults'

// const data = new MatchReader('football.csv')
// data.read()


import { CsvFileReader } from './classes/CsvFileReader'
import { MatchReader } from './classes/MatchReader'

const reader = new CsvFileReader('football.csv')
const data = new MatchReader(reader)
data.load()

let wins = 0

for (let match of data.matches) {
    if ((match.homeTeam === 'Man United' && match.matchResult === MatchResult.HomeWin) || (match.awayTeam === 'Man United' && match.matchResult === MatchResult.AwayWin)) {
        wins++
    }
}

console.log(`Your team wins: ${ wins }`)
