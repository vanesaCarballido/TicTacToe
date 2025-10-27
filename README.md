# 🎮 Tic Tac Toe (Tateti) en React Native con Expo
En este ejercicio desarrollarás una aplicación simple y divertida de Tic Tac Toe (también conocido como Tateti) utilizando React Native con Expo. El objetivo es aplicar los conceptos fundamentales de React Native para crear una experiencia interactiva sin necesidad de conectarse a ningún backend ni almacenar los datos de forma persistente.

## 📱 Características de la Aplicación
Interfaz intuitiva y responsive
La aplicación mostrará un tablero de 3x3 en el que dos jugadores podrán turnarse para colocar sus marcas (❌ y ⭕).

Lógica de juego incorporada

Se alternarán los turnos entre los jugadores automáticamente.

Se detectará si hay un ganador o si el juego termina en empate.

Al finalizar el juego, se mostrará un mensaje indicando el resultado.

## Reiniciar el juego
Luego de finalizar una partida, se podrá reiniciar el tablero con un solo botón para jugar otra vez.

## 🔧 Tecnologías utilizadas
React Native con Expo

Componentes como View, Text, TouchableOpacity

Estados con useState para manejar el tablero y el turno actual

## 🎯 Objetivos de Aprendizaje
Familiarizarse con la estructura y sintaxis de React Native.

Aplicar el uso de hooks (useState) para manejar el estado de la aplicación.

Desarrollar lógica condicional simple y visualización dinámica en función del estado.

Construir una aplicación funcional sin necesidad de backend o persistencia de datos.

## ❤️ Ejecución:

En consola: 

cd my-app

npx expo start --tunnel o  npx expo start -c  

## ¿Qué hice?
Modifiqué el script _layout.tsx para hacer la parte "visual" del juego, en esa parte realizo la lógica de los llamados a las funciones, funciones y hooks los cuales se encuentran en la carpeta hooks en un script llamado "useTicTacToe", unifiqué mi script principal con el proporcionado en las partes que me parecía que lo proporcionado funcionaba mejor y era más sencillo. Como resultado obtuve una aplicación tanto web como mobile del tateti la cual indica ganador, perdedor y en caso de empate, empate.


