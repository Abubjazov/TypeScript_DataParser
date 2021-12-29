export enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

export const getMatchResult = (result: string): MatchResult => {
    if (result === 'H') return MatchResult.HomeWin
    if (result === 'A') return MatchResult.AwayWin
    if (result === 'D') return MatchResult.Draw

    throw new Error('getMatchResult: Unexpected argument')
}
