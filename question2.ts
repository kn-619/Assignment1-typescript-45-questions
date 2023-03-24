let person="fAisAl";
console.log(`Lowercase = ${person.toLowerCase()}`);
console.log(`Uppercase= ${person.toUpperCase()}`);


function toTitleCase(str: string): string {
    let y = str.slice(1).toLowerCase();
    let x = str.slice(0, 1).toUpperCase();
    return x + y;
  }

  console.log(`Titlecase = ${toTitleCase(person)}`);