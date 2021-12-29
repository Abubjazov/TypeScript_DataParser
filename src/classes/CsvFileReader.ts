import fs from 'fs'
import path from 'path'

export class CsvFileReader {
    data: string[][] = []

    constructor(public filename: string = filename) {}

    read(): void {
        try {
            this.data = fs.readFileSync(path.join(__dirname, '../..', `data_source/${this.filename}`), {
                encoding: 'utf-8'
            })
            .split('\n')
            .map((item: string): string[] => item.split(','))
            
        } catch (error) {
            console.log(error)
        }
    }
}
