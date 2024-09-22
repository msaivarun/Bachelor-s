import React, { useState } from 'react';
// import './style.css';
import "../styles/Recipes.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isRecipeVisible, setIsRecipeVisible] = useState(false);

  // Handle input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setMeals(data.meals);
        } else {
          setMeals([]);
        }
      });
  };

  // Handle recipe button click
  const handleRecipeClick = (mealId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedMeal(data.meals[0]);
        setIsRecipeVisible(true);
      });
  };

  // Handle close button click
  const handleCloseRecipe = () => {
    setIsRecipeVisible(false);
    setSelectedMeal(null);
  };

  return (
    <div className="container">
      <div className="meal-wrapper">
        <div className="meal-search">
          <h2 className="title">Find Meals For Your Ingredients</h2>
          <blockquote>
            Real food doesn't have ingredients, real food is ingredients.
            <br />
          </blockquote>

          <div className="meal-search-box">
            <input
              type="text"
              className="search-control"
              placeholder="Enter an ingredient"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="search-btn btn" onClick={handleSearchClick}>
            <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>

        <div className="meal-result">
          <h2 className="title">Your Search Results:</h2>
          <div id="meal">
          {searchTerm && meals.length === 0 ? (
            <p>Sorry, we didn't find any meal!</p>
          ) : (
            meals.length > 0 &&
            meals.map((meal) => (
              <div className="meal-item" key={meal.idMeal} data-id={meal.idMeal}>
                <div className="meal-img">
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                </div>
                <div className="meal-name">
                  <h3>{meal.strMeal}</h3>
                  <button
                    className="recipe-btn"
                    onClick={() => handleRecipeClick(meal.idMeal)}
                  >
                    Get Recipe
                  </button>
                </div>
              </div>
            ))
          )}

          </div>
        </div>

        {isRecipeVisible && selectedMeal && (
          <div className={`meal-details ${isRecipeVisible ? 'showRecipe' : ''}`}>
            <button
              type="button"
              className="btn recipe-close-btn"
              onClick={handleCloseRecipe}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <div className="meal-details-content">
              <h2 className="recipe-title">{selectedMeal.strMeal}</h2>
              <p className="recipe-category">{selectedMeal.strCategory}</p>
              <div className="recipe-instruct">
                <h3>Instructions:</h3>
                <p>{selectedMeal.strInstructions}</p>
              </div>
              <div className="recipe-meal-img">
                <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
              </div>
              <div className="recipe-link">
                <a href={selectedMeal.strYoutube} target="_blank" rel="noopener noreferrer">
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
