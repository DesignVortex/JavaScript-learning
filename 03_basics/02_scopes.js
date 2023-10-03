
let a = 100;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log(`Inner : ${a}`);
}

console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const name = "Vishal";

    function two() {
        const website = "YouTube";
        console.log(name);
    }
    // console.log(website);

    // two();
}

// one();

if (true) {
    const userName = "Vishal";

    if (userName === "Vishal") {
        const website = "SODI Clan";
        console.log(`${userName} ${website}`);
    }
    // console.log(website);
}
// console.log(userName);

