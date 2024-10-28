import React from 'react'
import { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css';


function UserFavoriteRecipe() {

  const [favoriteRecipe, setFavoriteRecipe] = useState([]);
  const { curentUser } = useContext(DataContext);

  const navigate = useNavigate();

  const getUserRecipe = async () => {
    try {
      let email = curentUser.email;
      console.log(email);
      let result = await axios.get(`http://localhost:8000/api/user/all/favorite/${email}`)
      setFavoriteRecipe(result.data);
    }
    catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getUserRecipe();
  }, [])


  const handelLess = async (name) => {
    const body = {
      userId: curentUser._id,
      recipeName: name
    }
    console.log(body);
    try {
      let result = await axios.post('http://localhost:8000/api/user/delete/favorite', body)
      setFavoriteRecipe(prevFavoriteRecipe =>
        prevFavoriteRecipe.filter(recipe => recipe.recipe !== name)
      );
    }
    catch (error) {
      console.log(error);
    }
  }



  let favoriteList = favoriteRecipe.map(index => index.recipe);

  return (<div>
    <Link to={'/'}>Back</Link>
    <div>{favoriteList && favoriteList.map((name, index) => (
      <div key={index}>
        <span onClick={() => { navigate(`/recipe/${name}`) }}>{name}
        </span>
        <button className={style.lessButton}
          onClick={(e) => {
            e.stopPropagation();//מונע מהלחיצה על הכפתור להפעיל את הכפתור למעלה של ה DIV
            handelLess(name)
          }}
        >➖</button>
      </div>
    ))}
    </div>
  </div>
  )
}

export default UserFavoriteRecipe