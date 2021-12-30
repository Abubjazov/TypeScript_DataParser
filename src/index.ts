// import { MatchReader } from './classes/MatchReader'
import { MatchResult } from './utils/MatchResults'

// const data = new MatchReader('football.csv')
// data.read()


import { CsvFileReader } from './classes/CsvFileReader'
import { MatchReader } from './classes/MatchReader'
import { WinsAnalysis } from './classes/analyzers/WinsAnalisis'
import { ConsoleReport } from './classes/reporters/ConsoleReport'
import { Summary } from './classes/Summary'
import { AverageGoalsAnalysis } from './classes/analyzers/AverageGoalsAnalysis'
import { HtmlReport } from './classes/reporters/HtmlReport'

const reader = new CsvFileReader('1.csv')
const data = new MatchReader(reader)
data.load()

const MUanalyzer = new WinsAnalysis('Man United')
const MUreporter = new ConsoleReport()
const MUSummary = new Summary(MUanalyzer, MUreporter)

MUSummary.buildAndPrintReport(data.matches)

const CHanalyzer = new AverageGoalsAnalysis('Chelsea')
const CHreporter = new HtmlReport()
const CHSummary = new Summary(CHanalyzer, CHreporter)

CHSummary.buildAndPrintReport(data.matches)
