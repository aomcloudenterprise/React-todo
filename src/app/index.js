const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({
  getInitialState: function() {
    return {
      items: ['React', 'more React', 'maybe React?']
    }
  }, // getInitialScale
  render: function() {
    let items = this.state.items;
    items = items.map((item, index) => {
      return(<TodoItem item={item} key={index} onDelete={this.onDelete} />)
    });
    return(
      <div>
        <h1 className="header"> React Todo App </h1>
        <AddItem onAdd={this.onAdd}/>
        <ul className="todo-list">
         {items}
        </ul>
      </div>
    )
  }, // render
  onDelete: function(item) {
    var updatedItems = this.state.items;
    updatedItems = updatedItems.filter((val, index) => {
      return item !== val;
    });
    this.setState({
      items: updatedItems
    });
  }, // onDelete
  onAdd: function(item) {
    var updatedItems = this.state.items;
    updatedItems.push(item);
    this.setState({
      items: updatedItems
    })
  } // onAdd
});

const AddItem = React.createClass({
  render: function() {
    return(
      <form className="add-item-form" onSubmit={this.handleSubmit}>
        <input className="add-item-input" type="text" placeholder="a new task to do..." ref="newItem" />
        <input className="add-item-submit" type="submit" value="add" />
      </form>
    )
  }, // render
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
  }
});

const TodoItem = React.createClass({
  render: function() {
    return(
      <li className="todo-item">
        <p>{this.props.item}</p>
        <button className="delete-btn" type="button" onClick={this.handleDelete}> x </button>
      </li>
    )
  },
  handleDelete: function() {
    this.props.onDelete(this.props.item);
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
