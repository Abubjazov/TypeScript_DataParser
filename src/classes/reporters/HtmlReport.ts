import fs from 'fs'
import path from 'path'

import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
    print(report: string): void {
        const html = `
            <div>
                <h1>Report</h1>
                <p> ${report} </p>
            </div>
        `
        fs.appendFile(path.join(__dirname, `../../../reports/report${Date.now()}.html`), html, (err) => {
            if (err) throw err
            console.log('The HTML was appended to file!')
        })
    }
}
