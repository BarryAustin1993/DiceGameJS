"use strict";

var Austin = {playersRoll: 0}
var Andrew = {playersRoll: 0}
var David = {playersRoll: 0}
var Nevin = {playersRoll: 0}
var Matthew = {playersRoll: 0}
var Jacob = {playersRoll: 0}
var Dajon = {playersRoll: 0}
var Mike = {playersRoll: 0}
var Charlie = {playersRoll: 0}
var Dorian = {playersRoll: 0}

var players = [Austin, Andrew, David, Nevin, Matthew, Jacob, Dajon, Mike, Charlie, Dorian]

var round = 1;

document.getElementById("Round").innerHTML = "Click here to start round " + round + "!";
document.getElementById("Player1").innerHTML = "Player: Austin - Total Dice Roll = " + Austin.playersRoll;
document.getElementById("Player2").innerHTML = "Player: Andrew - Total Dice Roll = " + Andrew.playersRoll;
document.getElementById("Player3").innerHTML = "Player: David - Total Dice Roll = " + David.playersRoll;
document.getElementById("Player4").innerHTML = "Player: Nevin - Total Dice Roll = " + Nevin.playersRoll;
document.getElementById("Player5").innerHTML = "Player: Matthew - Total Dice Roll = " + Matthew.playersRoll;
document.getElementById("Player6").innerHTML = "Player: Jacob - Total Dice Roll = " + Jacob.playersRoll;
document.getElementById("Player7").innerHTML = "Player: Dajon - Total Dice Roll = " + Dajon.playersRoll;
document.getElementById("Player8").innerHTML = "Player: Mike - Total Dice Roll = " + Mike.playersRoll;
document.getElementById("Player9").innerHTML = "Player: Charlie - Total Dice Roll = " + Charlie.playersRoll;
document.getElementById("Player10").innerHTML = "Player: Dorian - Total Dice Roll = " + Dorian.playersRoll;


function DetermineRoundType(){


    
if(players.length > 4){
    startRound(2, False);   
    round ++;
}
else if(players.length === 4 || 3){
    startRound(1,False);
    round++;
}
else { 
    startRound(1, True)
    round ++;
}}

function startRound(Eliminate, Suddendeath){
    for (player of players){
    let Roll = playerTurn(Suddendeath);
    player.playersRoll = Roll
    console.log(player.username + " " + player.playersRoll);
    }
    removePlayers(Eliminate, Suddendeath);
}

function removePlayers(Eliminate, Suddendeath){
    if(Suddendeath === false){
        for (i = 0; i < Eliminate; i++) {
            var removed = players.filter(function(value, index, arr){
                return value = Math.min.apply(math, arr)
            });
        }
    }
    else{
        if(players.player.playersRoll[0] === players.player.playersRoll[1]){
            startRound(Eliminatem, Suddendeath);
        }
        else if(players.player.playersRoll[0] > players.player.playersRoll[1]){
            console.log(players.player.username[0] + "Wins")
        }
        else{
            console.log(players.player.username[1] + "Wins")
        }
    }
}

function playerTurn(Suddendeath){
    if (Suddendeath === false){
    let playersRoll = rollDice();
    return playersRoll;
}
    else{
    let playersRoll = SuddendeathRoll();
    return playersRoll;
    }
}

function rollDice(){

let dice4 = getRandomInteger( 1, 4 );
let dice6 = getRandomInteger( 1, 6 );
let dice8 = getRandomInteger( 1, 8 );
let dice12 = getRandomInteger( 1, 12 );
let dice20 = getRandomInteger( 1, 20 );
let totalRoll = addDice(dice4, dice6, dice8, dice12, dice20);
return totalRoll;
}

function addDice(dice4, dice6, dice8, dice12, dice20){
let totalRoll = dice4 + dice6 + dice8 + dice12 + dice20;
return totalRoll;
}

function getRandomInteger(min, max){
return Math.floor(Math.random() * (max - min +1) + min)
}

function SuddendeathRoll(){
    var roll = [roll1, roll2, roll3, roll4];
    let roll1 = getRandomInteger( 1, 20 );
    let roll2 = getRandomInteger( 1, 20 );
    let roll3 = getRandomInteger( 1, 20 );
    let roll4 = getRandomInteger( 1, 20 );
    let roll5 = getRandomInteger( 1, 4 );
    let deathrole = roll[roll5];
    return deathrole;
}