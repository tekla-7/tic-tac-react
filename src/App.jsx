import Player from "../components/player";
import GameBoard from '../components/GameBoard'
import { useState } from "react";

function App() {
const [activePlayer , setActivePlayer]=useState('X');
function handSelectSquare(){
  setActivePlayer((curActivePlayer)=>curActivePlayer==='X'?'O':'X')
}
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
         <Player initialName='player 1' symbol='X' isActive={activePlayer=='X'} />
         <Player initialName='player 2' symbol='O' isActive={activePlayer=='O'} />
        </ol>
        <GameBoard onSelectSquare={handSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
      LOG
    </main>
  );
}

export default App;
