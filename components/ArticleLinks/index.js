import React from 'react';
import Link from 'next/link';
import { HiArrowRight } from "react-icons/hi";

const ArticleLinks = () => {
    return (
        <>
            <div className='lg:visible lg:-mx-38 invisible max-w-xs absolute right-72 bottom-64 -my-10 border-t-2 border-gray-400 p-5'>
                <div className='text-sm leading-6 mb-5 border-b border-gray-400 pb-5'>
                    <h1 className='font-bold text-lg'>Related Information</h1>
                    <HiArrowRight className='absolute -ml-5 mt-1 text-gray-400' />
                    <Link href='https://www.wellsfargo.com/'><a className='block text-blue-400'>Enrollment FAQs</a></Link>
                    <HiArrowRight className='absolute -ml-5 mt-1 text-gray-400' />
                    <Link href='https://www.wellsfargo.com/'><a className='block text-blue-400'>Oniline Security Guarantee</a></Link>
                    <HiArrowRight className='absolute -ml-5 mt-1 text-gray-400' />
                    <Link href='https://www.wellsfargo.com/'><a className='block text-blue-400'>Privacy, Security and Legal</a></Link>
                    <HiArrowRight className='absolute -ml-5 mt-1 text-gray-400' />
                    <Link href='https://www.wellsfargo.com/'><a className='block text-blue-400'>Online Access Agreement</a></Link>
                </div>

                <div className='text-sm leading-6'>
                    <h1 className='font-bold text-lg'>Other Services</h1>
                    <HiArrowRight className='absolute -ml-5 mt-1 text-gray-400' />
                    <Link href='/'><a className='block text-blue-400'>Oniline Security Guarantee</a></Link>
                    <HiArrowRight className='absolute -ml-5 mt-1 text-gray-400' />
                    <Link href='/'><a className='block text-blue-400'>Privacy, Security and Legal</a></Link>
                </div>
            </div>
        </>
    )
}

export default ArticleLinks;
