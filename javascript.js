const  froyoOrder = prompt(
    "Please enter froyo flavors separated by comas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const orderArray = froyoOrder.split(",");

console.log(orderArray);

// establish object

let orderObject = {}

// create a function to take array and count each string 
// to tally order

function countFlavors(){
    for(let i=0; i<orderArray.length; i++){
        if(orderArray[i] in orderObject){
            orderObject[orderArray[i]] += 1
        }else{
            orderObject[orderArray[i]] = 1

        }

    }
}

countFlavors()

console.log(orderObject)
console.table(orderObject)