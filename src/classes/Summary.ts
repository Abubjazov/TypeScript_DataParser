import { Match } from '../utils/Types'

export interface Analyzer {
    run(matches: Match[]): string
}

export interface OutputTarget {
    print(report: string): void
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    buildAndPrintReport(data: Match[]): void {        
        this.outputTarget.print(this.analyzer.run(data))   
    }
}
