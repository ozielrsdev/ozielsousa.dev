import type { HtmlHTMLAttributes } from 'react'
import { tv } from 'tailwind-variants'

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  className?: string
}

const buttonVariants = tv({
  base: 'btn hover:scale-110 inline-flex justify-center items-center gap-2 font-medium transition-all rounded py-1.5 px-2.5',

  variants: {
    variant: {
      primary:
        'border border-emerald-300 text-emerald-300 hover:bg-emerald-300 hover:text-gray-800',
      secondary:
        'bg-emerald-300 text-gray-800 hover:border border-emerald-300 hover:text-emerald-300 hover:bg-gray-800 ring-emerald-500',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export const Button = ({ variant, className, ...props }: ButtonProps) => {
  return (
    <button className={buttonVariants({ variant, className })} {...props} />
  )
}
