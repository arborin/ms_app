import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

export default function ContactForm() {



    const schema = yup.object().shape({
        fullName: yup.string().required('აუცილებელი ველი'),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(10).required(),
        password: yup.string().min(4).max(10).required(),
        // confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required(),
    })


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmitHandler = (data) => {
        console.log({ data });
        console.log("FORM SUBMIT");
    }


    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <br />
            <input type='text' placeholder='Full name' {...register('fullName')} />
            <p>{errors.fullName?.message}</p>
            <br />
            <input type='email' placeholder='Email'  {...register('email')} />
            <p>{errors.email?.email}</p>
            <br />
            <input type='text' placeholder='Age'  {...register('age')} />
            <p>{errors.age?.age}</p>
            <br />
            <input type='text' placeholder='Password'  {...register('password')} />
            <p>{errors.password?.password}</p>
            <br />
            <input type='text' placeholder='Confirm password'  {...register('confirmPassword')} />
            <p>{errors.confirmPassword?.confirmPassword}</p>
            <br />
            <input type='submit' value="send" />
        </form>
    )
}