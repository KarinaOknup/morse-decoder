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
    '':  ' ',
};

function decode(expr) {
  let letter = [];
    Array.from(expr)
      for(let i = 0; i < expr.length; i += 10)
  {
      letter.push(expr.slice(i, i + 10));
  }
  let letter2=[];
  for(let k=0;k<letter.length; k++){
          let two = [];
          Array.from(letter[k]);
          for(let i = 0; i < letter[k].length; i += 2)
            {
            two.push(letter[k].slice(i, i + 2));
            }
          letter2.push(two);
      }  
  let code=[];
  for(let k=0;k<letter2.length; k++){
          let middlecode=[];
          if(letter2[k]===[ '**', '**', '**', '**', '**' ]) middlecode.push(' ');
          else{
            for(let i = 0; i < letter2[k].length; i++)
            {
              if (letter2[k][i]==='00') middlecode.push('')
              if (letter2[k][i]==='10') middlecode.push('.')
              if (letter2[k][i]==='11') middlecode.push('-')
            }
      }  
      code.push(middlecode);   
  }
  let str=[];
  for(let k=0; k<code.length ;k++){
      str.push(code[k].join(''));
  }
  str=str.map(letter=>MORSE_TABLE[letter]).join('');
 return str;
}  

module.exports = {
    decode
}
