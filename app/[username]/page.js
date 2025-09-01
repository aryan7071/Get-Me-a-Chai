import React from 'react'

const username = async ({ params }) => {
    const { username } = await params;
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
                    @{username}
                </div>
                <div className='text-black' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sint.
                </div>
                <div className='text-black' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>

                <div className="payment flex gap-3 w-[80%] text-white mt-11 ">
                    <div className="supporters w-1/2 rounded-lg p-10 bg-gray-900 ">
                        {/* show list of supporters as a leaderboard */}
                        <h2 className='text-3xl text-center font-bold my-5'>Supporters</h2>
                        <ul className='mx-5 text-lg'>
                            <li className='my-4 flex gap-2 items-center'>
                                <img width={33} src="avatar.gif" alt="user avatar"/>
                                <span>
                                Aryan donated <span className='font-bold'>$30</span> with a message"I support you bro. Lots of Love❤️"
                                </span>
                            </li>
                            <li className='my-4 flex gap-2 items-center'>
                                <img width={33} src="avatar.gif" alt="user avatar"/>
                                <span>
                                Aryan donated <span className='font-bold'>$30</span> with a message"I support you bro. Lots of Love❤️"
                                </span>
                            </li>
                            <li className='my-4 flex gap-2 items-center'>
                                <img width={33} src="avatar.gif" alt="user avatar"/>
                                <span>
                                Aryan donated <span className='font-bold'>$30</span> with a message"I support you bro. Lots of Love❤️"
                                </span>
                            </li>
                           
                        </ul>
                    </div>
                    <div className="makepayment w-1/2 rounded-lg p-10 bg-gray-900 ">
                        <h2 className='text-3xl text-center font-bold my-5 ' >Make a Payment</h2>
                        <div className='flex gap-2 flex-col ' >
                            {/* input for name and message */}
                            
                                <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                        
                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />

                            <button type="button" className =" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
                        </div>
                        {/* or choose these amounts */}
                        <div className='flex gap-2 mt-5'>
                            <button className='bg-slate-800 p-3 rounded-lg'>Pay $10</button>
                            <button className='bg-slate-800 p-3 rounded-lg'>Pay $20</button>
                            <button className='bg-slate-800 p-3 rounded-lg'>Pay $30</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default username