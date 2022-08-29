function sumNumbers(input){
    let index = 0;
    let a = Number(input[index]);
    index++;
    let c = 0;
    
    while(c < a){
       let b = Number(input[index]);
       index++;
       c += b;
       
    }
    console.log(c);
}
sumNumbers(["100",
"10",
"20",
"30",
"40"])
