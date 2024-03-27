'use client'

import {FC, ReactNode} from 'react'
import {ThemeProvider as NextThemes} from 'next-themes'
import {AuroraBackground} from './aurora-background'

export const ThemeProvider: FC<{children: ReactNode}> = ({children}) => {
  return (
    <NextThemes attribute="class" enableSystem={false}>
      <div className="relative h-screen">
        <AuroraBackground />
        <div>{children}</div>
      </div>
    </NextThemes>
  )
}
