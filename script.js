let runs = 0;
let wickets = 0;
let overs = 0;

function addRun(r){

runs += r;

updateScore();

}

function wicket(){

wickets++;

updateScore();

}

function over(){

overs++;

updateScore();

}

function updateScore(){

db.ref("match").set({

runs:runs,

wickets:wickets,

overs:overs

});

}

db.ref("match").on("value",snap=>{

const data = snap.val();

if(!data) return;

document.getElementById("score").innerText =
data.runs + "/" + data.wickets;

document.getElementById("overs").innerText =
"Overs: " + data.overs;

});