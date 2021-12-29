import { getMatchResult, MatchResult } from '../utils/MatchResults'
import { parseDate } from '../utils/parseDate'
import { CsvFileReader } from './CsvFileReader'

type Match = {
    date: Date
    homeTeam: String
    awayTeam: String
    homeTeamGoals: Number
    awayTeamGoals: Number
    matchResult: MatchResult
    referee: String
}

export class MatchReader extends CsvFileReader<Match> {
    data: Match[] = []
    
    constructor(public filename: string = filename) {
        super()
    }

    mapRow(row: string): Match {
        let tmpArr: string[] = row.split(',')

        return {
            date: parseDate(tmpArr[0]),
            homeTeam: tmpArr[1],
            awayTeam: tmpArr[2],
            homeTeamGoals: +tmpArr[3],
            awayTeamGoals: +tmpArr[4],
            matchResult: getMatchResult(tmpArr[5]),
            referee: tmpArr[6]
        }
    }
}
