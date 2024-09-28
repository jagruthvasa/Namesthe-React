/*
 * <div id = "parent">
 * <div id="child"> <h1>i am h1</h1></div>
 * </div>
 */

const parent = React.createElement(
	"div",
	{ id: "parent" },
	React.createElement(
		"div",
		{ id: "child" },
		React.createElement("h1", null, "i am h1")
	)
);

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(parent)
root.render(parent);
