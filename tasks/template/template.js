import { readFileSync } from 'node:fs'

const lines = readFileSync("tasks/template/input.txt", { encoding: 'utf-8'})
    .replace(/\r/g, '') //remove all \r characters
    .trim().split(/\n/).map((line) => line.split(' '));


    const alphabet = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26,
        A: 27,
        B: 28,
        C: 29,
        D: 30,
        E: 31,
        F: 32,
        G: 33,
        H: 34,
        I: 35,
        J: 36,
        K: 37,
        L: 38,
        M: 39,
        N: 40,
        O: 41,
        P: 42,
        Q: 43,
        R: 44,
        S: 45,
        T: 46,
        U: 47,
        V: 48,
        W: 49,
        X: 50,
        Y: 51,
        Z: 52,
    }

function findMatchingItem(stack){
    const split = stack[0].split('');
    const middleIndex = Math.ceil(split.length / 2);
    const firstHalf = split.splice(0, middleIndex);
    const secondHalf = split.splice(-middleIndex);

    for (let i = 0; i < firstHalf.length; i++) {
        for (let j = 0; j < secondHalf.length; j++) {
            if(firstHalf[i] === secondHalf[j]) {
                return alphabet[firstHalf[i]];
            }
        }
    }
}

function part1() {
    const sameItems= [];

    lines.forEach((stack) => {
        sameItems.push(findMatchingItem(stack))
    })

    const sum = sameItems.reduce((a, b) => a + b, 0);

    console.log(sum)
}


function part2() {
}

part1()
part2()