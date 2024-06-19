import React from 'react'
import Navigation from './Navigation'
import Link from 'next/link'
import DarkMode from './DarkMode'
import useServerDarkMode from '@/hooks/use-server-dark-mode'

export default function Header() {
    const theme = useServerDarkMode()
    return (
        <header className="flex justify-between md:items-center mt-4">
            <div className="flex items-center md:space-x-12">
                <div className="hidden md:block">
                    <Link href="/" className="text-xl font-mono">Awesome Blog</Link>
                </div>
                <Navigation />
            </div>
            <div>
                <DarkMode defaultTheme={theme} />
            </div>

        </header>
    )
}
