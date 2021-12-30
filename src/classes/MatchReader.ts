import { getMatchResult } from '../utils/MatchResults'
import { parseDate } from '../utils/parseDate'
import { Match } from '../utils/Types'

export interface DataReader {
    data: string[][]
    read(): void
}
export class MatchReader {
    matches: Match[] = []

    constructor(public reader: DataReader) {}

    load(): void {
        this.reader.read()
        this.matches = this.reader.data.map((row: string[]): Match => {    
            return {
                date: parseDate(row[0]),
                homeTeam: row[1],
                awayTeam: row[2],
                homeTeamGoals: +row[3],
                awayTeamGoals: +row[4],
                matchResult: getMatchResult(row[5]),
                referee: row[6]
            }
        })
    }
}
