'use client';
import Icon from '@/components/common/icons';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import ItemBlocks from './item-blocks';
import Logo from '@/components/common/logo';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState, useEffect } from 'react';

export default function Component() {
  const [isOpen, setIsOpen] = useState(false); // false means the side Sheet is closed

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    if (mediaQuery.matches) {
      setIsOpen(false);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [isOpen]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          size='icon'
          variant={'ghost'}
          className='inline-flex items-center p-2 ml-2.5 h-10 lg:ml-3 text-sm rounded-lg order-2 transition-shadow lg:hidden hover:ring-2 hover:ring-opacity-20 focus:outline-none focus:ring-2 text-gray-500 hover:ring-gray-500 focus:ring-gray-500'
        >
          <Icon name='bars' className='fa-lg text-slate-900' />
        </Button>
      </SheetTrigger>
      <SheetContent className='p-0'>
        <ScrollArea className='w-full h-full p-0'>
          <SheetHeader className='p-6 pb-2'>
            <SheetTitle>
              <Logo isDark />
            </SheetTitle>
          </SheetHeader>
          <ItemBlocks />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
