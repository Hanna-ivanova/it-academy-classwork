const sum1 = (a, b) => a + b;

sum1(10, 10);  

const sum2 = (a, b) => {
    return a + b;
};

const sum3  = function(a, b) {
    return a + b
} //function expression

function sum4(a, b) {
    return a + b
}// function declaration

const arr_ = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const result = arr.indexOf(6, 4);

console.log(result);
arr.pop();
arr.push(111); 
console.log(arr.pop());
arr.shift()
console.log(arr);

const arr = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const unique = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    } 
    return result;
};

console.log(unique(arr));

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    {
        id: 1,
        title: 'Bag 1',
        rating: 2,
        categories: ['clothes']
    },
    {
        id: 2,
        title: 'Bag 2',
        rating: 1,
        categories: ['clothes']
    },
    {
        id: 3,
        title: 'Bag 3',
        rating: 6,
        categories: ['clothes']
    },
    {
        id: 4,
        title: 'Bag 4',
        rating: 5,
        categories: ['clothes']
    },
]

const result2 = array.find((item) => {
    return item === 5;
});

console.log(result2);

const result3  = products.find((item, index, array) => {
    return item.title === 'Bag 3';
});

console.log(result3); 

const result4 = products.filter((item, index, array) => {
    return item.rating > 3;
}) 

console.log(result4);

const result5 = products.map((item, index, array) => {
    return {
        ...item,
        rating: item.rating / 2
    }
}) 

console.log(result5);

const result6 = products.reduce((acc, item, index, array) => {
    return acc += item.rating
}, 0) 

console.log(result6);

const arr6 = [123, 46, 43232, 11334, 789];

arr6.sort((a, b) => {
    if (a < b) return - 1;
    if (a > b) return 1;
});
 
console.log(arr6);

arr6.sort((a, b) => {
 return a- b;
});
 
console.log(arr6);

products.sort((a, b) => {
    return a.rating - b.rating
});

console.log(products);

