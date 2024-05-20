// function majorityElement(nums):
//     count = 0
//     candidate = None
    
//     for num in nums:
//         if count == 0:
//             candidate = num
//         count += (1 if num == candidate else -1)
    
//     return candidate


// function addElement(newElement) {
//     let arr = [3,2,3,]

//     if (arr.includes(newElement) == false) {
//         arr.push(newElement)
//     }

//     return arr
// }

// // console.log(addElement(3,2,3))


function majorityElement(nums) {
    let count = 0;
    let candidate = null;
    
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate ? 1 : -1);
    }
    
    return candidate;
}

const nums1 =[3, 2, 3]
const nums2 =[2,2,1,1,1,2,2]
console.log(majorityElement(nums2));
// console.log(majorityElement(nums1))


// cara mas ilham

// function majority(arr) {
//     let mySet = new Set(arr)


//     return mySet


// }
// console.log(majority([2, 2, 1, 1, 1, 2, 2]))

/* pennjelasan
Fungsi `majorityElement` ini mengimplementasikan algoritma Moore's Voting Algorithm untuk mencari elemen mayoritas dalam sebuah array. 
Penjelasan untuk kode tersebut telah diberikan sebelumnya, tetapi saya akan merangkumnya kembali:

1. `let count = 0;` dan `let candidate = null;`: Variabel `count` digunakan untuk melacak jumlah kemunculan kandidat saat ini,
    sedangkan `candidate` digunakan untuk menyimpan kandidat saat ini yang sedang dipertimbangkan.

2. `for (const num of nums) { ... }`: Loop ini akan melalui setiap elemen dalam array `nums`.

3. Di dalam loop, kita memeriksa apakah `count` sama dengan 0. Jika ya,
   maka kita menganggap elemen saat ini sebagai kandidat baru, karena itu berarti kita belum menemukan kandidat potensial yang mayoritas. 

4. `count += (num === candidate ? 1 : -1);`: Di sini, kita memeriksa apakah elemen saat ini sama dengan kandidat yang dipertimbangkan. 
   Jika ya, maka kita menambahkan 1 ke `count`, menunjukkan bahwa kita menemukan kemunculan tambahan dari kandidat yang sama. 
   Jika tidak, kita mengurangi 1 dari `count`, menunjukkan bahwa kita menemukan kemunculan dari elemen yang berbeda dan mengurangi kemungkinan kandidat sebelumnya menjadi mayoritas.

5. Proses ini terus berlanjut hingga selesai melalui seluruh array `nums`.

6. `return candidate;`: Setelah selesai melalui seluruh array, 
kita kembalikan nilai dari `candidate` yang merupakan kandidat mayoritas yang berhasil kita temukan berdasarkan algoritma Moore's Voting Algorithm.

Dalam kasus kode yang Anda berikan:

- `nums1` adalah array `[3, 2, 3]`. Mayoritas elemen di sini adalah angka 3, karena muncul lebih dari setengah dari total elemen array, yaitu 2 dari 3 elemen. Maka, outputnya akan menjadi 3.

- `nums2` adalah array `[2, 2, 1, 1, 1, 2, 2]`. Mayoritas elemen di sini juga adalah angka 2, karena muncul lebih dari setengah dari total elemen array, yaitu 4 dari 7 elemen. Maka, outputnya juga akan menjadi 2.

Jadi, fungsi ini akan mengembalikan elemen mayoritas dari array yang diberikan.

*/