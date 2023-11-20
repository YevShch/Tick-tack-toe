
const headLine = document.createElement( "h1" )
headLine.innerText = "Scoreboard!"

// Lista med spelare
const users = [
  {
    name: "Player1",
    score: 0
  },
  {
    name: "Player2",
    score: 0
  },
  {
    name: "Player3",
    score: 0
  },
  {
    name: "Player4",
    score: 0
  },
  {
    name: "Player5",
    score: 0
  },
  {
    name: "Player6",
    score: 0
  }
]

// Skapa table element
const table = document.createElement( "table" )
const thead = document.createElement( "thead" )
const tbody = document.createElement( "thead" )
const trHead = document.createElement( "tr" )
const thName = document.createElement( "th" )
const thScore = document.createElement( "th" )
const thAdd1 = document.createElement( "th" )
const thRemove1 = document.createElement( "th" )
const thAdd5 = document.createElement( "th" )
const thRemove5 = document.createElement( "th" )

// Stoppa in text i table head columns
thName.innerText = "Player Name"
thAdd1.innerText = "Add 1"
thRemove1.innerText = "Remove 1"
thAdd5.innerText = "Add 5"
thRemove5.innerText = "Remove 5"
thScore.innerText = "Player Score"

// Bygger ihopa min table
trHead.appendChild( thName )
trHead.appendChild( thAdd1 )
trHead.appendChild( thRemove1 )
trHead.appendChild( thAdd5 )
trHead.appendChild( thRemove5 )
trHead.appendChild( thScore )
thead.appendChild( trHead )
table.appendChild( thead )
table.appendChild( tbody )

for ( let user of users ) {
  // Skapa alla table element för varje spelar rad 
  const playerRow = document.createElement( "tr" )
  const playerName = document.createElement( "td" )
  const playerAdd1 = document.createElement( "td" )
  const playerRemove1 = document.createElement( "td" )
  const playerAdd5 = document.createElement( "td" )
  const playerRemove5 = document.createElement( "td" )
  const playerScore = document.createElement( "td" )

  // Lägger till text i varje spelar rads kolumn 
  playerName.innerText = user.name
  playerAdd1.innerText = "+ 1"
  playerRemove1.innerText = "- 1"
  playerAdd5.innerText = "+ 5"
  playerRemove5.innerText = "- 5"
  playerScore.innerText = user.score


  // Lägger till event för add/remove kolumnen för att kunna uppdatera texten i score-kolumnen
  playerAdd1.addEventListener( "click", function () {
    user.score++;
    playerScore.innerText = user.score
  } )

  playerRemove1.addEventListener( "click", function () {
    user.score--;
    playerScore.innerText = user.score
  } )

  playerAdd5.addEventListener( "click", function () {
    user.score += 5;
    playerScore.innerText = user.score
  } )

  playerRemove5.addEventListener( "click", function () {
    user.score -= 5;
    playerScore.innerText = user.score
  } ) 

  // Stoppar in kolumnerna i raden
  playerRow.appendChild( playerName )
  playerRow.appendChild( playerAdd1 )
  playerRow.appendChild( playerRemove1 )
  playerRow.appendChild( playerAdd5 )
  playerRow.appendChild( playerRemove5 )
  playerRow.appendChild( playerScore )

  // Stoppar in raden i tbody
  tbody.appendChild( playerRow )
}

document.body.appendChild( headLine )
document.body.appendChild( table )


// let gameOver = false;
// let topScore = 5
// const playerList = [];

// export default function ScoreBoard ( playerNames ) {
//   const scoreBoard = document.createElement( "main" )
//   const scoreArea = document.createElement( "section" );
//   const btnSection = document.createElement( "section" );
//   const topScoreDisplay = TopScoreDisplay( topScore );

//   topScoreDisplay.addEventListener( "change", ( event ) => {
//     topScore = event.target.value
//     reset()
//   } )

//   scoreArea.id = "scoreArea";
//   btnSection.id = "btnSection";

//   let index = 1;
//   for ( let name of playerNames ) {
//     const scoreBox = PlayerScoreBox( name, index );
//     const addBtn = AddButton( name, index );
//     const removeBtn = RemoveButton( name, index );

//     scoreArea.appendChild( scoreBox );
//     btnSection.appendChild( BtnBox( addBtn, removeBtn ) )

//     createPlayer( scoreBox.lastChild, addBtn, removeBtn )

//     index++;
//   }

//   const resetBtn = document.createElement( "button" );
//   resetBtn.innerText = "Reset"
//   resetBtn.addEventListener( "click", reset )

//   scoreBoard.appendChild( resetBtn )
//   scoreBoard.appendChild( scoreArea )
//   scoreBoard.appendChild( topScoreDisplay )
//   scoreBoard.appendChild( btnSection )

//   return scoreBoard;
// }

// function createPlayer ( display, addBtn, removeBtn ) {
//   const newPlayer = new Player( display, addBtn, removeBtn )
//   playerList.push( newPlayer )

//   newPlayer.addBtn.addEventListener( "click", () => {
//     updateScore( newPlayer, playerList )
//   } )

//   newPlayer.removeBtn.addEventListener( "click", () => {
//     decreaseScore( newPlayer, playerList )
//   } )
// }

// function updateScore ( player, opponents ) {
//   if ( !gameOver ) {
//     player.score += 1;
//     player.display.textContent = player.score;

//     if ( player.score >= topScore ) {
//       gameOver = true
//       player.display.classList.add( "won" )

//       for ( const opponent of opponents ) {
//         if ( opponent != player ) {
//           opponent.display.classList.add( "lost" )
//         }
//       }
//     }
//   }
// }

// function decreaseScore ( player, opponents ) {
//   if ( player.score > 0 ) {
//     player.score -= 1;
//     player.display.textContent = player.score;

//     if ( player.score < topScore ) {
//       gameOver = false
//       player.display.classList.remove( "won" )
//       for ( const opponent of opponents ) {
//         if ( opponent != player ) {
//           opponent.display.classList.remove( "lost" )
//         }
//       }
//     }
//   }
// }

// function reset () {
//   gameOver = false
//   for ( let player of playerList ) {
//     player.score = 0
//     player.display.textContent = player.score;
//     player.display.classList.remove( "won", "lost" )
//   }
// }
