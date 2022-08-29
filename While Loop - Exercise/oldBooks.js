function oldBooks(input){
    let searchedBook = input[0];
    let index = 1;
    let nextBook = input[index];
    let isFound = false;
   

    while(nextBook != "No More Books"){
        if(nextBook === searchedBook){      
            isFound = true;
            console.log(`You checked ${index - 1} books and found it.`);
            break;
        } 
        index++;
        nextBook = input[index];
       
      }
      if (!isFound){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);
      }
}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])





