import React, { useState } from 'react'
import { useContext } from 'react'
import DataContext from '../context/DataContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import style from './style.module.css'

function Login() {

    const { curentUser, setCurentUser } = useContext(DataContext);

    const navigate = useNavigate();

    const [lName, setLName] = useState('');
    const [fName, setFName] = useState('');
    const [password, setPassword] = useState('');
    const [flag, setFlag] = useState(true);

    const handelLNameChange = (event) => {
        setLName(event.target.value);
    }

    const handelFNameChange = (event) => {
        setFName(event.target.value);

    }

    const handelPasswordChange = (event) => {
        setPassword(event.target.value)
    }
 
    async function handelSubmit(e) {
        e.preventDefault();
        try {
            const user = await axios.post(`http://localhost:8000/api/user/find`, {lName , fName
                });
            setCurentUser(user.data)
            user.data._id ? navigate('/') : setFlag(false);
        }
        catch (error) {
            console.log(error.message);
        }

    }



    return (
        <div>
            <Link to='/'>חזרה</Link>
            <form className={style.loginFrom} onSubmit={handelSubmit} >

                <input type="text"
                    value={lName}
                    onChange={handelLNameChange}
                    placeholder='שם משפחה' /> <br />

                <input type="text"
                    value={fName}
                    onChange={handelFNameChange}
                    placeholder='שם פרטי' /> <br />

                <input type="text"
                    value={password}
                    onChange={handelPasswordChange}
                    placeholder='סיסמא' /> <br />

                <input type="submit" />

            </form >

            {!flag && <Link to={'/Signin'}>
                <p>המשתמש לא נמצא במערכת</p>
                <br />
                ⟸ להרשמה
            </Link>}

        </div >
    )
}

export default Login