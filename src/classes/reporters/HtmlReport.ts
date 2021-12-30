import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
    print(report: string): void {
        console.log(`<p> ${report} </p>`)
    }
}
