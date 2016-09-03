import React from 'react';


var AddMessage = React.createClass({
  getInitialState: function(){
    return {
      newMessage: ''
    }
  },
  updateMessage: function(e) {
    this.setState({
      newMessage: e.target.value
    });
  },
  handleAddNew: function(){
    this.props.addNew(this.state.newMessage);
    this.setState({
      newMessage: ''
    });
  },
  render(){
    return(
      <div>
        <input type='text' value={this.state.newMessage}
         onChange={this.updateMessage} />
       <button onClick={this.handleAddNew}>+ Message</button>
      </div>
    )
  }
})


export default AddMessage;
