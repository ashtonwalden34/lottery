/*
Base Assignment
    1. Get user input for how many numbers --- Force it to be number
        - Make sure input is in integers
        - Use JS prompt to get input
    5. Style html document

Additonal Content (Select 2)
> Limit the number the user can select to 8 or less
    - If larger than 8, display error message
> Allow user to enter number via a web rather than prompt
    - text box and then hitting enter or submit button
        - on.click funciton?
> Add button that generates new numbers
    - Doesn't ask user to specify quantity of numbers again
        - Uses previously selected amount
*/  

// Prompts the user to enter how many numbers they would like generated and sets it equal to userNum
                    // var userNum = prompt("How many numbers?");





// array to hold lottery numbers
var lottoNums = [];
// variable to hold lottery picks and help format for html display
var lottery = "";


// function lottoFunction() {
//     // generates the selected amount of random numbers
//     for (i = 0; i < userNum; i++) {
//         // passes randomly generated numbers into lottoNums array
//         lottoNums[i] = Math.floor(Math.random() * 99);
//     }

//     for (i = 0; i < lottoNums.length; i++) {
//         // checks to see if it is the last time looping through, if so don't add "-" after num
//         if ([i] == lottoNums.length-1) {
//             // doesn't add dash after num
//             lottery += lottoNums[i];
//         } else {
//             // separates lottery numbers by dashes (same as lottery = lottery + lottoNums[i] + "-";)
//             lottery += lottoNums[i] + " - "
//         }
//     }
// }

function test() { 
    document.getElementById("test-div").innerHTML = "Test success!!!!!!!!"
}



function lotteryFunction() {
    var userNum = document.getElementById("num-input").value;

    if(userNum < 1 || userNum > 8) {
        alert("Please choose a number between 1 & 8!")
    } else {
        // generates the selected amount of random numbers
        for (i = 0; i < userNum; i++) {
            // passes randomly generated numbers into lottoNums array
            lottoNums[i] = Math.floor(Math.random() * 99);
        }

        for (i = 0; i < lottoNums.length; i++) {
            // checks to see if it is the last time looping through, if so don't add "-" after num
            if ([i] == lottoNums.length-1) {
                // doesn't add dash after num
                lottery += lottoNums[i];
            } else {
                // separates lottery numbers by dashes (same as lottery = lottery + lottoNums[i] + "-";)
                lottery += lottoNums[i] + " - "
            }
        }
    }

    document.getElementById("lottoDisplay").innerHTML = lottery;

    
}



// lottoFunction();

// document.getElementById("lottoDisplay").innerHTML = lottery;

