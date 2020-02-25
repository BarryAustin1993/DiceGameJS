"use strict";


const players = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10,]

function runGame(){

}
function startRound(){

players.foreach (element => playerTurn(),
                            console.log(element + " " + playersRoll))



}
function playerTurn(){

    let playersRoll = rollDice();
    return playersRoll;
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