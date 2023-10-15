'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
console.log(secretNum);
let score = 20; // initial score
let highscore = 0; // highscore

//display message function
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        //when there is no input in the box
        if (!guess) {
            //document.querySelector('.message').textContent = '❌ NO NUMBER';
            displayMessage('❌ NO NUMBER');
        }

        //when the input is equal to the secretnumber
        else if (guess === secretNum) {
            // document.querySelector('.message').textContent = '🎉 Correct Number';
            displayMessage('🎉 Correct Number');
            document.querySelector('.number').textContent = secretNum;

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }

        //when guess is wrong
        else if (guess !== secretNum) {
            if (score > 1) {
                //document.querySelector('.message').textContent = guess > secretNum ? '📈 Too High' : '📉 Too Low';
                displayMessage(guess > secretNum ? '📈 Too High' : '📉 Too Low');
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                // document.querySelector('.message').textContent = 'You lost the game 💔';
                displayMessage('You lost the game 💔');
                document.querySelector('.score').textContent = 0;
            }
        }

        // //when the input is greater than the secretnumber
        // else if (guess > secretNum) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = '📈 Too High';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     }
        //     else {
        //         document.querySelector('.message').textContent = 'You lost the game 💔';
        //         document.querySelector('.score').textContent = 0;
        //     }
        // }

        // //when the input is lesser than the secretnumber
        // else if (guess < secretNum) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = '📉 Too Low';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     }
        //     else {
        //         document.querySelector('.message').textContent = 'You lost the game💔';
        //         document.querySelector('.score').textContent = 0;
        //     }
        // }
    });

//Reset button (AGAIN)
document.querySelector('.again').addEventListener
    ('click', function () {
        score = 20;
        secretNum = Math.trunc(Math.random() * 20) + 1;
        ``
        //document.querySelector('.message').textContent = 'Start guessing...';
        displayMessage('Start guessing...')
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    })
