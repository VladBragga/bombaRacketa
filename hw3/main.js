//=============1================
task_1.onclick = function () {
  function task1() {
    let words = prompt("Введите строку для упорядочивания");
    const i = words => + (words.match(/\d+/g) || [0])[0]; // нахождение чисел в словах
    const f = words => words.split(' ').sort((a, b) => i(a) - i(b)).join(' '); // сортировка за возростанием
    alert(f(words));
  }
  task1();
}
//=============2================
task_2.onclick = function () {
  let game = [
    [2, 1, 2],
    [1, 2, 1],
    [2, 1, 2]
  ];
  console.log(game);
  function winner(a) {
    for (let i = 0; i < 3; i++)
      if (game[i][0] == a && game[i][1] == a && game[i][2] == a) { return a; }
    for (let i = 0; i < 3; i++)
      if (game[0][i] == a && game[1][i] == a && game[2][i] == a) { return a; }

    if (game[0][0] == a && game[1][1] == a && game[2][2] == a) { return a; }
    if (game[0][2] == a && game[1][1] == a && game[2][0] == a) { return a; }
    if (a == 2) {
      for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
          if (game[i][j] == 0) { return 0; }
      return -1;
    }
  }
  for (let i = 1; i <= 2; i++) {
    if (winner(i) == 0) console.log(" Игра не закончилась");
    if (winner(i) == -1) console.log("Ничья");
    if (winner(i) == 1) { alert("Win X!"); break; }
    if (winner(i) == 2) { alert("Win Y!"); break; }
  }
};
//============3=================
task_3.onclick = function () {

  let arr = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]],
     result = [arr.length];
     console.log(arr);
     result.push(0);
  let need = 4, agent, chairs_here, difference;
  const reducer = (acc, cur) => acc + cur;

if(need == 0) console.log("Game on!");
  else{
  arr.forEach(function(item, i, arr) {
    if(result.reduce(reducer) == need)
       {  return 0; }
    agent = item[0].length;
    chairs_here = item[1];
    difference = chairs_here - agent;
    if(difference == 0 || difference < 0){ // ветка нет стульев
        result[i] = 0;}
    if(difference > 0){ // ветка есть стулья
      difference > need ? result[i] = need : result[i] = difference; }
  });
}
      if(result.reduce(reducer) < need)   console.log("Not Enough!");
      if(result.reduce(reducer) == need)  console.log(result);
};