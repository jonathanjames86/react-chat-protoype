import React from 'react';


var AddFriend = React.createClass({
  getInitialState: function(){
    return {
      newFriend: ''
    }
  },
  updateNewFriend: function(e) {
    this.setState({
      newFriend: e.target.value
    });
  },
  handleAddNew: function(){
    this.props.addNew(this.state.newFriend);
    this.setState({
      newFriend: ''
    });
  },
  render(){
    return(
      <div>
        <input type='text' value={this.state.newFriend}
         onChange={this.updateNewFriend} />
         <button onClick={this.handleAddNew}>Add Friend</button>
      </div>
    )
  }
})


export default AddFriend;
