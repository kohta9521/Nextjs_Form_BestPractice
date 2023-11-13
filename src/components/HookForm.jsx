'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

const HookForm = () => {
    const {
        register,
        handleSubmit,
        formState: { isDirty, isValid, errors },
    } = useForm({
        defaultValues: { email: '', password: '' },
        criteriaMode: 'all',
    });

    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <h1>Hook Form Login!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id='email'
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'Email is required',
                            },
                        })}
                    />
                    {errors.email?.message && <div>{errors.email?.message}</div>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id='password'
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'Password is required',
                            },
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters',
                            },
                        })}
                        type='password'
                    />
                </div>
                <button type='submit' disabled={!isDirty}>Submit</button>
            </form>
            <div>
                {/* <p>{getValues('email')}</p> */}
                {/* <p>{watch('email')}</p> */}
            </div>
        </div>
    )
}


export default HookForm