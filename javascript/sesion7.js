const carro = {
  brand: "Nissan",
  model: "Sentra",
  year: 2020,
};

function addColor(car, color) {
  // Inmutabilidad -- assign crea un objeto vacio, copia car y añade color
  //const carN = Object.assign({}, car, { color: color });
  const carN = { ...car, color: color };
  return carN;
}

const newCar = addColor(carro, "Black");

console.log(carro);
console.log(newCar);

//función pura, siempre recibe y retorna algo. Siempre retorna lo mismo cuando recibe el mismo valor.

var x = 4;

function foo(a, b) {
  x = x + a;
  return x * b;
}

//reto 1
function flatten(arrays) {
  const newArray = [];
  arrays.forEach((item) => newArray.push(...item));
  return newArray;
}

const arrays = [[1, 2, 3], [4, 5], [6]];
const array = flatten(arrays);

console.log(array); // [1, 2, 3, 4, 5, 6]

//reto2
function compact(array) {
  const newArray = array2.filter((item) => item != false);
  return newArray;
}

const array2 = [0, 1, false, 2, "", 3];
const compactedArray = compact(array2);

console.log(compactedArray); // [1, 2, 3]

//reto3
