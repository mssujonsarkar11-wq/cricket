import {db,ref,onValue} from "./firebase.js"

const matchRef = ref(db,"match")

onValue(matchRef,(snap)=>{

const data = snap.val()
if(!data) return

document.getElementById("team").innerText = data.team
document.getElementById("score").innerText = data.runs+"/"+data.wickets
document.getElementById("overs").innerText = "("+data.over+"."+data.ball+")"

document.getElementById("bat1").innerText = data.batsman1
document.getElementById("bat2").innerText = data.batsman2
document.getElementById("bowler").innerText = data.bowler

if(data.target){
document.getElementById("target").innerText = "Target: "+data.target
}

showEvent(data.lastEvent)

})

function showEvent(e){

if(!e) return

let box = document.getElementById("event")

box.innerText = e
box.style.display="block"

setTimeout(()=>{
box.style.display="none"
},2000)

}
