function sumOfTwoNumbers(input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let isFound = false;
    let counter=0;

    for(let i = startNum; i <= endNum; i++){
        for(let k = startNum; k <= endNum; k++){
            counter++;
            let res = i + k;
            if(res === magicNum){
                console.log(`Combination N:${counter} (${i} + ${k} = ${magicNum})`);
                isFound = true;
                break;
            }
        }
        if(isFound){
            break;
        }
    }
    if(!isFound){
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers(["88", "888", "2000"])