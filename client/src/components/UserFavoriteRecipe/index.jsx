// import React from 'react'
// import { useEffect, useContext, useState } from 'react'
// import axios from 'axios'
// import DataContext from '../context/DataContext';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import style from './style.module.css';
// import RecipeList from '../RecipeList';

// function UserFavoriteRecipe() {

//   const [favoriteRecipe, setFavoriteRecipe] = useState([]);
//   const { curentUser } = useContext(DataContext);

//   const navigate = useNavigate();

//   // const getUserRecipe = async () => {
//   //   try {
//   //     let email = curentUser.email;
//   //     console.log(email);
//   //     let result = await axios.get(`http://localhost:8000/api/user/all/favorite/${email}`)
//   //     setFavoriteRecipe(result.data);
//   //   }
//   //   catch (error) {
//   //     console.log(error);
//   //   }
//   // }


//   const getUserRecipe = async () => {
//     try {
//       let email = curentUser.email;
//       console.log(email);

//       // קריאה ראשונה - קבלת רשימת השמות של המתכונים המועדפים
//       let result = await axios.get(`http://localhost:8000/api/user/all/favorite/${email}`);
//       console.log(result.data,"names of favorite recipes user");
//       const recipeNames = result.data.map(item => item.recipe);

//       // קריאה שנייה - קבלת פרטי המתכון המלאים עבור כל שם מתכון
//       const recipes = await Promise.all(
//         recipeNames.map(async (name) => {
//           const recipeResult = await axios.post('http://localhost:8000/api/recipe/by/name', { name });
//           return recipeResult.data;
//         })
//       );

//       setFavoriteRecipe(recipes); // עדכון המערך עם כל האובייקטים המלאים של המתכונים
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   useEffect(() => {
//     getUserRecipe();
//   }, [])


//   const handelLess = async (name) => {
//     const body = {
//       userId: curentUser._id,
//       recipeName: name
//     }
//     console.log(body);
//     try {
//       let result = await axios.post('http://localhost:8000/api/user/delete/favorite', body)
//       setFavoriteRecipe(prevFavoriteRecipe =>
//         prevFavoriteRecipe.filter(recipe => recipe.recipe !== name)
//       );
//     }
//     catch (error) {
//       console.log(error);
//     }
//   }

//   // console.log(favoriteList);



//   let favoriteList = favoriteRecipe.map(index => index.recipe);

//   return (<div>
//     <Link to={'/'}>Back</Link>
//     <div>{favoriteList && favoriteList.map((item, index) => (
//       <div key={index}>
//         <span onClick={() => { navigate(`/recipe/${item.name}`) }}>{item.name}
//         </span>
//         <RecipeList item={item} />
//         <button className={style.lessButton}
//           onClick={(e) => {
//             e.stopPropagation();//מונע מהלחיצה על הכפתור להפעיל את הכפתור למעלה של ה DIV
//             handelLess(item.name)
//           }}
//         >➖</button>
//       </div>
//     ))}
//     </div>
//   </div>
//   )
// }

// export default UserFavoriteRecipe


import React from 'react'
import { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';
import style from './style.module.css';
import RecipeList from '../RecipeList';

function UserFavoriteRecipe() {
  const [favoriteRecipe, setFavoriteRecipe] = useState([]);
  const { curentUser } = useContext(DataContext);


  const getUserRecipe = async () => {
    try {
      let email = curentUser.email;

      // קריאה ראשונה - קבלת רשימת השמות של המתכונים המועדפים
      let result = await axios.get(`http://localhost:8000/api/user/all/favorite/${email}`);
      const recipeNames = result.data.map(item => item.recipe);

      // קריאה שנייה - קבלת פרטי המתכון המלאים עבור כל שם מתכון
      const recipes = [];
      for (let name of recipeNames) {
        try {
          const recipeResult = await axios.post('http://localhost:8000/api/recipe/by/name', { name });
          recipes.push(recipeResult.data); // הוספת האובייקט המתקבל למערך
        } catch (error) {
          console.log(`Error fetching recipe for ${name}:`, error);
        }
      }

      setFavoriteRecipe(recipes); // עדכון המצב עם כל האובייקטים המלאים של המתכונים
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserRecipe();
  }, [])

  const handelLess = async (recipe) => {
    const body = {
      userId: curentUser._id,
      recipeName: recipe.name
    }
    console.log(body);
    try {
      let result = await axios.post('http://localhost:8000/api/user/delete/favorite', body)
      setFavoriteRecipe((prevFavoriteRecipe) => 
        prevFavoriteRecipe.filter((favRecipe) => favRecipe.name !== recipe.name)
      );
    }
    catch (error) {
      console.log(error);
    }
  }

  return (<>
    <Link to={'/'} className={style.backLink}>חזרה</Link>
    <h3>המתכונים שאהבתי</h3>
    <div className={style.content}>
   
      <div className={style.item}>
        {favoriteRecipe && favoriteRecipe.map((item, index) => (
          <div key={index} className={style.card}>
            <RecipeList item={item} />
            <button
              className={style.lessButton}
              onClick={(e) => {
                e.stopPropagation();
                handelLess(item);
              }}
            >
              ➖
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default UserFavoriteRecipe;
