let a = 5;
let b = 2;
let c = a % b;
console.log("5 ni 2 ga bolsa qoldiq :" + c);















let rannum=Math.floor(Math.random()*10)
alert(`Random son ${rannum} ga teng`)
console.log(`Random son ${rannum} ga teng`)














let num1 = 12.510 
console.log('Boshlangich son',num1);
let num2 = Math.floor(num1)
console.log('Yahlit son',num2)















let soz = 'Mars IT School'
let mis = soz.length - 2
console.log("'Mars It School' degan sozni hariflari",mis,"ta")
















for(let i=0;i<10;i++) {
    console.log("MARS IT SCHOOL",i+1);
}
  












let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]
console.log(harflar[1],harflar[3],harflar[21],harflar[16],harflar[19],harflar[23])









let d=prompt("Yoshingizni kiriting")
if (d >= 18) {
    console.log('balogat yoshi muborak');
} else {
    console.log('Siz balogat yoshiga yetmagansiz ');
}










let ism=prompt("Ismingizni kiriting")
let ismorqamachasi = [] 
for (let i = ism.length - 1; i >= 0; i--) {
    ismorqamachasi += ism[i];
    console.log(ismorqamachasi)
  }









let sonlar=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr2=[]

console.log(`${sonlar} Boshlang'ich array`)

for(let i=0;i<sonlar.length;i++){       
    if(sonlar[i]%2==0){
        arr2.push(sonlar[i])
    }
}

console.log(`${arr2} Juft sonlar`)
