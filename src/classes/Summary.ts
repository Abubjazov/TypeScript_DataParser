import { Match } from '../utils/Types'
import { AverageGoalsAnalysis } from './analyzers/AverageGoalsAnalysis'
import { WinsAnalysis } from './analyzers/WinsAnalisis'
import { ConsoleReport } from './reporters/ConsoleReport'
import { HtmlReport } from './reporters/HtmlReport'

export interface Analyzer {
    run(matches: Match[]): string
}

export interface OutputTarget {
    print(report: string): void
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    static winsAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(new WinsAnalysis(team), new HtmlReport())
    }

    static averageGoalsAnalysisWithConsoleReport(team: string): Summary {
        return new Summary(new AverageGoalsAnalysis(team), new ConsoleReport())
    }

    buildAndPrintReport(data: Match[]): void {        
        this.outputTarget.print(this.analyzer.run(data))   
    }
}
