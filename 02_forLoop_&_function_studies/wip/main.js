// ARGUMENT

// logMessage("salut")
// logMessage("tout")
// logMessage("le monde")

// function logMessage (argument) {
//     console.log(argument)
// }



// let value1 = sum2args(12, 7);
// let value2= sum2args2(value1, 2);
// logMessage(value2);


// function sum2args(arg1, arg2) {

//     return arg1 + arg2 
// }

// function sum2args2(a1, a2) {

//     return a1 - a2
// }

// function logMessage(arg) {
//     console.log(`le resultats des 2 fonctions précédenters est ${arg} !`)
// }


// const myNumber =[4, 6, 13, 3];
// let value1 = sum2args(12, 7);
// let value2= sum2args2(value1, 2);
// logMessage(value2);


// function sumElements(myArray) {
//    let myResult = arg1 + arg2
//    return myResult
// }

// function logMessage(a1, a2) {
//     return a1 - a2
// }


// function logMessage(arg) {
//     console.log(`le resultats des 2 fonctions précédenters est ${arg} !`)
// }


// const myNumbers =[4, 6, 13, 9, 12, 11];
// const myNumbers2 =[41, 61, 13, 19, 12, 11];

// const res = sumElements(myNumbers)
// const res2 =sumElements(myNumbers2)

// console.log(res)
// console.log(res2)

// function sumElements(arr){
//     let result = 0;

//     for (let i = 0; i < arr.length; i ++) {
//         if(arr[i] % 2 === 0) 

//         result += arr[i];
//     }

//     return result;
// }

//AFFICHER NOM PRENOM//

// function giveMyFullName() {
//     let firstname = `Paul`
//     let lastname= `Doszan`


//     let FullName = firstname + " " +lastname
//     return FullName;
// }
// let myName = giveMyFullName();
// console.log(myName)



// let number =12;
// let step = 5;

// for ( let i = 0; i < 4; i += 2) {
//     number += step;
// }

// console.log(number)


// let words =[]

// for (let i = 2; i <= 10; i += 3) {
//     if (i === 6) {
//         break;
//     }
//     console.log(`Mon indice de boucle : ${i}`)
// }

// console.log(`la boucle est terminée`)

// let words = ["bonjour", "hello", "Guten tag", "Buongiorno", "halo"]
// let sentences = "";
// for (let i = O; i < words.length; i++) {
//     if (i === words.lenght - 1) {
//         sentences += words[i]
//     } else if (i === 0) {
//         sentence += words[i] + `,`;
//     }
// }

// console.log(sentence);

// EXOS 1
// 1. Ecrire une fonction qui retounre la valeur minimum d'un tableau


// 2. Ecrire une fonction qui retourne la valeur max d'un tableau 





// 3. Ecrire une fonction qui retourne un tableau de nombres, tous superieur a la moyenne des elements du tableau en argument 

function getNumbersSuperiorToAvg(arr) {
    //on calcule la moyenne
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }


    let avg = total / arr.length;

    //deuxieme etape, on tri le tableau en fonction de la moyenne 
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            newArr.push(arr[i])
        }
    }

    return newArr;

}


//pour rajouter un element au tableau

word.push(`Bom dia`)
word.pop()
word.pop()
word.pop()

console.log(myVar);

// retire le dernier élément du tableau
const myVar = words.pop()

//retire le premier élément au tableau
words.unshift()

console.log(myVar);