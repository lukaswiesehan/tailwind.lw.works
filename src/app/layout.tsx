import type {Metadata} from 'next'
import {Lato, Sora, JetBrains_Mono} from 'next/font/google'
import './globals.css'
import {cn} from '@/utils/cn'
import {AuroraBackground} from '@/components/aurora-background'

const lato = Lato({weight: ['400', '700'], subsets: ['latin'], display: 'swap', variable: '--font-lato'})
const sora = Sora({weight: '800', subsets: ['latin'], display: 'swap', variable: '--font-sora'})
const mono = JetBrains_Mono({weight: '300', subsets: ['latin'], display: 'swap', variable: '--font-mono'})

export const metadata: Metadata = {
  title: 'Lukas Wiesehan – Design Engineer',
  description: `I'm Lukas, a self-tought Design Engineer from Germany. This is my interactive application for the Design Engineer role at Tailwind Labs.`,
  icons: {
    icon: [
      {
        url: '/favicon/black.ico',
        media: '(prefers-color-scheme: light)'
      },
      {
        url: '/favicon/white.ico',
        media: '(prefers-color-scheme: dark)'
      }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('relative font-sans antialiased text-slate-500', lato.variable, sora.variable, mono.variable)}>
        <div className="relative h-screen">
          <AuroraBackground />
          {children}
        </div>
      </body>
    </html>
  )
}
