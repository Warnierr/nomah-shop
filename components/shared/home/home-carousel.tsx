'use client' // Indicates that this component runs on the client side in Next.js

import * as React from 'react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay' // Plugin for autoplay functionality in the carousel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel' // Importing UI components for the carousel
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HomeCarousel({
  items,
}: {
  items: {
    image: string
    url: string
    title: string
    buttonCaption: string
  }[]
}) {
  // Reference for the autoplay plugin, with a 3-second delay and stopping on user interaction
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <Carousel
      dir='ltr' // Left-to-right direction
      plugins={[plugin.current]} // Using the autoplay plugin
      className='w-full mx-auto ' // Full width and centered
      onMouseEnter={plugin.current.stop} // Stops autoplay when mouse hovers over the carousel
      onMouseLeave={plugin.current.reset} // Resumes autoplay when mouse leaves
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.title}>
            <Link href={item.url}>
              <div className='flex aspect-[16/6] items-center justify-center p-6 relative -m-1'>
                {/* Background image for each carousel item */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover' // Ensures the image covers the entire container
                  priority // Ensures this image loads quickly
                />
                {/* Overlay text and button */}
                <div className='absolute w-1/3 left-16 md:left-32 top-1/2 transform -translate-y-1/2'>
                  <h2 className='text-xl md:text-6xl font-bold mb-4 text-primary'>
                    {item.title} {/* Displaying the title */}
                  </h2>
                  <Button className='hidden md:block'>
                    {item.buttonCaption} {/* Button text */}
                  </Button>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Previous and Next navigation buttons */}
      <CarouselPrevious className='left-0 md:left-12' />
      <CarouselNext className='right-0 md:right-12' />
    </Carousel>
  )
}
