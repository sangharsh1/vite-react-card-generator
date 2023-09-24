import { useState } from "react";
import React from "react";
import "./App.css";
import cards from "./cards";
import Card from "./Card";

function App() {
  const [cards, setCards] = useState([
    { id: 1, title: "Card 1", content: "Content 1" },
  ]);

  const cardGenerator = () => {
    const newObject = {
      title: `Card: ${cards.length + 1}`,
      content: `Content: ${cards.length + 1}`,
    };
    setCards([...cards, newObject]);
  };

  let name = "Sangharsh Saini";
  let currentDate = new Date();
  let year = currentDate.getFullYear();

  return (
    <>
      <h1>Hello this is my Vite + React App.</h1>
      <p>The Application name is Card Generator</p>
      <br></br>
      <div>
        <button onClick={cardGenerator}>Generate Card</button>
        <div className="card-container">
          {cards.map((card) => {
            return (
              <Card key={card.id} title={card.title} content={card.content} />
            );
          })}
        </div>
      </div>

      <p>Created by {name}</p>
      <p>Copyright {year}</p>
    </>
  );
}

export default App;
