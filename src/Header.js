import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <header className="header">
       
        <nav className="nav-menu">
          <a href="#india">India</a>
          <a href="#world">World</a>
          <a href="#movies">Movies</a>
          <a href="#technology">Technology</a>
          <a href="#epaper">e-Paper</a>
        </nav>
        <div className="actions">
          <button className="btn">FREE TRIAL</button>
          <button className="btn subscribe">SUBSCRIBE</button>
          <button className="btn login">LOGIN</button>
        </div>
      </header>
    );
  }
}

export default Header;