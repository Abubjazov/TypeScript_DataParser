import fs from 'fs'

const matches = fs.readFileSync('data_source/football.csv', {
    encoding: 'utf-8'
})
.split('\n')
.map((item: string): string[] => item.split(','))

// console.log(matches)
let wins = 0

for (let match of matches) {
    if ((match[1] === 'Man United' && match[5] === 'H') || (match[2] === 'Man United' && match[5] === 'A')) {
        wins++
    }
}

console.log(`Your team wins: ${ wins }`)
