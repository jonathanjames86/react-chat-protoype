import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
  render(){
    const { location } = this.props;


    //Links to routed paths
    return(
      <div>

          <Link to='home'>Home</Link>
          <Link to='about'>About</Link>
          <Link to='settings'>Settings</Link>

            {this.props.children}

      </div>
    );
  }
}
