var goalpoints=[0,1];
var team1={
  name:"Anguilla",
  runs:[],
  score:0
}
var team2={
  name:"Armenia",
  runs:[],
  score:0
}
//Dynamic namev
var team1name=document.getElementById("team-1-name").textContent=team1.name
var team2name=document.getElementById("team-2-name").textContent=team2.name

var toss;
function selectToss(){
  toss=Math.round(Math.random())+1;
  //0.992983230 <1
  console.log(toss);
}
// selectToss();
window.onload=()=>{
  selectToss();
  updatebutton();
}
function updateruns(){
  let team1runs=document.getElementById("team-1-round-runs").children;
  let team2runs=document.getElementById("team-2-round-runs").children;
   
 team1.runs.forEach((run,index)=>{
   if(run===1){
    team1runs[index].classList.add("green");  
   }
   else{
     team1runs[index].classList.add("red");
   }
  })
  team2.runs.forEach((run,index)=>{
    if(run===1){
    team2runs[index].classList.add("green");
     }
    else{
     team2runs[index].classList.add("red");
    }
  })
  
 if(team1.runs.length==5 && team2.runs.length==5){
    alert("both finished chances");  document.getElementById("result").textContent=team1.score===team2.score?"its draw":`${team1.score>team2.score?team1.name:team2.name} Wins`
  }
     else{ 
  toss=
    team1.runs.length===5?2:
  team2.runs.length===5?1:toss;
     }
}
 
updatebutton=()=>{
  var button = document.getElementById("Striker-button")
  button.textContent=`Shoot ${toss===1?team1.name:team2.name}`
}
function strike(){
  var runs=Math.floor(Math.random()*2);
  if(toss==1){
    team1.runs.push(runs)
     //alert("This is toss 1")
    updateruns();
    team1.score = calculateScore(team1.runs);
}
  else{
    team2.runs.push(runs);
    //alert("This is toss 2")
    updateruns();
    team2.score = calculateScore(team2.runs);
  }
}
var calculateScore = (runs) => {
    return ((total,runs) => total+runs)
}