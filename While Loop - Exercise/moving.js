function moving(input){
    let width = Number(input[0]);
    let lenght = Number(input[1]);
    let hight = Number(input[2]);
    let freeSpace = width * lenght * hight;
    let index = 3;
    let command = input[index];
    index++;
    while(command != "Done"){
        let boxes = Number(command);
        freeSpace -= boxes;
        if(freeSpace <= 0){
           console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
           break;
        }
        command = input[index];
        index++;
    }
    if (command === "Done"){
        console.log(`${freeSpace} Cubic meters left.`);
    }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

