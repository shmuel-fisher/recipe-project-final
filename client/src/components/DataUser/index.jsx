import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import { Link } from 'react-router-dom';
import style from './style.module.css'

function DataUser() {

  const { curentUser } = useContext(DataContext);

  return (
    <div className={style.container} >
      <div>{curentUser.lName} {curentUser.fName}</div>
       <br/><br/>
       {curentUser.favorite && <Link to={'/newRecipe'}>להוספת מתכון חדש</Link>}
       <br/><br/>
       {curentUser.favorite && <Link to={'/favoriteRecipe'}>מתכונים שאהבתי</Link>}
       <br/><br/>
       {curentUser.favorite && <Link to={'/userRecipes'}>המתכונים שלי</Link>}
       <br/><br/>
       {curentUser.admin && <Link to={'/deleteRecipe'}> עריכת מתכונים</Link>}
       {/* //צריך להיות פה לינק  לקומפוננטה(userResipes) ששם יוצג כל המתכונים שהמשתמש
      // הכניס אבל או שאני עושה קריאה לכל המתכונים על פי השדה בעלים או שאני מייצר עוד מערך בכל משתמש 
      //שבו יהיה את השמות של כל המתכונים שהוא יצר  */}
    </div>
  )
}




export default DataUser;



