import React from 'react';
// import logo from './images/logo2.jpeg';
// import searchIcon from '../public/images/search.png';

class NavBar extends React.Component {
  render() {
    return (
      <div className="bg-image-container">
          <ul className="nav-bar">
            <li>
              <div className='logoContainer'>
                <img className="logo" src='/images/logo2.jpeg' alt="Website Logo" />
              </div>  
            </li>
            <li>
              <div className="search-bar">
                <img className='searchIcon' src='/images/search.png' alt= "search icon "/>
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

