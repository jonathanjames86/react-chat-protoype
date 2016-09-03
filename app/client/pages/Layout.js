import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
  render(){
    const { location } = this.props;


    //Links to routed paths
    return(
      <div>

          <Link to='home'>Home</Link><br/>
          <Link to='about'>Chat</Link><br/>
          <Link to='settings'>Settings are the best</Link>

            {this.props.children}

      </div>
    );
  }
}
