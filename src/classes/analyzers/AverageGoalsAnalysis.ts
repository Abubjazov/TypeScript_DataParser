import { Match } from '../../utils/Types'
import { Analyzer } from '../Summary'

export class AverageGoalsAnalysis implements Analyzer {
    constructor(public team: string) {}

    run(matches: Match[]): string {
        let totalGoals = 0

        for (let match of matches) {
            if (match.homeTeam === this.team) totalGoals += match.homeTeamGoals
            if (match.awayTeam === this.team) totalGoals += match.awayTeamGoals
        }

        return `${ this.team } team have scored ${ totalGoals } goals this season`
    }
}
