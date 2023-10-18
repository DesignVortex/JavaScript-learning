
const promiseOne = new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("Async task is complted.");
        resolve();
    },1000);
});

promiseOne.then(function(){
    console.log("Promise consumed.");
});

new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("Async Task 2.");
        resolve();
    },1000);
}).then(function(){
    console.log("Promise Task 2 consumed.");
});

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username: "design_vortex",
            email: "designvortex2020@gmail.com"
        });
    }, 1000);
});

promiseThree.then(function(user){
    console.log(user);
});

const promiseFour = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({
                username: "Vishal",
                password: "Cherry@9898"
            });
        }else{
            reject('ERROR: Something went wrong.')
        }
    }, 2000);
});

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) =>{
    console.log(username);
}).catch((error) =>{
    console.log(error);
}).finally(() =>{
    console.log("The promise is either resolved or rejected");
});


const promiseFive = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({
                username: "python",
                password: "Cherry@9898"
            });
        }else{
            reject('ERROR: Python went wrong.')
        }
    }, 1000);
});

async function consumeFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumeFive();





