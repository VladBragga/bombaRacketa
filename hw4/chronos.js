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
decodeMorse('.... . -.--   .--- ..- -.. .');
};