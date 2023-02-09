// const sum = (a, b) => a + b;

const { reverse } = require("dns");

 
// const arr = [
//     'Minsk',
//     'London',
//     'Homel',
//     'Brest',
//     'Barcelona'
// ];

// const result = [];
// for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i] + 'smt');
// };

// console.log(result);

// const data = [0, 1, false, 2, '', 3];

// const compact = (arr) => {
//     const result = [];
//     for (let index = 0; index < arr.length; index++) {
//         if(arr[index]) {
//             result.push(arr[index])
//         }
//     }
//     return result;
// };
const concat = (arr, ...rest) => {
//    return [...arr, ...rest];
   const result = [];
   for (let i = 0; i < arr.length; i++ ) {
    result.push(arr[i])
   }
   for (let i = 0; i < rest.length; i++) {
    result.push(rest[i])
   }
   return result
};

const join = (arr, separator) => {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        result += element + separator; 
    }
    return result
};

console.log(join([1, 2, 3], "====="));
console.log([1, 2, 3].join("<>"));

const reverse1 = (array1) => {
    const result = [];
    for (let i = 0; i < array1.length; i++) {
        const lastElement = array1.length - 1 - i;
        result.push(array1[lastElement]);        
} return result;
};

console.log(reverse1([1, 2, 3]));


const reverse2 = (array2) => {
    const length = array2.length; 
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(array2.pop());        
}
    return result;
};

console.log(reverse2([1, 2, 3]));


const reverse3 = (array3) => {
    const length = array3.length; 
    for (let i = 0; i < array3.length / 2; i++) {
        const element = array3[i];
        array3[i] = array3[length - 1- i];
        array3[length - 1 - i] = element;               
}    
};

const data = [1, 2, 3];
reverse3(data);
console.log(data);


const truncate = (string, options) => {
    const separator = options.separator ?? '...';
    return string.slice(0, options.length) + separator;
}

const string = 'let it be the text about something that does not matter';
 console.log(
    truncate(string, {
        length: 10,
         separator: "rty"
    }))

const data2 = [1, 2, 3];
data.push(10); //adds to the end
data.pop(); //removes from the end
data.shift(); //removes from the head
data.unshift(10); //adds to the head

data.indexOf(2) // returns index
data.includes(3) // returns boolean


    const users = [
        {name : "name1", age : 36 },
        {name : "name2", age : 46 },
        {name : "name3", age : 56 },
        {name : "name4", age : 66 }
     ];
    
     const result = users.filter((item) => item.age > 40);
     console.log(result)

     const user1 = users.filter((item) => {
        return item.age === 56
     });
     console.log(user1)

         
    const find =  (arr, callback) => {
        for (i=0; i < arr.length; i++) {
            if (callback(arr[i])) {
                return arr[i]
            }
        }
    }
    
    const user = find(users, (item) => {             
            return item.age < 46
    })
    
    console.log(user)

    

module.exports = {
    //sum,
    // compact,
    concat
};
