'use client'
import React from 'react'
import { useState } from 'react'

const UseStateForm = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            email,
            password,
        });
        setEmail('')
        setPassword('')
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
        console.log('now email is moving')
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
        console.log('now password is moving')
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email"id='email' value={email} onChange={handleChangeEmail} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' name='password' value={password} onChange={handleChangePassword} />
                </div>
                <div>
                    <button type='submit'>ログイン</button>
                </div>
            </form>
        </div>
    )
}

export default UseStateForm