import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [currentPlayer, setCurrentPlayer] = useState<number>(0)
  const [gameStart, setGameStart] = useState(false)
  const [gameEnd, setGameEnd] = useState(false)
  const [board, setBoard] = useState(Array(9).fill(''))
  const [xWins, setXWins] = useState(0)
  const [oWins, setOWins] = useState(0)

  console.log(board)
  console.log(board.every(i => i === ''))

  function handleBoxClick(player: number, divId: string) {
    const newBoard = [...board]
    
    if (player === 1) {
      newBoard[Number(divId)] = 'x'
      console.log('x')
      setCurrentPlayer(2)
    } else if (player === 2) {
      newBoard[Number(divId)] = 'o'
      console.log('o')
      setCurrentPlayer(1)
    }
    setBoard(newBoard)
  }

  function startGame() {
    setGameStart(true)
    setCurrentPlayer(Math.floor(Math.random() * 2) + 1)
  }

  function restartGame() {
    setBoard(Array(9).fill(''))
    setCurrentPlayer(Math.floor(Math.random() * 2) + 1)
    setGameEnd(false)
  }

  function checkWin() {
    
  }

  useEffect(() => {
    if (board.every(i => i !== '')) {
      setGameEnd(true)
      setCurrentPlayer(0)
    }
    console.log(currentPlayer)
  }, [currentPlayer])

  return (
    <div className="App">
      <div className='container'>
        <div className='top-row row'>
          <div id='0' className={`top-left square`} onClick={(e) => handleBoxClick(currentPlayer, e.currentTarget.id)}>{board[0]}</div>
          <div id='1' className='top-middle square' onClick={(e) => handleBoxClick(currentPlayer, e.currentTarget.id)}>{board[1]}</div>
          <div id='2' className='top-right square' onClick={(e) => handleBoxClick(currentPlayer, e.currentTarget.id)}>{board[2]}</div>
        </div>
        <div className='middle-row row'>
          <div id='3' className='middle-left square' onClick={(e) => handleBoxClick(currentPlayer, e.currentTarget.id)}>{board[3]}</div>
          <div id='4' className='middle square' onClick={(e) => handleBoxClick(currentPlayer, e.currentTarget.id)}>{board[4]}</div>
          <div id='5' className='middle-right square' onClick={(e) => handleBoxClick(currentPlayer, e.currentTarget.id)}>{board[5]}</div>
        </div>
        <div className='bottom-row row'>
          <div id='6' className='bottom-left square' onClick={(e) => handleBoxClick(currentPlayer, e.currentTarget.id)}>{board[6]}</div>
          <div id='7' className='bottom-middle square' onClick={(e) => handleBoxClick(currentPlayer, e.currentTarget.id)}>{board[7]}</div>
          <div id='8' className='bottom-right square' onClick={(e) => handleBoxClick(currentPlayer, e.currentTarget.id)}>{board[8]}</div>
        </div>
        {}
        {gameStart ? <span></span> : <button onClick={startGame}>Start Game</button>}
        {gameEnd && <div>
          <span>Game ended!</span>
          <button onClick={restartGame}>Restart</button>
          </div>}
        {currentPlayer === 1 && <span>Player X Turn</span>}
        {currentPlayer === 2 && <span>Player O Turn</span>}
        <div>
          <div>Player X Wins: {xWins}</div>
          <div>Player O Wins: {oWins}</div>
        </div>
      </div>
    </div>
  )
}

export default App