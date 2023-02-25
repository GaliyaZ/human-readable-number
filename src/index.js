module.exports = function toReadable (number) {
  const vocabular1 = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];
  const vocabularDec = {
    0: '',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  }
  let stringNumber = '';
  let arr = String(number).split('');

  while (arr.length) {
    if (arr.length < 2) {
        let ed = Number(arr.shift());
        stringNumber += (stringNumber.length) 
            ? (ed !== 0 ? `  ${vocabular1[ed]}` : '')
            : `${vocabular1[ed]}`;
    } else if (arr.length < 3) {
        let dec = Number(arr.shift());
        let ed = Number(arr.shift());
        let num = Number(`${dec}${ed}`);
        if (num < 20) {
            stringNumber += (stringNumber.length)
                ? num ? ` ${vocabular1[num]}` : ''
                : `${vocabular1[num]}`;
        } else {
            stringNumber += (stringNumber.length) ? ` ${vocabularDec[dec]}` : `${vocabularDec[dec]}`;
            if (ed) {
                stringNumber += ' ' + vocabular1[ed];
            }
        }
      } else {
        let hund = Number(arr.shift());
        if (hund) {
            stringNumber += `${vocabular1[hund]} hundred`;
        }
      }
  }

  return stringNumber;
}
