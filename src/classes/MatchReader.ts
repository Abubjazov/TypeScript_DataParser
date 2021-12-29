import { getMatchResult, MatchResult } from '../utils/MatchResults'
import { parseDate } from '../utils/parseDate'
import { CsvFileReader } from './CsvFileReader'

type match = {
    date: Date
    homeTeam: String
    awayTeam: String
    homeTeamGoals: Number
    awayTeamGoals: Number
    matchResult: MatchResult
    referee: String
}

export class MatchReader extends CsvFileReader<match> {
    data: match[] = []
    
    constructor(public filename: string = filename) {
        super()
    }

    mapRow(row: string): match {
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
