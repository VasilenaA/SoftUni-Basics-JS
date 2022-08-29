function fishingBoat(input){
    const budget = Number(input[0]);
    const season= input[1];
    numberOfFishers = Number(input[2]);
    let boatPrice = " ";

    switch(season){
        case "Spring":
            boatPrice = 3000;
            if(numberOfFishers % 2 == 0){
                boatPrice *= 0.95;
            }  break;
        case "Summer":
            boatPrice = 4200;
            if(numberOfFishers % 2 == 0){
                boatPrice *= 0.95;
            } break;
        case "Autumn":
            boatPrice = 4200; break;
        case "Winter":
            boatPrice = 2600; 
            if(numberOfFishers % 2 == 0){
                boatPrice *= 0.95;
            }  break;
    }
    let price = " ";
    if(numberOfFishers <= 6){
        price = boatPrice * 0.9;       
    } else if(numberOfFishers <= 11){
        price = boatPrice * 0.85;
    } else if(numberOfFishers > 12){
        price = boatPrice * 0.75;
    }
     let moneyLeft = Math.abs(budget - price);
     if(budget >= price){
         console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
     } else{
         console.log(`Not enough money! You need ${moneyLeft.toFixed(2)} leva.`);
     }
}
fishingBoat(["2000", "Winter", "13"])

