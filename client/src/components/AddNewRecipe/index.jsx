// // import React, { useContext } from 'react'
// // import { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import UploadImage from './uploadPhoto/index.jsx'
// // import DataContext from '../context/DataContext.jsx';
// // import axios from 'axios';
// // import style from './style.module.css'
// // import ShowRecipeModal from '../AddNewRecipe/ShowRecipeModal';
// // import { useNavigate } from 'react-router-dom';

// // function AddNewRecipe() {

// //     const { curentUser } = useContext(DataContext);//לסדר את זה שאני יקבל את ה (ID) של המשתמש

// //     const navigate = useNavigate();

// //     //טיפול בפתיחה וסגירה של המודל
// //     const [modalOpen, setModalOpen] = useState(false);

// //     const [curentName, setCurentName] = useState('');

// //     const [curentServings, setCurentServings] = useState('');

// //     const [curentTime, setCurentTime] = useState('');

// //     const [curentLevel, setCurentLevel] = useState('')

// //     const [product, setProduct] = useState('');
// //     const [allProducts, setAllProducts] = useState([]);

// //     const [task, setTask] = useState('');
// //     const [allTasks, setAllTasks] = useState([]);

// //     const [curentType, setCurentType] = useState('');

// //     const [imageUrl, setImageUrl] = useState('');

// //     const [tag, setTag] = useState('');
// //     const [allTags, setAllTags] = useState([]);




// //     const handelName = (e) => {
// //         e.preventDefault();
// //         setCurentName(e.target.value);
// //     }

// //     const handelServings = (e) => {
// //         e.preventDefault();
// //         setCurentServings(e.target.value);
// //     }

// //     const handelTime = (e) => {
// //         e.preventDefault();
// //         setCurentTime(e.target.value);
// //     }

// //     const hendalProduct = (e) => {
// //         e.preventDefault();
// //         setAllProducts([...allProducts, product]);
// //         setProduct('');
// //     }

// //     const handelInputProduct = (e) => {
// //         setProduct(e.target.value);
// //     }


// //     const hendalTasks = (e) => {
// //         e.preventDefault();
// //         setAllTasks([...allTasks, task]);
// //         setTask('');
// //     }

// //     const handelInputTask = (e) => {
// //         setTask(e.target.value);
// //     }

// //     const handelLevel = (e) => {
// //         e.preventDefault();
// //         setCurentLevel(e.target.value);
// //     }

// //     const handelType = (e) => {
// //         setCurentType(e.target.value);
// //     }

// //     const hendalTags = (e) => {
// //         e.preventDefault();
// //         setAllTags([...allTags, tag]);
// //         setTag('');
// //     }

// //     const handelInputTag = (e) => {
// //         setTag(e.target.value);
// //     }

// //     const handelListProduct = (indexToRemove) => {
// //         const upDateProducts = allProducts.filter((product, index) => index !== indexToRemove);
// //         setAllProducts(upDateProducts)
// //     }

// //     const handelListTask = (indexToRemove) => {
// //         const upDateTask = allTasks.filter((task, index) => index !== indexToRemove);
// //         setAllTasks(upDateTask)
// //     }

// //     const handelListTag = (indexToRemove) => {
// //         const upDateTags = allTags.filter((tag, index) => index !== indexToRemove);
// //         setAllTags(upDateTags)
// //     }


// //     const handelFormSumbit = (e) => {
// //         //לעשות קריאה לשרת ולהכניס את האובייקט הזה אולי שהפונקציה הזו תקרא לעוד פונקציה ששם יהיה קריאה לשרת?
// //         e.preventDefault();
// //         const curentRecipe = {
// //             owner: curentUser._id,
// //             name: curentName,
// //             servings: curentServings,
// //             type: curentType,
// //             time: curentTime,
// //             level: curentLevel,
// //             product: allProducts,
// //             directions: allTasks,
// //             image: imageUrl,
// //             tags: allTags
// //         }
// //         console.log(curentRecipe, "curent recipe");
// //         sendRecipe(curentRecipe);
// //     }


// //     async function sendRecipe(curentRecipe) {
// //         try {
// //             const result = await axios.post(`http://localhost:8000/api/recipe/add`, { data: curentRecipe })
// //             console.log(result);
// //         }
// //         catch (error) {
// //             console.log(error);
// //         }
// //     }

// //     const sumbitForm = () => {
// //         navigate('/');
// //     }


// //     return (
// //         <div>
// //             <Link to={'/'}>חזרה</Link>
// //             <form onSubmit={(e) => handelFormSumbit(e)}>
// //                 <input type="text" name="name" placeholder='הכנס את השם של המתכון'
// //                     onChange={(e) => handelName(e)} />
// //                 <br />

// //                 <input type="number" name="servings" placeholder='תרשום את מספר המנות'
// //                     onChange={(e) => handelServings(e)} />
// //                 <br />

// //                 <input type="radio" name="type" value={"חלבי"}
// //                     onClick={handelType}
// //                 />

// //                 <label htmlFor="type"  >חלבי</label><br />
// //                 <input type="radio" name="type" value={"בשרי"}
// //                     onClick={handelType}
// //                 />
// //                 <label htmlFor="type" >בשרי </label><br />
// //                 <input type="radio" name="type" value={"פרווה"}
// //                     onClick={handelType}
// //                 />
// //                 <label htmlFor="type" >פרווה</label><br /><br /><br /><br />


// //                 <label htmlFor="time">זמן הכנה:</label><br />
// //                 <input type="time" name="time" onChange={(e) => handelTime(e)} />
// //                 <br />

// //                 <label htmlFor="level"> בחר דרגת קושי</label>
// //                 <select id="level" name="level" onChange={(e) => handelLevel(e)}>
// //                     <option >בחר רמת קושי:</option>
// //                     <option value={"קל"} >קל</option>
// //                     <option value={"בינוני"} >בינוני</option>
// //                     <option value={"קשה"} >קשה</option>
// //                     <option value={"קשה מאוד"} >קשה מאוד</option>
// //                 </select>
// //                 <br />

// //                 <label htmlFor='product'>:מוצרים</label>
// //                 <input type="text" name="product" value={product} placeholder='הכנס את המוצרים'
// //                     onChange={(e) => handelInputProduct(e)}
// //                     onKeyDown={(e) => e.key === 'Enter' && hendalProduct(e)} />
// //                 <button type='submit' className={style.customButton} onClick={(e) => hendalProduct(e)}> ➕ </button>
// //                 <br />

// //                 <ol>
// //                     {allProducts.map((item, index) => (
// //                         <li key={index}>
// //                             {item}
// //                             <button className={style.lessButton}
// //                                 onClick={(e) => {
// //                                     e.preventDefault();
// //                                     handelListProduct(index)
// //                                 }}>➖</button>
// //                         </li>
// //                     ))}
// //                 </ol>

// //                 <br />

// //                 <label htmlFor='task'>:הוראות הכנה</label>
// //                 <input type="text" name='task' value={task} placeholder='תכתוב את הוראות ההכנה'
// //                     onChange={(e) => { handelInputTask(e) }}
// //                     onKeyDown={(e) => e.key === 'Enter' && hendalTasks(e)} />
// //                 <button type='submit' className={style.customButton} onClick={(e) => hendalTasks(e)}> ➕ </button>
// //                 <br />

// //                 <ol>
// //                     {allTasks.map((item, index) => (
// //                         <li key={index}>{item}
// //                             <button className={style.lessButton}
// //                                 onClick={(e) => {
// //                                     e.preventDefault();
// //                                     handelListTask(index)
// //                                 }}>➖</button>
// //                         </li>
// //                     ))}
// //                 </ol>
// //                 <br />

// //                 <label htmlFor='tags'>:תגים</label>
// //                 <input type="text" name='tags' value={tag} placeholder='הכנס את התגים של המתכון'
// //                     onChange={(e) => { handelInputTag(e) }}
// //                     onKeyDown={(e) => e.key === 'Enter' && hendalTags(e)} />
// //                 <button type='submit' className={style.customButton} onClick={(e) => hendalTags(e)}> ➕ </button>
// //                 <br />
// //                 <br />
// //                 <ol>
// //                     {allTags.map((item, index) => (
// //                         <li key={index}>{item}
// //                             <button className={style.lessButton}
// //                                 onClick={(e) => {
// //                                     e.preventDefault();
// //                                     handelListTag(index)
// //                                 }}>➖</button>
// //                         </li>
// //                     ))}
// //                 </ol>
// //                 <br />

// //                 <button type='submit' onClick={() => sumbitForm()}>אישור</button>
// //                 {/* <button type='sumbit' >אישור</button> */}
// //             </form>


// //             <UploadImage setImageUrl={setImageUrl} />



// //             {/* <br /><br /><br /><br /><br /><br /> */}


// //             {/* <div className={style.A}>
// //       <h1>Hey, click on the button to open the modal.</h1>
// //       <button
// //         className={style.openModalBtn}
// //         onClick={() => {
// //           setModalOpen(true);
// //           console.log(modalOpen);
// //         }}
// //       >
// //         Open
// //       </button>

// //       {modalOpen && <ShowRecipeModal setModalOpen={setModalOpen} />}
// //     </div>  */}


// //         </div>

// //     )
// // }


// // export default AddNewRecipe;




// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import UploadImage from './uploadPhoto/index.jsx';
// import DataContext from '../context/DataContext.jsx';
// import axios from 'axios';
// import style from './style.module.css';

// function AddNewRecipe() {
//     const { curentUser } = useContext(DataContext);
//     const navigate = useNavigate();

//     const [curentName, setCurentName] = useState('');
//     const [curentServings, setCurentServings] = useState('');
//     const [curentTime, setCurentTime] = useState('');
//     const [curentLevel, setCurentLevel] = useState('');
//     const [product, setProduct] = useState('');
//     const [allProducts, setAllProducts] = useState([]);
//     const [task, setTask] = useState('');
//     const [allTasks, setAllTasks] = useState([]);
//     const [curentType, setCurentType] = useState('');
//     const [imageUrl, setImageUrl] = useState('');
//     const [tag, setTag] = useState('');
//     const [allTags, setAllTags] = useState([]);


//     const validateForm = () => {
//         const newErrors = {};
//         if (!curentName) newErrors.name = 'שם המתכון הוא שדה חובה';
//         if (!curentServings) newErrors.servings = 'מספר המנות הוא שדה חובה';
//         if (!curentType) newErrors.type = 'סוג המתכון הוא שדה חובה';
//         if (!curentTime) newErrors.time = 'זמן ההכנה הוא שדה חובה';
//         if (!curentLevel) newErrors.level = 'רמת הקושי היא שדה חובה';
//         if (allProducts.length === 0) newErrors.products = 'יש להוסיף לפחות מוצר אחד';
//         if (allTasks.length === 0) newErrors.tasks = 'יש להוסיף לפחות הוראת הכנה אחת';
//         if (!imageUrl) newErrors.image = 'יש להוסיף תמונה למתכון';
//         return newErrors;
//     };


//     const handelName = (e) => {
//                 e.preventDefault();
//                 setCurentName(e.target.value);
//             }
        
//             const handelServings = (e) => {
//                 e.preventDefault();
//                 setCurentServings(e.target.value);
//             }
        
//             const handelTime = (e) => {
//                 e.preventDefault();
//                 setCurentTime(e.target.value);
//             }
        
//             const hendalProduct = (e) => {
//                 e.preventDefault();
//                 setAllProducts([...allProducts, product]);
//                 setProduct('');
//             }
        
//             const handelInputProduct = (e) => {
//                 setProduct(e.target.value);
//             }
        
        
//             const hendalTasks = (e) => {
//                 e.preventDefault();
//                 setAllTasks([...allTasks, task]);
//                 setTask('');
//             }
        
//             const handelInputTask = (e) => {
//                 setTask(e.target.value);
//             }
        
//             const handelLevel = (e) => {
//                 e.preventDefault();
//                 setCurentLevel(e.target.value);
//             }
        
//             const handelType = (e) => {
//                 setCurentType(e.target.value);
//             }
        
//             const hendalTags = (e) => {
//                 e.preventDefault();
//                 setAllTags([...allTags, tag]);
//                 setTag('');
//             }
        
//             const handelInputTag = (e) => {
//                 setTag(e.target.value);
//             }
        
//             const handelListProduct = (indexToRemove) => {
//                 const upDateProducts = allProducts.filter((product, index) => index !== indexToRemove);
//                 setAllProducts(upDateProducts)
//             }
        
//             const handelListTask = (indexToRemove) => {
//                 const upDateTask = allTasks.filter((task, index) => index !== indexToRemove);
//                 setAllTasks(upDateTask)
//             }
        
//             const handelListTag = (indexToRemove) => {
//                 const upDateTags = allTags.filter((tag, index) => index !== indexToRemove);
//                 setAllTags(upDateTags)
//             }
        

//     const handelFormSumbit = async (e) => {
//         e.preventDefault();
//         const curentRecipe = {
//             owner: curentUser._id,
//             name: curentName,
//             servings: curentServings,
//             type: curentType,
//             time: curentTime,
//             level: curentLevel,
//             product: allProducts,
//             directions: allTasks,
//             image: imageUrl,
//             tags: allTags
//         };
        
//         try {
//             const result = await sendRecipe(curentRecipe);
//             console.log(result);
//             navigate('/'); // ניווט לדף הבית לאחר הצלחה
//         } catch (error) {
//             console.error("Error submitting recipe:", error);
//             // כאן תוכל להוסיף טיפול בשגיאות, כמו הצגת הודעה למשתמש
//         }
//     };


//     async function sendRecipe(curentRecipe) {
//         try {
//             const result = await axios.post(`http://localhost:8000/api/recipe/add`, { data: curentRecipe });
//             return result.data;
//         } catch (error) {
//             console.error(error);
//             throw error;
//         }
//     }

//     return (
//         <div>
//             <Link to={'/'}>חזרה</Link>
//             <form onSubmit={handelFormSumbit}>
//                 {/* ... (כל שדות הקלט נשארים כמו שהם) */}
                
//                 <input type="text" name="name" placeholder='הכנס את השם של המתכון'
//                     onChange={(e) => handelName(e)} />
//                 <br />

//                 <input type="number" name="servings" placeholder='תרשום את מספר המנות'
//                     onChange={(e) => handelServings(e)} />
//                 <br />

//                 <input type="radio" name="type" value={"חלבי"}
//                     onClick={handelType}
//                 />

//                 <label htmlFor="type"  >חלבי</label><br />
//                 <input type="radio" name="type" value={"בשרי"}
//                     onClick={handelType}
//                 />
//                 <label htmlFor="type" >בשרי </label><br />
//                 <input type="radio" name="type" value={"פרווה"}
//                     onClick={handelType}
//                 />
//                 <label htmlFor="type" >פרווה</label><br /><br /><br /><br />


//                 <label htmlFor="time">זמן הכנה:</label><br />
//                 <input type="time" name="time" onChange={(e) => handelTime(e)} />
//                 <br />

//                 <label htmlFor="level"> בחר דרגת קושי</label>
//                 <select id="level" name="level" onChange={(e) => handelLevel(e)}>
//                     <option >בחר רמת קושי:</option>
//                     <option value={"קל"} >קל</option>
//                     <option value={"בינוני"} >בינוני</option>
//                     <option value={"קשה"} >קשה</option>
//                     <option value={"קשה מאוד"} >קשה מאוד</option>
//                 </select>
//                 <br />

//                 <label htmlFor='product'>:מוצרים</label>
//                 <input type="text" name="product" value={product} placeholder='הכנס את המוצרים'
//                     onChange={(e) => handelInputProduct(e)}
//                     onKeyDown={(e) => e.key === 'Enter' && hendalProduct(e)} />
//                 <button type='submit' className={style.customButton} onClick={(e) => hendalProduct(e)}> ➕ </button>
//                 <br />

//                 <ol>
//                     {allProducts.map((item, index) => (
//                         <li key={index}>
//                             {item}
//                             <button className={style.lessButton}
//                                 onClick={(e) => {
//                                     e.preventDefault();
//                                     handelListProduct(index)
//                                 }}>➖</button>
//                         </li>
//                     ))}
//                 </ol>

//                 <br />

//                 <label htmlFor='task'>:הוראות הכנה</label>
//                 <input type="text" name='task' value={task} placeholder='תכתוב את הוראות ההכנה'
//                     onChange={(e) => { handelInputTask(e) }}
//                     onKeyDown={(e) => e.key === 'Enter' && hendalTasks(e)} />
//                 <button type='submit' className={style.customButton} onClick={(e) => hendalTasks(e)}> ➕ </button>
//                 <br />

//                 <ol>
//                     {allTasks.map((item, index) => (
//                         <li key={index}>{item}
//                             <button className={style.lessButton}
//                                 onClick={(e) => {
//                                     e.preventDefault();
//                                     handelListTask(index)
//                                 }}>➖</button>
//                         </li>
//                     ))}
//                 </ol>
//                 <br />

//                 <label htmlFor='tags'>:תגים</label>
//                 <input type="text" name='tags' value={tag} placeholder='הכנס את התגים של המתכון'
//                     onChange={(e) => { handelInputTag(e) }}
//                     onKeyDown={(e) => e.key === 'Enter' && hendalTags(e)} />
//                 <button type='submit' className={style.customButton} onClick={(e) => hendalTags(e)}> ➕ </button>
//                 <br />
//                 <br />
//                 <ol>
//                     {allTags.map((item, index) => (
//                         <li key={index}>{item}
//                             <button className={style.lessButton}
//                                 onClick={(e) => {
//                                     e.preventDefault();
//                                     handelListTag(index)
//                                 }}>➖</button>
//                         </li>
//                     ))}
//                 </ol>
//                 <br />

//                 {/* <button type='submit' onClick={() => sumbitForm()}>אישור</button> */}
//                 {/* <button type='sumbit' >אישור</button> */}
//                 <button type="submit">שמור מתכון</button>
            
//             </form>


//             <UploadImage setImageUrl={setImageUrl} />
//         </div>
//     );
// }

// export default AddNewRecipe;


import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UploadImage from './uploadPhoto/index.jsx';
import DataContext from '../context/DataContext.jsx';
import axios from 'axios';
import style from './style.module.css';

function AddNewRecipe() {
    const { curentUser } = useContext(DataContext);
    const navigate = useNavigate();

    const [curentName, setCurentName] = useState('');
    const [curentServings, setCurentServings] = useState('');
    const [curentTime, setCurentTime] = useState('');
    const [curentLevel, setCurentLevel] = useState('');
    const [product, setProduct] = useState('');
    const [allProducts, setAllProducts] = useState([]);
    const [task, setTask] = useState('');
    const [allTasks, setAllTasks] = useState([]);
    const [curentType, setCurentType] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [tag, setTag] = useState('');
    const [allTags, setAllTags] = useState([]);
    const [errors, setErrors] = useState({});

    const handelName = (e) => {
        setCurentName(e.target.value);
    }

    const handelServings = (e) => {
        setCurentServings(e.target.value);
    }

    const handelTime = (e) => {
        setCurentTime(e.target.value);
    }

    const hendalProduct = (e) => {
        e.preventDefault();
        if (product.trim()) {
            setAllProducts([...allProducts, product.trim()]);
            setProduct('');
        }
    }

    const handelInputProduct = (e) => {
        setProduct(e.target.value);
    }

    const hendalTasks = (e) => {
        e.preventDefault();
        if (task.trim()) {
            setAllTasks([...allTasks, task.trim()]);
            setTask('');
        }
    }

    const handelInputTask = (e) => {
        setTask(e.target.value);
    }

    const handelLevel = (e) => {
        setCurentLevel(e.target.value);
    }

    const handelType = (e) => {
        setCurentType(e.target.value);
    }

    const hendalTags = (e) => {
        e.preventDefault();
        if (tag.trim()) {
            setAllTags([...allTags, tag.trim()]);
            setTag('');
        }
    }

    const handelInputTag = (e) => {
        setTag(e.target.value);
    }

    const handelListProduct = (indexToRemove) => {
        const upDateProducts = allProducts.filter((_, index) => index !== indexToRemove);
        setAllProducts(upDateProducts);
    }

    const handelListTask = (indexToRemove) => {
        const upDateTask = allTasks.filter((_, index) => index !== indexToRemove);
        setAllTasks(upDateTask);
    }

    const handelListTag = (indexToRemove) => {
        const upDateTags = allTags.filter((_, index) => index !== indexToRemove);
        setAllTags(upDateTags);
    }

    const validateForm = () => {
        const newErrors = {};
        if (!curentName) newErrors.name = 'שם המתכון הוא שדה חובה';
        if (!curentServings) newErrors.servings = 'מספר המנות הוא שדה חובה';
        if (!curentType) newErrors.type = 'סוג המתכון הוא שדה חובה';
        if (!curentTime) newErrors.time = 'זמן ההכנה הוא שדה חובה';
        if (!curentLevel) newErrors.level = 'רמת הקושי היא שדה חובה';
        if (allProducts.length === 0) newErrors.products = 'יש להוסיף לפחות מוצר אחד';
        if (allTasks.length === 0) newErrors.tasks = 'יש להוסיף לפחות הוראת הכנה אחת';
        if (!imageUrl) newErrors.image = 'יש להוסיף תמונה למתכון';
        return newErrors;
    };

    const handelFormSumbit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        const curentRecipe = {
            owner: curentUser._id,
            name: curentName,
            servings: curentServings,
            type: curentType,
            time: curentTime,
            level: curentLevel,
            product: allProducts,
            directions: allTasks,
            image: imageUrl,
            tags: allTags
        };
        
        try {
            const result = await sendRecipe(curentRecipe);
            console.log(result);
            navigate('/');
        } catch (error) {
            console.error("Error submitting recipe:", error);
            setErrors({ submit: 'אירעה שגיאה בשליחת המתכון. אנא נסה שוב.' });
        }
    };

    async function sendRecipe(curentRecipe) {
        try {
            const result = await axios.post(`http://localhost:8000/api/recipe/add`, { data: curentRecipe });
            return result.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    return (
        <div className={style.addNewRecipeContainer}>
            <Link to={'/'} className={style.backLink}>חזרה</Link>
            {/* {Object.keys(errors).length > 0 && (
                <div className={style.errorContainer}>
                    {Object.values(errors).map((error, index) => (
                        <p key={index} className={style.errorMessage}>{error}</p>
                    ))} */}
                {/* </div>
            )} */}
            <form onSubmit={handelFormSumbit} className={style.recipeForm}>
                <input
                    type="text"
                    name="name"
                    placeholder='הכנס את השם של המתכון'
                    onChange={handelName}
                    className={errors.name ? `${style.inputField} ${style.inputError}` : style.inputField}
                />
                {errors.name && <span className={style.errorText}>{errors.name}</span>}
                
                <input
                    type="number"
                    name="servings"
                    placeholder='תרשום את מספר המנות'
                    onChange={handelServings}
                    className={errors.servings ? `${style.inputField} ${style.inputError}` : style.inputField}
                />
                {errors.servings && <span className={style.errorText}>{errors.servings}</span>}

                <div className={style.radioGroup}>
                    <input type="radio" name="type" value="חלבי" onClick={handelType} />
                    <label htmlFor="type">חלבי</label>
                    <input type="radio" name="type" value="בשרי" onClick={handelType} />
                    <label htmlFor="type">בשרי</label>
                    <input type="radio" name="type" value="פרווה" onClick={handelType} />
                    <label htmlFor="type">פרווה</label>
                </div>
                {errors.type && <span className={style.errorText}>{errors.type}</span>}

                <label htmlFor="time">זמן הכנה:</label>
                <input
                    type="time"
                    name="time"
                    onChange={handelTime}
                    className={errors.time ? `${style.inputField} ${style.inputError}` : style.inputField}
                />
                {errors.time && <span className={style.errorText}>{errors.time}</span>}

                <select
                    id="level"
                    name="level"
                    onChange={handelLevel}
                    className={errors.level ? `${style.inputField} ${style.inputError}` : style.inputField}
                >
                    <option value="">בחר רמת קושי:</option>
                    <option value="קל">קל</option>
                    <option value="בינוני">בינוני</option>
                    <option value="קשה">קשה</option>
                    <option value="קשה מאוד">קשה מאוד</option>
                </select>
                {errors.level && <span className={style.errorText}>{errors.level}</span>}

                <div className={style.inputGroup}>
                    <input
                        type="text"
                        name="product"
                        value={product}
                        placeholder='הכנס את המוצרים'
                        onChange={handelInputProduct}
                        onKeyDown={(e) => e.key === 'Enter' && hendalProduct(e)}
                        className={style.inputField}
                    />
                    <button type='button' className={style.addButton} onClick={hendalProduct}>➕</button>
                </div>
                {errors.products && <span className={style.errorText}>{errors.products}</span>}

                <ol className={style.list}>
                    {allProducts.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button
                                className={style.removeButton}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handelListProduct(index);
                                }}
                            >
                                ➖
                            </button>
                        </li>
                    ))}
                </ol>

                <div className={style.inputGroup}>
                    <input
                        type="text"
                        name='task'
                        value={task}
                        placeholder='תכתוב את הוראות ההכנה'
                        onChange={handelInputTask}
                        onKeyDown={(e) => e.key === 'Enter' && hendalTasks(e)}
                        className={style.inputField}
                    />
                    <button type='button' className={style.addButton} onClick={hendalTasks}>➕</button>
                </div>
                {errors.tasks && <span className={style.errorText}>{errors.tasks}</span>}

                <ol className={style.list}>
                    {allTasks.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button
                                className={style.removeButton}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handelListTask(index);
                                }}
                            >
                                ➖
                            </button>
                        </li>
                    ))}
                </ol>

                <div className={style.inputGroup}>
                    <input
                        type="text"
                        name='tags'
                        value={tag}
                        placeholder='הכנס את התגים של המתכון'
                        onChange={handelInputTag}
                        onKeyDown={(e) => e.key === 'Enter' && hendalTags(e)}
                        className={style.inputField}
                    />
                    <button type='button' className={style.addButton} onClick={hendalTags}>➕</button>
                </div>

                <ol className={style.list}>
                    {allTags.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button
                                className={style.removeButton}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handelListTag(index);
                                }}
                            >
                                ➖
                            </button>
                        </li>
                    ))}
                </ol>

                <button type="submit" className={style.submitButton}>שמור מתכון</button>
            </form>

            <UploadImage setImageUrl={setImageUrl} />
            {errors.image && <span className={style.errorText}>{errors.image}</span>}
        </div>
    );
}

export default AddNewRecipe;