import { readFileSync } from 'node:fs'

const lines = readFileSync("tasks/day04/input.txt", { encoding: 'utf-8'})
    .replace(/\r/g, '') //remove all \r characters
    .trim().split(/\n/).map((line) => line.split(' ')[0].split(','));

function getRange(pair) {
    let number1 = Number(pair[0])
    const number2 = Number(pair[1])
    const range = [];

    while (number1 <= number2) {
        range.push(number1++)
    }

    return range;
}

function part1() {
    let count = 0;

    for (const pair of lines) {
        const splitPair1 = pair[0].split('-');
        const splitPair2 = pair[1].split('-');

        let range1 = getRange(splitPair1);
        let range2 = getRange(splitPair2);

        if(range1.every((v) => range2.includes(v))) {
            count++
            // console.log(range1, range2 ,'match')

        } else if(range2.every((v) => range1.includes(v))) {
            count++
            // console.log(range1, range2 ,'match')

        } else {
            // console.log(range1, range2 ,'not a match')
        }
    }

    console.log(count)
}


function part2() {
    let count = 0;

    for (const pair of lines) {
        const splitPair1 = pair[0].split('-');
        const splitPair2 = pair[1].split('-');

        let range1 = getRange(splitPair1);
        let range2 = getRange(splitPair2);

        if(range1.some((v) => range2.includes(v))) {
            count++

        } else if(range2.some((v) => range1.includes(v))) {
            count++

        } else {
        }
    }

    console.log(count)
}

part1()
part2()