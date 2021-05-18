//====================TASK 1===========================
butt1.onclick = function(){
    function task() {
        
    let n = prompt("Количество строк ", ""),
        m= prompt("Количество столбцов ", ""),
        min = 0,
        sum_min = 0;
    
        while(n <= 0 || m <= 0) {
            alert("Неверная размерность матрицы");
            n = prompt("Количество строк ", ""),
            m= prompt("Количество столбцов ", "");
    }

    var arr = new Array(n);

    for (var i = 0; i < n; i++) {
      arr[i] = new Array(m);
    }
    //=================================
    for (var i = 0; i < n; i++) {
        for(var j = 0; j < m; j++) {
            arr[i][j] = prompt("Введите "+(i+1)+" столбец и "+(j+1)+" строку", ""); 
            while(arr[i][j] == "" || (/\d/.test(arr[i][j])) == false)
                {
                alert("Введите ещё раз!");
                arr[i][j] = prompt("Введите "+(i+1)+" столбец и "+(j+1)+" строку", ""); 
                }
            };
    };
    for (let i = 0; i < n; i++)
    {
        min = Number(arr[i][0]);
        for (let j = 0; j < m; j++)
        {
            if (min > Number(arr[i][j])) 
            {
                min = Number(arr[i][j]);
            }
        }
        sum_min += min;
    }
  
//=================================================
    var myTableDiv = document.getElementById("myDynamicTable");
  
    var table = document.createElement('TABLE');
    table.border = '1';
  
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    for (var i = 0; i < n; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
  
      for (var j = 0; j < m; j++) {
        var td = document.createElement('TD');
        td.width = '75';
        td.appendChild(document.createTextNode(arr[i][j]));
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
    document.getElementById('otvet1').innerHTML=" Сумма минимальных эллементов массива = "+ sum_min;
}
task();
};

//============================TASK 2==============================



butt2.onclick = function(){

    function task2() {
        let n = prompt("Количество возрастов ", "");
        while(n <= 1) {
            alert("Хотя бы ещё один возраст)");
            n = prompt("Количество строк ", "");  
    };
    var mas = new Array(n);
    for (let index = 0; index < n; index++) {
         mas[index] = prompt("Введите возраст "+(index+1), "");  

         while(Number(mas[index]) <= 0 || Number(mas[index]) > 120 || (/\d/.test(mas[index])) == false) {
            alert("Введите ещё раз)");
            mas[index] = prompt("Введите возраст "+(index+1), "");  
            };
            console.log(mas[index]);
        }
    
    for(let i = 0; i < n; i++){
       for(let i = 0; i < mas.length; i++){
           if(Number(mas[i]) < Number(mas[i+1])){
                [mas[i], mas[i+1]] = [mas[i+1], mas[i]];
           }
       }
    }
    console.log(mas[0]+ ", "+mas[1]);
    document.getElementById('otvet2').innerHTML=" Наибольший возраст = "+ mas[0] + " ,  "+ mas[1];
    }
    task2();
};
//====================TASK 3===============================

butt3.onclick = function(){

    function task3() {
        let str = prompt("Введите предложение ", "");

        function findShortestWord(str) {
            return  str.split(' ').reduce((acc, cur) => acc.length <= cur.length ? acc : cur);
          }
        //  ES6 const findShortestWord = str => { return  str.split(' ').reduce((acc, cur) => acc.length <= cur.length ? acc : cur); }

            let answer = findShortestWord(str).length;
            document.getElementById('otvet3').innerHTML=" Самое короткое слово - "+answer+" букв.";
    }
    task3();
};