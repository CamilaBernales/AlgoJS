// ejercicio 1
/* Suma de todos los números en un arreglo: Escribe una función que reciba un arreglo de números y devuelva la suma de todos los números en el arreglo. */

const sumNumbers = (arr) => {
  const initialValue = 0;
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
};

console.log(sumNumbers([1, 9, 10]));

/*
Encontrar el número más grande en un arreglo:
Escribe una función que encuentre el número más grande en un arreglo de números.
*/

const findBiggestNum = (arr) => {
  // with max
  //   return Math.max(...arr);
  // with sort
  //return arr.sort((a, b) => b - a)[0]; // O(n long n)
  // with simple iteraction
  let biggest = arr[0];
  arr.forEach((element) => {
    if (element > biggest) {
      biggest = element;
    }
  });
  return biggest;
};

console.log(findBiggestNum([1, 9, 10]));

/*
Filtrar números pares en un arreglo: 
Escribe una función que reciba un arreglo de números 
y devuelva un nuevo arreglo que contenga solo los números pares.
*/

const filterEvenNumbers = (arr) => {
  return arr.filter((item) => item % 2 === 0);
};
console.log(filterEvenNumbers([4, 8, 12]));

/*
Contar la frecuencia de elementos en un arreglo: Escribe una función que tome un arreglo 
como entrada y devuelva un objeto con la frecuencia de cada elemento en el arreglo.
*/

// const countFrequency = (arr) => {
//   const frequency = {};
//   arr.forEach((item) => {
//     if (frequency[item]) {
//       frequency[item] += 1;
//     } else {
//       frequency[item] = 1;
//     }
//   });

//   return frequency;
// };

// console.log(
//   countFrequency([4, 8, 12, 4, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 0, 10, 12, 4])
// );

// con estructura map
const countFrequency = (arr) => {
  const frequency = new Map();
  arr.forEach((element) => {
    // The correct usage for storing data in the Map is through the set(key, value) method.
    frequency.set(element, (frequency.get(element) || 0) + 1);
  });
  return frequency;
};

console.log(
  countFrequency([4, 8, 12, 4, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 0, 10, 12, 4])
);
