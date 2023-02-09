const { sum, compact, concat } = require('./sum.js');

// describe ('Sum Component', () => {
//     test("should sum two numbers", () => {
//         expect (sum(2, 2)).toBe(4)
//     })
// });

// const data = [0, 1, false, 2, '', 3];

// const resultCompact = [1, 2, 3];

// describe ("Compact", () => {
//     test("should be removed all falsey values ", () => {
//         expect (compact(data)).toEqual(resultCompact)
//     })
// })

describe ("concat", () => {
    test("should concat values ", () => {
        const data = [1, 2, 3];
        const result = [1, 2, 3, 1, 2, 3, 4, 5];
        expect (concat(data, 1, 2, 3, 4, 5)).toEqual(result)
    })
})