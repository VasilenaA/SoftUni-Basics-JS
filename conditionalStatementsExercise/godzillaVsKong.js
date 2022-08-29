function godzillaVsKong(input){
   const budget = Number(input[0]);
   const statist = Number(input[1]);
   const clothesPricePerPerson = Number(input[2]);
   const decorPrice = budget * 0.1;
   let totalPriceForClothes = statist * clothesPricePerPerson;
   
   if (statist>150) {
       totalPriceForClothes *= 0.9;
   }
   const totalMoney = totalPriceForClothes + decorPrice;
   if (totalMoney > budget) {
       let moneyNeeded = totalMoney - budget;
       console.log("Not enough money!");
       console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
   } else {
       let moneyLeft = budget - totalMoney;
       console.log("Action!");
       console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
   }
}
godzillaVsKong(["20000","120", "55.5"])