'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

const page = () => {

    const session = useSession();
    console.log(session, "Session");
    return (
        <div>Sign In Page</div>
    )
}

export default page