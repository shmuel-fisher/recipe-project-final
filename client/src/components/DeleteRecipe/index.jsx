// // import React, { useEffect } from 'react'
// // import { useState } from 'react'
// // import RecipeList from '../RecipeList';
// // import axios from 'axios';

// // function DeleteRecipe() {


// //   const [recipes, setRecipes] = useState([]);


// //   useEffect(() => {
// //     const importData = async () => {
// //       let isActive = false;
// //         try {
// //             let response = await axios.post(`http://localhost:8000/api/recipe/${isActive}`)
// //             setRecipes(response.data);
// //             // setCurentTag("");
// //             // getTags(response.data);
// //         }
// //         catch (error) {
// //             console.log(error.message);
// //         }

// //     }
// //     importData();
// //   }, [])





// //   return (
// //     <div>
// //       {recipes && "hello world"}
// //       {recipes && recipes.map(item => <RecipeList
// //         key={item._id} item={item} />)
// //       }

// //     </div>
// //   )
// // }

// // export default DeleteRecipe



// // import React, { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import RecipeList from '../RecipeList';

// // function DeleteRecipe() {

// // const navigate = useNavigate();

// //   const [recipes, setRecipes] = useState([]);

// //   useEffect(() => {
// //     const fetchRecipes = async () => {
// //       let isActive = false;
// //       try {
// //         let response = await axios.post(`http://localhost:8000/api/recipe/${isActive}`);
// //         setRecipes(response.data);
// //       } catch (error) {
// //         console.log(error.message);
// //       }
// //     };
// //     fetchRecipes();
// //   }, []);



// //   return (
// //     <div>
// //       <h1>{recipes && "Recipes Needing Approval"}</h1>
// //       {recipes.map((item) => (
// //         <div key={item._id}>
// //       {console.log(item)}
// //           <RecipeList item={item} />
// //           <button onClick={() => navigate(`/edit-recipe/${item._id}`)}>Edit and Approve</button>
      
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default DeleteRecipe;



// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import RecipeList from '../RecipeList';

// function DeleteRecipe() {

// const navigate = useNavigate();

//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       let isActive = false;
//       try {
//         let response = await axios.post(`http://localhost:8000/api/recipe/status/${isActive}`);
//         setRecipes(response.data);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     fetchRecipes();
//   }, []);



//   return (
//     <div>
//       <h1>{recipes && "Recipes Needing Approval"}</h1>
//       {recipes.map((item) => (
//         <div key={item._id}>
//       {console.log(item)}
//           <RecipeList item={item} />
//           <Link to={`/edit-recipe/${item._id}`}>
//             <button>Edit and Approve</button>
//           </Link>

//         </div>
//       ))}
//     </div>
//   );
// }

// export default DeleteRecipe;



// Import the necessary dependencies and styles
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import RecipeList from '../RecipeList'; 
import style from './style.module.css';  // Import the CSS module

function DeleteRecipe() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      let isActive = false;
      try {
        let response = await axios.post(`http://localhost:8000/api/recipe/status/${isActive}`);
        setRecipes(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className={style.content}>
      <Link to={'/'}>Back</Link>
      <h1>מתכונים לאישור:</h1>
      <div className={style.item}>
        {recipes.map((item) => (
          <div key={item._id} className={style.recipeItem}>
            <RecipeList item={item} />
            <button onClick={() => navigate(`/edit-recipe/${item._id}`)}>עריכה ואישור</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeleteRecipe;
