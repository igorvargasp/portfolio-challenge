'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
   <div className="flex w-full lg:justify-end justify-center lg:pr-16 mb-10">
   <label className="relative inline-flex items-center cursor-pointer">
   <input type="checkbox" value="" className="sr-only peer" onChange={() => setTheme(theme === "light" ? 'dark' : "light")}/>
   <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
   <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{theme}</span>
   </label>
   </div>
  )
}