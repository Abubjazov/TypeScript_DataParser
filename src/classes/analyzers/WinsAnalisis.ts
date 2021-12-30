import { MatchResult } from '../../utils/MatchResults'
import { Match } from '../../utils/Types'
import { Analyzer } from '../Summary'

export class WinsAnalysis implements Analyzer {
    constructor(public team: string) {}

    run(matches: Match[]): string {
        let wins = 0

        for (let match of matches) {
            if ((match.homeTeam === this.team && match.matchResult === MatchResult.HomeWin) || (match.awayTeam === this.team && match.matchResult === MatchResult.AwayWin)) {
                wins++
            }
        }

        return `${ this.team } team won ${ wins } games this season` 
    }
}
