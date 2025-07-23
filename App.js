// const heading=React.createElement("h1", {id: "heading"}, "Welcome React");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log(heading);

const parent=React.createElement("div", 
    {id: "parent"}, 
    React.createElement("div", 
        {id: "child"},
        [React.createElement("h1", {}, "I'm a heading1 tag"),React.createElement("h2", {}, "I'm a heading2 tag")]
    )
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);