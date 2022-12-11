import { readFileSync } from 'node:fs'

const input = readFileSync("tasks/template/input.txt", { encoding: 'utf-8'})
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
            console.log(sum)
        }
        recordOfAll.push(sum)

    }

    console.log(biggestElf)
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
            console.log(sum)
        }
        recordOfAll.push(sum)

    }

    console.log(biggestElf)

    const sorted = recordOfAll.sort((a,b) => b-a);
    console.log(arraySum(sorted.slice(0,3)))
}

part1()
part2()