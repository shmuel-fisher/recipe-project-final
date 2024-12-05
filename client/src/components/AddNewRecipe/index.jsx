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
    const [showModal, setShowModal] = useState(false);

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

    const handelFormSumbit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        setShowModal(true);
    };

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
        

    const handleFinalSubmit = async () => {
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
            const result = await axios.post('http://localhost:8000/api/recipe/add', { data: curentRecipe });
            console.log(result);
            setShowModal(false);
            navigate('/');
        } catch (error) {
            console.error("Error submitting recipe:", error);
            setErrors({ submit: 'אירעה שגיאה בשליחת המתכון. אנא נסה שוב.' });
        }
    };

    return (
        <div className={style.addNewRecipeContainer}>
            <Link to={'/'} className={style.backLink}>חזרה</Link>
            <h3>הוספת מתכון חדש  </h3>
            <form onSubmit={handelFormSumbit} className={style.recipeForm}>
                {/* כל שדות הטופס כפי שכתבת */}
                <input
                    type="text"
                    name="name"
                    placeholder='הכנס את שם המתכון'
                    onChange={handelName}
                    className={errors.name ? `${style.inputField} ${style.inputError}` : style.inputField}
                />
                {errors.name && <span className={style.errorText}>{errors.name}</span>}
                
                <input
                    type="number"
                    name="servings"
                    placeholder='רשום את מספר המנות'
                    onChange={handelServings}
                    className={errors.servings ? `${style.inputField} ${style.inputError}` : style.inputField}
                />
                {errors.servings && <span className={style.errorText}>{errors.servings}</span>}

                <div>
                <label htmlFor="type">חלבי</label>
                    <input type="radio" name="type" value="חלבי" onClick={handelType} />
                    <label htmlFor="type">בשרי</label>
                    <input type="radio" name="type" value="בשרי" onClick={handelType} />
                    <label htmlFor="type">פרווה</label>
                    <input type="radio" name="type" value="פרווה" onClick={handelType} />
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

                <div>
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

                <div>
                    <input
                        type="text"
                        name='task'
                        value={task}
                        placeholder='כתוב את הוראות ההכנה'
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

                <div>
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
                <br />
                <UploadImage setImageUrl={setImageUrl} />
                {errors.image && <span className={style.errorText}>{errors.image}</span>}
                <br />
                <button type="submit" className={style.submitButton}>שמור מתכון</button>
            </form>
            
            {showModal && (
                <div className={style.recipeModal}>
                    <div className={style.recipeModalContent}>
                        <h2>תוצאה סופית</h2>
                        <p>שם המתכון: {curentName}</p>
                        <p>מנות: {curentServings}</p>
                        <p>סוג: {curentType}</p>
                        <p>זמן: {curentTime}</p>
                        <p>רמת קושי: {curentLevel}</p>
                        <p>מוצרים: {allProducts.join(', ')}</p>
                        <p>הוראות: {allTasks.join(', ')}</p>
                        <p>תגים: {allTags.join(', ')}</p>
                        <button onClick={handleFinalSubmit} className={style.submitButton}>אישור סופי</button>
                        <button onClick={() => setShowModal(false)} className={style.cancelButton}>ביטול</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddNewRecipe;
