function skiTrip(input){
    const days = Number(input[0]);
   const place = input[1];
   const grade = input[2];
    let nights = days - 1;
    pricePerNight =0;
    price = 0;

    switch(place){
        case "room for one person":
        pricePerNight = 18;
        price = nights * pricePerNight;
        break;
        case "apartment":
            pricePerNight = 25;
            price = nights * pricePerNight;
            if(nights <10){
                price *= 0.7;
            }else if(nights >=10 && nights <= 15){
                price *= 0.65;
            } else {
                price *= 0.5;
            }
        break;
        case "president apartment":
            pricePerNight = 35;
            price = nights * pricePerNight;
            if(nights <10){
                price *= 0.9;
            }else if(nights >=10 && nights <= 15){
                price *= 0.85;
            } else {
                price *= 0.8;
            }
        break;
    }
    switch(grade){
     case "positive": 
        price += price * 0.25;
        break;
     case "negative":
         price -= price * 0.10; 
    }
    console.log(price.toFixed(2));
}
skiTrip(["30",
"president apartment",
"negative"])

