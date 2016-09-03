import React from "react";
import { Link } from "react-router";

import ShowList from './AboutChild';
import AddFriend from './AddFriend';

var About = React.createClass({
  getInitialState: function(){
    return {
      username: 'JamesPutnam',
      friends: ['mike', 'brandon', 'issac', 'liam']
    }
  },
  addFriend: function(friend){
    this.setState({
      friends: this.state.friends.concat([friend])
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
        <AddFriend addNew={this.addFriend} />
        <ShowList names={this.state.friends} />

      </div>
    )
  }
});

export default About;
