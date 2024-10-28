// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';
// // import style from './style.module.css';

// // function AdminEditRecipe() {
// //     // שימוש ב- useParams לחילוץ ה-id מה-URL
// //     const { id } = useParams(); // לחלץ את המזהה מה-URL
// //     console.log(id, 11111); // הדפסה לבדיקת id

// //     const [recipe, setRecipe] = useState(null);
// //     const [formData, setFormData] = useState({
// //         name: '',
// //         servings: '',
// //         type: '',
// //         time: '',
// //         level: '',
// //         product: [],
// //         directions: [],
// //         tags: [],
// //     });

// //     useEffect(() => {
// //         // הבאת המתכון מהשרת לפי ה-id
// //         const fetchRecipe = async () => {
// //             try {
// //                 console.log(id);
// //                 const response = await axios.get(`http://localhost:8000/api/recipe/${id}`);
// //                 setRecipe(response.data);
// //                 console.log(response.data);
// //                 setFormData({
// //                     name: response.data.name,
// //                     servings: response.data.servings,
// //                     type: response.data.type,
// //                     time: response.data.time,
// //                     level: response.data.level,
// //                     product: response.data.product,
// //                     directions: response.data.directions,
// //                     tags: response.data.tags,
// //                 });
// //             } catch (error) {
// //                 console.error("Error fetching recipe:", error);
// //             }
// //         };
// //         fetchRecipe();
// //     }, [id]);

// //     const handleChange = (e) => {
// //         setFormData({ ...formData, [e.target.name]: e.target.value });
// //     };

// //     const handleArrayChange = (e, index, field) => {
// //         const newArray = [...formData[field]];
// //         newArray[index] = e.target.value;
// //         setFormData({ ...formData, [field]: newArray });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await axios.patch(`http://localhost:8000/api/recipe/update/${id}`, formData);
// //             console.log("Recipe updated:", response.data);
// //             alert("Recipe updated successfully!");
// //         } catch (error) {
// //             console.error("Error updating recipe:", error);
// //         }
// //     };

// //     return (
// //         <div className="admin-edit-container">
// //             {recipe ? (
// //                 <form onSubmit={handleSubmit} className="admin-edit-form">
// //                     <label>Recipe Name:</label>
// //                     <input
// //                         type="text"
// //                         name="name"
// //                         value={formData.name}
// //                         onChange={handleChange}
// //                         className="form-input"
// //                     />

// //                     <label>Servings:</label>
// //                     <input
// //                         type="number"
// //                         name="servings"
// //                         value={formData.servings}
// //                         onChange={handleChange}
// //                         className="form-input"
// //                     />

// //                     <label>Type:</label>
// //                     <input
// //                         type="text"
// //                         name="type"
// //                         value={formData.type}
// //                         onChange={handleChange}
// //                         className="form-input"
// //                     />

// //                     <label>Time:</label>
// //                     <input
// //                         type="text"
// //                         name="time"
// //                         value={formData.time}
// //                         onChange={handleChange}
// //                         className="form-input"
// //                     />

// //                     <label>Level:</label>
// //                     <input
// //                         type="text"
// //                         name="level"
// //                         value={formData.level}
// //                         onChange={handleChange}
// //                         className="form-input"
// //                     />

// //                     <label>Products:</label>
// //                     {formData.product.map((item, index) => (
// //                         <input
// //                             key={index}
// //                             type="text"
// //                             value={item}
// //                             onChange={(e) => handleArrayChange(e, index, 'product')}
// //                             className="form-input"
// //                         />
// //                     ))}

// //                     <label>Directions:</label>
// //                     {formData.directions.map((item, index) => (
// //                         <input
// //                             key={index}
// //                             type="text"
// //                             value={item}
// //                             onChange={(e) => handleArrayChange(e, index, 'directions')}
// //                             className="form-input"
// //                         />
// //                     ))}

// //                     <label>Tags:</label>
// //                     {formData.tags.map((item, index) => (
// //                         <input
// //                             key={index}
// //                             type="text"
// //                             value={item}
// //                             onChange={(e) => handleArrayChange(e, index, 'tags')}
// //                             className="form-input"
// //                         />
// //                     ))}

// //                     <button type="submit" className="submit-button">Update Recipe</button>
// //                 </form>
// //             ) : (
// //                 <p>Loading recipe...</p>
// //             )}
// //         </div>
// //     );
// // }

// // export default AdminEditRecipe;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';
// // import style from './style.module.css';

// // function AdminEditRecipe() {
// //     const { id } = useParams();
// //     const [recipe, setRecipe] = useState(null);
// //     const [formData, setFormData] = useState({
// //         name: '',
// //         servings: '',
// //         type: '',
// //         time: '',
// //         level: '',
// //         product: [],
// //         directions: [],
// //         tags: [],
// //     });

// //     useEffect(() => {
// //         const fetchRecipe = async () => {
// //             try {
// //                 const response = await axios.get(`http://localhost:8000/api/recipe/${id}`);
// //                 setRecipe(response.data);
// //                 setFormData({
// //                     name: response.data.name,
// //                     servings: response.data.servings,
// //                     type: response.data.type,
// //                     time: response.data.time,
// //                     level: response.data.level,
// //                     product: response.data.product,
// //                     directions: response.data.directions,
// //                     tags: response.data.tags,
// //                 });
// //             } catch (error) {
// //                 console.error("Error fetching recipe:", error);
// //             }
// //         };
// //         fetchRecipe();
// //     }, [id]);

// //     const handleChange = (e) => {
// //         setFormData({ ...formData, [e.target.name]: e.target.value });
// //     };

// //     const handleArrayChange = (e, index, field) => {
// //         const newArray = [...formData[field]];
// //         newArray[index] = e.target.value;
// //         setFormData({ ...formData, [field]: newArray });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await axios.patch(`http://localhost:8000/api/recipe/update/${id}`, formData);
// //             console.log("Recipe updated:", response.data);
// //             alert("Recipe updated successfully!");
// //         } catch (error) {
// //             console.error("Error updating recipe:", error);
// //         }
// //     };

// //     return (
// //         <div className={style.adminEditContainer}>
// //             {recipe ? (
// //                 <form onSubmit={handleSubmit} className={style.adminEditForm}>
// //                     <label>שם המתכון:</label>
// //                     <input
// //                         type="text"
// //                         name="name"
// //                         value={formData.name}
// //                         onChange={handleChange}
// //                         className={style.formInput}
// //                     />

// //                     <label>מספר מנות:</label>
// //                     <input
// //                         type="number"
// //                         name="servings"
// //                         value={formData.servings}
// //                         onChange={handleChange}
// //                         className={style.formInput}
// //                     />

// //                     <label>סוג:</label>
// //                     <input
// //                         type="text"
// //                         name="type"
// //                         value={formData.type}
// //                         onChange={handleChange}
// //                         className={style.formInput}
// //                     />

// //                     <label>זמן הכנה:</label>
// //                     <input
// //                         type="text"
// //                         name="time"
// //                         value={formData.time}
// //                         onChange={handleChange}
// //                         className={style.formInput}
// //                     />

// //                     <label>רמת קושי:</label>
// //                     <input
// //                         type="text"
// //                         name="level"
// //                         value={formData.level}
// //                         onChange={handleChange}
// //                         className={style.formInput}
// //                     />

// //                     <label>מצרכים:</label>
// //                     {formData.product.map((item, index) => (
// //                         <input
// //                             key={index}
// //                             type="text"
// //                             value={item}
// //                             onChange={(e) => handleArrayChange(e, index, 'product')}
// //                             className={style.formInput}
// //                         />
// //                     ))}

// //                     <label>הוראות הכנה:</label>
// //                     {formData.directions.map((item, index) => (
// //                         <input
// //                             key={index}
// //                             type="text"
// //                             value={item}
// //                             onChange={(e) => handleArrayChange(e, index, 'directions')}
// //                             className={style.formInput}
// //                         />
// //                     ))}

// //                     <label>תגיות:</label>
// //                     {formData.tags.map((item, index) => (
// //                         <input
// //                             key={index}
// //                             type="text"
// //                             value={item}
// //                             onChange={(e) => handleArrayChange(e, index, 'tags')}
// //                             className={style.formInput}
// //                         />
// //                     ))}

// //                     <button type="submit" className={style.customButton}>עדכן מתכון</button>
// //                 </form>
// //             ) : (
// //                 <p>טוען מתכון...</p>
// //             )}
// //         </div>
// //     );
// // }

// // export default AdminEditRecipe;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';
// // import style from './style.module.css';

// // function AdminEditRecipe() {
// //     const { id } = useParams(); 
// //     const [recipe, setRecipe] = useState(null);
// //     const [formData, setFormData] = useState({
// //         name: '',
// //         servings: '',
// //         type: '',
// //         time: '',
// //         level: '',
// //         product: [],
// //         directions: [],
// //         tags: [],
// //     });
// //     const [modalOpen, setModalOpen] = useState(false);

// //     useEffect(() => {
// //         const fetchRecipe = async () => {
// //             try {
// //                 const response = await axios.get(`http://localhost:8000/api/recipe/${id}`);
// //                 setRecipe(response.data);
// //                 setFormData({
// //                     name: response.data.name,
// //                     servings: response.data.servings,
// //                     type: response.data.type,
// //                     time: response.data.time,
// //                     level: response.data.level,
// //                     product: response.data.product,
// //                     directions: response.data.directions,
// //                     tags: response.data.tags,
// //                 });
// //             } catch (error) {
// //                 console.error("Error fetching recipe:", error);
// //             }
// //         };
// //         fetchRecipe();
// //     }, [id]);

// //     const handleChange = (e) => {
// //         setFormData({ ...formData, [e.target.name]: e.target.value });
// //     };

// //     const handleArrayChange = (e, index, field) => {
// //         const newArray = [...formData[field]];
// //         newArray[index] = e.target.value;
// //         setFormData({ ...formData, [field]: newArray });
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         setModalOpen(true);
// //     };

// //     const handleFinalApproval = async () => {
// //         try {
// //             const response = await axios.patch(`http://localhost:8000/api/recipe/update/${id}`, formData);
// //             console.log("Recipe updated:", response.data);
// //             alert("Recipe updated successfully!");
// //         } catch (error) {
// //             console.error("Error updating recipe:", error);
// //         } finally {
// //             setModalOpen(false);
// //         }
// //     };

// //     return (
// //         <div className="admin-edit-container">
// //             {recipe ? (
// //                 <form onSubmit={handleSubmit} className="admin-edit-form">
// //                     <label>Recipe Name:</label>
// //                     <input
// //                         type="text"
// //                         name="name"
// //                         value={formData.name}
// //                         onChange={handleChange}
// //                         className="form-input"
// //                         style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
// //                     />

// //                     <label>Servings:</label>
// //                     <input
// //                         type="number"
// //                         name="servings"
// //                         value={formData.servings}
// //                         onChange={handleChange}
// //                         className="form-input"
// //                     />

// //                     <label>Type:</label>
// //                     <input
// //                         type="text"
// //                         name="type"
// //                         value={formData.type}
// //                         onChange={handleChange}
// //                         className="form-input"
// //                     />

// //                     <label>Time:</label>
// //                     <input
// //                         type="text"
// //                         name="time"
// //                         value={formData.time}
// //                         onChange={handleChange}
// //                         className="form-input"
// //                     />

// //                     <label>Level:</label>
// //                     <input
// //                         type="text"
// //                         name="level"
// //                         value={formData.level}
// //                         onChange={handleChange}
// //                         className="form-input"
// //                     />

// //                     <label>Products:</label>
// //                     {formData.product.map((item, index) => (
// //                         <input
// //                             key={index}
// //                             type="text"
// //                             value={item}
// //                             onChange={(e) => handleArrayChange(e, index, 'product')}
// //                             className="form-input"
// //                             style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
// //                         />
// //                     ))}

// //                     <label>Directions:</label>
// //                     {formData.directions.map((item, index) => (
// //                         <input
// //                             key={index}
// //                             type="text"
// //                             value={item}
// //                             onChange={(e) => handleArrayChange(e, index, 'directions')}
// //                             className="form-input"
// //                             style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
// //                         />
// //                     ))}

// //                     <label>Tags:</label>
// //                     {formData.tags.map((item, index) => (
// //                         <input
// //                             key={index}
// //                             type="text"
// //                             value={item}
// //                             onChange={(e) => handleArrayChange(e, index, 'tags')}
// //                             className="form-input"
// //                             style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
// //                         />
// //                     ))}

// //                     <button type="submit" className="submit-button">עדכן מתכון</button>
// //                 </form>
// //             ) : (
// //                 <p>Loading recipe...</p>
// //             )}

// //             {modalOpen && (
// //                 <div className="modal">
// //                     <div className="modal-content">
// //                         <h3>תצוגה סופית:</h3>
// //                         <pre>{JSON.stringify(formData, null, 2)}</pre>
// //                         <button onClick={handleFinalApproval} className="final-approval-button">אישור סופי</button>
// //                         <button onClick={() => setModalOpen(false)} className="close-button">סגור</button>
// //                     </div>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // }

// // export default AdminEditRecipe;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import style from './style.module.css';

// function AdminEditRecipe() {
//     const { id } = useParams();
//     const [recipe, setRecipe] = useState(null);
//     const [formData, setFormData] = useState({
//         name: '',
//         servings: '',
//         type: '',
//         time: '',
//         level: '',
//         product: [],
//         directions: [],
//         tags: [],
//     });

//     const [showModal, setShowModal] = useState(false);

//     useEffect(() => {
//         const fetchRecipe = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8000/api/recipe/${id}`);
//                 setRecipe(response.data);
//                 setFormData({
//                     name: response.data.name,
//                     servings: response.data.servings,
//                     type: response.data.type,
//                     time: response.data.time,
//                     level: response.data.level,
//                     product: response.data.product,
//                     directions: response.data.directions,
//                     tags: response.data.tags,
//                 });
//             } catch (error) {
//                 console.error("Error fetching recipe:", error);
//             }
//         };
//         fetchRecipe();
//     }, [id]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleArrayChange = (e, index, field) => {
//         const newArray = [...formData[field]];
//         newArray[index] = e.target.value;
//         setFormData({ ...formData, [field]: newArray });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setShowModal(true);
//     };

//     const handleFinalApproval = async () => {
//         try {
//             const response = await axios.patch(`http://localhost:8000/api/recipe/update/${id}`, formData);
//             console.log("Recipe updated:", response.data);
//             alert("Recipe updated successfully!");
//             setShowModal(false);
//         } catch (error) {
//             console.error("Error updating recipe:", error);
//         }
//     };

//     return (
//         <div className="admin-edit-container">
//             {recipe ? (
//                 <>
//                     {showModal && (
//                         <div className={style.modal}>
//                             <div className={style.modalContent}>
//                                 <h2>תוצאה סופית</h2>
//                                 <p><strong>שם המתכון:</strong> {formData.name}</p>
//                                 <p><strong>מנות:</strong> {formData.servings}</p>
//                                 <p><strong>סוג:</strong> {formData.type}</p>
//                                 <p><strong>זמן:</strong> {formData.time}</p>
//                                 <p><strong>רמת קושי:</strong> {formData.level}</p>
//                                 <p><strong>מוצרים:</strong> {formData.product.join(', ')}</p>
//                                 <p><strong>הוראות:</strong> {formData.directions.join(', ')}</p>
//                                 <p><strong>תגים:</strong> {formData.tags.join(', ')}</p>
//                                 <button onClick={handleFinalApproval} className="submit-button">אישור סופי</button>
//                                 <button onClick={() => setShowModal(false)} className="cancel-button">ביטול</button>
//                             </div>
//                         </div>
//                     )}

//                     <form onSubmit={handleSubmit} className="admin-edit-form">
//                         <label>Recipe Name:</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             className="form-input"
//                             style={{ whiteSpace: 'pre-wrap' }} // יישום שבירת שורות
//                         />

//                         <label>Servings:</label>
//                         <input
//                             type="number"
//                             name="servings"
//                             value={formData.servings}
//                             onChange={handleChange}
//                             className="form-input"
//                             style={{ whiteSpace: 'pre-wrap' }} // יישום שבירת שורות
//                         />

//                         <label>Type:</label>
//                         <input
//                             type="text"
//                             name="type"
//                             value={formData.type}
//                             onChange={handleChange}
//                             className="form-input"
//                             style={{ whiteSpace: 'pre-wrap' }} // יישום שבירת שורות
//                         />

//                         <label>Time:</label>
//                         <input
//                             type="text"
//                             name="time"
//                             value={formData.time}
//                             onChange={handleChange}
//                             className="form-input"
//                             style={{ whiteSpace: 'pre-wrap' }} // יישום שבירת שורות
//                         />

//                         <label>Level:</label>
//                         <input
//                             type="text"
//                             name="level"
//                             value={formData.level}
//                             onChange={handleChange}
//                             className="form-input"
//                             style={{ whiteSpace: 'pre-wrap' }} // יישום שבירת שורות
//                         />

//                         <label>Products:</label>
//                         {formData.product.map((item, index) => (
//                             <input
//                                 key={index}
//                                 type="text"
//                                 value={item}
//                                 onChange={(e) => handleArrayChange(e, index, 'product')}
//                                 className="form-input"
//                                 style={{ whiteSpace: 'pre-wrap' }} // יישום שבירת שורות
//                             />
//                         ))}

//                         <label>Directions:</label>
//                         {formData.directions.map((item, index) => (
//                             <input
//                                 key={index}
//                                 type="text"
//                                 value={item}
//                                 onChange={(e) => handleArrayChange(e, index, 'directions')}
//                                 className="form-input"
//                                 style={{ whiteSpace: 'pre-wrap' }} // יישום שבירת שורות
//                             />
//                         ))}

//                         <label>Tags:</label>
//                         {formData.tags.map((item, index) => (
//                             <input
//                                 key={index}
//                                 type="text"
//                                 value={item}
//                                 onChange={(e) => handleArrayChange(e, index, 'tags')}
//                                 className="form-input"
//                                 style={{ whiteSpace: 'pre-wrap' }} // יישום שבירת שורות
//                             />
//                         ))}

//                         <button type="submit" className="submit-button">עדכון מתכון</button>
//                     </form>
//                 </>
//             ) : (
//                 <p>Loading recipe...</p>
//             )}
//         </div>
//     );
// }

// export default AdminEditRecipe;


















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import style from
//     './style.module.css';

// function AdminEditRecipe() {
//     const { id } = useParams();
//     const [recipe, setRecipe] = useState(null);
//     const [formData, setFormData] = useState({
//         name: '',
//         servings: '',
//         type: '',
//         time: '',
//         level: '',
//         product: [],
//         directions: [],
//         tags: [],
//     });

//     const [showModal, setShowModal] = useState(false);

//     // פונקציה להבאת נתוני המתכון מהשרת
//     useEffect(() => {
//         const fetchRecipe = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8000/api/recipe/${id}`);
//                     setRecipe(response.data);
//                 setFormData({
//                     name: response.data.name,
//                     servings: response.data.servings,
//                     type: response.data.type,
//                     time: response.data.time,
//                     level: response.data.level,
//                     product: response.data.product,
//                     directions: response.data.directions,
//                     tags: response.data.tags,
//                 });
//             } catch (error) {
//                 console.error("Error fetching recipe:", error);
//             }
//         };
//         fetchRecipe();
//     }, [id]);

//     // פונקציות לטיפול בשינויים בשדות הטופס
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleAddProduct = () => {
//         setFormData({ ...formData, product: [...formData.product, ''] });
//     };

//     const handleRemoveProduct = (index) => {
//         const newProduct = [...formData.product];
//         newProduct.splice(index, 1);
//         setFormData({ ...formData, product: newProduct });
//     };

//     const handleProductChange = (e, index) => {
//         const newProduct = [...formData.product];
//         newProduct[index] = e.target.value;
//         setFormData({ ...formData, product: newProduct });
//     };

//     // פונקציות דומות לטיפול בשדות ההוראות והתגים

//     // פונקציה לשליחת הנתונים המעודכנים לשרת
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setShowModal(true);
//     };

//     const handleFinalApproval = async () => {
//         try {
//             const response = await axios.patch(`http://localhost:8000/api/recipe/update/${id}`, formData);
//                 console.log("Recipe updated:", response.data);
//             alert("Recipe updated successfully!");
//             setShowModal(false);
//         } catch (error) {
//             console.error("Error updating recipe:", error);
//         }
//     };

//     return (
//         <div className="admin-edit-container">
//             {recipe ? (
//                 <>
//                     {showModal && (
//                         <div className={style.modal}>
//                             <div className={style.modalContent}>
//                                 <h2>תוצאה סופית</h2>
//                                 <p>שם המתכון: {formData.name}</p>
//                                 <p>מנות: {formData.servings}</p>
//                                 <p>סוג: {formData.type}</p>
//                                 <p>זמן: {formData.time}</p>
//                                 <p>רמת קושי: {formData.level}</p>
//                                 <p>מוצרים: {formData.product.join(', ')}</p>
//                                 <p>הוראות: {formData.directions.join(', ')}</p>
//                                 <p>תגים: {formData.tags.join(', ')}</p>
//                                 <button onClick={handleFinalApproval} className="submit-button">אישור סופי</button>
//                                 <button onClick={() => setShowModal(false)} className="cancel-button">ביטול</button>
//                             </div>
//                         </div>
//                     )}

//                     <form onSubmit={handleSubmit} className="admin-edit-form">
//                         <label>Recipe Name:</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             className="form-input"
//                             style={{ whiteSpace: 'pre-wrap' }} // יישום שבירת שורות
//                         />

//                         <label>Servings:</label>
//                         <input
//                             type="number"
//                             name="servings"
//                             value={formData.servings}
//                             onChange={handleChange}
//                             className="form-input"
//                             style={{ whiteSpace: 'pre-wrap' }} // יישום שבירת שורות
//                         />

//                         <label>Type:</label>
//                         <input
//                             type="text"
//                             name="type"
//                             value={formData.type}
//                             onChange={handleChange}
//                             className="form-input"
//                             style={{ whiteSpace: 'pre-wrap' }} // יישום שבירת שורות
//                         />

//                         <label>Time:</label>
//                         <input
//                             type="text"
//                             name="time"
//                             value={formData.time}
//                             onChange={handleChange}
//                             className="form-input"
//                             style={{ whiteSpace: 'pre-wrap' }} // יישום שבירת שורות
//                         />

//                         <label>Level:</label>
//                         <input
//                             type="text"
//                             name="level"
//                             value={formData.level}
//                             onChange={handleChange}
//                             className="form-input"
//                             style={{ whiteSpace: 'pre-wrap' }} // יישום שבירת שורות
//                         />

//                         <label>Products:</label>
//                         {formData.product.map((item, index) => (
//                             <input
//                                 key={index}
//                                 type="text"
//                                 value={item}
//                                 onChange={(e) => handleArrayChange(e, index, 'product')}
//                                 className="form-input"
//                                 style={{ whiteSpace: 'pre-wrap' }} // יישום שבירת שורות
//                             />
//                         ))}

//                         <label>Directions:</label>
//                         {formData.directions.map((item, index) => (
//                             <input
//                                 key={index}
//                                 type="text"
//                                 value={item}
//                                 onChange={(e) => handleArrayChange(e, index, 'directions')}
//                                 className="form-input"
//                                 style={{ whiteSpace: 'pre-wrap' }} // יישום שבירת שורות
//                             />
//                         ))}

//                         <label>Tags:</label>
//                         {formData.tags.map((item, index) => (
//                             <input
//                                 key={index}
//                                 type="text"
//                                 value={item}
//                                 onChange={(e) => handleArrayChange(e, index, 'tags')}
//                                 className="form-input"
//                                 style={{ whiteSpace: 'pre-wrap' }} // יישום שבירת שורות
//                             />
//                         ))}

//                         <button type="submit" className="submit-button">עדכון מתכון</button>
//                     </form>
//                 </>
//             ) : (
//                 <p>Loading recipe...</p>
//             )}
//         </div>
//     );
// }

// export default AdminEditRecipe;






import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import style from './style.module.css';

function AdminEditRecipe() {
    const { id } = useParams();
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

    // פונקציה להבאת נתוני המתכון מהשרת
    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/recipe/${id}`);
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
    }, [id]);

    // פונקציה לטיפול בשינויים בשדות הטופס
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // פונקציה לטיפול בשינויים במערכים (מוצרים, הוראות, תגים)
    const handleArrayChange = (e, index, field) => {
        const newArray = [...formData[field]];
        newArray[index] = e.target.value;
        setFormData({ ...formData, [field]: newArray });
    };

    const handleAddProduct = () => {
        setFormData({ ...formData, product: [...formData.product, ''] });
    };

    const handleRemoveProduct = (index) => {
        const newProduct = [...formData.product];
        newProduct.splice(index, 1);
        setFormData({ ...formData, product: newProduct });
    };


    const handleAddDirections = () => {
        setFormData({ ...formData, product: [...formData.product, ''] });
    };

    const handleRemoveDirections = (index) => {
        const newDirections = [...formData.directions];
        newDirections.splice(index, 1);
        setFormData({ ...formData, directions: newDirections });
    };


    const handleAddTags = () => {
        setFormData({ ...formData, tags: [...formData.tags, ''] });
    };

    const handleRemoveTags = (index) => {
        const newTags = [...formData.tags];
        newTags.splice(index, 1);
        setFormData({ ...formData, tags: newTags });
    };



    // פונקציה לשליחת הנתונים המעודכנים לשרת
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleFinalApproval = async () => {
        try {
            const response = await axios.patch(`http://localhost:8000/api/recipe/update/${id}`, formData);
            console.log("Recipe updated:", response.data);
            alert("Recipe updated successfully!");
            setShowModal(false);
        } catch (error) {
            console.error("Error updating recipe:", error);
        }
    };

    return (
        <div className={style.adminEditContainer}>
            {recipe ? (
                <>
                    {showModal && (
                        <div className={style.modal}>
                            <div className={style.modalContent}>
                                <h2>תוצאה סופית</h2>
                                <p>שם המתכון: {formData.name}</p>
                                <p>מנות: {formData.servings}</p>
                                <p>סוג: {formData.type}</p>
                                <p>זמן: {formData.time}</p>
                                <p>רמת קושי: {formData.level}</p>
                                <p>מוצרים: {formData.product.join(', ')}</p>
                                <p>הוראות: {formData.directions.join(', ')}</p>
                                <p>תגים: {formData.tags.join(', ')}</p>
                                <button onClick={handleFinalApproval} className="submit-button">אישור סופי</button>
                                <button onClick={() => setShowModal(false)} className="cancel-button">ביטול</button>
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
                            style={{ whiteSpace: 'pre-wrap' }}
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
                        <button type="button" onClick={handleAddProduct}>להוסיף מוצר </button>

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
                                <button type="button" onClick={() => handleRemoveDirections(index)}>להסיר</button>
                            </div>
                        ))}
                        <button type="button" onClick={handleAddDirections}>להוסיף הוראת הכנה</button>

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
                                <button type="button" onClick={() => handleRemoveTags(index)}>להסיר</button>
                            </div>
                        ))}
                        <button type="button" onClick={handleAddTags}>להוסיף תג</button>

                        <button type="submit" className="submit-button">עדכון מתכון</button>
                    </form>
                </>
            ) : (
                <p>Loading recipe...</p>
            )}
        </div>
    );
}

export default AdminEditRecipe;
