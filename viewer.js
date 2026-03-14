import {db,ref,onValue} from "./firebase.js"

const scoreRef = ref(db,"match")

onValue(scoreRef,(snap)=>{

let d=snap.val()
if(!d) return

document.getElementById("team1").innerText=d.team
document.getElementById("score").innerText=d.runs+"/"+d.wickets
document.getElementById("overs").innerText="("+d.over+"."+d.ball+")"

if(d.target){
document.getElementById("target").innerText="Target: "+d.target
}

showEvent(d.lastEvent)

})

function showEvent(e){

if(!e) return

let box=document.getElementById("eventAnimation")

box.style.display="block"
box.innerText=e

setTimeout(()=>{
box.style.display="none"
},2000)

}
