import { MatchResult } from './MatchResults';

export type Match = {
    date: Date
    homeTeam: string
    awayTeam: string
    homeTeamGoals: number
    awayTeamGoals: number
    matchResult: MatchResult
    referee: string
}
