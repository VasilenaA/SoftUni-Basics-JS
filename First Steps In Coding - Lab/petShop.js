function petShop(input){
    let dogFood = 2.50;
    let catFood = 4;
    let numberDogFood = Number(input[0]);
    let numberCatFood = Number(input[1]);
    lastSum = dogFood*numberDogFood + catFood*numberCatFood;
    console.log(`${lastSum} lv.`);
}
petShop(['5', '4'])