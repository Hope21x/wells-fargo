import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <>

            <div className='fixed z-3 top-0 justify-center flex border-b-4 border-yellow-300 bg-fargohead w-full xl:-space-x-9'>
                <div className='flex relative ml-32'>
                    <div className='relative lg:mb-4 mt-5 w-32 lg:top-2 mr-4 xl:w-52 xl:right-72 xl:top-0 -right-6'>
                        <Wels />
                    </div>
                    <div className='flex space-x-5 xl:space-x-3 relative mt-1 lg:mb-4 lg:mt-4 left-28 text-xs lg:text-sm top-1 xl:left-32'>
                        <Secure />

                        <Link href=''><a className='mt-2 lg:mt-0 text-white '>Enroll</a></Link>
                        <Link href=''><a className='text-white'>Customer Service</a></Link>
                        <Link href=''><a className='invisible sm:visible text-white '>ATMs/Locations</a></Link>
                        <Link href=''><a className='invisible sm:visible text-white'>Español</a></Link>
                    </div>
                </div>
                <div className='invisible sm:visible mt-3 relative left-12 lg:left-48'>
                    <input className='outline-none relative h-9 rounded-lg w-24 text-xs' placeholder='  Search' />
                    <div className='absolute top-0 left-14 top-2'>
                        <Search />
                    </div>
                </div>
            </div>




        </>

    )
}
const Wels = () => {
    return (
        <svg viewBox="0 0 211 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <title>BIM/logo/large-211x22</title>
            <desc>Created with Sketch.</desc>
            <g id="BIM/logo/large-211x22" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect fill="#D71E28" x="0" y="0" width="211" height="22"></rect>
                <g id="Wells_Fargo" fill="#FFFFFF" fillRule="nonzero">
                    <path d="M45.112,14.1709 L47.1692,14.1709 L47.1692,21 L29.9977,21 L29.9977,18.5142 L32.4262,18.5142 L32.4262,3.4854 L28.4862,3.4854 L23.4857,21 L19.5143,21 L15.457,6.4855 L11.2859,21 L7.3142,21 L2.2857,3.4854 L0,3.4854 L0,1 L9.3143,1 L9.3143,3.4854 L6.6286,3.4854 L9.9713,15.5426 L13.9715,1 L18.0857,1 L22.1715,15.5716 L25.4574,3.4854 L22.6574,3.4854 L22.6574,1 L46.8836,1 L46.8836,7.4854 L44.8263,7.4854 L44.6263,6.7139 C43.9979,4.3139 43.3408,3.4854 41.4263,3.4854 L36.6832,3.4854 L36.6832,9.514 L42.4263,9.514 C42.6441895,9.93766455 42.7522903,10.40923 42.7407,10.8855 C42.7554638,11.3802266 42.647447,11.8709062 42.4263,12.3137 L36.6832,12.3137 L36.6832,18.5137 L41.6261,18.5137 C43.4834,18.5137 44.312,17.7137 44.8835,15.1707 L45.112,14.1709 Z M63.1676,15.1709 C62.596,17.7137 61.7961,18.5139 59.9101,18.5139 L55.9387,18.5139 L55.9387,3.4854 L58.6531,3.4854 L58.6531,1 L49.2531,1 L49.2531,3.4854 L51.6816,3.4854 L51.6816,18.5142 L49.2532,18.5142 L49.2531,21 L65.4532,21 L65.4532,14.1709 L63.396,14.1709 L63.1676,15.1709 Z M81.166,15.1709 C80.5945,17.7137 79.7945,18.5139 77.9085,18.5139 L73.9374,18.5139 L73.9374,3.4854 L76.6515,3.4854 L76.6515,1 L67.2515,1 L67.2515,3.4854 L69.68,3.4854 L69.68,18.5142 L67.2513,18.5142 L67.2513,21 L83.4513,21 L83.4513,14.1709 L81.3943,14.1709 L81.166,15.1709 Z M96.2213,9.2854 L92.5926,8.4568 C90.4785,7.971 89.5926,7.1426 89.5926,5.7425 C89.5927,4.0567 90.9356,3 93.5641,3 C96.1926,3 97.7355,3.9429 98.3357,6.1713 L98.5929,7.1429 L100.6499,7.1429 L100.6499,2.2 C98.404581,1.04498917 95.9177583,0.437838599 93.3928,0.4282 C88.5069,0.4282 85.3644,2.771 85.3644,6.5425 C85.3644,9.4567 87.1929,11.5995 90.7069,12.371 L94.3356,13.171 C96.65,13.6852 97.507,14.5995 97.507,16.1139 C97.507,17.9712 96.107,18.9995 93.307,18.9995 C90.1353,18.9995 88.507,17.7424 87.7924,15.3424 L87.4212,14.1139 L85.3642,14.1139 L85.3642,19.7139 C87.978495,21.0158067 90.8732348,21.6536976 93.7926,21.5712 C98.5926,21.5712 101.7354,19.1712 101.7354,15.428 C101.7356,12.2855 99.8212,10.1139 96.2213,9.2854 Z M123.7613,3.4854 C125.6755,3.4854 126.3329,4.3138 126.9613,6.7139 L127.1613,7.4854 L129.2185,7.4854 L129.2185,1 L111.99,1 L111.99,3.4854 L114.4187,3.4854 L114.4187,18.5142 L111.99,18.5142 L111.99,21 L121.5332,21 L121.5332,18.5142 L118.6758,18.5142 L118.6758,12.6852 L124.5616,12.6852 C124.782771,12.2424146 124.890789,11.7517289 124.876,11.257 C124.887659,10.780723 124.779554,10.3091409 124.5616,9.8855 L118.6758,9.8855 L118.6758,3.4855 L123.7613,3.4854 Z M167.3013,18.7424 C167.644229,19.4858606 167.644229,20.3422394 167.3013,21.0857 C166.56243,21.1813604 165.818136,21.229027 165.0731,21.2284 C162.3016,21.2284 160.9586,20.0855 160.6443,17.4284 L160.5299,16.4284 C160.1871,13.5429 159.2441,12.4284 156.1014,12.4284 L154.53,12.4284 L154.53,18.5143 L157.2443,18.5143 L157.2443,21 L139.2743,21 L139.2743,18.5142 L141.6171,18.5142 L140.3026,14.9425 L132.8743,14.9425 L131.56,18.5142 L133.96,18.5142 L133.96,21 L126.3883,21 L126.3883,18.5142 L128.3883,18.5142 L135.3883,0.9997 L139.1883,0.9997 L146.3312,18.5142 L150.2722,18.5142 L150.2722,3.4854 L147.8437,3.4854 L147.8437,1 L159.33,1 C163.4158,1 166.0729,3.0286 166.0729,6.2857 C166.0729,9.5143 163.4158,11.2286 160.8442,11.3429 L160.8442,11.4286 C163.4442,11.6286 164.5015,13.0856 164.7584,15.3429 L164.8728,16.3999 C165.0443,18.0571 165.3871,18.7999 166.7016,18.7999 C166.902733,18.7977246 167.103319,18.7784889 167.3012,18.7424 L167.3013,18.7424 Z M139.3887,12.5138 L136.5887,4.9426 L133.7887,12.5138 L139.3887,12.5138 Z M161.7587,6.6855 C161.7587,4.5996 160.4732,3.4855 157.9016,3.4855 L154.53,3.4855 L154.53,9.9139 L157.9014,9.9139 C160.4442,9.9139 161.7584,8.7425 161.7584,6.6855 L161.7587,6.6855 Z M178.8213,11.8855 C178.803087,12.3714846 178.911315,12.8538766 179.1354,13.2855 L182.5354,13.2855 L182.5354,18.3429 C181.466074,18.7825917 180.320179,19.0058973 179.164,18.9999 C175.0498,18.9999 172.9066,16.057 172.9066,10.9714 C172.9066,5.8858 175.0498,2.9428 178.9353,2.9428 C181.211582,2.82573104 183.274467,4.27560941 183.9353,6.457 L184.2494,7.257 L186.3066,7.257 L186.3066,2.1424 C183.957094,0.964997055 181.363082,0.358145958 178.7351,0.3711 C172.45,0.3711 168.221,4.5712 168.221,11 C168.221,17.4571 172.3352,21.5717 178.7351,21.5717 C181.529771,21.4974731 184.268764,20.7734888 186.7351,19.4571 L186.7351,10.5425 L179.1351,10.5425 C178.914342,10.9548397 178.806013,11.4180245 178.821,11.8855 L178.8213,11.8855 Z M210.6266,10.9712 C210.608634,16.8285137 205.855291,21.5672984 199.99795,21.5672984 C194.140609,21.5672984 189.387266,16.8285137 189.3693,10.9712 C189.387266,5.11388635 194.140609,0.375101649 199.99795,0.375101649 C205.855291,0.375101649 210.608634,5.11388635 210.6266,10.9712 Z M205.9408,10.9712 C205.9408,5.9139 203.8551,2.9712 199.9978,2.9712 C196.1405,2.9712 194.0551,5.9141 194.0551,10.9712 C194.0551,16.0568 196.1123,18.9712 199.9978,18.9712 C203.8833,18.9712 205.9405,16.0568 205.9405,10.9712 L205.9408,10.9712 Z" id="Shape"></path>
                </g>
            </g>
        </svg>
    )
}

const Secure = () => {
    return (
        <div className='relative left-4 top-1 lg:top-0 lg:left-2 ' >
            <svg width="16px" height="19px" viewBox="0 0 15 21" ariaHidden="true" role="img" fill="#FFFFFF" class="CombinationLockIcon__lock___2OM8B" focusable="false"><path d="M7.3 19.2c-3 0-5.5-2.5-5.5-5.5 0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5C12.8 16.7 10.3 19.2 7.3 19.2zM4.1
          5c0-1.8 1.4-3.2 3.2-3.2 1.8 0 3.2 1.4 3.2 3.2v2.1C9.5 6.6 8.5 6.4 7.3 6.4c-1.1 0-2.2 0.3-3.2 0.7V5zM12.4
          8.5V5.1C12.4 2.3 10.1 0 7.3 0 4.5 0 2.2 2.3 2.2 5.1v3.4C0.8 9.8 0 11.6 0 13.7 0 17.7 3.3 21 7.3
          21s7.3-3.3 7.3-7.3C14.6 11.6 13.8 9.8 12.4 8.5L12.4 8.5zM7.3 12.1c0.3 0 0.5-0.2 0.5-0.5V9.4c0-0.3-0.2-0.5-0.5-0.5
          -0.3 0-0.5 0.2-0.5 0.5v2.3C6.9 11.9 7.1 12.1 7.3 12.1zM5.8 13.7c0-0.3-0.2-0.5-0.5-0.5H3c-0.3 0-0.5 0.2-0.5 0.5 0
          0.3 0.2 0.5 0.5 0.5h2.3C5.6 14.2 5.8 13.9 5.8 13.7zM7.3 15.2c-0.3 0-0.5 0.2-0.5 0.5v2.3c0 0.3 0.2 0.5 0.5 0.5
          0.3 0 0.5-0.2 0.5-0.5v-2.3C7.8 15.5 7.6 15.2 7.3 15.2zM8.9 13.7c0 0.3 0.2 0.5 0.5 0.5h2.3c0.3 0 0.5-0.2 0.5-0.5
          0-0.3-0.2-0.5-0.5-0.5H9.3C9.1 13.2 8.9 13.4 8.9 13.7zM6.2 12.6c0.2-0.2 0.2-0.5 0-0.6L4.6 10.3c-0.2-0.2-0.5-0.2-0.6 0
          -0.2 0.2-0.2 0.5 0 0.6l1.6 1.6C5.8 12.8 6 12.8 6.2 12.6zM6.2 14.8c-0.2-0.2-0.5-0.2-0.6 0l-1.6 1.6c-0.2 0.2-0.2 0.5 0
          0.6 0.2 0.2 0.5 0.2 0.6 0l1.6-1.6C6.4 15.3 6.4 15 6.2 14.8zM8.4 14.8c-0.2 0.2-0.2 0.5 0 0.6l1.6 1.6c0.2 0.2 0.5 0.2
          0.6 0 0.2-0.2 0.2-0.5 0-0.6l-1.6-1.6C8.9 14.6 8.6 14.6 8.4 14.8zM8.4 12.6c0.2 0.2 0.5 0.2 0.6 0l1.6-1.6c0.2-0.2 0.2-0.5 0-0.6
          -0.2-0.2-0.5-0.2-0.6 0l-1.6 1.6C8.2 12.1 8.2 12.4 8.4 12.6z"></path></svg>
        </div>
    )
}

const Search = () => {
    return (
        <div>
            <svg width="20px" height="20px" viewBox="0 0 20 20" ariaHidden="true" role="img" focusable="false"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-720.000000, -18.000000)" fill="#3b3331"><g transform="translate(659.000000, 10.000000)"><g transform="translate(61.000000, 8.000000)"><path d="M19.633175,17.9638111 L14.1574098,12.4856873 C15.1389485,11.1469131 15.664755,9.52836696 15.6574238,7.86831972 C15.6386954,3.53504559 12.1339938,0.0251075646 7.80092209,7.96007691e-05 C5.72730302,-0.00930269987 3.73605767,0.81105703 2.27077918,2.27840585 C0.805500694,3.74575466 -0.0120928677,5.73820252 0.000135215858,7.8118884 C0.0188635483,12.145557 3.52388496,15.6558148 7.85735118,15.6808428 C9.52409554,15.688067 11.1484911,15.1561022 12.4881086,14.1643404 L12.4938229,14.1600545 L17.9645881,19.6338924 C18.2603749,19.9442125 18.7011175,20.0698227 19.1160487,19.9620551 C19.5309799,19.8542875 19.8549019,19.5300753 19.9623101,19.1150357 C20.0697184,18.6999962 19.9437359,18.2593439 19.633175,17.9638111 L19.633175,17.9638111 Z M7.85163685,14.1121951 C4.38505325,14.0922527 1.58108171,11.284347 1.56586407,7.81760296 C1.55650769,6.15886911 2.21063635,4.56523094 3.38263843,3.3914386 C4.55464052,2.21764625 6.14724151,1.56112283 7.80592213,1.56801306 C11.2725057,1.58795544 14.0764773,4.39586112 14.0916949,7.86260515 C14.1010513,9.521339 13.4469226,11.1149772 12.2749205,12.2887695 C11.1029185,13.4625619 9.51031747,14.1190853 7.85163685,14.1121951 Z"></path></g></g></g></g></svg>
        </div>
    )
}

export default Header
