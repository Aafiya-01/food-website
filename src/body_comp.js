import React, { useState } from 'react';

function Body() {
    const [recipeCard] = useState([
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
    ]);

    const [filteredRecipes, setFilteredRecipes] = useState(recipeCard);

    const handleFilterChange = (e) => {
      const selectedCountry = e.target.value;
      if (selectedCountry === 'All') {
        setFilteredRecipes(recipeCard);
      } else {
        const filtered = recipeCard.filter((recipe) => recipe.country_origin === selectedCountry);
        setFilteredRecipes(filtered);
      }
    };

    return (
            <div className='divBody'>
              <div class= 'animetxt'>
                <h1>Recipe Time, let's Cook!</h1>
                </div>
                <div className='menuBar'>
                  <ul>
                    <li>All</li>
                    <li>Main Course</li>
                    <li>Appetizer</li>
                    <li>Dessert</li>
                    <li>Side Dishes</li>
                  </ul>
                  <div className="dropdown">
                      <select className="dropbtn" onChange={handleFilterChange}>
                          <option value='All'>All Countries</option>
                          <option value="India">India</option>
                          <option value="Italy">Italy</option>
                          <option value="Switzerland">Switzerland</option>
                          <option value="Australia">Australia</option>
                       </select>
                  </div>
                  <div>
                      <button class='ViewBookmark'>View Bookmarks</button>
                  </div>
                  <div>
                      <button class='ClearBookmark'>Clear Bookmarks</button>
                  </div>
              </div>
              <div className='Count'>
                    <p>You have {filteredRecipes.length} recipes to explore</p>
              </div> 
            <div class="lowerBody">
                {/* left side */}
                <div class="Recipecontainer">
                      {filteredRecipes.length > 0 ? (
                        filteredRecipes.map((item, indx) => (
                          <div key={indx} class="Recipe1">
                            <img src={item.food_img} alt={item.name} />
                            <div class="RecipeDetails">
                              <h4>
                                <b>{item?.name}</b>
                              </h4>
                              <p>Type: {item?.type}</p>
                              <p>Country of Origin: {item?.country_origin}</p>
                              <hr className="line"></hr>
                            </div>
                            <div className="CardFooter">
                              <img className="like" src={item.like} alt="like icon" />
                              <img className="comment" src={item.comment} alt="comment icon" />
                              <img className="save" src={item.save} alt="save icon" />
                            </div>
                          </div>
                        ))
                      ) : (
                        <h2>No recipes found</h2>
                      )}
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
          </div>
      );
  }

export default Body;