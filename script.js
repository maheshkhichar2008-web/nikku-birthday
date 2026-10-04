/* =====================================
   SURPRISE BUTTON
===================================== */

const surpriseBtn =
    document.getElementById("surpriseBtn");

const surprise =
    document.getElementById("surprise");


surpriseBtn.addEventListener(
    "click",
    function () {

        surprise.classList.remove("hidden");

        surpriseBtn.style.display = "none";

        createConfetti();

        surprise.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }
);


/* =====================================
   PERSONAL MESSAGE
===================================== */

const messageBtn =
    document.getElementById("messageBtn");

const personalMessage =
    document.getElementById("personalMessage");


messageBtn.addEventListener(
    "click",
    function () {

        personalMessage.classList.remove("hidden");

        messageBtn.style.display = "none";

        createConfetti();

        personalMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }
);


/* =====================================
   1000 BIRTHDAY WISHES
===================================== */

const birthdayContainer =
    document.getElementById("birthday1000");


for (let i = 1; i <= 1000; i++) {

    const wish =
        document.createElement("div");

    wish.className =
        "birthday-wish";

    wish.innerHTML =
        "Happy Birthday Nikku ❤️";

    wish.style.animationDelay =
        (i * 0.002) + "s";

    birthdayContainer.appendChild(wish);

}


/* =====================================
   CONFETTI
===================================== */

function createConfetti() {

    const symbols = [
        "💗",
        "✨",
        "🌸",
        "💕",
        "🎉",
        "⭐",
        "💖",
        "🎀"
    ];


    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        confetti.style.position =
            "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-30px";

        confetti.style.fontSize =
            (12 +
            Math.random() * 18) +
            "px";

        confetti.style.zIndex =
            "9999";

        confetti.style.pointerEvents =
            "none";


        document.body.appendChild(
            confetti
        );


        const duration =
            2000 +
            Math.random() * 3000;


        confetti.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`,

                    opacity: 0
                }
            ],

            {
                duration: duration,

                easing: "ease-out"
            }
        );


        setTimeout(
            () => confetti.remove(),
            duration
        );

    }

}