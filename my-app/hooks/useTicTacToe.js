import { useState } from 'react';

const boardVacio = Array.from({ length: 9 }).fill('_').join('');

//Generar los posibles triunfos
function wins(player, board) {
  const winningLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6],          
  ];
  for (const line of winningLines) {
    const [a, b, c] = line;
    if (board[a] === player && board[b] === player && board[c] === player) { //Verificamos que sea la misma marca en los 3 lugares
      return true;
    }
  }
  return false;
}


//Generar los cuadrados vacíos
function getEmptySquares(board) {
  return board.split('').map((s, i) => s === '_' ? i : null).filter(i => i !== null);
}


export function useTicTacToe(boardInicial) {
  const [board, setBoard] = useState(boardInicial ?? boardVacio);
  const emptySquaresIndices = getEmptySquares(board);
  const victoryX = wins('X', board);
  const victoryO = wins('O', board);
  const isFinished = victoryX || victoryO || emptySquaresIndices.length == 0;
  const activePlayer = isFinished ? null : emptySquaresIndices.length % 2 === 1 ? 'X' : 'O';
  
  const result = !isFinished ? null : {
    X: victoryX - victoryO,
    O: victoryO - victoryX,
  };

  return {
    activePlayer, 
    board, 
    isFinished,
    
    move(player, index) {
      if (player !== activePlayer || board[index] !== '_') {
        throw new Error(`El movimiento no es válido en la posición ${index}`);
      }

      const nuevoTablero = board.split('').map((c, i) => (i === index ? player : c)).join('');
      setBoard(nuevoTablero);
    },
    
    moves: [...emptySquaresIndices],
    
    restart(board) {
      setBoard( boardVacio);
    },
    
    result, 
    loser: victoryX ? 'O' : victoryO ? 'X' : null, 
    winner: victoryX ? 'X' : victoryO ? 'O' : null 
  };
} 
