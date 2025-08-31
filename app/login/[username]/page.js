import React from 'react'

const username = ({ params }) => {
    return (
        <>
            <div className='cover w-full relative ' >
                <img className='object-cover w-full h-[400px] ' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/18.gif?token-hash=Mh-B5X0fAjX72C_3Ggf-nQMUUe4b4Os4Y0qll01wqq4%3D&token-time=1756944000" alt="" />
                <div className='absolute -bottom-18 border-2 border-black right-[46%] rounded-full ' >
                    <img className='rounded-full' width={140} height={140} src="https://i.pinimg.com/736x/35/a9/f1/35a9f133f2bade7ee32b4de5896a8011.jpg" alt="" />
                </div>
            </div>
            <div className="info flex justify-center flex-col gap-2 items-center my-20 ">
                <div className='font-bold text-lg  ' >
                    @{params.username}
                </div>
                <div className='text-black' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sint.
                </div>
                <div className='text-black' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>

            </div>
        </>
    )
}

export default username
