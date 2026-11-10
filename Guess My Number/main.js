 "use strict";
        const message = document.querySelector(".message");
        const check_btn = document.querySelector(".check");
        const guess = document.querySelector(".guess");
        const score = document.querySelector(".score");
        const highscore = document.querySelector(".highscore");
        const again = document.querySelector(".again");
        const correct_num = document.querySelector(".number");
        const body = document.querySelector("body");

        let random;

        const run = function () {
            random = Math.floor(Math.random() * 50 + 1);

            check_btn.disabled = false;
            body.style.backgroundColor = "#222";

            correct_num.textContent = "?";
            guess.value = "";

            message.textContent = "Start guessing...";
            score.textContent = 50;
        };

        check_btn.addEventListener("click", function () {
            if (check_btn.disabled) return;

            const num = Number(guess.value);

            if (!guess.value || num < 1 || num > 50) {
                message.textContent = "Choose 1-50!";
                return;
            }

            if (num === random) {
                message.textContent = "Correct Number!";

                if (Number(score.textContent) > Number(highscore.textContent)) {
                    highscore.textContent = score.textContent;
                }

                check_btn.disabled = true;
                correct_num.textContent = num;
                body.style.backgroundColor = "green";
            } else {
                message.textContent = num > random ? "Too high!" : "Too low!";

                score.textContent = Number(score.textContent) - 1;

                if (Number(score.textContent) <= 0) {
                    message.textContent = "You Lost! Try again";
                    check_btn.disabled = true;
                    correct_num.textContent = random;
                }
            }
        });
       
        again.addEventListener("click", run);

        run();