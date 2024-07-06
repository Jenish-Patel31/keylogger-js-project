const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const display= document.getElementById("display");

let allkeys="";

startBtn.addEventListener("click", () => {

    document.addEventListener("keydown", handleDown);
    document.addEventListener("keyup", handleUp);

})

stopBtn.addEventListener("click", () => {

    document.removeEventListener("keydown", handleDown);
    document.removeEventListener("keyup", handleUp);
    logDiv.textContent = "";
    stateDiv.textContent = "";
    allkeys = ""; 
    display.textContent = ""; 

})

function handleDown(e) {
    logDiv.textContent = `key ${e.key} pressed Down`;
    stateDiv.textContent = "key is down";
    allkeys+=e.key;
    display.textContent =allkeys;
}

function handleUp(e) {
    logDiv.textContent = `key ${e.key} is up `;
    stateDiv.textContent = "key is up";
}
