import { cva, VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-blue-500 focus-visible:ring-blue-500/50 focus-visible:ring-[3px] aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500",
  {
    variants: {
      zType: {
        default: 'bg-[#334EA9] text-white shadow-xs hover:bg-[#2a3f8f]',
        destructive:
          'bg-red-500 text-white shadow-xs hover:bg-red-500/90 focus-visible:ring-red-500/20 dark:focus-visible:ring-red-500/40',
        outline:
          'border border-gray-200 bg-white shadow-xs hover:bg-gray-50 hover:text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700',
        secondary:
          'bg-[#1A2856] text-white shadow-xs hover:bg-[#1A2856]/80 disabled:opacity-50 disabled:cursor-not-allowed',
        ghost:
          'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800',
        link: 'text-[#334EA9] underline-offset-4 hover:underline',
      },
      zSize: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
      zShape: {
        default: 'rounded-md',
        circle: 'rounded-full',
        square: 'rounded-none',
      },
      zFull: {
        true: 'w-full',
      },
      zLoading: {
        true: 'opacity-50 pointer-events-none',
      },
    },
    defaultVariants: {
      zType: 'default',
      zSize: 'default',
      zShape: 'default',
    },
  }
);
export type ZardButtonVariants = VariantProps<typeof buttonVariants>;
