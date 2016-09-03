import React from "react";
import { Link } from "react-router";

import ShowList from './AboutChild';
import AddMessage from './AddFriend';

var About = React.createClass({
  getInitialState: function(){
    return {
      username: 'JamesPutnam',
      message: ['hey', 'Whats Up', 'just chillin', 'fake data']
    }
  },
  addMessage: function(message){
    this.setState({
      message: this.state.message.concat([message])
    });
  },
  handleChange: function(e){
    this.setState({
      username: e.target.value
    });
  },
  render: function(){
    return (
      <div>
        <h2>{this.state.username}</h2>
        <AddMessage addNew={this.addMessage} />
        <ShowList names={this.state.message} />

      </div>
    )
  }
});

export default About;
