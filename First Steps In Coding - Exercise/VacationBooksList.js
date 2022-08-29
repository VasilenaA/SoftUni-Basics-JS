function VacationBooksList (input){
    const bookPages = Number(input[0]);
    const pagesPerHour = Number(input[1]);
    const days = Number(input[2]);
    let wholeTimeForReading = bookPages / pagesPerHour;
    let neededHours = wholeTimeForReading / days;
    console.log(neededHours);
}
VacationBooksList([212, 20, 2])