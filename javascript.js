// 1. Найти произведение цифр натурального числа

let num = 33721;
let a = 0;
let m = 1;
let arr = [];

let i = 0;

while (num > 0){
    
    a = num % 10;
    arr[i] = a;
    num = (num - a) / 10;
    i++;
}

for (let k = 0; k < arr.length; k++) {
   
    m = m * arr[k];
}

console.log(arr);
console.log(m);

// 2. Полученный результат возвести в степень 3, используя только 1 оператор
//        Вывести его на экран

console.log(m**3);

