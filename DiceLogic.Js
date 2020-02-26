"use strict";
class player {
    constructor(name) {
        this.playersRoll = 0;
        this.username = name;
    }
}

var Austin = new player("Austin");
var Andrew = new player("Andrew");
var David = new player("David");
var Nevin = new player("Nevin");
var Matthew = new player("Matthew");
var Jacob = new player("Jacob");
var Dajon = new player("Dajon");
var Mike = new player("Mike");
var Charlie = new player("Charlie");
var Dorian = new player("Dorian");

var players = [ David, Nevin, Matthew, Jacob, Dajon, Mike, Charlie, Dorian, Austin, Andrew]

 var round = 1;
 

function DetermineRoundType(){


    if(players.length > 4){

    startRound(2, false);   
    round ++;
    }
    else if(players.length === 4 || players.length === 3){
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
        let remainingPlayers = displayplayers();
        document.getElementById("ShowActivePlayers").innerHTML = remainingPlayers;
    }
    else{
        if(players[0].playersRoll === players[1].playersRoll){
            startRound(Eliminate, Suddendeath);
        }
        else if(players[0].playersRoll > players[1].playersRoll){
            document.getElementById("ShowActivePlayers").innerHTML = "Congradulations " + players[0].username + " You Win" ;
        }
        else{
            document.getElementById("ShowActivePlayers").innerHTML = "Congradulations " + players[1].username + " You Win" ;
        }
    }
}

function displayplayers(){
let remainingPlayers = "";
for ( let i = 0; i < players.length; i++){
    remainingPlayers += players[i].username + " " + "Dice Roll: " + players[i].playersRoll + "\n";
}
return remainingPlayers;
}

function determineSmallest(){
    let j = 0;
    for (let i = 1; i < players.length; i++ ){
        if(players[i].playersRoll < players[j].playersRoll){
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
    let roll5 = getRandomInteger( 0, 3 );
    var roll = [roll1, roll2, roll3, roll4];
    let deathrole = roll[roll5];
    return deathrole;
}

