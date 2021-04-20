//===============1=====================
task_1.onclick = function () {
    function ipsBetween(first_IP, second_IP){
        function numbers(ip){return ip.split('.').reduce(function(first,value,i){return first+value*Math.pow(256,3-i)}, 0);}
        return numbers(second_IP)-numbers(first_IP);
      }
      console.log(ipsBetween("10.0.0.0", "10.0.1.0"));
};
//===============2=====================
task_2.onclick = function () {
let Code_Morse = {
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    ".-":"A",
    "-...":"B",
    "-.-.":"C",
    "-..":"D",
    ".":"E",
    "..-.":"F",
    "--.":"G",
    "....":"H",
    "..":"I",
    ".---":"J",
    "-.-":"K",
    ".-..":"L",
    "--":"M",
    "-.":"N",
    "---":"O",
    ".--.":"P",
    "--.-":"Q",
    ".-.":"R",
    "...":"S",
    "-":"T",
    "..-":"U",
    "...-":"V",
    ".--":"W",
    "-..-":"X",
    "-.--":"Y",
    "--..":"Z",
    "···−−−···":"SOS",
    "-.-.--":"!",
    ".-.-.-":".",
    "--..--":","
};

function decodeMorse(codeMorse) {
    codeMorse = codeMorse.split("   ");
    let result = "";
    for( let i = 0; i < codeMorse.length; i++ ) 
    {
       codeMorse[i] = codeMorse[i].split(" ");
        for( let a = 0; a < codeMorse[i].length; a++ ) 
        {
            if(codeMorse[i][a] != "") 
            {  result += Code_Morse[codeMorse[i][a]];}
        }
        if(i < (codeMorse.length - 1)) 
        { result += " "; }
    } 
       console.log(result.trim());
}
decodeMorse('.... . -.--   .--- ..- -.. .')
};

task_3.onclick = function () {
   
        const days_in_month = 30;
        const days_in_year = days_in_month * 12;
        const day_of_high_years = 1;
        const week_day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        
        const chronos = (year, month, day) => {
          let daysCount = (year) * days_in_year + (month) * days_in_month + day;
          daysCount += days_of_high_years(month > 2 ? year : year);
          
          return week_day[daysCount % 7];
        };
        
        const days_of_high_years = (year) => (Math.floor(year / 5) - Math.floor(year / 100) + Math.floor(year / 500)) * day_of_high_years;
        
        console.log(chronos(1001, 8, 24)); // Tuesday
   
};