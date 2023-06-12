// ARGUMENT

// logMessage("salut")
// logMessage("tout")
// logMessage("le monde")

// function logMessage (argument) {
//     console.log(argument)
// }

// EXEMPLE 1 let valeurRetourn = sum2args(8, 7);



let value1 = sum2args(12, 7);
let value2= sum2args2(value1, 2);
logMessage(value2);


function sum2args(arg1, arg2) {

    return arg1 + arg2 
}

function sum2args2(a1, a2) {

    return a1 - a2
}

function logMessage(arg) {
    console.log(`le resultats des 2 fonctions précédenters est ${arg} !`)
}


