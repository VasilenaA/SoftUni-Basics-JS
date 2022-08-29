function repainting(input){
   const protectiveNylonPrice = 1.5;
   const paintPrice = 14.5;
   const thinnerForPaintPrice = 5;
   const bagPrice = 0.4;
   const extraPaintPercent = 0.1;
   const extraNylon = 2;
   const nylon = Number(input[0]);
   const paint = Number(input[1]);
   const thinner = Number(input[2]);
   const workHours = Number(input[3]);
const nylonCost = (nylon + extraNylon) * protectiveNylonPrice;
const paintCost = (paint + paint * extraPaintPercent) * paintPrice;
const thinerCost = thinner * thinnerForPaintPrice;
const materialCost = nylonCost + paintCost + thinerCost + bagPrice;
const workersCostPerHour = materialCost * 0.3;
const totalWorkCost = workHours * workersCostPerHour;
const totalCost = totalWorkCost + materialCost;
console.log(totalCost);
   
}
repainting([10, 11, 4, 8]);