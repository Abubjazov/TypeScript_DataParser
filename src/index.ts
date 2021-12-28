import fs from 'fs'

const matches = fs.readFileSync('data_source/football.csv', {
    encoding: 'utf-8'
})

console.log(matches)
