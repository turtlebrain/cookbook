import React,{useEffect, useState} from 'react';
import style from './recipe.module.css';
import './App.css';

function Recipe({match}) {
  
    useEffect(() =>{
    getRecipe();
    console.log(match)
  }, []);
  
  const APP_ID = "9fa0ca9e";
  const APP_KEY = "5d2f99e12b6c8945cdcb577c48119b66";

  const [Myrecipe, setMyRecipe] = useState({});
  
  const getRecipe = async() => {
    const response = await fetch(`https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${match.params.id}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const Myrecipe = await response.json();
    setMyRecipe(Myrecipe);
    console.log(Myrecipe);
  };
 //termary operator is used each time to ensure that fetch has happened before trying to read the data
return (
    <div className="recipes">
        <div className={style.recipe}>
            <h1 >{ Myrecipe.length > 0? Myrecipe[0].label:''}</h1>
            <h2>Cuisine: { Myrecipe.length > 0? Myrecipe[0].cuisineType:''}</h2>
            <ol>
                {Myrecipe.length > 0? Myrecipe[0].ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                )): ''}
            </ol>
            <h3>Calories: { Myrecipe.length > 0? Myrecipe[0].calories:''}</h3>
            <img className={style.image} src={Myrecipe.length > 0? Myrecipe[0].image: ''} alt=""/>
        </div>
    </div>
   )
}

export default Recipe;
