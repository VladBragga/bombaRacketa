task_1.onclick = function () {
    
    let normal = [],
        index_ch = [],
        index_null = [],
        kol_n = 0,
        kol_null = 0; 

    const get_number = num => {
        normal = [],
        index_ch = [],
        index_null = [],
        kol_n = 0,
        kol_null = 0; 
        for(let i = 0; i < num.length; i++) {
            index_ch.push(0);
            index_null.push(0);
        }
        for(let i=0; i < num.length; i++){
            if(num[i] == '@')
                index_ch[i]++;
            if(num[i] == '~')
                index_null[i]++;   
        }
        let i = 0;
        while(i < num.length){
            while(index_ch[i] == 1){
                kol_n++;
                i++;
            }
            normal.push(kol_n);
            kol_n = 0;
            while(index_null[i+1] == 1){
                normal.push(0);
                i++;
            }
           i++;
        }
        normal = normal.join('');
        return normal;
    }
    
    function solution(){
        let num1 = prompt("Введите первую цифру", ''),
            num2 = prompt("Введите вторую цифру", ''),
            action = prompt("Введите действие( / - + * )", ''),
            result;
            console.log(get_number(num1));
            console.log(get_number(num2));
            n1 = Number(get_number(num1));
            n2 = Number(get_number(num2));
            switch(action){
                case '-': {  result = n1-n2;break;} 
                case '+': {  result = n1+n2;break; } 
                case '*': {  result = n1*n2;break; } 
                case '/': {  result = n1/n2;break; } 
            }
            console.log(result);
            return result;
        }

    function send_number(){
        number = solution();
        let result = [];
        let digits = number.toString().split(''),
            str = digits.map(Number);
        for(let i = 0; i < str.length; i++){
            if(str[i] != 0){
            for(let a = 0; a < Number(str[i]); a++) { result.push('@');}
            result.push('~');
        }
            if(str[i]==0) result.push('~');
     }
     console.log(result);
}
    send_number();
}

task_2.onclick = function () {
n = prompt("Введите число (макс. 35)", '')
var limit = 35, //верхняя граница списка
     partitionResultString = '',
    count = 0,
    max_m = n,
    m,
    max_mas = [],
    stroka_number;
function partition(n, limit, str) { 
 var i;
 if (n > 0) {
  var k = Math.min(n, limit);
  for (i = k; i > 0; i--) {  partition(n-i, i, str + '+' + i);  }
 }
 else {
    partitionResultString += str + '\n';
    console.log(str);
    let stroka_number = parseInt(str.replace(/[^\d]/g, ''))
    parseInt(stroka_number); 
    function getNumbers(stroka_number){
    return stroka_number.toString().split('').reduce(function(a, b) {
            return +a * +b;
        })
    }
    m = getNumbers(stroka_number);
    if(max_m == m){
        max_mas.push(str);
    }
    if(max_m < m) {
         max_m = m;
        max_mas.splice(0);
        max_mas.push(str);
    }  
  count++;
 }
 //console.log(max_m, max);
 return partitionResultString;
}
partition(n, limit, '');
max_mas.push(max_m);
console.log(max_mas);
}

task_3.onclick = function () {
    function tickets(money)
    {
        let  bill_25 = 0, 
             bill_50 = 0;
      for(let i = 0;i<money.length;i++)
      {
        if(money[i] == 25) bill_25 += 1;
 
        if(money[i] == 50) bill_25 -= 1; bill_50 += 1;

        if(money[i] == 100){
          (bill_50 == 0 && bill_25 >= 3) ? bill_25 -= 3 : bill_25 -= 1; bill_50 -= 1;
        }
        if(bill_25 < 0 || bill_50 < 0) return 'NO';
      }
      return 'YES';
    }
    console.log([25, 50, 25, 50, 25, 25, 50, 100, 25]);
    console.log(tickets([25, 50, 25, 50, 25, 25, 50, 100, 25]));
    console.log([100, 50, 25]);
    console.log(tickets([100, 50, 25]));
    console.log([25, 25, 50, 50, 25]);
    console.log(tickets([25, 25, 50, 50, 25]));
}