import './globals.css'
import { Inter, Caveat } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata = {
  title: 'Memu Timeline',
  description: 'A pixel-perfect recreation of the Memu timeline component',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <body className="bg-[#f6f6f6] min-h-screen font-sans antialiased text-[#111111]">
        {children}
      </body>
    </html>
  )
}