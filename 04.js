class Mahasiswa {
  constructor(nama, nim, nilai) {
    // Atribut publik
    this.nama = nama;  
    this.nim = nim;    
    let _nilai = nilai; //Atribut privat  

    // Getter Nama
    this.getNama = function() {
      return this.nama;
    };

    // Setter Nama
    this.setNama = function(namaBaru) {
      if (namaBaru.length > 0) {
        this.nama = namaBaru;
      } else {
        console.log("Nama tidak boleh kosong");
      }
    };

    // Getter NIM
    this.getNim = function() {
      return this.nim;
    };

    // Setter NIM
    this.setNim = function(nimBaru) {
      if (nimBaru.length > 0) {
        this.nim = nimBaru;
      } else {
        console.log("NIM tidak boleh kosong");
      }
    };

    // Getter Nilai (privat)
    this.getNilai = function() {
      return _nilai;
    };

    // Setter Nilai (privat dengan validasi)
    this.setNilai = function(nilaiBaru) {
      if (nilaiBaru >= 0 && nilaiBaru <= 100) {
        _nilai = nilaiBaru;
      } else {
        console.log("Nilai harus antara 0 dan 100");
      }
    };
  }
}

// Membuat objek dengan nama prodi1
let prodi1 = new Mahasiswa("dimas", "12345", 70);

console.log("=== Data Awal ===")
console.log("Nama awal:", prodi1.getNama());
console.log("NIM awal:", prodi1.getNim());
console.log("Nilai awal:", prodi1.getNilai());

console.log("\n=== Setelah diubah ===")
//Ubah nama
prodi1.setNama("Dimas Aji");
console.log("Nama:", prodi1.getNama());

//Ubah NIM
prodi1.setNim("20240096");
console.log("NIM:", prodi1.getNim());

//Ubah nilai (privat)
prodi1.setNilai(90);
console.log("Nilai:", prodi1.getNilai());
