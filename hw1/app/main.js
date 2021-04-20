//==================TASK 1 ============================
knopka1.onclick = function(){
   
    let L = document.getElementById("long").value,
        W = document.getElementById("width").value,
        H = document.getElementById("height").value;
if(L > 1000 || W > 1000 || H> 1000 || L < 1 || W < 1 || H < 1)
{
document.getElementById('str').innerHTML="Неккоректный ввод!";
}  
else{
    document.getElementById('str').innerHTML="";
    let   paint = 1,
          square_result = 0,
          answer;
    const square = 16;
    
    square_result = (L * H + W * H)*2;
    paint = square_result/square;
    
    if(paint < 1) answer = 'Одной банки хватит с запасом!';
    else answer ="Задача1. Необходимо " +Math.trunc(paint)+" банок краски";
    document.getElementById('str').innerHTML = answer;

}
};

//  ==================== TASK 2=========================
// =============
knopka2.onclick = function(){
    let A1 = document.getElementById("a1").value,
        A2 = document.getElementById("a2").value,
        A3 = document.getElementById("a3").value,
        B1 = document.getElementById("b1").value,
        B2 = document.getElementById("b2").value,
        B3 = document.getElementById("b3").value;
if(A1 > 100 || A2 > 100 || A3> 100 || B1> 100 || B2 > 100 || B3 > 100)
{
document.getElementById('str2').innerHTML="Неккоректный ввод!";
}  
else{
       let arr_A = [Number(A1), Number(A2), Number(A3)],
           arr_B = [Number(B1), Number(B2), Number(B3)],
            pocket = 0,
            money = 0;
            for (let index = 0; index < 2; ++index){
       for (let index = 0; index < 2; ++index) {
          if(arr_A[index+1] > arr_A[index])
          {
             [arr_A[index], arr_A[index+1]] = [arr_A[index+1], arr_A[index]];
          }
          if(arr_B[index+1] > arr_B[index])
          {
             [arr_B[index], arr_B[index+1]] = [arr_B[index+1], arr_B[index]];
          }
       }
    }
       for (let index = 0; index < 3; ++index) {
           pocket = arr_A[index] * arr_B[index];
           console.log(alert(pocket));
            money += pocket;
        }
        
        document.getElementById('str2').innerHTML="Лучшая выручка с песка это "+ money +".";
    }
};

knopka3.onclick = function(){
    let bilet = document.getElementById("tramvai").value;
        
if(bilet.toString().length > 6 || bilet.toString().length < 6)
{
document.getElementById("str3").innerHTML="Неккоректный ввод билетика!";
}  
else{
    let lucky = String(bilet);
    let sum1 = Number(lucky[0]) + Number(lucky[1]) + Number(lucky[2]);
    let sum2 = Number(lucky[3]) + Number(lucky[4]) + Number(lucky[5]);

    if(sum1 == sum2){
        document.getElementById('str3').innerHTML="YES";
    }
    else{
    alert("NO");
    }
}
};
//  ==================== Clear=========================
clear1.onclick = function(){
    document.getElementById('str').innerHTML="";
    document.getElementById("long").value = "";
    document.getElementById("height").value = "";
    document.getElementById("width").value = "";
};
clear2.onclick = function(){
    document.getElementById('str2').innerHTML="";
    document.getElementById("a1").value="";
    document.getElementById("a2").value="";
    document.getElementById("a3").value="";
    document.getElementById("b1").value="";
    document.getElementById("b2").value="";    
    document.getElementById("b3").value="";
};
clear3.onclick = function(){
    document.getElementById('str3').innerHTML="";
    document.getElementById("tramvai").value = "";
    
};