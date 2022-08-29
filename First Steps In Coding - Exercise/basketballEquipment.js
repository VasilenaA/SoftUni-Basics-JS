function basketballEquipment(input){
   const yearTrainingPrice = Number(input[0]);
   const sneakersPrice = yearTrainingPrice - 0.4 * yearTrainingPrice;
   const outfitPrice = sneakersPrice - 0.2 * sneakersPrice;
   const ballPrice = outfitPrice /  4;
   const accessoriesPrice = ballPrice  / 5;
   const totalPrice = yearTrainingPrice + sneakersPrice + outfitPrice + ballPrice + accessoriesPrice;
   console.log(totalPrice);
}
basketballEquipment([365])