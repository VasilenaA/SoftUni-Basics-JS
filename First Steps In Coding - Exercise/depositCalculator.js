function depositCalculator(input){
      let depositSum = Number(input[0]);
      let term = Number(input[1]);
      let interestRate = Number(input[2]);
      let lihva = depositSum * (interestRate/100);
      let oneMonthLihva = lihva / 12;
      let Suma = depositSum + term * oneMonthLihva;
      console.log(Suma);
}
depositCalculator([200, 3 ,5.7])