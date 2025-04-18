// {
//     /* находения минимума среди двух чисел*/
// let x, y, z, min;
// x = parseInt(prompt("введите первое число"));
// y = parseInt(prompt("введите второе число"));
// z = parseInt(prompt("введите третье число"));

// if(x <= y && x <= z){
//     min =x
// } else if(y <= x && y <= z) {
//     min = y
// } else if(z <= y && z<= x){
//     min = z

// }

// alert("min=" + min)


// {
//     /* вывести нечетные числа от 0 до 10 */
//     for (let i = i; i < 10; i = i + 2 ){
//         if (i % 2 !=0)console.log(i);
//     }
// }


// {
// /* найти кол-во нечетных чисел в последовательности . последовательность чисел вводится с клав и заканчивается вводом 0*/
// let count = 0, x;
// x = parseInt(prompt("введите число "));
// while(x!= 0){
//     if (x % 2 != 0){
//         count++;
//     }
//     x = parseInt(prompt("введите число "));
// } 
// alert("кол-во нечетных чисел"+ count);
// }

// {
//     /*найти кол-во нечетных цифр в натуральном числе  */
//     let count = 0, d, x;
//     x = parseInt(prompt("введите натурально число"));
//     while(x !=0){
//         d = x % 10;
//         if(d % 2 !=0) {
//             count++;
//         }
//         x = Math.floor(x / 10);
//     }
//     alert("кол-во нечетных чисел" + count);
// }
/*задачи из сборника задач*/
{/*6.26 Дано натуральное число.
а) Определить его максимальную цифру.
б) Определить его минимальную цифру. */

let x = parseInt(prompt("Введите натуральное число:"));
let max = 0;

while (x !== 0) {
    let d = x % 10;
    if (d > max) {
        max = d;
    }
    x = Math.floor(x / 10);
}

alert("Максимальная цифра: " + max);


x = parseInt(prompt("Введите натуральное число:"));
let min = 9;

while (x !== 0) {
    let d = x % 10;
    if (d < min) {
        min = d;
    }
    x = Math.floor(x / 10);
}

alert("Минимальная цифра: " + min);

}

{
    /* 5.53Известны оценки ученика по 10 предметам. Определить среднюю оценку. x- оценка y- средняя*/

    let sum = 0;
    for (let i=1; i <= 10; i++){
        let x = parseInt(prompt("введите оценку"+ i +":" ));
        sum += x;
    } 
    let y = sum / 10;
    alert("Средняя оценка: " + y); 
}

{/* 4.29 Дано трехзначное число. Определить, равен ли квадрат этого числа сумме ку-
бов его цифр. */


    let number = parseInt(prompt("Введите трехзначное число:"));
    const x = number % 10;
    const y = Math.floor(number / 10) % 10
    const z = Math.floor(number / 100) % 10 
    
    const sqrtOfNumber = number * number;
    const sumOfCubes = Math.pow(x, 3)+ Math.pow(y, 3) +  Math.pow(z, 3);
    if (sqrtOfNumber ==sumOfCubes) {
        alert("Квадрат числа  равен сумме кубов его цифр"+ number);
    } else {
        alert("Квадрат числа  НЕ равен сумме кубов его цифр"+ number);
    }
}


