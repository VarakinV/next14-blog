'use client'

import useDarkMode from '@/hooks/use-dark-mode'
import { Moon_Dance } from 'next/font/google'
import React from 'react'

const nextModeIcons = {
  'dark': '🌝',
  'light': '🌚'
}

export default function DarkMode({ defaultTheme }) {
  const { theme, toggleTheme } = useDarkMode(defaultTheme)
  return (
    <button onClick={toggleTheme}>{nextModeIcons[theme]}</button>
  )
}
