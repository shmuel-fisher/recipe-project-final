// // import React, { useEffect, useState, useContext } from 'react'
// // import { Link } from 'react-router-dom';
// // import Details from '../Details';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';
// // import Product from '../Product';
// // import DataContext from '../context/DataContext';
// // import style from './style.module.css';




// // function Recipe() {


// //     let { id } = useParams();// המשתנה ID מציג לפעמים את שם המתכון ולפעמים את ה ID
// //     console.log(id);

// //     const [recipe, setRecipe] = useState();

// //     // const [flag, setFlag] = useState(false);//לעשות רנדור מותנה בשביל הוספת מתכון למועדפים

// //     const { curentUser, setCurentUser } = useContext(DataContext);

// //     //יש כניסה לדף הפרטי של המתכון משני מקומות פעם אחת הוא מקבל את המזהה ופעם אחת את השם של המתכון ולכן יש שני קריאות


// //     useEffect(() => {
// //         const getData = async () => {
// //             try {
// //                 let response = await axios.get(`http://localhost:8000/api/recipe/${id}`)
// //                 console.log("getdata  ", response.data);
// //                 setRecipe(response.data)
// //             }
// //             catch (error) {
// //                 console.log(error);
// //             }
// //         }
// //         const getDataByName = async () => {
// //             try {
// //                 console.log(id);
// //                 await axios.post(`http://localhost:8000/api/recipe/find/by`, { field: "name", filter: id })
// //                     .then(res => {
// //                         setRecipe(res.data);
// //                     })
// //             }
// //             catch (error) {
// //                 console.log(error);
// //             }
// //         }

// //         // const getDataByName = async () => {
// //         //     try {
// //         //         console.log(id);
// //         //         await axios.post(`http://localhost:8000/api/recipe/by/name`, {  name: id })
// //         //             .then(res => {
// //         //                 setRecipe(res.data);
// //         //             }
// //         //             )
// //         //     }

// //         //     catch (error) {
// //         //         console.log(error);
// //         //     }
// //         // }

// //         // console.log(recipe);
// //         //פונקציה שבודקת האם מספר אם כן מחזירה שקר
// //         //(קולטת מספר גם אם הוא נמצא בתוך מחרוזת{אם הוא בודד בתוך המחרוזת})

// //         if (!isNaN(id.charAt(0))) {
// //             getData();
// //             console.log("i am form recipe list with params");
// //         }
// //         else {
// //             console.log(id, "from name");

// //             getDataByName();
// //             console.log("i am form my recipe with name");
// //         }

// //     }, [])



// //     //  מעדכן את הצפיות במתכון
// //     useEffect(() => {

// //         const updateViews = async () => {
// //            console.log(recipe, "1234");
// //             let recipeId = recipe._id;
// //             try {
// //                 let response = await axios.put(`http://localhost:8000/api/recipe/views/update`, { id: recipeId });
// //                 console.log(response, "the proces work");
// //             }
// //             catch (error) {
// //                 console.log(error);
// //             }
// //         }
// //        recipe && updateViews();
// //     }, [recipe])


// //     async function hendalLikes() {
// //         if (curentUser._id) {
// //             try {
// //                 const data = await axios.post(`http://localhost:8000/api/user/add/favoriteRecipe`,
// //                     { email: curentUser.email, recipe: recipe.name });
// //                 console.log(data);
// //             }
// //             catch (error) {
// //                 console.log(error.message);
// //             }
// //         }
// //         else
// //             alert("אתה צריך להירשם")
// //     }


// //     return (
// //         <div>
// //             <Link to={'/'}>Back</Link>
// //             <br />

// //             <div style={{ display: 'inline-block' }} onClick={hendalLikes}> <h2 >  👍    </h2>
// //             </div>



// //             <br />


// //             <h1> {recipe && recipe.name} </h1>


// //             <img src={recipe && recipe.image} />
// //             <div>{recipe &&
// //                 <Details details={recipe} />
// //             }</div>
// //             <h5>:מוצרים</h5>
// //             <div>{recipe && recipe.product.map(productItem => <Product
// //                 key={productItem.index} productItem={productItem} />)}
// //             </div>
// //             <br />
// //             <h5>:הוראות הכנה</h5>
// //             <div>{recipe && recipe.directions.map(productItem => <Product
// //                 key={productItem.index} productItem={productItem} />)}
// //             </div>


// //         </div>
// //     )
// // }

// // export default Recipe;


// // קוד מהבינה מלאכותית לא עובד?

// // function Recipe() {
// //     const { id } = useParams();
// //     const [recipe, setRecipe] = useState();

// //     useEffect(() => {
// //         const getData = async () => {
// //             try {
// //                 let response = await axios.get(`http://localhost:8000/api/recipe/${id}`);
// //                 setRecipe(response.data);
// //             } catch (error) {
// //                 console.log(error);
// //             }
// //         };

// //         const getDataByName = async () => {
// //             try {
// //                 console.log(id);
// //                 let response = await axios.post(`http://localhost:8000/api/recipe/find/by`, { field: "name", filter: id });
// //                 setRecipe(response.data);
// //             } catch (error) {
// //                 console.log(error);
// //             }
// //         };

// //         if (!isNaN(id.charAt(0))) {
// //             getData();
// //         } else {
// //             console.log(id, "from name");
// //             getDataByName();
// //         }
// //     }, [id]);

// //     // האפקט שמעדכן את הצפיות במתכון
// //     useEffect(() => {
// //         const updateViews = async () => {
// //             if (recipe && recipe._id) {
// //                 try {
// //                     let response = await axios.put(`http://localhost:8000/api/recipe/views/update`, { id: recipe._id });
// //                     console.log(response, "the process worked");
// //                 } catch (error) {
// //                     console.log(error);
// //                 }
// //             }
// //         };
// //         updateViews();
// //     }, [recipe]);

// //     // פונקציה המטפלת בלחיצה על לייק
// //     async function handleLikes() {
// //         if (curentUser._id) {
// //             try {
// //                 const data = await axios.post(`http://localhost:8000/api/user/add/favoriteRecipe`, { email: curentUser.email, recipe: recipe.name });
// //                 console.log(data);
// //             } catch (error) {
// //                 console.log(error.message);
// //             }
// //         } else {
// //             alert("אתה צריך להירשם");
// //         }
// //     }

// //     return (
// //         <div>
// //             <Link to={'/'}>Back</Link>
// //             <br />
// //             <div style={{ display: 'inline-block' }} onClick={handleLikes}>
// //                 <h2>👍</h2>
// //             </div>
// //             <br />
// //             <h1>{recipe && recipe.name}</h1>
// //             <img src={recipe && recipe.image} />
// //             <div>{recipe && <Details details={recipe} />}</div>
// //             <h5>:מוצרים</h5>
// //             <div>{recipe && recipe.product && recipe.product.map(productItem => <Product key={productItem.index} productItem={productItem} />)}</div>
// //             <br />
// //             <h5>:הוראות הכנה</h5>
// //             <div>{recipe && recipe.directions &&  recipe.directions.map(productItem => <Product key={productItem.index} productItem={productItem} />)}</div>
// //         </div>
// //     );
// // }

// // export default Recipe;




import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Details from '../Details';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Product from '../Product';
import DataContext from '../context/DataContext';
import style from './style.module.css';

function Recipe() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [recipe, setRecipe] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [tagRecipes, setTagRecipes] = useState([]);
    const { curentUser } = useContext(DataContext);


    useEffect(() => {
        const getData = async () => {
            try {
                let response = await axios.get(`http://localhost:8000/api/recipe/${id}`);
                setRecipe(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        const getDataByName = async () => {
            try {
                let response = await axios.post(`http://localhost:8000/api/recipe/by/name`, { name: id });
                setRecipe(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        if (!isNaN(id.charAt(0))) {
            getData();
        } else {
            getDataByName();
        }
    }, [id]);

    useEffect(() => {
        const updateViews = async () => {
            if (recipe) {
                try {
                    await axios.put(`http://localhost:8000/api/recipe/views/update`, { id: recipe._id });
                } catch (error) {
                    console.log(error);
                }
            }
        };
        recipe && updateViews();
    }, [recipe]);

    async function handleLikes() {
        if (curentUser?._id) {
            try {
                await axios.post(`http://localhost:8000/api/user/add/favoriteRecipe`, {
                    email: curentUser.email,
                    recipe: recipe.name,
                });
            } catch (error) {
                console.log(error.message);
            }
        } else {
            alert("אתה צריך להירשם");
        }
    }

    const handleTagClick = async (tag) => {
        console.log(tag, "tag from recipe");
        try {
            const response = await axios.post(`http://localhost:8000/api/recipe/find/by`, {
                field: "tags",
                filter: tag,
            });
            setTagRecipes(response.data);
            setModalVisible(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleRecipeClick = (selectedRecipeId) => {
        setModalVisible(false);
        navigate(`/recipe/${selectedRecipeId}`);
    };

    return (
        <div className={style.recipeContainer}>
            <Link to={'/'} className={style.backLink}> חזרה </Link>
            <button className={style.likeButton} onClick={handleLikes}>
                ❤️
            </button>
            <h1>{recipe && recipe.name}</h1>
            <div className={style.tagsContainer}>
                {recipe && recipe.tags.map((tag, index) => (
                    <span
                        className={style.tag}
                        key={index}
                        onClick={() => handleTagClick(tag)}
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <img
                className={style.recipeImage}
                src={recipe && recipe.image}
                alt={recipe && recipe.name}
            />
            <div className={style.recipeDetails}>
                {recipe && <Details details={recipe} />}
            </div>
            <h5 className={style.sectionTitle}>מוצרים:</h5>
            <ul className={style.productList}>
                {recipe && recipe.product.map((productItem, index) => (
                    <li className={style.productItem} key={index}>
                        <div>
                            <span className={style.itemNumber}>{index + 1}.</span>
                            <span className={style.itemContent}>
                                <Product productItem={productItem} />
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
            <h5 className={style.sectionTitle}>הוראות הכנה:</h5>
            <ul className={style.directionsList}>
                {recipe && recipe.directions.map((directionItem, index) => (
                    <li className={style.directionItem} key={index}>
                        <div>
                            <span className={style.itemNumber}>{index + 1}.</span>
                            <span className={style.itemContent}>
                                <Product productItem={directionItem} />
                            </span>
                        </div>
                    </li>
                ))}
            </ul>

            {modalVisible && (
                <div className={style.tagsModal}>
                    <div className={style.tagsModalContent}>
                        {/* <h2>{tag}:</h2> */}
                        <button className={style.closeButton} onClick={() => setModalVisible(false)}>סגור</button>
                        <br /><br />
                        <div className={style.modalRecipes}>
                            {tagRecipes.map((tagRecipe) => (
                                <div
                                    key={tagRecipe._id}
                                    className={style.modalRecipeItem}
                                    onClick={() => handleRecipeClick(tagRecipe._id)}
                                >
                                    <span> 
                                         <img
                                        className={style.modalRecipeImage}
                                        src={tagRecipe.image}
                                        alt={tagRecipe.name}
                                    />
                                        <p className={style.modalRecipeName}>{tagRecipe.name}</p>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Recipe;
