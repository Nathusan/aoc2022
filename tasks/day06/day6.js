import { readFileSync } from 'node:fs'

const input = readFileSync("tasks/day06/day06.txt", { encoding: 'utf-8'})
    .replace(/\r/g, '') //remove all \r characters
    .trim(); //remove whitespace

function isUnique(array) {
    return new Set(array).size === array.length;
}

function part1() {
    let slidingWindow = []
    for( let i = 0; i < input.length; i++) {
        slidingWindow.push(input[i]);

        if (slidingWindow.length > 4) {
            slidingWindow.shift();
        }

        if (slidingWindow.length === 4 && isUnique(slidingWindow)){
            console.log(i+1)
            break;
        }
    }
}

function part2() {
    let slidingWindow = []
    for( let i = 0; i < input.length; i++) {
        slidingWindow.push(input[i]);

        if (slidingWindow.length > 14) {
            slidingWindow.shift();
        }

        if (slidingWindow.length === 14 && isUnique(slidingWindow)){
            console.log(i+1)
            break;
        }
    }
}

part1()
part2()