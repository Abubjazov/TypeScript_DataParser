import { MatchResult } from './MatchResults';

export type Match = {
    date: Date
    homeTeam: String
    awayTeam: String
    homeTeamGoals: Number
    awayTeamGoals: Number
    matchResult: MatchResult
    referee: String
}
