function toyShop(input){
   const puzzlePrice = 2.6;
   const talkingDollPrice = 3;
   const teddyBearPrice = 4.1;
   const truckPrice = 2;
   const minionPrice = 8.2; 

   const vacantionPrice = Number(input[0]);
   const puzzleCount = Number(input[1]);
   const taklingDollCount = Number(input[2]);
   const teddyBearCount = Number(input[3]);
   const minionCount = Number(input[4]);
   const truckCount = Number(input[5]);

   const toyCount = puzzleCount + taklingDollCount + teddyBearCount +
   minionCount + truckCount;
   let totalCost = puzzleCount * puzzlePrice + taklingDollCount * talkingDollPrice +
    teddyBearCount * teddyBearPrice + minionCount * minionPrice + truckCount * truckPrice;
   

if (toyCount>=50) {
       totalCost *= 0.75;
    } 
 totalCost *= 0.9;
    
  const difference = Math.abs(totalCost - vacantionPrice);

  if (totalCost>=vacantionPrice) {
      console.log(`Yes! ${difference.toFixed(2)} lv left.`);
  } else {
      console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
  }

}
toyShop(["40.8", "20", "25", "30", "50", "10"])