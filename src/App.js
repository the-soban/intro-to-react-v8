const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h3", {}, props.breed),
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {
                name: "Vanessa",
                animal: "Cat",
                breed: "Persian",
            }),
            React.createElement(Pet, {
                name: "Akela",
                animal: "Dog",
                breed: "Husky",
            }),
            React.createElement(Pet, {
                name: "Luna",
                animal: "Cat",
                breed: "Himalayan",
            }),
        ]
    )
    };

    const container = document.getElementById("root");
    const root = ReactDOM.createRoot(container);
    root.render(React.createElement(App));