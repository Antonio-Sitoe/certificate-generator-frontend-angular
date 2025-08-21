import { cva, VariantProps } from 'class-variance-authority';

export type zInputIcon = 'email' | 'password' | 'text';

export const inputVariants = cva('', {
  variants: {
    zType: {
      default:
        'flex rounded-md border px-4 font-normal border-gray-200 bg-transparent text-base md:text-sm ring-offset-white file:border-0 file:text-gray-900 file:bg-transparent file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      textarea:
        'flex min-h-[80px] rounded-md border border-gray-200 bg-white px-3 py-2 text-base ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
    },
    zSize: {
      default: 'h-10 py-2 file:max-md:py-0',
      sm: 'h-9 file:md:py-2 file:max-md:py-1.5',
      lg: 'h-11 py-1 file:md:py-3 file:max-md:py-2.5',
    },
    zStatus: {
      error: 'border-red-500 focus-visible:ring-red-500',
      warning: 'border-yellow-500 focus-visible:ring-yellow-500',
      success: 'border-green-500 focus-visible:ring-green-500',
    },
    zBorderless: {
      true: 'border-0 focus-visible:ring-0 focus-visible:ring-offset-0',
    },
  },
  defaultVariants: {
    zType: 'default',
    zSize: 'default',
  },
});

export type ZardInputVariants = VariantProps<typeof inputVariants>;
