let coint = document.querySelector(".coint");
let flipBtn = document.querySelector("#flip-button");
let resetbtn = document.querySelector("#reset-button");
let face = 0;
let tails = 0;

flipBtn.addEventListener("click", ()=>{

let i = Math.floor(Math.random() * 2);
coint.style.animation = "none";
if(i) {
    setTimeout(function(){
        coint.style.animation = "spin-face 3s forwards"; 
    }, 100);
    face++;
}
else {   
    setTimeout(function(){
        coint.style.animation = "spin-tails 3s forwards"; 
    }, 100);
    tails++;
}
setTimeout(updateStats, 3000);
disableButton();
}); 
function updateStats(){ 
    document.querySelector("#face-count").textContent = `Face: ${face}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;}

    function disableButton(){
        flipBtn.disabled = true;
        setTimeout(function(){
        flipBtn.disabled = false;
        }, 3000);
    }

    resetbtn.addEventListener("click",()=>{
        coint.style.animation = "none";
        face = 0;
        tails = 0;
        updateStats();
    });