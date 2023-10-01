const marvel = ['thor','hulk','vision','ironman'];
const dc = ['flash','superman','adam','batman'];

// marvel.push(dc);


// const allHeros = marvel.concat(dc);
// console.log(allHeros);

// const all_new_heros = [...marvel, ...dc];
// console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7 , [6, 7, [4, 5]]];

const realArray = anotherArray.flat(1);

// console.log(realArray);

const nameArray = "Vishal";

const newNameArray = Array.from(nameArray);

console.log(newNameArray);
