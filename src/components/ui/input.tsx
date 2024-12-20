import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  floating?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, placeholder, floating, ...props }, ref) => {
  const floatingInputClasses = 'px-2.5 pb-2.5 pt-6 peer text-sm';

  return (
    <ConditionalWrapper condition={!!floating} wrapper={(children) => <div className='relative'>{children}</div>}>
      <input
        type={type}
        className={cn(
          'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg transition ease-in-out duration-300 focus:ring-primary-600 focus:border-primary-600 focus-visible:ring-primary-600 focus-visible:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
          floating ? floatingInputClasses : null,
          className
        )}
        ref={ref}
        placeholder={floating ? ' ' : placeholder}
        {...props}
      />
      {floating && (
        <label
          htmlFor={props.id}
          className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4.5 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
        >
          {placeholder}
        </label>
      )}
    </ConditionalWrapper>
  );
});
Input.displayName = 'Input';

interface ConditionalWrapperProps {
  condition: boolean;
  wrapper: (children: React.ReactNode) => JSX.Element;
  children: React.ReactNode;
}

const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({ condition, wrapper, children }) => {
  return condition ? wrapper(children) : children;
};

export { Input };
