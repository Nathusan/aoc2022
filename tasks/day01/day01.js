import { readFileSync } from 'node:fs'

const input = readFileSync("tasks/day01/input.txt", { encoding: 'utf-8'})
    .replace(/\r/g, '') //remove all \r characters
    .trim().split(/\n?\n\n/); //remove whitespace


function arraySum(arrNum) {
    return arrNum.reduce((partialSum, a) => Number(partialSum) + Number(a), 0);
}

function part1() {
    let biggestElf = 0;
    const recordOfAll = [];
    const arrayOfElf = [];

    for (let i = 0; i < input.length;i++) {
        const array = input[i].replace(/\n/g, " ").split(" ");
        arrayOfElf.push(array)
    }


    for(let x = 0; x < arrayOfElf.length;x++) {
        let sum = 0;
        if (arrayOfElf[x].length > 1 ) {
            sum = arraySum(arrayOfElf[x])
        } else {
            sum = Number(arrayOfElf[x]);
        }

        if (sum > biggestElf) {
            biggestElf = sum
        }
        recordOfAll.push(sum)

    }

    console.log('Part 1')
    console.log(`The biggest Elf ${biggestElf}`)
    console.log('end')
}


function part2() {
    let biggestElf = 0;
    const recordOfAll = [];
    const arrayOfElf = [];

    for (let i = 0; i < input.length;i++) {
        const array = input[i].replace(/\n/g, " ").split(" ");
        arrayOfElf.push(array)
    }


    for(let x = 0; x < arrayOfElf.length;x++) {
        let sum = 0;
        if (arrayOfElf[x].length > 1 ) {
            sum = arraySum(arrayOfElf[x])
        } else {
            sum = Number(arrayOfElf[x]);
        }

        if (sum > biggestElf) {
            biggestElf = sum
        }

        recordOfAll.push(sum)
    }

    console.log('Part 2')
    const sorted = recordOfAll.sort((a,b) => b-a);
    console.log(`The 3 biggest Elf combined ${arraySum(sorted.slice(0,3))}`)
    console.log('end')
}

part1()
part2()