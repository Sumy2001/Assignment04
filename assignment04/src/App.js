import React, { useState } from "react";
import "./App.css";
import { animals } from "./AnimalsDb";

const App = () => {
  const [targetAnimal, setTargetAnimal] = useState("");
  const [result, setResult] = useState("");
  const [shuffledAnimals, setShuffledAnimals] = useState([]);

  // Shuffle animals and select a random target animal
  useEffect(() => {
    const shuffled = [...animals].sort(() => Math.random() - 0.5);
    setShuffledAnimals(shuffled);
    const randomAnimal =
      shuffled[Math.floor(Math.random() * shuffled.length)];
    setTargetAnimal(randomAnimal.name);
  }, []);

  // Handle image click
  const handleImageClick = (name) => {
    if (name === targetAnimal) {
      setResult("Win!");
    } else {
      setResult("Lose!");
    }
  };

  return (
    <div className="app">
      <h1>Animal Matching Game</h1>
      <div className="game-area">
        <div className="animal-name">
          <h2>Find: {targetAnimal}</h2>
        </div>
        <div className="animal-images">
          {shuffledAnimals.map((animal) => (
            <img
              key={animal.name}
              src={`./img/${animal.img}`} // Ensure the images are served correctly
              alt={animal.name}
              onClick={() => handleImageClick(animal.name)}
              className="animal-image"
            />
          ))}
        </div>
      </div>
      {result && <div className="result">{result}</div>}
    </div>
  );
};

export default App;