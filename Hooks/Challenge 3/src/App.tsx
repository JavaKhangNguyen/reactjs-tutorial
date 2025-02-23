// Challenge: 
import "./App.css";
import React, { useState } from "react";

const App: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [cities, setCities] = useState<string[]>([]);

  const addCities = () => {
    if (value.trim() !== "") {
      setCities([...cities, value]);
      setValue(""); // Clear the input after adding
    }
  };

  const removeCity = (city: string) => {
    setCities(cities.filter(c => c !== city));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addCities();
    }
  }

  return (
    <div className="App">
      <input 
        type="text" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
        />
        <button onClick={addCities} className="addButton">Add</button>
        <ul>
          {/* Display the list of cities */}
          {cities.map((city, index) => (
            <li key={index}>
              {city} 
              <button className="removeButton" onClick={() => removeCity(city)}>Remove</button>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default App;