function shopping(input){
     const singleVideoCardPrice = 250;
     const budget = Number(input[0]);
     const videoCardsCount = Number(input[1]);
     const proccesorsCount = Number(input[2]);
     const ramCount = Number(input[3]);
     const videoCardsPrice = videoCardsCount * singleVideoCardPrice;
     const proccesorsPrice = videoCardsPrice * 0.35;
     const ramPrice = videoCardsPrice * 0.1;
     let totalSum = videoCardsPrice + proccesorsPrice * proccesorsCount +
     ramPrice * ramCount;
     if (videoCardsCount > proccesorsCount) {
         totalSum *= 0.85;
     }
     const difference = Math.abs(totalSum - budget).toFixed(2);
     if (totalSum <= budget) {

        console.log(`You have ${difference} leva left!`);
     } else {
         console.log(`Not enough money! You need ${difference} leva more!`);
     }
}
shopping(["900", "2", "1", "3"])