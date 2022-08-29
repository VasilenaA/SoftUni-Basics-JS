function maidenParty(input){
   let maidenPrice = Number(input[0]);
   let loveMessageNumber = Number(input[1]);
   let waxRoseNumber = Number(input[2]);
   let keyNumber = Number(input[3]);
   let karikatursNumber = Number(input[4]);
   let surpriseNumber = Number(input[5]);
   let diff = 0;
   let sum = loveMessageNumber * 0.60 + waxRoseNumber * 7.20 + keyNumber * 3.60 + karikatursNumber * 18.20 + surpriseNumber * 22;
   let numberOfArticuls = loveMessageNumber + waxRoseNumber + keyNumber + karikatursNumber + surpriseNumber;
   if(numberOfArticuls >= 25){
       sum *= 0.65;
   }
   sum *=0.9;
   diff = Math.abs(maidenPrice - sum);
   if(sum >= maidenPrice){
       console.log(`Yes! ${diff.toFixed(2)} lv left.`);
   } else{
       console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
   }
}
maidenParty(["40.8",
"20",
"25",
"30",
"50",
"10"])