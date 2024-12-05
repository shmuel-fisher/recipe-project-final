import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import style from './style.module.css';
import { useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext';

function AdminEditRecipe() {

    const { curentUser } = useContext(DataContext);
    const navigate = useNavigate();
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        servings: '',
        type: '',
        time: '',
        level: '',
        product: [],
        directions: [],
        tags: [],
    });

    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false); // שליטה על המודל למחיקה

    // פונקציה להבאת נתוני המתכון מהשרת
    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/recipe/${recipeId}`);
                setRecipe(response.data);
                setFormData({
                    name: response.data.name,
                    servings: response.data.servings,
                    type: response.data.type,
                    time: response.data.time,
                    level: response.data.level,
                    product: response.data.product,
                    directions: response.data.directions,
                    tags: response.data.tags,
                });
            } catch (error) {
                console.error("Error fetching recipe:", error);
            }
        };
        fetchRecipe();
    }, [recipeId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleArrayChange = (e, index, field) => {
        const newArray = [...formData[field]];
        newArray[index] = e.target.value;
        setFormData({ ...formData, [field]: newArray });
    };

    const handleAddProduct = () => setFormData({ ...formData, product: [...formData.product, ''] });
    const handleRemoveProduct = (index) => {
        const newProduct = [...formData.product];
        newProduct.splice(index, 1);
        setFormData({ ...formData, product: newProduct });
    };

    const handleAddDirections = () => setFormData({ ...formData, directions: [...formData.directions, ''] });
    const handleRemoveDirections = (index) => {
        const newDirections = [...formData.directions];
        newDirections.splice(index, 1);
        setFormData({ ...formData, directions: newDirections });
    };

    const handleAddTags = () => setFormData({ ...formData, tags: [...formData.tags, ''] });
    const handleRemoveTags = (index) => {
        const newTags = [...formData.tags];
        newTags.splice(index, 1);
        setFormData({ ...formData, tags: newTags });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleFinalApproval = async () => {
        try {
            await axios.patch(`http://localhost:8000/api/recipe/admin/update/${recipeId}`, formData);
            alert("המתכון עודכן בהצלחה!");
            setShowModal(false);
            navigate('/');
        } catch (error) {
            console.error("Error updating recipe:", error);
        }
    };

    const handelDeleteRecipe = async () => {
        try {
            await axios.delete(`http://localhost:8000/api/recipe/admin/delete/${recipeId}`);
            alert("המתכון נמחק בהצלחה");
            setShowDeleteModal(false);
            navigate('/deleteRecipe');
        } catch (error) {
            console.error("Error deleting recipe:", error);
        }
    };

    return (
        <div className={style.adminEditContainer}>
            {recipe ? (
                <>
                    {showModal && (
                        <div className={style.recipeModal}>
                            <div className={style.recipeModalContent}>
                                <h2>תוצאה סופית</h2>
                                <p>שם המתכון: {formData.name}</p>
                                <p>מנות: {formData.servings}</p>
                                <p>סוג: {formData.type}</p>
                                <p>זמן: {formData.time}</p>
                                <p>רמת קושי: {formData.level}</p>
                                <p>מוצרים: {formData.product.join(', ')}</p>
                                <p>הוראות: {formData.directions.join(', ')}</p>
                                <p>תגים: {formData.tags.join(', ')}</p>
                                <button onClick={handleFinalApproval} className={style.modelSubmitButton}>אישור סופי</button>
                                <button onClick={() => setShowModal(false)} className={style.cancelButton}>ביטול</button>
                            </div>
                        </div>
                    )}

                    {showDeleteModal && (
                        <div className={style.deleteModal}>
                            <div className={style.deleteModalContent}>
                                <h3>אישור מחיקה</h3>
                                <p>האם אתה בטוח שברצונך למחוק את המתכון?</p>
                                <div className={style.modalButtons}>
                                    <button onClick={handelDeleteRecipe} className={style.confirmButton}>כן, מחק</button>
                                    <button onClick={() => setShowDeleteModal(false)} className={style.cancelDeleteButton}>ביטול</button>
                                </div>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className={style.adminEditForm}>
                        <label>שם:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={style.editInput}
                        />
                            <label>מנות:</label>
                      <input
                            type="number"
                            name="servings"
                            value={formData.servings}
                            onChange={handleChange}
                            className={style.editInput}
                            style={{ whiteSpace: 'pre-wrap' }}
                        />

                        <label>סוג:</label>
                        <input
                            type="text"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className={style.editInput}
                            style={{ whiteSpace: 'pre-wrap' }}
                        />

                        <label>זמן הכנה:</label>
                        <input
                            type="text"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className={style.editInput}
                            style={{ whiteSpace: 'pre-wrap' }}
                        />

                        <label>דרגת קושי:</label>
                        <input
                            type="text"
                            name="level"
                            value={formData.level}
                            onChange={handleChange}
                            className={style.editInput}
                            style={{ whiteSpace: 'pre-wrap' }}
                        />

                        <label>מוצרים:</label>
                        {formData.product.map((item, index) => (
                            <div key={index} className={style.productItem}>
                                <span>
                                    <input
                                        type="text"
                                        value={item}
                                        onChange={(e) => handleArrayChange(e, index, 'product')}
                                        className={style.editInput}
                                        style={{ whiteSpace: 'pre-wrap' }}
                                    />
                                    <button className={style.removeButton} type="button" onClick={() => handleRemoveProduct(index)}>להסיר</button>
                                </span>
                            </div>
                        ))}
                        <br />
                        <button type="button" onClick={handleAddProduct}>להוסיף מוצר </button>
                        <br />
                        <label>הוראות הכנה:</label>
                        {formData.directions.map((item, index) => (
                            <div key={index} className="product-item">
                                <input
                                    key={index}
                                    type="text"
                                    value={item}
                                    onChange={(e) => handleArrayChange(e, index, 'directions')}
                                    className={style.editInput}
                                    style={{ whiteSpace: 'pre-wrap' }}
                                />
                                <button type="button" className={style.removeButton} onClick={() => handleRemoveDirections(index)}>להסיר</button>
                            </div>
                        ))}
                        <br />
                        <button type="button" onClick={handleAddDirections}>להוסיף הוראת הכנה</button>
                        <br />
                        <label>תגים:</label>
                        {formData.tags.map((item, index) => (
                            <div key={index} className="product-item">
                                <input
                                    key={index}
                                    type="text"
                                    value={item}
                                    onChange={(e) => handleArrayChange(e, index, 'tags')}
                                    className={style.editInput}
                                    style={{ whiteSpace: 'pre-wrap' }}
                                />
                                <button type="button" className={style.removeButton} onClick={() => handleRemoveTags(index)}>להסיר</button>
                            </div>
                        ))}
                        <br />
                        <button type="button" onClick={handleAddTags}>להוסיף תג</button>
                        <br />
                        <button type="submit" className={style.submitButton}>עדכון מתכון</button>
                    </form>
                    <button className={style.deleteButton} onClick={() => setShowDeleteModal(true)}>מחיקה</button>
                </>
            ) : (
                <p>טוען מתכונים...</p>
            )}
        </div>
    );
}

export default AdminEditRecipe;
