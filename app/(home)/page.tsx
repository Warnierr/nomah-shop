import { clsx, type ClassValue } from 'clsx' // Import clsx for conditional class name merging
import { twMerge } from 'tailwind-merge' // Import twMerge to merge Tailwind CSS classes properly

// Function to merge class names efficiently
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)) // Combine class names using clsx and merge Tailwind classes with twMerge
}
