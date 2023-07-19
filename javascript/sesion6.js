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
