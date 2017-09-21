var React = require("react");
var ReactDOM = require("react-dom");

var MyTitle = function(props) {
    var style = { color: props.color }; 
    return (
        <div>
            <h1 style={ style }>
                {props.title}
            </h1>
        </div>
    );
}
var MyFirstComponent = function() {
    return (
        <div>
            <MyTitle title="Buffalo pills" color="yellowgreen" />
            <MyTitle title="4niners" color="greenyellow" />
            <MyTitle title="Chiefs" color="peru" />
            <MyTitle title="Chargers" color="limegreen" />
        </div>
    )
};

ReactDOM.render(
    React.createElement(MyFirstComponent),
    document.getElementById("app")
);