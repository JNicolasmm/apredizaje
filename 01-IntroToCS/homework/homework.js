'use strict';

function BinarioADecimal(num) {
  let decimal = 0
  num = num.toString().split('').reverse()
  for (let i = 0; i < num.length; i++) {
    decimal += 2**i*num[i]
  }
  return decimal
}


function DecimalABinario(num) {
  var binario = []
  while (num > 0) {
    binario.unshift(num % 2)
    num = parseInt(num / 2)
  }
  return binario.join('')
}


module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
