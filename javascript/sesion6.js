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
