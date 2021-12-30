import { MatchReader } from './classes/MatchReader'
import { Summary } from './classes/Summary'

const data = MatchReader.fromCSV('football.csv')
data.load()

const MUSummary = Summary.winsAnalysisWithHtmlReport('Man United')
MUSummary.buildAndPrintReport(data.matches)

const CHSummary = Summary.averageGoalsAnalysisWithConsoleReport('Chelsea')
CHSummary.buildAndPrintReport(data.matches)
