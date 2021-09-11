import React from 'react'
import LoginForm from '../LoginForm';
import VerificationForm from '../VerificationForm';
import { useRouter } from 'next/router'
import { StateMachineProvider } from 'little-state-machine'
import Background from '../Background';







const HomePage = () => {
    const router = useRouter()

    const renderPage = () => {
        if (nextPage > 1) {
            return undefined
        }
    }


    return { renderPage }, router.pathname === '/verify' && <VerificationForm />,

        (

            <>
                <div className='w-full lg:grid lg:place-items-center lg:my-6'>

                    {
                        <StateMachineProvider><LoginForm /></StateMachineProvider>
                    }

                </div>

            </>
        )
}
export default HomePage;


