// ==============================
// TYPING ANIMATION
// ==============================

const typingText = document.querySelector(".hero-content h2");

const words = [
    "Aspiring Web Developer",
    "HTML & CSS Learner",
    "Future Front-End Developer",
    "Creative Problem Solver"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent = currentWord.substring(0, letterIndex);

        letterIndex++;

        if (letterIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent = currentWord.substring(0, letterIndex);

        letterIndex--;

        if (letterIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


// ==============================
// SCROLL REVEAL
// ==============================

const hiddenElements = document.querySelectorAll(
    ".about,.skills,.education,.projects,.contact,.project-card,.card,.edu-box"
);

hiddenElements.forEach(element => {
    element.classList.add("hidden");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

hiddenElements.forEach(element => {

    observer.observe(element);

});


// ==============================
// ACTIVE NAVBAR
// ==============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==============================
// STICKY NAVBAR SHADOW
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.4)";

    }

    else {

        header.style.boxShadow = "none";

    }

});


// ==============================
// BACK TO TOP BUTTON
// ==============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#2196f3";
topButton.style.color = "white";
topButton.style.fontSize = "24px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 0 15px rgba(33,150,243,.5)";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ==============================
// CONTACT FORM
// ==============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();

    });

}


// ==============================
// BUTTON HOVER EFFECT
// ==============================

const buttons = document.querySelectorAll(".btn,.btn2");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px) scale(1)";

    });

});


// ==============================
// CONSOLE MESSAGE
// ==============================

console.log("Portfolio Loaded Successfully!");