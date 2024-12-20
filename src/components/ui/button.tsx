import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import LoadingDots from '@/components/common/LoadingDots';

const buttonVariants = cva('inline-flex items-center justify-center whitespace-nowrap rounded-md font-black disabled:pointer-events-none transition', {
  variants: {
    variant: {
      default: 'bg-primary-600 text-white transition hover:opacity-90 focus-visible:outline-none',
      outline: 'text-primary-600 border border-primary-600',
      ghost: 'text-gray-400 hover:opacity-90',
      link: 'text-primary underline-offset-4 hover:underline',
      gradient: 'button-gradient',
      outlineGradient: 'button-gradient-outline'
    },
    size: {
      default: 'h-12 px-5 py-2',
      sm: 'h-10 rounded-md px-3 font-medium text-sm',
      lg: 'h-14 rounded-md px-8',
      icon: 'h-12 w-12'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, loading = false, children, ...props }, ref) => {
  if (asChild) {
    return (
      <Slot ref={ref} {...props}>
        <>
          {React.Children.map(children as React.ReactElement, (child: React.ReactElement) => {
            return React.cloneElement(child, {
              className: cn(buttonVariants({ variant, size }), className),
              children: (
                <>
                  {loading && <LoadingDots color={'#fff'} className={cn('opacity-75 w-16', children && 'mr-2')} />}
                  {child.props.children}
                </>
              )
            });
          })}
        </>
      </Slot>
    );
  }

  return (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
      <>
        {loading && <LoadingDots color={'#fff'} className={cn('opacity-75 w-16  ', children && 'mr-2')} />}
        {children}
      </>
    </button>
  );

  // const Comp = asChild ? Slot : 'button';
  // return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = 'Button';

export { Button, buttonVariants };
