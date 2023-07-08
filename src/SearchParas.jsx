import { useState } from "react";
const ANIMALS = ["Cat", "Bird", "Dog", "Rabbit", "Reptile"];

const SearchParas = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];

  return (
    <div className="search-paras">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            value={location}
            placeholder="Enter Location"
          ></input>
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option></option>
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            disabled={breeds.length === 0} //disable breed if no options are available yet
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option></option>
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParas;
