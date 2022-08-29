function hotelRoom(input){
    const month = input[0];
    const nights = Number(input[1]);
    let StudioCost = 0;
    let ApartmentCost = 0;
    let totalCostStudio = 0;
    let totalCostApartment = 0;
    
    switch(month){
        case "May":
        case "October":
            StudioCost = 50;
            ApartmentCost = 65;
            if(nights > 7 && nights <= 14){
                StudioCost *= 0.95;
            } else if(nights > 14){
                StudioCost *= 0.7;
            }
            if(nights > 14){
                ApartmentCost *= 0.9;
            }
            totalCostStudio = StudioCost * nights;
            totalCostApartment = ApartmentCost * nights;
        break;
        case "June":
        case "September":
            StudioCost = 75.2;
            ApartmentCost = 68.7;
            if(nights > 14){
                StudioCost *= 0.8;
            }
            if(nights > 14){
                ApartmentCost *= 0.9;
            }
            totalCostStudio = StudioCost * nights;
            totalCostApartment = ApartmentCost * nights;
        break;
        case "July":
        case "August":
            StudioCost = 76;
            ApartmentCost = 77;   
            if(nights > 14){
                ApartmentCost *= 0.9;
            }
            totalCostStudio = StudioCost * nights;
            totalCostApartment = ApartmentCost * nights;
        break;
    }
    console.log(`Apartment: ${totalCostApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${totalCostStudio.toFixed(2)} lv.`)
}
hotelRoom(["August", "20"])
