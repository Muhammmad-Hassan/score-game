let score = 0;
let hitrn = 0
let flag = false;


// increasing score
function increaseVale() {
    score += 10;


}

// genratinng new number for hit

function newhit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hitrn;
}

// making bubble
function makebubble() {
    let box = "";
    for (let i = 1; i < 120; i++) {
        let rn = Math.floor(Math.random() * 10)
        box += `<div id="box">${rn}</div>`
    }
    document.querySelector("#pbotom").innerHTML = box;

}

// giving time to the game
function runtimer() {
    let time = 10;
    let timerint = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#timerval").textContent = time;
        }
        else {
            clearInterval(timerint)
            flag = false

            document.querySelector("#pbotom").innerHTML = `<h1>Game over<h1/>`;

        }

    }, 1000);

}

// click on bubble
document.querySelector("#pbotom").addEventListener('click', function (dets) {
    var clickedon = Number(dets.target.textContent)
    if (clickedon === hitrn) {
        increaseVale()
        newhit()
        makebubble()
        document.querySelector("#scoreval").innerHTML = score;
    }

})



// click on start btn
document.querySelector("#startbtn").addEventListener("click", () => {
    if(!flag){
    document.querySelector("#scoreval").innerHTML = 0;
    runtimer()
    makebubble()
    newhit()
    flag = true;
    }
})

