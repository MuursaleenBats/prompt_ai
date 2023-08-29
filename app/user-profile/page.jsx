'use client'

import React, { useState } from 'react'
import { useSession } from 'next-auth/react';
import Image from 'next/image';
const UserProfile = () => {

const {data: session} = useSession();

  return (
        <section className='w-full'>
            <h1 className='head_text orange_gradient'>User Profile</h1>
            <Image
                src={session?.user.image}
                width={120}
                height={120}
                className='rounded-full mt-10'
                alt='Profile'
            />

            <h1 className='text-3xl font-extrabold text-left mt-3'>{session?.user.name}</h1>
            <p className='text-xl text-left'>{session?.user.email}</p>
        
    </section>
  )
}

export default UserProfile