import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";
import Results from "./Results";
import useBreedList from "./useBreedList";

const ANIMALS = ["cat", "bird", "dog", "rabbit", "reptile"];

const SearchParas = () => {
  const [requestParas, setRequestParas] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

  const results = useQuery(["search", requestParas], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-paras">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParas(obj);
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            name="location"
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
            name="breed"
          >
            <option></option>
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParas;
