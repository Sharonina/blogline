const carro = {
  brand: "Nissan",
  model: "Sentra",
  year: 2020,
};

function addColor(car, color) {
  // Inmutabilidad -- assign crea un objeto vacio, copia car y añade color
  const carN = Object.assign({}, car, { color: color });
  return carN;
}

const newCar = addColor(carro, "Black");

console.log(carro);
console.log(newCar);
