function operationsBetweenNumbers(input){
    const N1 = Number(input[0]);
    const N2 = Number(input[1]);
    const Operator = input[2];
    let result =  0 ;
    let result1 = " ";

   

    switch(Operator){
        case "+":
            result = N1 + N2;
            if(result % 2 == 0){
                result1 = "even";
            } else if(result %2 != 0){
                result1 = "odd";
            }
            console.log(`${N1} ${Operator} ${N2} = ${result} - ${result1}`);
        break;
        case "-":
            result = N1 - N2;
            if(result % 2 == 0){
                result1 = "even";
            } else if(result %2 != 0){
                result1 = "odd";
            }
            console.log(`${N1} ${Operator} ${N2} = ${result} - ${result1}`);
        break;
        case "*":
            result = N1 * N2;
            if(result % 2 == 0){
                result1 = "even";
            } else if(result %2 != 0){
                result1 = "odd";
            }
            console.log(`${N1} ${Operator} ${N2} = ${result} - ${result1}`);
        break;
        case "/":
            result = N1 / N2;
            if(N2 === 0){
                console.log(`Cannot divide ${N1} by zero`)
            } else{
                console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
            }
        break;  
        case "%":
            result = N1 % N2;
            if(N2 === 0){
                console.log(`Cannot divide ${N1} by zero`)
            } else{
               console.log(`${N1} % ${N2} = ${result}`); 
            }
        break;       
    }  
}
operationsBetweenNumbers(["10", "1", "-"])