import React,{useEffect, useState} from 'react';
import style from './recipe.module.css';
import { Link } from 'react-router-dom';
import './App.css';

function CookBook() {
  const APP_ID = "9fa0ca9e";
  const APP_KEY = "5d2f99e12b6c8945cdcb577c48119b66";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() =>{
   getRecipes();
  }, [query]);
  
  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const TitleStyle ={
      color: 'black'
  };

return (
    <div>
        <form onSubmit={getSearch} className="search-form">
            <input 
                className="search-bar" 
                type="text" 
                value={search} 
                onChange={updateSearch}/>
                <button  className="search-button" type="submit">
                    Search
                </button>
        </form>
        <div className= "recipes">
            {recipes.map(recipe =>(
                <div className={style.thumbnail}>
                    <Link style={TitleStyle} to ={`/recipe/${recipe.recipe.uri.substring(recipe.recipe.uri.indexOf("_")+1)}`}>
                        <h3 key={recipe.recipe.uri}>{recipe.recipe.label}</h3>
                    </Link>
                    <img className={style.image} src={recipe.recipe.image} alt=""/>
                </div>
            ))}
        </div>
    </div>
   )
}

export default CookBook;
