import React from 'react'

const username = async ({ params }) => {
    const { username } = await params;
    
    return (
        <>
           <PayementPage  username={params.username} />
        </>
    )
}

export default username