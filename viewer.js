import { db, ref, onValue } from "./firebase.js"

const matchRef = ref(db,"match")

onValue(matchRef,(snap)=>{

let d = snap.val()
if(!d) return

document.getElementById("score").innerText =
d.runs+"/"+d.wickets

document.getElementById("overs").innerText =
d.over+"."+d.ball

document.getElementById("bat1").innerText =
d.striker+" ⭐"

document.getElementById("bat2").innerText =
d.nonStriker

document.getElementById("bowler").innerText =
d.bowler

if(d.target){
document.getElementById("target").innerText =
"Target: "+d.target
}

if(d.target && d.runs >= d.target){
alert("Batting Team WON")
}

})
