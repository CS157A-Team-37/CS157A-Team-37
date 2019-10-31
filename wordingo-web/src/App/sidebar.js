import React from 'react';
import { slide as Menu } from 'react-burger-menu';



export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
      Home
      </a>

      <a className="menu-item" href="/login">
        Login
      </a>

      <a className="menu-item" href="/categories">
        Browse Category
      </a>

      <a className="menu-item" href="/alphabetical">
        Browse Alphabetical
      </a>
    </Menu>
    
  );
};