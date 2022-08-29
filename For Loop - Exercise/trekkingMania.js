function trekkingMania(input){
    let index = 0;
    let numberOfGroups = Number(input[index]);
    index++;
    const peopleInGroups = Number(input[index]);
    let musalaCounter = 0;
    let monblanCounter = 0;
    let cilimangaroCounter = 0;
    let k2Counter = 0;
    let everestCounter = 0;
    let people = 0;
    

        for(let i = 1; i <= numberOfGroups; i++){
            let peopleInGroup = Number(input[index]);
              index++;
         
            if(peopleInGroup <= 5){
               musalaCounter+= peopleInGroup;
               
            } else if(peopleInGroup <= 12){
               monblanCounter+= peopleInGroup;
            } else if(peopleInGroup <= 25){
                cilimangaroCounter+= peopleInGroup;
            } else if(peopleInGroup <= 40){
                k2Counter += peopleInGroup;
            } else{
               everestCounter += peopleInGroup;
            }
            people += peopleInGroup;
        }

    let musalaP = musalaCounter / people * 100;
    let monblanP = monblanCounter / people * 100;
    let cilimangaroP = cilimangaroCounter / people * 100;
    let k2P = k2Counter / people * 100;
    let everestP = everestCounter / people * 100;

    console.log(`${musalaP.toFixed(2)}%`);
    console.log(`${monblanP.toFixed(2)}%`);
    console.log(`${cilimangaroP.toFixed(2)}%`);
    console.log(`${k2P.toFixed(2)}%`);
    console.log(`${everestP.toFixed(2)}%`);

}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
