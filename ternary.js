/**
 * TERNARY --> three parts
 * 
 * ? : 
 * 
 * condition ? do something when true : do something when false
 */ 
const age = 20;
// if(age >= 18){
//     console.log("You can vote")
// }
// else{
//     console.log('go sleep')
// }



// simple ternary

// age >= 18 ? console.log('vote dow') : console.log('go to sleep')

let price = 500;
const isLeader = false;

if(isLeader === true){
    price = 0
}
else{
    price = price + 100;
}
// console.log(price);

price = isLeader ===true ? 0 : price + 100;


// optional : semi advanced ternary
if(isLeader === true){
    if(price > 1000){
        price = price /2
    }
    else{
        price = 0;
    }
}
else{
    price = price + 100;
}


