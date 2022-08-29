function cake(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let index = 2;
    let command = input[index];
    index++;
    let pieces = length * width;
     while( command != "STOP"){
         let piecesTaken = Number(command);
         pieces -= piecesTaken;
         if(pieces < 0){
             console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`);
             break;
         }
         command = input[index];
         index++;
     }
     if(command === "STOP"){
         console.log(`${pieces} pieces are left.`);
     }
}
cake(["200",
"10",
"20",
"20",
"20",
"20",
"21"])

