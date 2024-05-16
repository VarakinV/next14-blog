import React from 'react'
import Navigation from './Navigation'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="flex justify-between md:items-center mt-4">
            <div className="flex items-center md:space-x-12">
                <div className="hidden md:block">
                    <Link href="/" className="text-xl">Awesome Blog</Link>
                </div>
                <Navigation />
            </div>
            <div>
                Dark Toggle
            </div>

        </header>
    )
}
