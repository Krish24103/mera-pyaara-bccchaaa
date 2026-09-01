/* =========================================
   ROMANTIC APOLOGY WEBSITE
   ========================================= */


let currentPage = 0;

const pages = document.querySelectorAll(".page");

const pageNumber =
    document.getElementById("pageNumber");

const progressBar =
    document.getElementById("progressBar");

const typingText =
    document.getElementById("typingText");


/* =========================================
   TYPING ANIMATION
   ========================================= */

const openingMessage =
    "I know I hurt you with my words... and I am genuinely sorry. You mean more to me than I can ever explain. ❤️";


let typingIndex = 0;


function typeMessage() {

    if (typingIndex < openingMessage.length) {

        typingText.innerHTML +=
            openingMessage.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeMessage, 45);

    }
}


/* =========================================
   TAP ME
   ========================================= */

function startLetter() {

    const button =
        document.querySelector(".tap-button");

    button.innerHTML =
        "Reading your letter... ❤️";

    button.disabled = true;

    setTimeout(() => {

        nextPage();

    }, 1200);
}


/* =========================================
   NEXT PAGE
   ========================================= */

function nextPage() {

    pages[currentPage].classList.remove("active");

    currentPage++;

    if (currentPage >= pages.length) {

        currentPage =
            pages.length - 1;
    }

    pages[currentPage].classList.add("active");

    updateProgress();

    createSmallHearts();
}


/* =========================================
   PROGRESS BAR
   ========================================= */

function updateProgress() {

    let number =
        Math.min(currentPage + 1, 8);

    pageNumber.innerText = number;

    let percentage =
        (number / 8) * 100;

    progressBar.style.width =
        percentage + "%";
}


/* =========================================
   BACKGROUND FLOATING HEARTS
   ========================================= */

function createFloatingHeart() {

    const heart =
        document.createElement("div");

    heart.className = "heart";

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💓",
        "💞"
    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 25 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 6 + "s";

    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 12000);
}


/* Keep creating hearts */

setInterval(
    createFloatingHeart,
    500
);


/* =========================================
   SMALL HEARTS ON PAGE CHANGE
   ========================================= */

function createSmallHearts() {

    for (let i = 0; i < 8; i++) {

        setTimeout(() => {

            createFloatingHeart();

        }, i * 100);

    }
}


/* =========================================
   FINAL HUG
   ========================================= */

function finalHug() {

    createHeartExplosion();

    const button =
        document.querySelector(".yes-button");

    button.innerHTML =
        "BIG HUG ACTIVATED 🫂❤️";

    setTimeout(() => {

        pages[currentPage].classList.remove("active");

        currentPage++;

        pages[currentPage].classList.add("active");

        updateProgress();

        createHeartExplosion();

    }, 1500);
}


/* =========================================
   HEART EXPLOSION
   ========================================= */

function createHeartExplosion() {

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "😘",
        "🫂",
        "❤️",
        "💞"
    ];


    for (let i = 0; i < 45; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "explosion-heart";

        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];


        const x =
            (Math.random() - .5) * 800;

        const y =
            (Math.random() - .5) * 800;


        heart.style.setProperty(
            "--x",
            x + "px"
        );

        heart.style.setProperty(
            "--y",
            y + "px"
        );


        heart.style.animationDelay =
            Math.random() * .4 + "s";


        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 2500);

    }
}


/* =========================================
   MUSIC
   ========================================= */

const music =
    document.getElementById("bgMusic");

const musicButton =
    document.getElementById("musicButton");


let musicPlaying = false;


function toggleMusic() {

    if (!musicPlaying) {

        music.play()
            .then(() => {

                musicPlaying = true;

                musicButton.innerHTML =
                    "🔊";

            })
            .catch(() => {

                alert(
                    "Please add a music.mp3 file inside your website folder ❤️"
                );

            });

    } else {

        music.pause();

        musicPlaying = false;

        musicButton.innerHTML =
            "🎵";
    }
}


/* =========================================
   MORE LOVE BUTTON
   ========================================= */

function sendMoreLove() {

    createHeartExplosion();

    setTimeout(() => {

        alert(
            "One more hug? 🥺🫂❤️\n\nI LOVE YOU SOOOOO MUCHHH!"
        );

    }, 500);
}


/* =========================================
   START TYPING
   ========================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            typeMessage,
            700
        );

    }
);