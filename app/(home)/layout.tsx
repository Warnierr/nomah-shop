import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/lib/constants'

// Load the Geist Sans font with a CSS variable for styling
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

// Load the Geist Mono font with a CSS variable for styling
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

// Define metadata for the application
export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`, // Dynamic page title template
    default: `${APP_NAME}. ${APP_SLOGAN}`, // Default title when no specific title is provided
  },
  description: APP_DESCRIPTION, // Meta description for SEO
}

// Root layout component wrapping the entire application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      {' '}
      {/* Set the default language to English */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} // Apply font variables and enable anti-aliasing
      >
        {children} {/* Render the child components inside the body */}
      </body>
    </html>
  )
}
