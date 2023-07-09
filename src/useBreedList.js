import { useState, useEffect } from "react";

const localCache = {};

export default function (animal) {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("not loaded");

    useEffect(() => {
        if (!animal) {
            setBreedList([]);
        } else if (localCache[animal]) {
            setBreedList(localCache[animal]);
        } else {
            requestBreeds();
        }

        async function requestBreeds() {
            setBreedList([]);
            setStatus("loading");

            const response = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
            const json = await response.json();

            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal]);
            setStatus("loaded");
        }
    }, [animal])

    return [breedList, status];
}