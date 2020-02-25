"use strict";
class player {
    constructor() {
        this.playersRoll = 0;
    }
}
var Austin = new player;
var Andrew = new player;
var David = new player;
var Nevin = new player;
var Matthew = new player;
var Jacob = new player;
var Dajon = new player;
var Mike = new player;
var Charlie = new player;
var Dorian = new player;

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
    startRound(2, false);   
    round ++;
}
else if(players.length === 4 || 3){
    startRound(1,false);
    round++;
}
else { 
    startRound(1, true)
    round ++;
}}

function startRound(Eliminate, Suddendeath){
    let i = 0;
    for (player of players){
    let Roll = playerTurn(Suddendeath);
    players[i].playersRoll = Roll;
    i++;
    }
    determineNext(Eliminate, Suddendeath);
}

function determineNext(Eliminate, Suddendeath){
    if(Suddendeath === false){
        removeSmallest();
    }
    else{
        if(players[0].playersRoll === players[1].playersRoll){
            startRound(Eliminatem, Suddendeath);
        }
        else if(players[0].playersRoll > players[1].playersRoll){
            console.log(players[0].username + "Wins")
        }
        else{
            console.log(players[1].username + "Wins")
        }
    }
}

function removeSmallest(){
    for (let i = 0; i < Eliminate; i++) {
            var removed = players.filter(function(value, index, arr){
                return value = Math.min.apply(math, arr)
            });
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