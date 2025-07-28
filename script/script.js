document.addEventListener("scroll", function() {
    let elements = document.querySelectorAll(".hidden");
    let windowHeight = window.innerHeight;
    
    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            el.classList.add("show");
        }
    });
});

document.querySelectorAll('.servCard').forEach(card => {
    const details = card.querySelector('details');
    card.addEventListener('click', (e) => {
        // Evita il toggle se si clicca direttamente su elementi interni interattivi (come summary)
        if (e.target.tagName.toLowerCase() === 'summary') return;
        if (details.open) {
            details.open = false;
        } else {
            details.open = true;
        }
    });
});

let mode_view = document.getElementById('darkmode');
let primo = document.querySelectorAll('.navbarPortfolio');
let secondo = document.querySelectorAll('.contentCollab');
let terzo = document.querySelector('.accNav');
let quarto = document.querySelectorAll('.myName');
let quinto = document.querySelectorAll('.ScorePart');
let sesto = document.querySelectorAll('a');
let settimo = document.querySelectorAll('.servicesPart');
let ottavo = document.querySelectorAll('.contentProject');
let nono = document.querySelectorAll('.workAs')
let decimo = document.querySelectorAll('details');
let undicesimo = document.querySelectorAll('.contCard');
let dodicesima = document.querySelectorAll('.description')
let tredicesimo = document.querySelectorAll('.myNameMin');
let bod = document.body;
let all = [primo, secondo, terzo, quarto, quinto, sesto, settimo, ottavo, nono, decimo, undicesimo, dodicesima, tredicesimo];
let mode = 1;
let logo = document.getElementById('logo_base');
let logo_due = document.getElementById('logo_base_due');
let stayBlack = document.querySelectorAll('.stayBlack');

mode_view.addEventListener('click', function() {
    mode_view.innerHTML = '';
    mode = mode * -1;
    if (mode == 1) {
        // Light mode
        bod.classList.remove('Darkmode');
        logo.src = "../img/no-bg-2.png";
        logo_due.src = "../img/no-bg-4.png";
        for (let a of all) {
            if (a instanceof NodeList) {
                for (let item of a) {
                    item.style.setProperty('color', 'rgb(30, 30, 30)', 'important');
                }
            } else {
                a.style.setProperty('color', 'rgb(30, 30, 30)', 'important');

                if (a == terzo) {
                    a.style.setProperty('border-color', 'rgb(30, 30, 30)', 'important');
                }
            }
        }        
        document.body.style.background = 'background: linear-gradient(to left, var(--blu), var(--marrone))';
        mode_view.style.border = "1px solid black";
        mode_view.style.background = "none";
        mode_view.innerHTML = '<svg width = "25px" height = "25px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 3V0H9V3H7Z" fill="#ffea00"></path> <path d="M9 13V16H7V13H9Z" fill="#ffea00"></path> <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="#ffea00"></path> <path d="M0 9H3V7H0V9Z" fill="#ffea00"></path> <path d="M16 7H13V9H16V7Z" fill="#ffea00"></path> <path d="M3.75735 5.17157L1.63603 3.05025L3.05025 1.63603L5.17157 3.75735L3.75735 5.17157Z" fill="#ffea00"></path> <path d="M12.2426 10.8284L14.364 12.9497L12.9497 14.364L10.8284 12.2426L12.2426 10.8284Z" fill="#ffea00"></path> <path d="M3.05025 14.364L5.17157 12.2426L3.75735 10.8284L1.63603 12.9498L3.05025 14.364Z" fill="#ffea00"></path> <path d="M12.9497 1.63604L10.8284 3.75736L12.2426 5.17158L14.364 3.05026L12.9497 1.63604Z" fill="#ffea00"></path> </g></svg>';
    } else {
        // Dark mode
        bod.classList.add('Darkmode');
        logo.src = "../img/Logo-white.png";
        logo_due.src = "../img/Logo-white.png";
        for (let a of all) {
            if (a instanceof NodeList) {
                for (let item of a) {
                    item.style.setProperty('color', 'white', 'important');
                }
            } else {
                a.style.setProperty('color', 'white', 'important');

                if (a == terzo) {
                    a.style.setProperty('border-color', 'white', 'important');
                }
            }
        }    
        for (let a of stayBlack) {
            console.log(a);
            a.style.setProperty('color', 'rgb(30, 30, 30)', 'important');
        }         
        document.body.style.background = "#171717";
        mode_view.style.border = "1px solid black";
        mode_view.style.background = "black";
        mode_view.innerHTML = '<svg width = "25px" height = "25px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 8.00002C0 4.75562 1.93132 1.9623 4.70701 0.707031L5.65436 1.65438C5.2352 2.51383 5 3.47946 5 4.50002C5 8.08987 7.91015 11 11.5 11C12.5206 11 13.4862 10.7648 14.3456 10.3457L15.293 11.293C14.0377 14.0687 11.2444 16 8 16C3.58172 16 0 12.4183 0 8.00002Z" fill="#ffffff"></path> <path d="M11.5 7.00003L9 4.50003L11.5 2.00003L14 4.50003L11.5 7.00003Z" fill="#ffffff"></path> </g></svg>';
    }

    blackPulsante();
    whatsapp();
    projects();
})

document.addEventListener("scroll", function() {
    let text = document.querySelector(".typing");
    if (text.getBoundingClientRect().top < window.innerHeight - 100) {
        text.style.animation = "typing 2s steps(20, end) forwards";
    }
});

function projects() {
    let loghi = document.querySelectorAll('.personalised');

    for (let lo of loghi) {
        let all_a = lo.querySelectorAll('svg path, svg rect, svg circle, svg polygon, svg g');

        for (let a of all_a) {
            if (document.body.classList.contains('Darkmode')) {
                a.style.setProperty('fill', 'white', 'important');
            } else {
                a.style.setProperty('fill', 'rgb(30, 30, 30)', 'important');
            }
        }
    }
}

function whatsapp() {
    let what = document.getElementById('whatsapp');
    let all_svg = what.querySelectorAll('svg path, svg rect, svg circle, svg polygon, svg g');

    for (let all of all_svg) {
        if (document.body.classList.contains('Darkmode')) {
            all.style.setProperty('fill', 'white', 'important');
        } else {
            all.style.setProperty('fill', 'rgb(30, 30, 30)', 'important');
        }
    }
}

function blackPulsante() {
    let dodicesimo = document.querySelectorAll('.qxCTlb');
    // console.log("QUIIII: ", dodicesimo);
    for (let dod of dodicesimo) {
        if (bod.classList.contains('Darkmode')) {
            dod.style.setProperty('color', 'white', 'important');
            dod.style.setProperty('border', 'none', 'important');
        } else {
            dod.style.setProperty('color', 'rgb(30, 30, 30)', 'important');
            dod.style.setProperty('border', 'none', 'important');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        let dodicesimo = document.querySelectorAll('.qxCTlb');
        console.log(dodicesimo)
        blackPulsante();
    }, 500);
    mode_view.click();
})

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section").forEach(section => {
    gsap.to(section, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
});


document.addEventListener("click", createRipple);
document.addEventListener("touchstart", createRipple);

function createRipple(event) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    // Per gestire tocco su mobile
    const x = (event.touches ? event.touches[0].clientX : event.clientX);
    const y = (event.touches ? event.touches[0].clientY : event.clientY);

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 700); // Rimuove l'effetto dopo 700ms
}

let video = document.querySelector('#videoTap');
video.controls = false;
video.autoplay = true;

video.addEventListener('click', function() {
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
})