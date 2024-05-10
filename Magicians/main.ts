// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// magicians name
let magician_name = ["Harry Houdini", "Derren Brown", "Lance Burton"]

// printing each magician name
show_magicians(magician_name);