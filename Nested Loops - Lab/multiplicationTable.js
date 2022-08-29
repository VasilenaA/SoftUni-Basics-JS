function multiplicationTable(input){
    for(let i = 1; i <= 10; i++){
        for(let b = 1; b <= 10; b++){
            let res = i*b;
            console.log(`${i} * ${b} = ${res}`);
        }
    }
}
multiplicationTable()