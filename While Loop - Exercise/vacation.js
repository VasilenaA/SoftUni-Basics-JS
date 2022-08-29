function vacation(input){
    let neededMoney = Number(input[0]);
    let startMoney = Number(input[1]);
    let index = 2;
    let countOfDays = 0;
    let countOfBadDays = 0;

    while(startMoney < neededMoney){
        let command = input[index];
        index++;
        let currMoney = Number(input[index]);
        index++;
        countOfDays++;
        if(command === "spend"){
            startMoney -= currMoney;
                if(startMoney < 0){
                   startMoney = 0;
                }   
                countOfBadDays++; 
        } else if(command === "save"){
                startMoney += currMoney;
                countOfBadDays = 0;
        }
        
        if(countOfBadDays >= 5){
            console.log(`You can't save the money.`);
            console.log(countOfDays);
            break;
        }
    }  
    if(startMoney >= neededMoney){
        console.log(`You saved the money for ${countOfDays} days.`);  
    }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
