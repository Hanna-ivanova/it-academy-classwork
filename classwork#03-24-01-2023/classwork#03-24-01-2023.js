function sum (a, b) {
    alert (a+b);
}

let sum = (a, b) => a + b;
console.log(sum(5, 9));

// function min (a, b) {
//     if (a < b) {
//         return a
//     } else {
//         return b
//     }
// }
//  console.log(min (7, 9));

const min = (a, b) => {
    return a > b ? b : a;
};

// const min (a, b) => {
//     if (a > b) return b;
//         return a
// }
//  console.log(min (7, 9));

console.log(min (7, 9));

// function range (start, max, number) {
//     if (number >= start && number <= max) {
//         console.log (true) 
//     } else {
//         console.log (false)  
//     }
// };

// range (1, 7, 9)

const range = (start, max, number) => {
    return number >= start && number <= max;
};
console.log(range (7, 9, 8));

const user = {
    name: "John",
    surname: "Smith"
  }
    user.name = 'Pete';
    delete user.name

    console.log(user)

    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }

    function countTotalSalaries(salaries) {
        let res = 0;
        for ( let key in salaries) {
            res += salaries[key]
        }
        return res;
    }
    console.log(countTotalSalaries(salaries))