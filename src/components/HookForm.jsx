'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

const HookForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <h1>Hook Form Login!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id='email' {...register('email', { required: '入力が必須の項目です' })} />
                    {errors.email?.message && <div>{errors.email?.message}</div>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id='password' {...register('password')} type='password' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}


export default HookForm