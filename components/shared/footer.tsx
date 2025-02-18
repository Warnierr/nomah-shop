'use client' // This directive makes the component a client component in Next.js

import { ChevronUp } from 'lucide-react' // Importing an icon component for the button
import { Button } from '../ui/button' // Importing a Button component from the UI library
import Link from 'next/link' // Importing Link from Next.js for client-side navigation
import { APP_NAME } from '@/lib/constants' // Importing the application name from constants

export default function Footer() {
  return (
    <footer className='bg-black text-white underline-link'>
      {/* Back to top button */}
      <div className='w-full'>
        <Button
          variant='ghost'
          className='bg-gray-800 w-full rounded-none'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scrolls smoothly to the top when clicked
        >
          <ChevronUp className='mr-2 h-4 w-4' /> {/* Upward arrow icon */}
          Back to top
        </Button>
      </div>

      {/* Footer content */}
      <div className='p-4'>
        {/* Links to legal pages */}
        <div className='flex justify-center gap-3 text-sm'>
          <Link href='/page/conditions-of-use'>Conditions of Use</Link>
          <Link href='/page/privacy-policy'> Privacy Notice</Link>
          <Link href='/page/help'>Help</Link>
        </div>

        {/* Copyright section */}
        <div className='flex justify-center text-sm'>
          <p> © 2000-2024, {APP_NAME}, Inc. or its affiliates</p>
        </div>

        {/* Contact information */}
        <div className='mt-8 flex justify-center text-sm text-gray-400'>
          123, Main Street, Anytown, CA, Zip 12345 | +1 (123) 456-7890
        </div>
      </div>
    </footer>
  )
}
