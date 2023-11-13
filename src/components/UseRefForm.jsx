'use client'
import React from 'react'
import { useRef } from 'react'

const UseRefForm = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            email: emailRef.current.value,
            password: passwordRef.current.value,
        });
    }

    return (
        <div>
            <h1>Login</h1>
            <h1>Ref Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' name='email' ref={emailRef} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' ref={passwordRef} />
                </div>
                <div>
                    <button type='submit'>ログイン</button>
                </div>
            </form>
        </div>
    )
}


export default UseRefForm