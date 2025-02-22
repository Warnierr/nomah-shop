import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/lib/constants'

// Load the Geist Sans and Geist Mono fonts from Google Fonts
const geistSans = Geist({
  variable: '--font-geist-sans', // Define a CSS variable for the font
  subsets: ['latin'], // Load only the Latin subset
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono', // Define a CSS variable for the mono font
  subsets: ['latin'], // Load only the Latin subset
})

// Define metadata for the application
export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`, // Format title dynamically with the app name
    default: `${APP_NAME}. ${APP_SLOGAN}`, // Default title when no specific page title is provided
  },
  description: APP_DESCRIPTION, // Meta description for SEO purposes
}

// Root layout component that wraps the entire application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode // Define children as a React node
}>) {
  return (
    <html lang='en'>
      {' '}
      {/* Set the language attribute to English */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} // Apply fonts and enable antialiasing
      >
        {children} {/* Render child components inside the layout */}
      </body>
    </html>
  )
}
