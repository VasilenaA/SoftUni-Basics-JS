function foodDelivery(input){
   const chickenMenu = 10.35;
   const fishMenu = 12.4;
   const vegetarianMenu = 8.15;
   const deliveryPrice = 2.5;
   const numberChikenMenus = Number(input[0]);
   const numberFishMenus = Number(input[1]);
   const numberVegetarianMenus = Number(input[2]);
   const chikenMenuPrice = numberChikenMenus * chickenMenu;
   const fishMenuPrice = numberFishMenus * fishMenu;
   const vegetarianMenuPrice = numberVegetarianMenus * vegetarianMenu;
   const totalMenusPrice = chikenMenuPrice + fishMenuPrice + vegetarianMenuPrice;
   const dessertPrice = 0.2 * totalMenusPrice;
   const totalPrice = totalMenusPrice + dessertPrice + deliveryPrice;
   console.log(totalPrice);
}
foodDelivery([2, 4, 3])