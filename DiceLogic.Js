"use strict";

var player = {playersRoll: 0, username}

var players = [player, player, player, player, player, player, player, player, player, player,]


function namePlayers(){
    var i = 1;
    for (player of players){
        player.username = "player" + i;
        i++;
    };
}

function runGame(){
 //player starts round
//display in information after round
}



function DetermineRoundType(){

    var round = 1;

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