let score = 0;
let hitrn = 0



function increaseVale() {
    score += 10;
}
function newhit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hitrn;
}

function makebubble() {
    let box = "";
    for (let i = 1; i < 120; i++) {
        let rn = Math.floor(Math.random() * 10)
        box += `<div id="box">${rn}</div>`
    }
    document.querySelector("#pbotom").innerHTML = box;

}

function runtimer() {
    let time = 10;
    let timerint = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#timerval").textContent = time;
        }
        else {
            clearInterval(timerint)
            
            document.querySelector("#pbotom").innerHTML = `<h1>Game over<h1/>`;
        }

    }, 1000);

}

document.querySelector("#pbotom").addEventListener('click', function (dets) {
    var clickedon = Number(dets.target.textContent)
    if (clickedon === hitrn) {
        increaseVale()
        newhit()
        makebubble()
    }
    else {

    }
    document.querySelector("#scoreval").innerHTML = score;
})

document.querySelector("#startbtn").addEventListener("click", () => {
    runtimer()
    makebubble()
    newhit()
})
