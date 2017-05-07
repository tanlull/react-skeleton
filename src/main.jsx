var React = require('React');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');
ReactDOM.render(<ListManager title="Ingredients"/>, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="To Do"/>, document.getElementById('todo'));
ReactDOM.render(<ListManager title="Christmas"/>, document.getElementById('christmas'));
