/* ==========================================
        NOVATECH LANDING PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("NovaTech Loaded 🚀");
}

    /* ==========================================
            LOADING SCREEN
    ========================================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        if(loader){

            loader.style.opacity="0";

            loader.style.visibility="hidden";

            setTimeout(()=>{

                loader.remove();

            },600);

        }

    });

    /* ==========================================
            SCROLL PROGRESS BAR
    ========================================== */

    const progress=document.getElementById("progress-bar");

    window.addEventListener("scroll",()=>{

        if(!progress) return;

        const total=document.documentElement.scrollHeight-window.innerHeight;

        const value=(window.scrollY/total)*100;

        progress.style.width=value+"%";

    });

    /* ==========================================
            CURSOR GLOW
    ========================================== */

    const glow=document.getElementById("cursor-glow");

    document.addEventListener("mousemove",(e)=>{

        if(glow){

            glow.style.left=e.clientX+"px";

            glow.style.top=e.clientY+"px";

        }

    });

    /* ==========================================
            CUSTOM CURSOR
    ========================================== */

    const dot=document.getElementById("cursor-dot");
    const ring=document.getElementById("cursor-ring");

    document.addEventListener("mousemove",(e)=>{

        if(dot){

            dot.style.left=e.clientX+"px";
            dot.style.top=e.clientY+"px";

        }

        if(ring){

            ring.style.left=e.clientX+"px";
            ring.style.top=e.clientY+"px";

        }

    });

    document.querySelectorAll("a,button").forEach(item=>{

        item.addEventListener("mouseenter",()=>{

            if(ring){

                ring.style.width="55px";
                ring.style.height="55px";

            }

        });

        item.addEventListener("mouseleave",()=>{

            if(ring){

                ring.style.width="36px";
                ring.style.height="36px";

            }

        });

    });

    /* ==========================================
            BACK TO TOP BUTTON
    ========================================== */

    const topBtn=document.createElement("button");

    topBtn.innerHTML="↑";

    topBtn.id="topBtn";

    document.body.appendChild(topBtn);

    topBtn.style.cssText=`

        position:fixed;
        bottom:30px;
        left:30px;
        width:55px;
        height:55px;
        border:none;
        border-radius:50%;
        background:#3B82F6;
        color:#fff;
        font-size:22px;
        cursor:pointer;
        display:none;
        z-index:999;

    `;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            topBtn.style.display="block";

        }else{

            topBtn.style.display="none";

        }

    });

    topBtn.onclick=()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };

    /* ==========================================
            NAVBAR EFFECT
    ========================================== */

    const navbar=document.querySelector(".navbar");

    window.addEventListener("scroll",()=>{

        if(!navbar) return;

        if(window.scrollY>50){

            navbar.style.background="rgba(10,15,30,.85)";

            navbar.style.boxShadow="0 15px 40px rgba(0,0,0,.3)";

        }

        else{

            navbar.style.background="rgba(255,255,255,.08)";

            navbar.style.boxShadow="none";

        }

    });

    /* ==========================================
        THEME SWITCH
========================================== */

const toggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

if (toggle) {

    if (localStorage.getItem("theme") === "light") {

        document.body.classList.add("light-mode");

        if (themeIcon) {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        }

    }
}

    toggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");
    });


        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light");

            if (themeIcon) {
                themeIcon.classList.remove("fa-moon");
                themeIcon.classList.add("fa-sun");
            }


        } else {

            localStorage.setItem("theme", "dark");

            if (themeIcon) {
                themeIcon.classList.remove("fa-sun");
                themeIcon.classList.add("fa-moon");
            }

        }
         /* ==========================================
            MOBILE HAMBURGER MENU
    ========================================== */

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    if(hamburger && navLinks){

        hamburger.addEventListener("click",()=>{

            navLinks.classList.toggle("active");
            hamburger.classList.toggle("active");

        });

    }

    /* ==========================================
            SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link=>{

        link.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /* ==========================================
            REVEAL ANIMATION
    ========================================== */

    const revealElements=document.querySelectorAll(

        ".fade-up,.scale,.rotate"

    );

    const revealObserver=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    revealElements.forEach(el=>{

        revealObserver.observe(el);

    });

    /* ==========================================
            ANIMATED COUNTERS
    ========================================== */

    const counters=document.querySelectorAll(".counter");

    counters.forEach(counter=>{

        const update=()=>{

            const target=+counter.dataset.target;

            const value=+counter.innerText;

            const increment=target/120;

            if(value<target){

                counter.innerText=Math.ceil(value+increment);

                requestAnimationFrame(update);

            }

            else{

                counter.innerText=target;

            }

        };

        update();

    });

    /* ==========================================
            3D CARD TILT
    ========================================== */

    document.querySelectorAll(

        ".feature-card,.price-card,.testimonial-card"

    ).forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            const rotateX=((y-rect.height/2)/12);

            const rotateY=((rect.width/2-x)/12);

            card.style.transform=

            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="rotateX(0) rotateY(0)";

        });

    });

    /* ==========================================
            MAGNETIC BUTTONS
    ========================================== */

    document.querySelectorAll(".magnetic").forEach(button=>{

        button.addEventListener("mousemove",(e)=>{

            const rect=button.getBoundingClientRect();

            const x=e.clientX-rect.left-rect.width/2;

            const y=e.clientY-rect.top-rect.height/2;

            button.style.transform=

            `translate(${x*.25}px,${y*.25}px)`;

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform="translate(0,0)";

        });

    });

    /* ==========================================
            FAQ ACCORDION
    ========================================== */

    document.querySelectorAll(".faq-item").forEach(item=>{

        item.querySelector(".faq-question")

        ?.addEventListener("click",()=>{

            item.classList.toggle("active");

        });

    });

   /* ==========================================
        LIVE CHAT
========================================== */

const chatBtn = document.getElementById("chat-btn");
const chatBox = document.getElementById("chat-box");

if (chatBtn && chatBox) {

    chatBtn.addEventListener("click", () => {

        chatBox.classList.toggle("show");

    });
    /* ==========================================
            INTERACTIVE PARTICLE NETWORK
    ========================================== */

    const canvas = document.getElementById("particles");
    const ctx = canvas ? canvas.getContext("2d") : null;

    if (canvas && ctx) {

        let particles = [];
        const mouse = { x: null, y: null };

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        class Particle {

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.vx = (Math.random() - 0.5) * 0.6;
                this.vy = (Math.random() - 0.5) * 0.6;
            }

            update() {

                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

            }

            draw() {

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255,255,255,.8)";
                ctx.fill();

            }

        }

        for (let i = 0; i < 90; i++) {
            particles.push(new Particle());
        }

        window.addEventListener("mousemove", e => {

            mouse.x = e.clientX;
            mouse.y = e.clientY;

        });

        function connect() {

            for (let a = 0; a < particles.length; a++) {

                for (let b = a; b < particles.length; b++) {

                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {

                        ctx.strokeStyle = `rgba(59,130,246,${1-distance/120})`;
                        ctx.lineWidth = 1;

                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();

                    }

                }

            }

        }

        function animateParticles() {

            ctx.clearRect(0,0,canvas.width,canvas.height);

            particles.forEach(p=>{

                p.update();
                p.draw();

            });

            connect();

            requestAnimationFrame(animateParticles);

        }

        animateParticles();

    }

    /* ==========================================
            HERO PARALLAX
    ========================================== */

    const hero = document.querySelector(".hero");

    window.addEventListener("mousemove",(e)=>{

        if(!hero) return;

        const x=(e.clientX-window.innerWidth/2)/60;
        const y=(e.clientY-window.innerHeight/2)/60;

        hero.style.transform=`translate(${x}px,${y}px)`;

    });

    /* ==========================================
            CURSOR RIPPLE
    ========================================== */

    document.addEventListener("click",(e)=>{

        const ripple=document.createElement("span");

        ripple.className="cursor-ripple";

        ripple.style.left=e.clientX+"px";
        ripple.style.top=e.clientY+"px";

        document.body.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },700);

    });

    /* ==========================================
            HERO TEXT ANIMATION
    ========================================== */

    document.querySelectorAll(".hero-title span").forEach((letter,index)=>{

        letter.style.animationDelay=`${index*0.08}s`;

    });

    /* ==========================================
            FLOATING SHAPES
    ========================================== */

    document.querySelectorAll(".floating-shape").forEach(shape=>{

        const speed=Math.random()*2+2;

        let angle=Math.random()*360;

        function floatShape(){

            angle+=0.4;

            shape.style.transform=

            `translateY(${Math.sin(angle*Math.PI/180)*speed}px)`;

            requestAnimationFrame(floatShape);

        }

        floatShape();

    });

    /* ==========================================
            PERFORMANCE
    ========================================== */

    window.addEventListener("blur",()=>{

        console.log("Animations Paused");

    });

    window.addEventListener("focus",()=>{

        console.log("Animations Resumed");

    });

    console.log("NovaTech Premium Effects Enabled ✨");
};

