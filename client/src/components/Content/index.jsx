import React, { useState } from 'react'
import RecipeList from '../RecipeList'
import style from './style.module.css'
import axios from 'axios'
import { useEffect } from 'react'



function Content({ curentTag, setCurentTag, allTags, setAllTags }) {


    const [recipes, setRecipes] = useState([]);// מערך שמחזיק את כל המתכונים 


    // const getTags = (allRecipes) => {
    //     // שלב 1: איסוף כל התגים למערך אחד
    //     let tempAllTags = allRecipes.flatMap(recipe => recipe.tags);
    //     console.log(tempAllTags, "temp");

    //     // שלב 2: הסרת כפילויות
    //     const uniqueTags = [...new Set(tempAllTags)];

    //     console.log(uniqueTags, "uniqeTags");

    //     setAllTags(uniqueTags);
    //     console.log(allTags, "from content");

    // }



    //פה מופעלת הקריאה במקרה של סינון לפי תגים
    useEffect(() => {
        const importDataByTag = async () => {
            try {
                await axios.post(`http://localhost:8000/api/recipe/find/by`, {
                    field: "tags",
                    filter: curentTag
                }).then(res => {
                    setRecipes(res.data);
                })
            }
            catch (error) {
                console.log(error);
            }
        }
        curentTag && importDataByTag();
    }, [curentTag])




    //פה מופעלת הקריאה בכל כניסה לדף ומביאה את כל המתכונים
    const importData = async () => {
      let isActive =true;
        try {
            let response = await axios.post(`http://localhost:8000/api/recipe/status/${isActive}`)
            setRecipes(response.data);
            setCurentTag("");
            // getTags(response.data);
        }
        catch (error) {
            console.log(error.message);
        }

    }

    //יש שני כניסות לדף פעם אחת בLINK TO 
    //ופעם אחת ב NAVIGATE 
    // ולכן רק בצורה הזו הדף מרונדר מחדש תמיד
    useEffect(() => {
        importData();
    }, []);



    return (<div className={style.content}>
        {curentTag && <button onClick={() => importData()}>רענון</button>}
        <div className={style.item}>
            {recipes && recipes.map(item => <RecipeList
                key={item._id} item={item} />)
            }
        </div>

    </div>
    )
}

export default Content;