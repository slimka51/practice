//1) Создать массив week и записать в него дни недели
//·        Вывести на экран все дни недели
//·        Каждый из них с новой строчки
//·        Выходные дни - жирным шрифтом
//·        Текущий день - курсивом


/* let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let out_arr = document.querySelector('#out_arr');

let str = '';

for (let i = 0; i< week.length; i++  ) {
    if (week[i]!==undefined) {
        if (week[i] == 'Суббота' || week[i] == 'Воскресенье') {
            str += '<b>' + week[i]+'<br>' + '</b>';
        } else if (week[i] == 'Среда') {
            str += '<i>' + week[i]+'<br>' + '</i>';
        } else {
            str +=  week[i]+'<br>';
        }       
    }
}
out_arr.innerHTML = str; */


//2) Создать массив arr = []
//·        Записать в него 7 многозначных чисел в виде строк
//·        Вывести в консоль только те, что начинаются с цифры 3 или 7 (Должны присутствовать в массиве)

let array = ['354', '546', '785', '6879'];
let num = 0;
let arrNum = [];
let k = 0;


for (let i = 0; i < array.length; i++) {
   
   let toNumb = +array[i]
    while(toNumb > 0) {
        if(toNumb == 3 || toNumb == 7) {
            console.log(array[i]);
            toNumb = 0;
        } else {
            num = toNumb % 10;
            toNumb = (toNumb - num) / 10;
            arrNum[k] = num;
            k++;
        }    
    }
    
}
