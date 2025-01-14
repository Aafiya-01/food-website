import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
// const dummyData = require('./dummyData')
// import paneerTikka from './images/IndianMainCoursePaneerTikkaMasala.jpeg';
// import rasmalai from './images/Indian Dessert Rasmalai.jpeg';
// import salad from './images/Italian Appetizer CapreseSalad.jpeg';
// import Margaritta from './images/Italian MainCourse Margaritta.jpeg';
// import teriyaki from './images/teriyaki.jpeg';
// import bowl from './images/Bowl.jpeg';

function Body() {
    const [recipeCard, setRecipeCard] = useState([
      {
        name: 'Paneer Tikka Masala',
        type:'Main Course',
        country_origin:'India',
        category_food:'Indian',
        food_img:'/images/IndianMainCoursePaneerTikkaMasala.jpeg',
        like: '/images/like.png',
        comment: '/images/comment.png',
        save: '/images/bookmark.png'
      },
      {
        name: 'Rasmalai',
        type:'Dessert',
        country_origin:'India',
        category_food:'Indian',
        food_img:'/images/Indian Dessert Rasmalai.jpeg',
        like: '/images/like.png',
        comment: '/images/comment.png',
        save: '/images/bookmark.png'
      },
      {
        name: 'Margherita',
        type:'Main Course',
        country_origin:'Italy',
        category_food:'Italian',
        food_img:'/images/Italian MainCourse Margaritta.jpeg',
        like: '/images/like.png',
        comment: '/images/comment.png',
        save: '/images/bookmark.png'
      },
      {
        name: 'Caprese Salad',
        type:'Appetizer',
        country_origin:'Italy',
        category_food:'Italian',
        food_img:'/images/Italian MainCourse Margaritta.jpeg',
        like: '/images/like.png',
        comment: '/images/comment.png',
        save: '/images/bookmark.png'
      },  
      {
        name: 'Caprese Salad',
        type:'Appetizer',
        country_origin:'Italy',
        category_food:'Italian',
        food_img:'/images/IndianMainCoursePaneerTikkaMasala.jpeg',
        like: '/images/like.png',
        comment: '/images/comment.png',
        save: '/images/bookmark.png'
      },
      {
        name: 'Caprese Salad',
        type:'Appetizer',
        country_origin:'Italy',
        category_food:'Italian',
        food_img:'/images/Italian Appetizer CapreseSalad.jpeg',
        like: '/images/like.png',
        comment: '/images/comment.png',
        save: '/images/bookmark.png'
      } 
    ])
    const [DayWiseCard, setDayWiseCard] = useState([
    {
      img_food:'/images/teriyaki.jpeg',
      name: "Grilled Teriyaki Chicken Salad",
      heading: 'Recipe Of the Day',
      para1: 'Reduces the risk of osteoporosis. Benefits from high content of protein and phosphor.',
      para2: 'Teriyaki chicken is a dish of chicken in a sweet and savory glaze made from soy sauce, sugar, and other ingredients. It can also include vegetables, fish, or lamb.',
      para3: 'Teriyaki chicken is a dish of chicken in a sweet and savory glaze made from soy sauce, sugar, and other ingredients. It can also include vegetables, fish, or lamb.',
    },
    {
      img_food:'/images/teriyaki.jpeg',
      name: "Grilled Teriyaki Chicken Salad",
      heading: 'Recipe Of the Day',
      para1: 'Reduces the risk of osteoporosis. Benefits from high content of protein and phosphor.',
      para2: 'Teriyaki chicken is a dish of chicken in a sweet and savory glaze made from soy sauce, sugar, and other ingredients. It can also include vegetables, fish, or lamb.',
      para3: 'Teriyaki chicken is a dish of chicken in a sweet and savory glaze made from soy sauce, sugar, and other ingredients. It can also include vegetables, fish, or lamb.',
    }
    ])

    return (
            <div className='divBody'>
              <div class="animetext">
              <h1>Recipe Time, let's Cook!</h1>
              </div>
                <div className='menuBar'>
                  <ul>
                    <li>All</li>
                    <li>Main Course</li>
                    <li>Appetizer</li>
                    <li>Dessert</li>
                  </ul>
                  <div class="dropdown">
                      <button class="dropbtn">Choose Country ▼ </button>
                      <div class="dropdown-content">
                        <a href="#">Indian</a>
                        <a href="#">Italian</a>
                        <a href="#">Swiss</a>
                      </div>
                  </div>
                  <div>
                      <button class='ClearBookmark'>Clear Bookmarks</button>
                  </div>
              </div>
              <div className='Count'>
                    <p>You have 'n' {} recipes to explore</p>
              </div> 
            <div class="lowerBody">
                {/* left side */}
              <div class="Recipecontainer">
                  {recipeCard.map((item,indx) => (
                      <div class="Recipe1">
                        <img src={item?.food_img} alt="paneer tikka" />
                          <div class="RecipeDetails">
                            <h4><b>{item?.name}</b></h4> 
                            <p>Type: {item?.type}</p> 
                            <p>Country of Origin: {item?.country_origin}</p> 
                            <p>Category of Food: {item?.category_food}</p> 
                            {/* <p><strong>Type:</strong> {item?.type}</p> 
                            <p><strong>Country of Origin:</strong> {item?.country_origin}</p> 
                            <p><strong>Category of Food:</strong> {item?.category_food}</p>  */}
                          </div>
                          <div className='CardFooter'>
                              <img className='like' src={item.like} alt="like" />
                              <img className='comment' src={item.comment} alt="comment" />
                              <img className='save' src={item.save} alt="save" />
                          </div>
                      </div>))}
              </div>
               {/* right side */}
                <div class="DayWiseContainer">
                  {DayWiseCard.map((item, indx) =>(
                      <div class="Recipe2">
                          <img src={item?.img_food} alt="teriyaki" />
                          <div class="Recipe2Details">
                          <h4><b>{item.heading}</b></h4>
                          <p><strong>{item.name}</strong></p>
                          <p>{item.para1}</p>
                          <p>{item.para2}</p> 
                          <p>{item.para3}</p> 
                        </div>
                      </div>))}
                </div>
              </div>
                {/* {console.log("dummyData", dummyData.key)} */}
          </div>
      );
  }

export default Body;