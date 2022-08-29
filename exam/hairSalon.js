function hairSalon(input){
    let goal = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;
    let type = input[index];
    index++;
    let money = 0;
    let diff = 0;
    

    while(command != "closed") {
       if(command == "haircut"){
           if(type== "mens"){
               money +=15;
           } else if(type == "ladies"){
               money += 20;
           } else if(type == "kids"){
               money+=10;
           }
       } else if(command == "color"){
           if(type == "touch up"){
               money+=20;
           } else if(type == "full color"){
               money+=30;
           }
       }
        if (money >= goal){
            console.log(`You have reached your target for the day!`);
            console.log(`Earned money: ${money}lv.`);
            break;
        } 
      command = input[index];
      index++;
      type = input[index];
      index++;
    }
    diff = Math.abs(money - goal);
    if(command == "closed"){
        if (money >= goal){
            console.log(`You have reached your target for the day!`);
            console.log(`Earned money: ${money}lv.`);
    } else{
      console.log(`Target not reached! You need ${diff}lv. more.`);
      console.log(`Earned money: ${money}lv.`);
   }
}
}
hairSalon(["300",
"haircut",
"ladies",
"haircut",
"kids",
"color",
"touch up",
"closed"])
