function myFunc(input) {
    let alph = " ABCDEFGHIJKLMNOPQRSTUVWXYZ ".split("")
    let n = 0

    for (let i = 0; i < input.length; i++) {
        n = alph.findIndex(item => item == input.charAt(i)) + n * 26
    }

    return n
    
};

console.log(myFunc("AB"))



// function myFunc(input) {
//     let alph = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
//     let n = 0

//     for (let i = 0; i < input.length; i++) {
//         n = alph.findIndex(item => item == input.charAt(i)) + n * 26
//     }

//     return n
// }

// console.log(myFunc("AB"))



/*
= (penjelasan)
Fungsi titleToNumber ini dirancang untuk mengonversi judul kolom dalam format huruf ke dalam angka sesuai dengan aturan penomoran kolom dalam spreadsheet, 
di mana A = 1, B = 2, ..., Z = 26, AA = 27, AB = 28, dan seterusnya.
Berikut penjelasan baris per baris dari fungsi tersebut:

(1) let alph = " ABCDEFGHIJKLMNOPQRSTUVWXYZ ".split(""): Ini membuat array alph yang berisi setiap huruf dari A hingga Z (termasuk spasi di awal dan di akhir) 
sebagai referensi untuk mengonversi huruf ke nomor. 
Dengan demikian, indeks dalam array ini akan mewakili nomor yang sesuai untuk setiap huruf.

(2) let n = 0: Variabel n digunakan untuk menyimpan hasil konversi akhir.

(3) for (let i = 0; i < columnTitle.length; i++) { ... }: Loop ini akan melalui setiap karakter dalam columnTitle.

(4) n = alph.findIndex(item => item == columnTitle.charAt(i)) + n * 26: Di sini, 
kita menemukan indeks (nomor yang sesuai) dari huruf yang sedang diproses dalam columnTitle,
 kemudian kita tambahkan ke n setelah mengalikannya dengan 26. Penambahan ini memungkinkan untuk menggeser tempat nilai desimal yang akan datang, 
 sehingga kita dapat menambahkan nilai baru pada posisi yang sesuai.

 (5) return n: Mengembalikan hasil konversi akhir.
Jadi, fungsi ini secara efektif menangani setiap karakter dalam judul kolom,
mengubahnya menjadi nomor sesuai dengan aturan penomoran kolom dalam spreadsheet, dan mengembalikan hasilnya.

findIndex digunakan untuk mencari indeks dari huruf alphabet
*/