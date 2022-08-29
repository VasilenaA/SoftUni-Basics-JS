    function journey(input){
        const budget = Number(input[0]);
        const season = input[1];
        let destination = " ";
        let price = " ";
        
        switch(season){
            case "summer":
                destination = "Camp"; break;
            case "winter":
                destination = "Hotel"; break;
        }
        if(budget <= 100){
            place = "Bulgaria";
            if(season == "summer"){
                price = budget * 0.7;
            } else{
                price = budget * 0.3;
            }
        } else if(budget <= 1000){
            place = "Balkans";
            if(season == "summer"){
                price = budget * 0.6;
            } else{
                price = budget * 0.2;
            }
        } else{
            place = "Europe";
            price = budget * 0.1;
            destination = "Hotel";
        }
        let moneyLeft = Math.abs(budget - price);
        
        console.log(`Somewhere in ${place}`);
        console.log(`${destination} - ${moneyLeft.toFixed(2)}`);
    }
journey(["312", "summer"])
