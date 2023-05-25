// Usa el método .filter para realizar esta kata: https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

// Ten en cuenta que la mayoría de métodos de array disponen de un segundo parámetro en la función de callback, que indica el índice sobre la posición en la se está iterando en ese momento
 
// Ejecuta este código en otro fichero e intenta entender que estas viendo por consola:

// let arr = [2, 3, 5, 7]

// arr.map(function(element, index, array){
//     console.log(element);
//     console.log(index);
//     console.log(array);
//     return element;
// });



function removeEveryOther(arr) {
    
    //your code here

    // Take an array and remove every second element from the array. Always keep the first element and start removing with the next element. 

    // 1. How I remove every second element from the array? 
        // The first position in an array has an index of 0, which is an even number.
        // The second position in an array has an index of 1, wich is an odd number.
        // If the index is not divisible by 2, means if in an odd position, that's every second element.
    // 2. Filter only return the element that meets the condition.
                                                                  
    arr.filter((element, index) => index % 2 === 0)

}
   
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']), ['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 3, 5, 7, 9]);
console.log(removeEveryOther([['Goodbye'], { 'Great': 'Job' }]), [['Goodbye']]);
