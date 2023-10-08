// For of loop

const myArray = [1, 2, 3, 4, 5];

for (const number of myArray) {
    // console.log(number);
}

const names = "Vishal";

for (const nameChar of names) {
    // console.log(nameChar);
}


// maps

const map = new Map();

map.set('IN', "India");
map.set('FR', "France");
map.set('SL', "Sri-Lanka");

// console.log(map);

for (const [key, value] of map) {
    // console.log(key + ':' + value);
}


const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}

for (const key in myObject) {
    console.log(`${key} for value ${myObject[key]}`);
}
