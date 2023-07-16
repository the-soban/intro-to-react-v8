import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";

const Details = () => {
  const { id } = useParams(); //useParams gets this id from something called context, which is in App.jsx component
  const results = useQuery(["details", id], fetchPet); //["details", id] will be passed as the queryKey to fetchPet

  if (results.isError) {
    return (
      <div>
        <h2>Oh No! Something went wrong!</h2>
        <h3>{Error}</h3>
      </div>
    );
  }

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h4 className="loader">+</h4>
      </div>
    );
  }

  const pet = results.data.pets[0];
  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        <p>{pet.description}</p>
        <button>Adopt {pet.name}</button>
      </div>
    </div>
  );
};

export default Details;
