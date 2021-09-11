import React from 'react';
import Background from '../Background';
import Header from '../Header';
import Footer from '../Footer';


export const Layout = ({children}) => {
    return (
        <>
            <div>
                <Header />
                    <Background/>
                    {children}
                <Footer />
            </div>


        </>

    )
}
