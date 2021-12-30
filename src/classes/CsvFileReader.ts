// import fs from 'fs'
// import path from 'path'

// export abstract class CsvFileReader<T> {
//     abstract data: T[]
//     abstract filename: string
//     abstract mapRow(row: string): T

//     read(): void {
//         try {
//             this.data = fs.readFileSync(path.join(__dirname, `../../data_source/${this.filename}`), {
//                 encoding: 'utf-8'
//             })
//             .split('\n')
//             .filter(row => row !== '')
//             .map(this.mapRow)
            
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }

import fs from 'fs'
import path from 'path'
import { DataReader } from './MatchReader'

export class CsvFileReader implements DataReader {
    data: string[][] = []

    constructor(public filename: string = filename) {}

    read(): void {
        try {
            this.data = fs.readFileSync(path.join(__dirname, `../../data_source/${this.filename}`), {
                encoding: 'utf-8'
            })
            .split('\n')
            .filter(row => row !== '')
            .map((item: string): string[] => item.split(','))    
        } catch (error) {
            console.log(error)
        }
    }
}

