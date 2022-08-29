function traveling(input){
    let  index = 0;
    let destination = input[index];
    index++;
    let minBudget = Number(input[index]);
    index++;
    let budget = 0;
    let isBudget = false;
    

    while(destination !== "End"){
        let budget = 0;
        while(minBudget !== budget){
            let money = Number(input[index]);
             index++;
            budget += money;
        if(budget > minBudget){
            console.log(`Going to ${destination}`);
            isBudget = true;
            break;
          }
        }
        if(isBudget){
            destination = input[index];
            index++;
            minBudget = Number(input[index]);
            index++;
            money = Number(input[index]);
            index++;
            
        } 
         
        if(isBudget){
            break;
        }
    }
}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
