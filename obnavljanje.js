//primer za switch

/*let x = 8;
switch (x){
    case 5:
    console.log('Nije radan dan');
    break;
    case 3:
    console.log('Radan dan');
    break;
    case 2:
    console.log('Radan dan');
    break;
    case 1:
    console.log('Radan dan');
    break;
    default:
    console.log('Losa vrednost');
    case 7:
    console.log('novi dan')
} */

// let mesec 0-11
// koliko mesec ima dana
// let x = 1;
// let godina = 2001;
// switch (x){
//     case 0:
//     case 2:
//     case 4:
//     case 6:
//     case 7:
//     case 9:
//     case 11:
//     console.log('Mesec ima 31 dan');
//     break;


//     case 1:
//     if(godina %4==0 && godina%100 != 0 || godina%400==0){
//         console.log('Mesec ima 29 dana')}
//     else{
//         console.log('Mesec ima 28 dana')
//     }
//     break;
    
//     case 3:
//     case 5:
//     case 8:
//     case 10:
//     console.log('Mesec ima 30 dan');
//     break;

//     default:
//     console.log('Mesec ne postoji.')
//     break;
// }

/*let godina = 30;
    if(godina %4==0 && godina%100 != 0 || godina%400==0){
    console.log('Godina je prestupna')
}
    else {
        console.log('Godina nije prestupna.')
    }
let br = 123;
console.log ('j' % 10);
br /= 10;
Math.floor(br); //12
console.log(br % 10);
br= Math,floor(br / 10); // 1
console.log (br % 10);*/

// 153= 1^3+ 5^ + 3^3

// var broj= '153';

// let jed= broj % 10;
// let dec=Math.floor(broj/10)%10;
// let sto= Math.floor(broj / 100)% 10;

// if (jed**3+dec**3+sto**3 == broj){
//     console.log('Jeste Armstrongov broj.')
// }
// else{
//     console.log('Nije.')
// }
// sqrt , pow, cos, sin
// let znak = 'sin';
// let br1 = 102;
// let br2 = 33.2;
// switch (znak){
//     case '5':
//         console.log(br1 + br2);
//         break;
//     case '-':
//     console.log(br1-br2);
//     break;
//     case '*':
//     console.log(br1*br2);
//     break;
//     default:
//     console.log('Znak ne valja');
//     break;
//     case 'sqrt':
//     console.log(Math.sqrt(br1))
//     break;
//     case 'pow':
//     console.log(Math.pow(br1, br2));
//     break;
//     case 'cos':
//     console.log(Math.cos(br1));
//     break;
//     case 'sin':
//     console.log(Math.sin(br2))
//     break;
//     }
    
let korisnik = 'moderator'// 'user' , 'moderator'
// if  (korisnik === 'admin'){
//     console.log ('Korisnik je admin.')
// }
// else if (korisnik === 'user') {
//     console.log('Korisnik je user')
// }
// else if (korisnik === 'moderator') {
//     console.log ('Korisnik je moderator')
// }

//korisnik je admin/user etc
//let korisnik = 'moderator'
// switch(korisnik) {
//     case 'admin':
//     console.log('Korisnik je admin.')
//     break;
//     case 'user':
//     console.log('Korisnik je user.')
//     break;
//     case 'moderator':
//     console.log('Korisnik je moderator.')
//     break;
//     default:
//     console.log('Nesto deseto.');
//     break;
// }

// let i = 16;
// while (i<5){
//     console.log('Hello');
//     i += 1;
// }

// while (i > 0) {
//     if (i % 2 == 0){
//         console.log(i);
//         i--; }
// }

// let zbir = 0;
// for (var i = 1; i <= 100; i++){
//     zbir = zbir + i;
    
// }
// console.log(i);
// console.log(zbir);

// proizvod sa for i while
// let proizvod = 1;
// for (var i = 1; i <=15; i++){
//     proizvod = proizvod * i;
// }
// console.log(i);
// console.log(proizvod);

// let proizvod = 1;
// let i = 1;
// while (i<=15){
//     proizvod = proizvod * i
//     i++
// }
// console.log(proizvod)

// m i n
// let m = 10;
// let n = 19;

// ukoliko je m veci, treba im zameniti mest na sl nacin:
// if(m>n){
// let tmp=m;
// m=n;
// n=tmp;}

// let zbir = 0;
// for(let i = m; i <= n; i++){
//     zbir += i;
// }
// console.log(zbir)

//Sabrati sve brojeve izmedju n i m deljive sa 3
// let m = 3;
// let n = 10;
// let zbir = 0;

// if(m>n){
// let tmp=m;
// m=n;
// n=tmp;}

// for (let i=m; i<=n; i++){
//     if(i%3==0) {
//         zbir = zbir + i;
//     }
// }
// console.log(zbir);

// for (let i=0; i<5; i++){
//     for (let j=0; j<5; j++){
//         console.log(i,j);
//     }
// }
// let x = '';
// for (let i = 0; i < 5; i++){
//     for (let j=0; j<5; j++){
//         x+='*';
//     }
//     x += '/n'
// }
// console.log(x)

// let x='';
// x+= '***'.repeat(5)
// console.log(x);

// let x='';
// for(let i =0; i<5; i++){
//     x+='*'.repeat(5) + '\n';
// }
// console.log(x);

// let redovi = 3;
// let kolone = 10;
// let x='';

// for (let i=0; i<redovi; i++){
//     x+='*'.repeat(kolone) + '\n';
// }
// console.log(x);

// for(let i =0; i<redovi; i++){
//     for(let j=0; j<kolone; j++){
//         x+=('*')
//     }
//     x+='\n'
// }
// console.log(x);
// 
// let redovi = 3;
// let kolone = 10;
// let x=('*'.repeat(kolone) + '\n').repeat(redovi);
// console.log(x);

// let redovi = 3;
// let kolone = 10;
// let x='';

// for (let i=0; i<redovi; i++){
//     x+='*'.repeat(kolone) + '\n';
// }
// console.log(x);

let redovi = 4;
let kolone = 10;

let x= '';
for (let i = 0; i<kolone; i++){
    x+='*'
}
console.log(x)

let y='*';
for (let i=0; i<kolone-2; i++){
    y=+' ';
}
y+='*';
for (let i = 0; i <redovi - 2; i++){
    console.log(y);
}
console.log(x)

// let x = kolone-2;
// let y = '*' + ' '.repeat(x) + '*'
// // console.log('*'.repeat(kolone))
// // console.log(y);
// // console.log('*'.repeat(kolone))
