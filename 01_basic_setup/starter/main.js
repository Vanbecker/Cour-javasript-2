// logMessage()

// function logMessage() {
//     console.log("Hello World")
// }

// const pizzas = [
//     {
//         name: 'Margherita',
//         price: 11.50,
//         ingredients: ['mozzarella', 'tomate', 'basilic ', "huile d'olive"],
//         baseTomate: true
//     },
//     {
//         name: 'Regina',
//         price: 12,
//         ingredients: ['mozzarella', 'tomate', 'origan', 'jambon', 'champignons'],
//         baseTomate: true
//     },
//     {
//         name: '4 saisons',
//         price: 15,
//         ingredients: ['artichaut', 'courgette', 'poivron', 'mozzarella', 'oignon rouge'],
//         baseTomate: true
//     },
//     {
//         name: 'Napolitaine',
//         price: 14,
//         ingredients: ['tomate', 'mozzarella', 'anchois', 'olives noires', 'origan'],
//         baseTomate: true
//     },
//     {
//         name: '4 fromages',
//         price: 16,
//         ingredients: ['tomate', 'mozzarella', 'emmental', 'comté', 'roquefort'],
//         baseTomate: true
//     },
//     {
//         name: 'Montagnarde',
//         price: 19,
//         ingredients: ['mozzarella', 'reblochon', 'gruyère', 'oignon', 'champignon'],
//         baseTomate: false
//     },
//     {
//         name: 'Chèvre-miel',
//         price: 18,
//         ingredients: ['mozzarella', 'chèvre', 'miel'],
//         baseTomate: false
//     },
//     {
//         name: 'Hawaïenne',
//         price: 17,
//         ingredients: ['mozzarella', 'tomate', 'jambon', 'ananas'],
//         baseTomate: true
//     }
// ]

/////////////////////////////////////////////
////////////////////////////////////////////

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

// function getNumbersSuperiorToAvg(arr) {
//     //on calcule la moyenne
//     let total = 0;

//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i]
//     }


//     let avg = total / arr.length;

//     //deuxieme etape, on tri le tableau en fonction de la moyenne 
//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > avg) {
//             newArr.push(arr[i])
//         }
//     }

//     return newArr;

// }


// //pour rajouter un element au tableau

// word.push(`Bom dia`)
// word.pop()
// word.pop()
// word.pop()

// console.log(myVar);

// // retire le dernier élément du tableau
// const myVar = words.pop()

// //retire le premier élément au tableau
// words.unshift()

// console.log(myVar);


/////EXO PIZZA

const pizzas = [
    {
        name: 'Margherita',
        price: 11.50,
        ingredients: ['mozzarella', 'tomate', 'basilic ', "huile d'olive"],
        baseTomate: true
    },
    {
        name: 'Regina',
        price: 12,
        ingredients: ['mozzarella', 'tomate', 'origan', 'jambon', 'champignons'],
        baseTomate: true
    },
    {
        name: '4 saisons',
        price: 15,
        ingredients: ['artichaut', 'courgette', 'poivron', 'mozzarella', 'oignon rouge'],
        baseTomate: true
    },
    {
        name: 'Napolitaine',
        price: 14,
        ingredients: ['tomate', 'mozzarella', 'anchois', 'olives noires', 'origan'],
        baseTomate: true
    },
    {
        name: '4 fromages',
        price: 16,
        ingredients: ['tomate', 'mozzarella', 'emmental', 'comté', 'roquefort'],
        baseTomate: true
    },
    {
        name: 'Montagnarde',
        price: 19,
        ingredients: ['mozzarella', 'reblochon', 'gruyère', 'oignon', 'champignon'],
        baseTomate: false
    },
    {
        name: 'Chèvre-miel',
        price: 18,
        ingredients: ['mozzarella', 'chèvre', 'miel'],
        baseTomate: false
    },
    {
        name: 'Hawaïenne',
        price: 17,
        ingredients: ['mozzarella', 'tomate', 'jambon', 'ananas'],
        baseTomate: true
    }
]


// POUR LOG ELEMENT 1 DE PIZZA 1
// console.log(pizza[1].ingredients[1])



// # 1. écrire une fonction qui prend en parametre un tableau, cette fonction retourne tous les .name des elements du tableau dans un tableau names[]

// const getNames = (arr) => {
//     const names = [];

//     for (let i = 0; i < arr.length; i++) {
//         names.push(arr[i].name);
//     }

//     return names;
// }

// const names = getNames(pizzas);
// console.log(names);


// AUTRE CORRECTION

// function getAllNames(tab) {
//     let pizzaNames = [];

//     for (let i = 0; i < tab.length; i++) {
//         pizzaNames.push(tab[i].name)
//     }
//     return pizzaNames;
// }
// console.log(getAllnames(pizza))


// # 2. Ecrire une fonction qui prend en parametre le tableau pizzas et qui retourne le prix moyen des pizzas

// const getPizzaAveragePrice = (arr) => {
//     let totalPrice = 0;

//     for (let i = 0; i < arr.length; i++) {
//         totalPrice += arr[i].price;
//     }

//     const averagePrice = totalPrice / arr.length;
//     return averagePrice;
// }

// const averagePrice = getPizzaAveragePrice(pizzas);
// console.log(averagePrice);

// AUTRE CORRECTION
// console.log(getAveragePrice(pizzas));
// function getAveragePrice(arr) {
//     let totalPrice = 0;

//     for (let i = 0; i < arr.length; i++) {
//         totalPrice += arr[i].price;
//     }
//     return (totalPrice / arguments.length).toFixed(2)
// }


// # 3. Ecrire une fonction qui prend en parametre un nom de pizza et qui retourne un tableau des ingredients de cette pizza
// const getPizzaIngredients = (pizzaName) => {
//     const pizza = pizzas.find(pizza => pizza.name.toLowerCase() === pizzaName.toLowerCase());

//     if (pizza) {
//         return pizza.ingredients;
//     } else {
//         return [];
//     }
// }

// const pizzaName = 'Margherita';
// const ingredients = getPizzaIngredients(pizzaName);
// console.log(ingredients);

// AUTRE CORRECTION

// console.log(getIngredientsByPizzaName(`Regina`, pizzas));

// function getIngredientsByPizzaName(name, arr) {

//     let targetPizza

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].name === name) {
//             targetPizza = arr[i];
//             break;
//         }
//     }

//     let ingredients = []
//     if (targetPizza) {
//         ingredients = targetPizza.ingredients
//     }

//     return ingredients
// }





// # 4. Ecrire une fonction qui prend en parametre un tableau de pizzas et qui retourne un tableau de tous les ingredients, en evitant les elements dupliques

// const getAllIngredients = (pizzaArr) => {
//     const ingredientsSet = new Set();

//     for (let i = 0; i < pizzaArr.length; i++) {
//         const ingredients = pizzaArr[i].ingredients;
//         for (let j = 0; j < ingredients.length; j++) {
//             ingredientsSet.add(ingredients[j]);
//         }
//     }

//     const uniqueIngredients = Array.from(ingredientsSet);
//     return uniqueIngredients;
// }

// const allIngredients = getAllIngredients(pizzas);
// console.log(allIngredients);

// AUTRE CORRECTION

// const result = getAllIngredients(pizzas)
// console.log(result);
// function getAllIngredients(tableau) {
//     let allIngredients = [];

//     for (let i = 0; i < tableau.length; i++) {
//         const currentPizza = tableau[i];
//         for (let j = 0; j < currentPizza.ingredients.length; j++) {
//             if (!allIngredients.includes(currentPizza.ingredients[j])) {
//                 allIngredients.push(currentPizza.ingredients[j])
//             }
//         }
//     }
//     return allIngredients;
// }


// # 5. Ecrire une fonction qui prend en parametre un ingredient et qui retourne un tableau des noms des pizzas qui ont cet ingredient

// const getPizzasByIngredient = (ingredient) => {
//     const pizzasWithIngredient = [];

//     for (let i = 0; i < pizzas.length; i++) {
//         const pizzaIngredients = pizzas[i].ingredients;
//         if (pizzaIngredients.includes(ingredient)) {
//             pizzasWithIngredient.push(pizzas[i].name);
//         }
//     }

//     return pizzasWithIngredient;
// }

// const ingredient = 'mozzarella';
// const pizzasWithIngredient = getPizzasByIngredient(ingredient);
// console.log(pizzasWithIngredient);

// AUTRE CORRECTION

// const result = getPizzasByIngredientName(`tomate`, pizzas);
// console.log(result);

// function getPizzasByIngredientName(ingredientName, arr) {
//     let pizzaNames = []

//     for (let i = 0; i < pizzas.length; i++) {
//         const currentPizza = arr[i]
//         if (currentPizza.ingredients.includes(ingredientName)) {
//             pizzaNames.push(currentPizza.name)
//         }
//     }

//     return pizzaNames
// }

