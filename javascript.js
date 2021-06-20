let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

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
out_arr.innerHTML = str;


