// Class induk
class Mahasiswa {
  constructor(nama, nim, jurusan, angkatan, ipk) {
    this.nama = nama;         // atribut 1
    this.nim = nim;           // atribut 2
    this.jurusan = jurusan;   // atribut 3
    this.angkatan = angkatan; // atribut 4
    this.ipk = ipk;           // atribut 5
  }

  // method 1
  tampilData() {
    console.log(`Nama: ${this.nama}, NIM: ${this.nim}, Jurusan: ${this.jurusan}, Angkatan: ${this.angkatan}, IPK: ${this.ipk}`);
  }

  // method 2
  belajar() {
    console.log(`${this.nama} sedang belajar.`);
  }

  // method 3
  ikutUjian() {
    console.log(`${this.nama} sedang mengikuti ujian.`);
  }

  // method 4
  status() {
    if (this.ipk >= 3.0) {
      console.log(`${this.nama} status: Lulus dengan baik`);
    } else {
      console.log(`${this.nama} status: Perlu perbaikan`);
    }
  }
}

// Class Anak 1
class MahasiswaS1 extends Mahasiswa {
  constructor(nama, nim, jurusan, angkatan, ipk, skripsi) {
    super(nama, nim, jurusan, angkatan, ipk);
    this.skripsi = skripsi;
  }

  tampilData() {
    super.tampilData();
    console.log(`Skripsi: ${this.skripsi}`);
  }
}

// Class Anak 2
class MahasiswaS2 extends Mahasiswa {
  constructor(nama, nim, jurusan, angkatan, ipk, tesis) {
    super(nama, nim, jurusan, angkatan, ipk);
    this.tesis = tesis;
  }

  tampilData() {
    super.tampilData();
    console.log(`Tesis: ${this.tesis}`);
  }
}

// Membuat 3 object
let mhs1 = new Mahasiswa("Dimas", "0096", "Informatika", 2023, 3.5);
let mhs2 = new MahasiswaS1("Aji", "0097", "Sistem Informasi", 2022, 3.2, "AI untuk Pendidikan");
let mhs3 = new MahasiswaS2("Putra", "0098", "Manajemen", 2021, 2.9, "Strategi Bisnis Digital");

// Output
mhs1.tampilData();
mhs1.belajar();
mhs1.ikutUjian();
mhs1.status();

console.log("\n--- Mahasiswa S1 ---");
mhs2.tampilData();
mhs2.status();

console.log("\n--- Mahasiswa S2 ---");
mhs3.tampilData();
mhs3.status();
