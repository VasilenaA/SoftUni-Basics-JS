function newHouse(input){
    const flower = input[0];
    const numberOfFlowers = Number(input[1]);
    const budget = Number(input[2]);
    let price = 0;

    switch(flower){
        case "Roses":
            price = numberOfFlowers * 5;
            if(numberOfFlowers > 80){
                price = price * 0.9;
             }  break;
        case "Dahlias":
            price = numberOfFlowers * 3.8;
            if(numberOfFlowers > 90){
                price = price * 0.85;
            } break;
        case "Tulips":
            price = numberOfFlowers * 2.8;
            if(numberOfFlowers > 80){
                price = price * 0.85;
            } break;  
        case "Narcissus":
            price = numberOfFlowers * 3;
            if(numberOfFlowers < 120){
                price = price + (price * 0.15);
            } break;   
        case "Gladiolus":
            price = numberOfFlowers * 2.5;
            if(numberOfFlowers < 80){
                price = price + (price * 0.2);
            } break;   
    }
    let extraMoney = Math.abs(budget - price);
    if(budget >= price){
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flower} and ${extraMoney.toFixed(2)} leva left.`);   
    } else{
        console.log(`Not enough money, you need ${extraMoney.toFixed(2)} leva more.`);
    }
}
newHouse(["Gladiolus", "64", "160"])
