function tradeCommissions(input){
    const city = input[0];
    const v = Number(input[1]);
    let com = 0;
    
    switch(city){
        case "Sofia":
            if(v < 0){
                console.log("error");
            } else if(v >= 0 && v <= 500){
                com = v * 0.05;
                console.log(com.toFixed(2));
            } else if(v <= 1000){
                com = 0.07 * v;
                console.log(com.toFixed(2));
            } else if(v <= 10000){
                com = v * 0.08;
                console.log(com.toFixed(2));
            } else{
                com = 0.12 * v;
                console.log(com.toFixed(2));
            }  break;
        case "Varna":    
              if(v < 0){
               console.log("error");      
             } else if(v >= 0 && v <= 500){
                 com = 0.045 * v;
                 console.log(com.toFixed(2));
             } else if(v <= 1000){
                com = 0.075 * v;
                console.log(com.toFixed(2));
             } else if(v <= 10000){
                com = 0.1 * v;
                console.log(com.toFixed(2));
            } else{
                 com = 0.13 * v;
                 console.log(com.toFixed(2));
            } break;
            
        case "Plovdiv":
            if(v < 0){
                console.log("error");
            } else if(v >= 0 && v <= 500){
                com = 0.055 * v;
                console.log(com.toFixed(2));
            } else if(v <= 1000){
                com = 0.08 * v;
                console.log(com.toFixed(2));
            } else if(v <= 10000){
                com = 0.12 * v;
                console.log(com.toFixed(2));
            } else{
                com = 0.145 * v;
                console.log(com.toFixed(2));
            } break;
         default: console.log("error"); break;
       }
    }
   
tradeCommissions(["Plovdiv", "-50"])