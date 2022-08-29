function finalCompetition(input){
    let dancersNumber = Number(input[0]);
    let pointsNumber = Number(input[1]);
    let season = input[2];
    let place = input[3];
    let prize = 0;
    let charity = 0;

    
    switch(place){
        case "Bulgaria":
            prize = pointsNumber * dancersNumber;
            if(season == "summer"){
              prize -= 0.05 * prize;
            } else if(season == "winter"){
                prize -= prize * 0.08;
            }
            break;
        case "Abroad":
            prize = (pointsNumber * dancersNumber) + (0.5 *(pointsNumber * dancersNumber));
            if(season == "summer"){
                prize -= 0.1 * prize;
              } else if(season == "winter"){
                  prize -= prize * 0.15;
              }
              break;
    }
    charity = prize * 0.75;
    let leftPrize = prize - charity;
    let moneyPerPerson = leftPrize / dancersNumber;
    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerPerson.toFixed(2)}`);
}
finalCompetition(["1",
"89.5",
"summer",
"Abroad"])