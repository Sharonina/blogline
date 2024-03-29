const Person = function (name, birthYear, job) {
  // Atributos
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
  // Método
  this.calculateAge = () => 2023 - this.birthYear;
};

const john = new Person("john", 1990, "Developer");
john.telephone = "55555";
console.log(john);
console.log(john.calculateAge()); //Se debe mandar llamar la

const Medico = function (name, birthYear, job) {
  Person.call(this, name, birthYear, job); //herencia, es como 'super'
  this.operar = () => console.log("Estoy operando");
};

const Developer = function (name, birthYear, job) {
  Person.call(this, name, birthYear, job); //siempre lleva this
  this.programar = () => console.log("Estoy programando");
};

//Reto 1
const Vec = function (x, y) {
  this.x = x;
  this.y = y;
  this.plus = (vec2) => `Vec { x: ${this.x + vec2.x}, y:${this.y + vec2.y} }`;
  this.minus = (vec2) => `Vec { x: ${this.x - vec2.x}, y:${this.y - vec2.y} }`;
  this.length = () => Math.sqrt(this.x ** 2 + this.y ** 2);
};

const vec1 = new Vec(1, 2);
const vec2 = new Vec(2, 3);

console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979

// Reto 2
const Triangle = function (a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
};

Triangle.prototype.getPerimeter = function () {
  return this.a + this.b + this.c;
};

const t1 = new Triangle(4, 6, 7);
console.log(t1);
console.log(t1.__proto__); //prototyoe como tal no existe, pero se puede acceder a proto para ver la funcion
console.log(t1.getPerimeter());

Object.prototype.saluda = function () {
  console.log("hola");
};

t1.saluda(); // Imprime hola porque sigue la cadena.. t1 hereda de triangulo, que hereda de object
