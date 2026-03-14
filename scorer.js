import {db,ref,set,update} from "./firebase.js"

let runs=0
let wickets=0
let ball=0
let over=0
let totalOvers=0
let innings=1

window.startMatch=function(){

totalOvers=parseInt(document.getElementById("overs").value)

set(ref(db,"match"),{
team:document.getElementById("team").value,
runs:0,
wickets:0,
over:0,
ball:0
})

}

window.run=function(r){

runs+=r

ball++

if(ball==6){
ball=0
over++
}

updateScore(r==4?"FOUR":r==6?"SIX":r)

}

window.wicket=function(){

wickets++
ball++

if(ball==6){
ball=0
over++
}

updateScore("WICKET")

}

window.noball=function(){

runs+=1
updateScore("NO BALL")

}

function updateScore(event){

update(ref(db,"match"),{
runs:runs,
wickets:wickets,
over:over,
ball:ball,
lastEvent:event
})

}
