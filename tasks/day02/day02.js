import { readFileSync } from 'node:fs'

const lines = readFileSync("tasks/template/input.txt", { encoding: 'utf-8'})
    .replace(/\r/g, '') //remove all \r characters
    .trim().split(/\n/).map((line) => line.split(' '));


function part1() {
    const draw = [];
    const win = [];
    const loss = [];
    const x = [];
    const y = [];
    const z = [];
    for (const shootOut of lines) {
        if(shootOut[0] === 'A' && shootOut[1] === 'X') {
            draw.push(shootOut);
            x.push(shootOut[1])
        }

        if(shootOut[0] === 'B' && shootOut[1] === 'Y') {
            draw.push(shootOut);
            y.push(shootOut[1])
        }

        if(shootOut[0] === 'C' && shootOut[1] === 'Z') {
            draw.push(shootOut);
            z.push(shootOut[1])

        }

        if(shootOut[0] === 'A' && shootOut[1] === 'Y') {
            win.push(shootOut);
            y.push(shootOut[1])

        }

        if(shootOut[0] === 'B' && shootOut[1] === 'Z') {
            win.push(shootOut);
            z.push(shootOut[1])

        }

        if(shootOut[0] === 'C' && shootOut[1] === 'X') {
            win.push(shootOut);
            x.push(shootOut[1])
        }

        if(shootOut[0] === 'A' && shootOut[1] === 'Z') {
            loss.push(shootOut);
            z.push(shootOut[1])

        }

        if(shootOut[0] === 'B' && shootOut[1] === 'X') {
            loss.push(shootOut);
            x.push(shootOut[1])
        }

        if(shootOut[0] === 'C' && shootOut[1] === 'Y') {
            loss.push(shootOut);
            y.push(shootOut[1])

        }
    }

    const drawScore = draw.length * 3;
    const winScore = win.length * 6;
    const xScore = x.length;
    const yScore= y.length * 2;
    const zScore = z.length * 3;

    const totalScore = drawScore + winScore + xScore +yScore + zScore

    console.log(totalScore)

}


function part2() {
    const draw = [];
    const win = [];
    const x = [];
    const y = [];
    const z = [];
    for (const shootOut of lines) {
        if(shootOut[0] === 'A' && shootOut[1] === 'Y') {
            draw.push(shootOut);
            x.push(shootOut[1])
        }

        if(shootOut[0] === 'B' && shootOut[1] === 'Y' ) {
            draw.push(shootOut);
            y.push(shootOut[1])
        }

        if(shootOut[0] === 'C' && shootOut[1] === 'Y') {
            draw.push(shootOut);
            z.push(shootOut[1])
        }

        if(shootOut[0] === 'A' && shootOut[1] === 'Z') {
            win.push(shootOut);
            y.push(shootOut[1])
        }

        if(shootOut[0] === 'B' && shootOut[1] === 'Z' ) {
            win.push(shootOut);
            z.push(shootOut[1])
        }

        if(shootOut[0] === 'C' && shootOut[1] === 'Z') {
            win.push(shootOut);
            x.push(shootOut[1])
        }

        if(shootOut[0] === 'A' && shootOut[1] === 'X') {
            z.push(shootOut[1])
        }

        if(shootOut[0] === 'B' && shootOut[1] === 'X' ) {

            x.push(shootOut[1])
        }

        if(shootOut[0] === 'C' && shootOut[1] === 'X') {
            y.push(shootOut[1])
        }
    }

    const drawScore = draw.length * 3;
    const winScore = win.length * 6;
    const xScore = x.length;
    const yScore= y.length * 2;
    const zScore = z.length * 3;

    const totalScore = drawScore + winScore + xScore +yScore + zScore

    console.log(totalScore)

}

part1()
part2()