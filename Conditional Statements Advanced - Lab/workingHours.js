function workingHours(input){
    const hour = Number(input[0]);
    const day = input[1];
    if(hour>=10 && hour<=18){
        if(day!="Sunday"){
            console.log("open");
        } 
        if(day=="Sunday"){
            console.log("closed");
        }
    } else{
        console.log("closed");
    }
}
workingHours(["11", "Sunday"])