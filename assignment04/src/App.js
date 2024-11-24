import React, { useState, useEffect } from "react";
import { animals } from "./AnimalsDb";
import "./App.css";

function App() {
  const [targetAnimal, setTargetAnimal] = useState("");
  const [shuffledAnimals, setShuffledAnimals] = useState([]);
  const [result, setResult] = useState("");

  // Shuffle animals and choose a target animal when the app loads
  useEffect(()=> {
    initializeGame();
  }, []);

  // Function to start or reset the game
  function initializeGame() {
    const shuffled = [...animals].sort(() => Math.random() - 0.5);
    setShuffledAnimals(shuffled);
    const randomAnimal = shuffled[Math.floor(Math.random() * shuffled.length)];
    setTargetAnimal(randomAnimal.name);
    setResult("");
  }

  // Function to handle image click
    function handleImageClick(clikedAnimalName) {
      if (clikedAnimalName === targetAnimal) {
        setResult("Win!");
      }
      else {
        setResult("Lose!");
      }
    }

  return (
    <div className="app">
      <h1>Animal Matching Game</h1>
      <h2>Find: {targetAnimal}</h2>
      <div className="animal-images">
        {shuffledAnimals.map((animal) => (
          <img
            key={animal.name}
            src={`./img/${animal.img}`}
            alt={animal.name}
            onClick={() => handleImageClick(animal.name)}
            className="animal-image"
          />
        ))}
      </div>
      {result && (
        <div>
          <h2>{result}</h2>
          <button onClick={initializeGame}> Play Again </button>
        </div>
      )}
    </div>
  );
}

export default App;