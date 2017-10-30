import React from 'react';
import ReactDOM from 'react-dom';

import todoItems from './TodoList';
import TodoItem from './TodoItem';
import AddItem from './AddItem';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { todoItems }
    }

    render() {
        let items = this.state.todoItems;
        items = items.map((item, index) => {
            return(<TodoItem item={item} key={index} onDelete={this.onDelete.bind(this)} onSave={this.onSave.bind(this)} toggleComplete={this.toggleComplete.bind(this)}/>)
        });
        return(
            <div>
                <h1 className="header"> React Todo App </h1>
                <AddItem onAdd={this.onAdd.bind(this)} items={this.state.todoItems} />
                <ul className="todo-list">
                    {items}
                </ul>
            </div>
        )
    }

    onDelete(item) {
        var updatedItems = this.state.todoItems;
        updatedItems = updatedItems.filter((value, index) => {
            return item !== value;
        });
        this.setState({
            todoItems: updatedItems
        });
    }

    onAdd(newTaskName) {
        var updatedItems = this.state.todoItems;
        updatedItems.push({
            name: newTaskName,
            completed: false
        });
        this.setState({
            todoItems: updatedItems
        })
    }

    onSave(oldItem, newName) {
        var thisItem = this.state.todoItems.filter((item) => item === oldItem)[0];
        thisItem.name = newName;
        this.setState({
            todoItems: this.state.todoItems
        })
    }

    toggleComplete(clickedItem) {
        var thisItem = this.state.todoItems.filter((item) => item === clickedItem)[0];
        thisItem.completed = !thisItem.completed;
        this.setState({
            todoItems: this.state.todoItems
        })
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
