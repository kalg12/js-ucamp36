/*
Objetos en Javascript
*/

let estudiante = {
  nombre: "Noé",
  edad: 15,
  isActive: true,
};

console.log(typeof estudiante);
console.log(estudiante);

if (estudiante.edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

/* ARREGLOS */

let estudiantes = [
  "Noé",
  "Alan",
  "Abel",
  "Veronica",
  "Luis",
  "Itzel",
  "Leonel",
  "Sergio",
];
console.log(typeof estudiantes);
console.log(estudiantes);
console.log(estudiantes[6]);

const zoologico = ["🐯", "🦁", "🐻", "🐵", "🐘", "🦒", "🦓", "🦔"];
console.log(zoologico);
console.log("El zoológico tiene " + zoologico.length + " animales");
/* Kevin ha logrado tener más ingresos $$$$  y compra un delfin para su zoologico */
zoologico.push("🐬");
console.log(zoologico);
console.log("El zoológico tiene " + zoologico.length + " animales");
/* Kevin ha logrado tener más ingresos $$$$  y 3 animales más */
zoologico.push("🐍", "🦑", "🦈");
console.log(zoologico);
console.log("El zoológico tiene " + zoologico.length + " animales");
/* Kevin pierde al último animal que compró */
zoologico.pop();
console.log(zoologico);
console.log("El zoológico tiene " + zoologico.length + " animales");

/* Vamos a usar el métofo por each para recorrer el arreglo llamado zoolico */
zoologico.forEach((emojiDeCadaAnimal) => {
  console.log(emojiDeCadaAnimal);
});

console.log("------------------------------------------------");
console.log(zoologico[0]);
console.log(zoologico[1]);
console.log(zoologico[2]);
console.log(zoologico[3]);

/* Quiero eliminar del zooligo al elemento pocisionado en la 3 */
zoologico.splice(3, 1);
console.log(zoologico);
console.log("El zoológico tiene " + zoologico.length + " animales");
