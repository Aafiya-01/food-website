import React, { useState, useEffect } from 'react';

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
        save: '/images/bookmark.png',
        saved: false
      },
      {
        name: 'Rasmalai',
        type:'Dessert',
        country_origin:'India',
        category_food:'Indian',
        food_img:'/images/Indian Dessert Rasmalai.jpeg',
        like: '/images/like.png',
        comment: '/images/comment.png',
        save: '/images/bookmark.png',
        saved: false
      },
      {
        name: 'Margherita',
        type:'Main Course',
        country_origin:'Italy',
        category_food:'Italian',
        food_img:'/images/Italian MainCourse Margaritta.jpeg',
        like: '/images/like.png',
        comment: '/images/comment.png',
        saved: false,
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
        saved: false,
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
        saved: false,
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
        saved: false,
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

    useEffect(() => {
      const savedRecipes = JSON.parse(localStorage.getItem('bookmarkedRecipes'));
      if (savedRecipes) {
          setRecipeCard((prev) =>
              prev.map((recipe) => ({
                  ...recipe,
                  saved: savedRecipes.some((saved) => saved.name === recipe.name),
              }))
            );
        }
      }, []);

      const saveBookmarksToLocalStorage = (recipes) => {
        const bookmarkedRecipes = recipes.filter((recipe) => recipe.saved);
        localStorage.setItem('bookmarkedRecipes', JSON.stringify(bookmarkedRecipes));
       };  

    const handleSaveClick = (index) => {
      const updatedRecipes = [...recipeCard];
      updatedRecipes[index].saved = !updatedRecipes[index].saved; 
      setRecipeCard(updatedRecipes);
      setFilteredRecipes(updatedRecipes); 
      saveBookmarksToLocalStorage(updatedRecipes);
    };

    const handleFilterChange = (e) => {
      const selectedCountry = e.target.value;
      if (selectedCountry === 'All') {
        setFilteredRecipes(recipeCard);
      } else {
        const filtered = recipeCard.filter((recipe) => recipe.country_origin === selectedCountry);
        setFilteredRecipes(filtered);
      }
    };

    const handleViewBookmarks = () => {
      const bookmarkedRecipes = recipeCard.filter((recipe) => recipe.saved);
      setFilteredRecipes(bookmarkedRecipes);
    };

    const handleClearBookmarks = () => {
      const updatedRecipes = recipeCard.map((recipe) => ({ ...recipe, saved: false }));
      setRecipeCard(updatedRecipes);
      setFilteredRecipes(updatedRecipes);
      localStorage.removeItem('bookmarkedRecipes');
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
                              <button>
                                <img id="like" src={item.like} alt="like icon" />
                              </button>
                              <button>
                                <img id="comment" src={item.comment} alt="comment icon" />
                              </button>
                              <button onClick = {() => handleSaveClick(indx)}>
                                  <img 
                                    id="save" 
                                    src={item.saved ? '/images/bookmark-black.png' : '/images/bookmark.png' } 
                                    alt="save icon" />
                              </button>
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