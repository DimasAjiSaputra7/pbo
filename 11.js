// Map mahasiswa
let mahasiswa = new Map();
mahasiswa.set("001", "Andi");
mahasiswa.set("002", "Budi");
mahasiswa.set("003", "citra");
mahasiswa.set("002", "citra"); // override nilai lama

// Fungsi print array
function printItems(arr) {
    console.log(arr.join(", "));
}

// Set tugas (nilai duplikat tidak akan masuk)
let tugas = new Set();
tugas.add("Belajar OOP");
tugas.add("Mengerjakan Tugas");
tugas.add("Belajar OOP"); // duplikat → diabaikan

console.log("Data mahasiswa:");
console.log("001:", mahasiswa.get("001"));
console.log("002:", mahasiswa.get("002"));
console.log("003:", mahasiswa.get("003"));

printItems([1, 2, 3]);
printItems(["A", "B", "C"]);
printItems([1, 2, 3, "A", "B", "C"]);

console.log("Tugas:", tugas);
