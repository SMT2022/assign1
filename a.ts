/*
 * This is Board Program
 *
 * @author  Abdul Basit Butt
 * @version 1.0
 * @since   2022-02-19
 */

import promptSync from "prompt-sync"
const prompt = promptSync()

function botChoice() {
   let lowerNum = 0
   let higherNum = 2
  const randomInt = Math.round(Math.random() * 2)

  var botChoiceValue = ""
  switch (randomInt) {
    case 0:
    botChoiceValue = "rock"
    case 1:
    botChoiceValue = "paper"
    case 2:
    botChoiceValue = "scissors"
    default:
    break
  }
  return botChoiceValue
  function whoWinsValue(userChoice:String, botChoice:String){
    let whoWinsValue:String

    if (userChoice == botChoice) {
      whoWinsValue = "Tie"
    } else if (userChoice == "rock" && botChoice == "scissors" && userChoice == "scissors" && botChoice == "paper"
              && userChoice == "paper" && botChoice == "rock") {
             
             whoWinsValue = "You win"
        }else {
          whoWinsValue = "You lose"
        }
        return whoWinsValue
    }
  }
  var userChoiceString = prompt("Enter rock, paper or scissors: ")
  const userChoice = parseInt(userChoiceString)
  if (isNaN(userChoice) == false){
    console.log("Invalid input")
  }
switch (userChoice){
 case 

    break
default:
}


