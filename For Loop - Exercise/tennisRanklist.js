function tennisRanklist(input){
    let index = 0;
    let tournamentsCount = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;
    let tempPoints = 0;
    let winCounter=0;
    
    for(let i = 0; i< tournamentsCount; i++){
        let score = input[index];
        index++;
    switch(score){
        case "W":
             tempPoints += 2000;
             winCounter++;
             break;
        case "F": tempPoints += 1200; break;
        case "SF": tempPoints += 720; break;
    }
    }
    let finalPoints = tempPoints + startPoints;
    let avgPoints = Math.floor(tempPoints / tournamentsCount);
    let winGameP = winCounter / tournamentsCount * 100
   
    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${avgPoints}`);
    console.log(`${winGameP.toFixed(2)}%`);
}
tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])

