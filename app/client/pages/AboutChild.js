import React from "react";

var ShowList = React.createClass({
  render: function(){
    //maps out a new array and fires the callback function for each item in the array
    var listItems = this.props.names.map(function(friend){
      return <div>{friend}</div> ;
    });

    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

export default ShowList;
