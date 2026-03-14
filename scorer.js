import { db, ref, set, update } from "./firebase.js"

let state = {
runs:0,
wickets:0,
over:0,
ball:0,
striker:"",
nonStriker:"",
bowler:"",
target:null
}

window.startMatch=function(){

state.striker=document.getElementById("bat1").value
state.nonStriker=document.getElementById("bat2").value
state.bowler=document.getElementById("bowler").value

set(ref(db,"match"),state)

}

window.submitBall=function(){

let type=document.getElementById("ballType").value
let runs=parseInt(document.getElementById("runs").value)
let wicket=document.getElementById("wicket").value!="none"

let addRuns=runs

if(type==="wide") addRuns+=1
if(type==="noball") addRuns+=1

state.runs+=addRuns

if(type!=="wide" && type!=="noball"){
state.ball++
}

if(state.ball===6){

state.ball=0
state.over++

let newBowler=prompt("New Bowler Name")
state.bowler=newBowler

}

if(runs%2===1){

let temp=state.striker
state.striker=state.nonStriker
state.nonStriker=temp

}

if(wicket){

state.wickets++

let newBat=prompt("New Batsman Name")
state.striker=newBat

}

update(ref(db,"match"),state)

}
