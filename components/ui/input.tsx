import * as React from 'react'

import { cn } from '@/lib/utils'

// Forwarding the ref to allow parent components to access the input element
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // Base styles for the input element
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors',
          // File input specific styles
          'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
          // Placeholder and focus styles
          'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
          // Disabled state styles
          'disabled:cursor-not-allowed disabled:opacity-50',
          // Responsive styles for medium screens
          'md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

// Setting the display name for debugging purposes
Input.displayName = 'Input'

export { Input }
