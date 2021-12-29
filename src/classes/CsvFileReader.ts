import fs from 'fs'
import path from 'path'
import { parseDate } from '../utils/parseDate'

export enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

const getMatchResult = (result: string): MatchResult => {
    if (result === 'H') return MatchResult.HomeWin
    if (result === 'A') return MatchResult.AwayWin
    if (result === 'D') return MatchResult.Draw

    throw new Error('getMatchResult: Unexpected argument')
}

type match = {
    date: Date
    homeTeam: String
    awayTeam: String
    homeTeamGoals: Number
    awayTeamGoals: Number
    matchResult: MatchResult
    referee: String
}

export class CsvFileReader {
    data: match[] = []

    constructor(public filename: string = filename) {}

    read(): void {
        try {
            this.data = fs.readFileSync(path.join(__dirname, `../../data_source/${this.filename}`), {
                encoding: 'utf-8'
            })
            .split('\n')
            .filter(row => row !== '')
            .map((item: string): match => {
                let tmpArr: string[] = item.split(',')

                return {
                    date: parseDate(tmpArr[0]),
                    homeTeam: tmpArr[1],
                    awayTeam: tmpArr[2],
                    homeTeamGoals: +tmpArr[3],
                    awayTeamGoals: +tmpArr[4],
                    matchResult: getMatchResult(tmpArr[5]),
                    referee: tmpArr[6]
                }
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}
