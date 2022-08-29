function uniquePINCodes(input){
    let firstBorder = Number(input[0]);
    let secondBorder = Number(input[1]);
    let thirdBorder = Number(input[2]);
    
    for (let i = 2; i<= firstBorder; i++){
        for(let j = 2; j <= secondBorder; j++){
            let isPrime = true;
            for(let u = 2; u <= j / 2; u++){
            if(j % u == 0){
                isPrime = false;
            }
            }
            for(let k = 2; k <= thirdBorder; k++){
                if(i % 2==0 && k % 2 ==0 && isPrime){
                   console.log(`${i} ${j} ${k}`);
                }  
            }  
        }  
    }
}
uniquePINCodes(["3",
"5",
"5"])
