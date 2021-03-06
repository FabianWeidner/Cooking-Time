import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import './RecipeList.scss';

import Delete_Icon from '../assets/delete-icon.svg';
import { projectFirestore } from './../firebase/config';

function RecipeList({ recipes }) {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <p className="error">No recipes to load...</p>;
  }

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete();
  };
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className={`card ${mode}`} key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img
            className="delete"
            src={Delete_Icon}
            onClick={() => handleClick(recipe.id)}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
