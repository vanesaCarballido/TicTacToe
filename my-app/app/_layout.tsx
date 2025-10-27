import { useTicTacToe } from '../hooks/useTicTacToe';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

export default function Layout() {
  const {
    activePlayer, board, isFinished, move, moves, restart, result, winner, loser,
  } = useTicTacToe();

  const boardArray = board.split('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tic Tac Toe</Text>

      {/*Estado del juego, si gana alguien, si hay empate o si se sigue*/}
      <Text style={styles.estado}>
        {isFinished
          ? winner
            ? `El ganador es ${winner}! Suerte la próxima ${loser}`
            : 'Hay un empate'
          : `Es el turno del jugador ${activePlayer}`}
      </Text>

      {/*Creacion del tablero fisico de 3x3 */}
       <View style={styles.board}>
        {[0, 1, 2].map((fila) => (
          <View key={fila}>
            {[0, 1, 2].map((columna) => {
              const index = fila * 3 + columna; 
              const celda = boardArray[index];

              return (
                <TouchableOpacity
                  key={index}
                  style={styles.celda}
                  onPress={() => move(activePlayer, index)}
                  disabled={celda !== '_' || isFinished} //Se desabilita si la celda ya tiene marca o si ya finalizó
                >
                  <Text style={styles.celdaMarca}>
                    {/*Se fija si esta vacía entonces muestra vacia y si tiene algo muestra lo que tiene */}
                    {celda === '_' ? '' : celda}
                  </Text>
                </TouchableOpacity>
              );

            })}
          </View>
        ))}
      </View>

      <Button title="Reiniciar" onPress={() => restart()} color="#7a064fff"/>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor:"#fad8edcd"
  },

  titulo: {
    fontSize: 60,
    marginBottom: 20,
    color: "#7a064fff"
  },

  estado: {
    fontSize: 20,
    marginBottom: 10,
    color:"#7a064fff"
  },

  board: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
    marginBottom: 20
  },
  
  celda: {
    width: 100,
    height: 100,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:"#5c0b27cf"
  },

  celdaMarca: {
    fontSize: 50,
    color:"#5c0b27cf"
  },

});
