import React from 'react'
import Header from '../../components/Header'
import VerificationForm from '../../components/VerificationForm'
import { StateMachineProvider } from 'little-state-machine'

const Verify = () => {
    return (
        <>
            <Header />
            <form className='bg-gray-100'>
                <StateMachineProvider>
                    <VerificationForm />
                </StateMachineProvider>
            </form>
        </>
    )
}
export default Verify
