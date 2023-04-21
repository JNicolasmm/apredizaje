'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array
  let pivot = array[Math.floor(Math.random() * array.length)]
  let menor = []
  let mayor = []
  let igual = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) menor.push(array[i])
    if (array[i] > pivot) mayor.push(array[i])
    if (array[i] === pivot) igual.push(array[i])
  }
  return quickSort(menor).concat(igual).concat(quickSort(mayor))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2) return array 
  let mitad = Math.floor(array.length / 2)
  let izquierda = array.slice(0, mitad)
  let derecha = array.slice(mitad, array.length)
  let arrOrdenado = []
  izquierda = mergeSort(izquierda)
  derecha = mergeSort(derecha)
  while(izquierda.length && derecha.length) {
    if (izquierda[0] < derecha[0]) arrOrdenado.push(izquierda.shift())
    else arrOrdenado.push(derecha.shift())
  }
  arrOrdenado = arrOrdenado.concat(izquierda, derecha)
  return arrOrdenado
  // if(array.length < 2) return array         
  // let mitad = Math.floor(array.length / 2)
  // let left = array.slice(0, mitad);
  // let right = array.slice(mitad, array.length);      
  // let newArray = [];
  // left = mergeSort(left)
  // right = mergeSort(right)
  // while(left.length && right.length){
  //   if(left[0] < right[0]){
  //     newArray.push(left.shift())
  //   } else {
  //     newArray.push(right.shift())
  //   }
  // }
  // newArray = newArray.concat(left, right);
  // return newArray
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
