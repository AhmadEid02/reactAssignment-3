import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [pockList, setPockList] = useState([
    { name: "Tooth Brush", isPacked: false },
    { name: "clothes", isPacked: true },
    { name: "Lap Top", isPacked: true },
    { name: "passport", isPacked: false },
    { name: "Food", isPacked: true }
  ]);

  const updateObject = (index) => {
    const updatedData = pockList.map((item, i) => {
      if (i === index) {
        return { ...item, isPacked: !item.isPacked };
      }
      return item;
    });

    setPockList(updatedData);
  };

  return (
    <>
      <h1>Home work 3</h1>
      <form>
        {pockList.map((item, index) => (
          <div className="form-check" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              checked={item.isPacked}
              onChange={() => updateObject(index)}
            />
            <label >
              <span className={`form-check-label ${item.isPacked && "text-decoration-line-through"}`}>{item.name}</span> {item.isPacked && "✔️"}
            </label>
          </div>
        ))}
      </form>
    </>
  );
}

export default App;
