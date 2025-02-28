function sample(){
    for(let i=1 ; i<=10 ; i++){
        console.log(i);
    }
}
//sample();

function printEven(){
    for(let i=1 ; i<=10 ; i++){
        if(i%2===0){
            console.log(i);
        }
    }
}
//printEven();

function printOdd(){
    for(let i=1 ; i<=10 ; i++){
        if(i%2===1){
            console.log(i);
        }
    }
}
//printOdd();

const fruits = ["orange", "apple","mango","guava"]
for(let i=0 ; i<fruits.length ; i++){
    console.log(fruits[i]);
}

for(let i=fruits.length-1 ; i>=0 ; i--){
    console.log(fruits[i]);
}