import React from 'react'

export default class AddItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            infoMessage: ''
        }
    }
    render() {
        return(
            <form className="add-item-form" onSubmit={this.handleSubmit.bind(this)}>
                <input className="add-item-input" type="text" placeholder="a new task to do..." ref="newItem" />
                <input className="add-item-button" type="submit" value="add" />
                <p className="add-item-info"> {this.state.infoMessage} </p>
            </form>
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    const value = this.refs.newItem.value
    const isInList = this.props.items.filter((item) => {
        return item.name.toUpperCase() == value.toUpperCase()
    }).length
    console.log(isInList)

    if (!value) {
        this.setState({
            infoMessage: 'you want to add an empty task?'
        })
    } else if (isInList) {
        this.setState({
            infoMessage: 'this task already exists!'
        })
    } else {
        this.props.onAdd(value);
        this.refs.newItem.value = '';
        this.setState({
            infoMessage: ''
        })
    }
  }

}
