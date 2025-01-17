import React from 'react'
import { Link } from 'react-router-dom'
import './FormStyles.css'
import { useSearchParams } from "react-router-dom"


const Form = () => {
    let errorMessage = useSearchParams();
    errorMessage = errorMessage.toString().replaceAll('+', ' ').replaceAll('=', ' ')

    return (
        <div className='form'>
            <form action='/login' method='post'>
                {errorMessage ? <h2 className="error">{errorMessage}</h2> : ''}
                <label for='username'>Username</label>
                <input type='text' id='username' name='username' autoFocus required></input>
                <label for='password'>Password</label>
                <input type='password' id='password' name='password' required></input>
                <button className='btn'>Login</button>
                <div className='question'>
                    <Link to='/Register'> Don't have an account yet ? <span> Click here</span></Link>
                </div>
            </form>
        </div>
    )
}

export default Form 