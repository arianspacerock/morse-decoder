const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let dash = /(11)/g;
    let dot = /(10)/g;
    let zero = /(0)/g;
    let arrBinary = [];
    let arrDecode = [];

    for(let i = 0; i < expr.length; i += 10) {
        arrBinary.push(expr.substr(i, 10));
    }

    let string = arrBinary.join(' ');

    let strDash = string.replace(dash ,'-');
    let strDot = strDash.replace(dot, '.');
    let morse = strDot.replace(zero, '');

    let arrMorse = morse.split(' ');

    for (let j = 0; j < arrMorse.length; j++){
        if (arrMorse[j] in MORSE_TABLE){
            arrDecode.push( MORSE_TABLE[arrMorse[j]]);
        } else {
            arrDecode.push(' ');
        }
    
    };
    
    return arrDecode.join('');
  
}



module.exports = {
    decode
}