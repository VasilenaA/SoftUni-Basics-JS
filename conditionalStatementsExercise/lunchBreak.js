function lunchBreak(input){
 const tvSeries = input[0];
 const episodeDur = Number(input[1]);
 const breakTime = Number(input[2]);

 const lunchTime = (breakTime * 1) / 8;
 const restTime = (breakTime * 1) / 4;
 const reaminingTime = Math.abs(breakTime - lunchTime - restTime);
 const freeTime = Math.abs(reaminingTime - episodeDur);

 if (reaminingTime >= episodeDur) {
   console.log(`You have enough time to watch ${tvSeries} and left with ${Math.ceil(freeTime)} minutes free time.`);
 } else {
     console.log(`You don't have enough time to watch ${tvSeries}, you need ${Math.ceil(freeTime)} more minutes.`)
 }
 
}
lunchBreak(["Game of Thrones", "48", "60"])
