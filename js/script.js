/*
Additonal Content (Select 2)
> Limit the number the user can select to 8 or less
> Allow user to enter number via a web rather than prompt
-----------------------------------------------------------
> Add button that generates new numbers
    - Doesn't ask user to specify quantity of numbers again
        - Uses previously selected amount
*/  

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

