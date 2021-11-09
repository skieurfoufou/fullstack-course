let animal = ["lion", "monkey", "cat", "dog", "bear", "dolphin", "bee"];
console.log(animal[0]); // output "lion"
console.log(animal[animal.length - 1]); //output of the last member of the array

let arr = [1, 2, 3, 4, 5, [7, 8, 9]];
console.log(arr[5][2]); // output 8

let arr2 = new Array(20);

animal.push("giraffe"); //add a new member at the end
animal.shift(); //replace the first member

animal.pop(); //delete the last member
animal.unshift(); //add a new member at the start

animal.concat("elephant", "bird", "hippo"); //add members for 1 time ,don't change the array
animal.includes(); //find a member of the array
animal.indexOf(); // to find the index of the member

//for loop

for (i of animal) {
  console.log(i);
}

for (i in animal.reverse) {
  console.log(animal[i]);
}
let animal1 = animal.slice(1, 5).reverse().sort().concat([1, 2, 3]).length;
