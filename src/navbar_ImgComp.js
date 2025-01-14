import React from 'react';
import logo from './images/logo2.jpeg';

class NavBar extends React.Component {
  render() {
    return (
      <div className="bg-image-container">
          <ul className="nav-bar">
            <li>
              <img src={logo} alt="Website Logo" className="logo" />
            </li>
            <li>
              <div className="search-bar">
                <input type="search" name="Search" placeholder="  Search..." />
              </div>
            </li>
            <li className='signUp'>Sign up</li>
            <li className='logIn'>Log in</li>
          </ul>
          <h1>Explore Recipes</h1>
          <p>Get a fresh and tasty recepies that are well balanced and will improve your wellness, plus add nutrients to your body.</p>
        </div>
    );
  }
}
export default NavBar;

