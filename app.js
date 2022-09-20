const program = Sentient.compile("a = 123; expose a;");

console.log("Program data", program);
console.log("Exposed variables", Sentient.exposed(program));
