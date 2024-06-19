import React from 'react'
import Image from 'next/image'
import dog1 from './../../public/images/dog1.png'
import dog2 from './../../public/images/dog2.png'
import dog3 from './../../public/images/dog3.png'
import dog4 from './../../public/images/dog4.png'
import H1 from '@/components/H1'

export const metadata = {
    title: "Photos",
    description: "This is Photos page",
};

export default function PhotosPage() {
    return (
        <div>
            <H1>My Photos</H1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-60 overflow-hidden relative">
                    <Image fill src={dog1} className="object-cover w-full h-full" alt="dog" sizes="(max-width: 768px) 100vw, 50vw" priority={true} placeholder="blur" />
                </div>
                <div className="h-60 overflow-hidden relative">
                    <Image fill src={dog2} className="object-cover w-full h-full" alt="dog" sizes="(max-width: 768px) 100vw, 50vw" priority={true} placeholder="blur" />
                </div>
                <div className="h-60 overflow-hidden relative">
                    <Image fill src={dog3} className="object-cover w-full h-full" alt="dog" sizes="(max-width: 768px) 100vw, 50vw" placeholder="blur" />
                </div>
                <div className="h-60 overflow-hidden relative">
                    <Image fill src={dog4} className="object-cover w-full h-full" alt="dog" sizes="(max-width: 768px) 100vw, 50vw" placeholder="blur" />
                </div>
            </div>
        </div>
    )
}
