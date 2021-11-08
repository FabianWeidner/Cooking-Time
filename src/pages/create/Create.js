import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { projectFirestore } from '../../firebase/config';

import './Create.scss';

function Create() {
  const [title, setTitle] = useState('');
  const [newIngredients, setNewIngredients] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [cookingTime, setCookingTime] = useState('');
  const [method, setMethod] = useState('');

  const ingredientInput = useRef();

  const history = useHistory();

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const ingredientsChangeHandler = (e) => {
    setNewIngredients(e.target.value);
  };
  const cookingTimeChangeHandler = (e) => {
    setCookingTime(e.target.value);
  };
  const methodChangeHandler = (e) => {
    setMethod(e.target.value);
  };

  const ingredientsAddHandler = (e) => {
    e.preventDefault();
    const ing = newIngredients.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }

    setNewIngredients('');
    ingredientInput.current.focus();
    <p>ingredient is already in the list</p>;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const doc = {
      title,
      ingredients,
      method,
      cookingTime: cookingTime + ' minutes',
    };

    try {
      await projectFirestore.collection('recipes').add(doc);
      history.push('/');
    } catch (err) {
      console.log(err);
    }

    setTitle('');
    setNewIngredients('');
    setCookingTime('');
    setMethod('');
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Title:</span>
          <input
            value={title}
            type="text"
            onChange={titleChangeHandler}
            required
          />
        </label>
        <label>
          <span>Ingredients:</span>
          <div className="ingredients">
            <input
              value={newIngredients}
              type="text"
              onChange={ingredientsChangeHandler}
              ref={ingredientInput}
            />
            <button className="btn" onClick={ingredientsAddHandler}>
              add
            </button>
          </div>
        </label>
        <p>
          Current ingredients:{' '}
          {ingredients.map((ingredient) => (
            <em key={ingredient}>{ingredient}, </em>
          ))}
        </p>
        <label>
          <span>CookingTime:</span>
          <input
            value={cookingTime}
            type="number"
            onChange={cookingTimeChangeHandler}
            required
          />
        </label>
        <label>
          <span>Method:</span>
          <input value={method} type="text" onChange={methodChangeHandler} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Create;
