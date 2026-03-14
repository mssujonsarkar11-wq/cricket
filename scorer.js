import {db,ref,set,update} from "./firebase.js"

let runs=0
let wickets=0
let ball=0
let over=0

let batsman1=""
let batsman2=""
let bowler=""

window.startMatch=function(){

const team=document.getElementById("team").value

batsman1=document.getElementById("batsman1").value
batsman2=document.getElementById("batsman2").value
bowler=document.getElementById("bowler").value

set(ref(db,"match"),{
team:team,
runs:0,
wickets:0,
over:0,
ball:0,
batsman1:batsman1,
batsman2:batsman2,
bowler:bowler
})

runs=0
wickets=0
ball=0
over=0

}

window.run=function(r){

runs+=r
ball++

if(ball==6){
ball=0
over++
}

let event=r==4?"FOUR":r==6?"SIX":r

updateScore(event)

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

window.changeBowler=function(){

bowler=prompt("New Bowler Name")

update(ref(db,"match"),{
bowler:bowler
})

}

window.newBatsman=function(){

batsman1=prompt("New Batsman Name")

update(ref(db,"match"),{
batsman1:batsman1
})

}

window.endInnings=function(){

let target=runs+1

update(ref(db,"match"),{
target:target
})

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
