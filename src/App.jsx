import { useState } from "react";
import React from "react";
import "./App.css";
import cards from "./cards";
import Card from "./Card";
import Form from "./Form";

function App() {
  const [cards, setCards] = useState([]);

  const cardGenerator = (name, age) => {
    const newObject = {
      title: `Name: ${name}`,
      content: `Age: ${age}`,
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
      <Form cardGenerator={cardGenerator} />
      <div>
        {/* <button onClick={cardGenerator}>Generate Card</button> */}
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
