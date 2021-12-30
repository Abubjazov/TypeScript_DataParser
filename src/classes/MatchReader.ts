// import { getMatchResult, MatchResult } from '../utils/MatchResults'
// import { parseDate } from '../utils/parseDate'
// import { CsvFileReader } from './CsvFileReader'

// type Match = {
//     date: Date
//     homeTeam: String
//     awayTeam: String
//     homeTeamGoals: Number
//     awayTeamGoals: Number
//     matchResult: MatchResult
//     referee: String
// }

// export class MatchReader extends CsvFileReader<Match> {
//     data: Match[] = []
    
//     constructor(public filename: string = filename) {
//         super()
//     }

//     mapRow(row: string): Match {
//         let tmpArr: string[] = row.split(',')

//         return {
//             date: parseDate(tmpArr[0]),
//             homeTeam: tmpArr[1],
//             awayTeam: tmpArr[2],
//             homeTeamGoals: +tmpArr[3],
//             awayTeamGoals: +tmpArr[4],
//             matchResult: getMatchResult(tmpArr[5]),
//             referee: tmpArr[6]
//         }
//     }
// }

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
