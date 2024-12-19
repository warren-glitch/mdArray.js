// Declare the two sub-arrays
let names = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
let ages = [24, 65, 21, 5, 9];

// Restructure the arrays into a new multi-dimensional array where each sub-array contains [name, age]
let restructuredArray = names.map((name, index) => [name, ages[index]]);

// Log the restructured multi-dimensional array [name, age] per line
restructuredArray.forEach(pair => {
    console.log(pair);
});
