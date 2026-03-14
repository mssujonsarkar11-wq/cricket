import { db, ref, set, onValue } from './firebase.js';

let runs = 0;
let wickets = 0;
let balls = 0;
let overs = 0.0;
let batsman1 = "Batsman 1";
let batsman2 = "Batsman 2";
let bowler = "Bowler 1";
let strike = 1; // 1 for batsman1, 2 for batsman2
let team = "Team A";

function updateScore() {
  overs = Math.floor(balls/6) + (balls % 6)/10;
  set(ref(db, 'match'), { team, runs, wickets, overs, batsman1, batsman2, bowler, strike });
}

// Firebase live update to DOM
const scoreRef = ref(db, 'match');
onValue(scoreRef, (snapshot) => {
  const data = snapshot.val();
  if(!data) return;

  document.getElementById('score').innerText = `${data.runs}/${data.wickets}`;
  document.getElementById('overs').innerText = `Overs: ${data.overs}`;
  const runRate = (data.overs > 0 ? (data.runs / data.overs).toFixed(2) : 0);
  document.getElementById('runRate').innerText = `Run Rate: ${runRate}`;
  document.getElementById('teamName').innerText = data.team;
  document.getElementById('batsmen').innerText = `Batsmen: ${data.batsman1} / ${data.batsman2}`;
  document.getElementById('bowler').innerText = `Bowler: ${data.bowler}`;
  document.getElementById('strike').innerText = `Strike: ${data.strike === 1 ? data.batsman1 : data.batsman2}`;
});

// Controls
window.addRun = function(r) { runs += r; updateScore(); }
window.wicket = function() { wickets++; updateScore(); }
window.ball = function() { balls++; updateScore(); }
window.updateTeam = function() { team = document.getElementById('teamInput').value || "Team A"; updateScore(); }
window.updateBatsmen = function() {
  batsman1 = document.getElementById('bat1').value || "Batsman 1";
  batsman2 = document.getElementById('bat2').value || "Batsman 2";
  updateScore();
}
window.updateBowler = function() { bowler = document.getElementById('bowlerInput').value || "Bowler 1"; updateScore(); }
