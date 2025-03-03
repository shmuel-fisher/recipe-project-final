

import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import DataContext from '../context/DataContext';
import style from './style.module.css';

function Login() {
    const { curentUser, setCurentUser } = useContext(DataContext);
    const navigate = useNavigate();

    const [lName, setLName] = useState('');
    const [fName, setFName] = useState('');
    const [password, setPassword] = useState('');
    const [flag, setFlag] = useState(true);
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handelLNameChange = (event) => setLName(event.target.value);
    const handelFNameChange = (event) => setFName(event.target.value);
    const handelPasswordChange = (event) => setPassword(event.target.value);

    const validateForm = () => {
        const newErrors = {};
        if (!lName.trim()) newErrors.lName = 'חובה למלא שם משפחה';
        if (!fName.trim()) newErrors.fName = 'חובה למלא שם פרטי';
        if (!password.trim()) newErrors.password = 'חובה למלא סיסמא';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    async function handelSubmit(e) {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const user = await axios.post(`http://localhost:8000/api/user/find`, { lName, fName, password });
            setCurentUser(user.data);
            user.data._id ? navigate('/') : setFlag(false);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className={style.container}>
            <Link className={style.link} to='/'>חזרה</Link>
            <form className={style.loginFrom} onSubmit={handelSubmit}>
                <div>
                    <input
                        type="text"
                        value={lName}
                        onChange={handelLNameChange}
                        placeholder='שם משפחה'
                    />
                    {errors.lName && <span className={style.error}>{errors.lName}</span>}
                </div>
                <br />
                <div>
                    <input
                        type="text"
                        value={fName}
                        onChange={handelFNameChange}
                        placeholder='שם פרטי'
                    />
                    {errors.fName && <span className={style.error}>{errors.fName}</span>}
                </div>
                <br />
                <div className={style.passwordContainer}>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handelPasswordChange}
                        placeholder='סיסמא'
                    />
                    <button
                        type="button"
                        className={style.eyeButton}
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? '👁️‍🗨️' : '👁️'}
                    </button>
                    {errors.password && <span className={style.error}>{errors.password}</span>}
                </div>
                <br />
                <input type="submit" value="התחבר" />
            </form>
            {!flag && (
                <>
                    <p>המשתמש לא נמצא במערכת</p>
                    <br />
                    <Link to="/Signin">
                        <p>להרשמה לחץ 👈 </p>
                    </Link>
                </>
            )}
        </div >
    );
}

export default Login;
