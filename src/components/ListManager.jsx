var React = require('React');

var List = require('./List.jsx');

var ListManager = React.createClass({

    getInitialState: function(){
        return {items: [], newItemText:''};
    },
    onChange: function(e){
        this.setState({newItemText:e.target.value});
    },
    handleSubmit: function(e){
        e.preventDefault();
        var currentItems = this.state.items;
        currentItems.push(this.state.newItemText);
        this.setState({item:currentItems,newItemText:''});
    },
  render: function(){       
    return (
        <div>
            <h3>{this.props.itile}</h3>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.onChange} value={this.state.newItemText} />
                <button>Add</button>
             </form>
             <List items={this.state.items} />
         </div>
    );
  }
});

module.exports = ListManager;
