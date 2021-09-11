import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='pt-8 w-full bg-footer text-fargobrown h-80 lg:h-72 lg:pt-0 z-50 '>
            <div className='flex space-x-40 text-sm lg:mx-40'>
                <div className='leading-8 ml-10 lg:relative lg:top-20'>
                    <Link href='/'><a className='block ' >About Wells Fargo</a></Link>
                    <Link href='/'><a className='block ' >Careers</a></Link>
                    <Link href='/'><a className='block ' >Privacy, Cookies, Security & Legal</a></Link>
                    <Link href='/'><a className='block ' >Report Fraud</a></Link>

                </div>                
                <div className='relative leading-8 right-10 lg:relative lg:top-20'>
                    <Link href='/'><a className='block lg:inline-block' >Sitemap</a></Link>
                    <Link href='/'><a className='block lg:ml-4 lg:inline-block lg:border-l lg:pl-6 lg:-pt-4 lg:border-red-900' >Home</a></Link>
                    <Link href='/'><a className='block lg:inline-block lg:border-l lg:pl-6 lg:-pt-4 lg:border-red-900 lg:ml-4' >Ad Choices</a></Link>
                    <Link href='/'><a className='block lg:inline-block lg:border-l lg:pl-6 lg:-pt-4 lg:border-red-900 lg:ml-4' >Online Security</a></Link>

                </div>




            </div>

            <div className='mt-10 text-center text-xs lg:relative lg:mt-36'>
                <span>&copy; 1992 - 2021 Wells Fargo. All rights reserved. NMLSR ID 213456</span>
            </div>



        </div>
    )
}

export default Footer
