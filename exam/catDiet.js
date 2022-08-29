function catDiet(input){
    let fatPercent = Number(input[0]);
    let proteinPercent = Number(input[1]);
    let carbPercent = Number(input[2]);
    let fullCalories = Number(input[3]);
    let waterPercent = Number(input[4]);
    let foodGrams = 0;
    let caloriesPerOneGram = 0;
    let calories = 0;
    
    let totalFats = ((fatPercent / 100) * fullCalories) / 9;
    let totalProteins = ((proteinPercent / 100) * fullCalories) / 4;
    let totalCarbs = ((carbPercent / 100) * fullCalories) / 4;
    foodGrams = totalCarbs + totalFats + totalProteins;
    caloriesPerOneGram = fullCalories / foodGrams;
    calories = (((100 - waterPercent) / 100) * caloriesPerOneGram);
    console.log(calories.toFixed(4));
}
catDiet(["60",
"25",
"15",
"2500",
"60"])