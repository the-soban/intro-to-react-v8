import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams(); //useParams gets this id from something called context, which is in App.jsx component
  return <h1>Pet: {id}</h1>;
};

export default Details;
