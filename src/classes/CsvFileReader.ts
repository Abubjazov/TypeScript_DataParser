import fs from 'fs'
import path from 'path'

export abstract class CsvFileReader<Type> {
    abstract data: Type[]
    abstract filename: string
    abstract mapRow(row: string): Type

    read(): void {
        try {
            this.data = fs.readFileSync(path.join(__dirname, `../../data_source/${this.filename}`), {
                encoding: 'utf-8'
            })
            .split('\n')
            .filter(row => row !== '')
            .map(this.mapRow)
            
        } catch (error) {
            console.log(error)
        }
    }
}
