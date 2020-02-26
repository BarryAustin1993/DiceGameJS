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
    }
    document.getElementById("Round").innerHTML = "Start Round " + round + "!";
}

function startRound(Eliminate, Suddendeath){
    for (player of players){
    let Roll = playerTurn(Suddendeath);
    player.playersRoll = Roll;
    }
    determineNext(Eliminate, Suddendeath);
}

function determineNext(Eliminate, Suddendeath){
    if(Suddendeath === false){
        for ( let i = 0; i < Eliminate; i++){
        determineSmallest(Eliminate);
        }
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

function determineSmallest(){
    let j = 0;
    for (let i = 1; i < players.length - 1; i++ ){
        if(players[i].playersRoll < players[j.totalRoll]){
            j = i;
            }
    }
    removeSmallest(j);
}

function removeSmallest(j){
players.splice(j, 1);
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
let dice10 = getRandomInteger( 1, 10 );
let dice12 = getRandomInteger( 1, 12 );
let dice20 = getRandomInteger( 1, 20 );
let totalRoll = addDice(dice4, dice6, dice8,dice10, dice12, dice20);
return totalRoll;
}

function addDice(dice4, dice6, dice8, dice10, dice12, dice20){
let totalRoll = dice4 + dice6 + dice8 + dice10 + dice12 + dice20;
return totalRoll;
}

function getRandomInteger(min, max){
return Math.floor(Math.random() * (max - min +1) + min)
}

function SuddendeathRoll(){
    let roll1 = getRandomInteger( 1, 20 );
    let roll2 = getRandomInteger( 1, 20 );
    let roll3 = getRandomInteger( 1, 20 );
    let roll4 = getRandomInteger( 1, 20 );
    let roll5 = getRandomInteger( 1, 4 );
    var roll = [roll1, roll2, roll3, roll4];
    let deathrole = roll[roll5];
    return deathrole;
}

