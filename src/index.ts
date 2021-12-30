import { CsvFileReader } from './classes/CsvFileReader'
import { MatchReader } from './classes/MatchReader'
import { Summary } from './classes/Summary'
import { WinsAnalysis } from './classes/analyzers/WinsAnalisis'
import { AverageGoalsAnalysis } from './classes/analyzers/AverageGoalsAnalysis'
import { HtmlReport } from './classes/reporters/HtmlReport'
import { ConsoleReport } from './classes/reporters/ConsoleReport'

const data = new MatchReader(new CsvFileReader('1.csv'))
data.load()

const MUSummary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport())
MUSummary.buildAndPrintReport(data.matches)

const CHSummary = new Summary(new AverageGoalsAnalysis('Chelsea'), new HtmlReport())
CHSummary.buildAndPrintReport(data.matches)
