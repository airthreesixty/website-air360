'use client';
import { Input } from '@/components/ui/input';
import Icon from '@/components/common/icons';
import React, { useState, useEffect, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import LoadingDots from '../common/LoadingDots';

const SearchBar: React.FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('query'?.toString()) || '');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [loading, setLoadind] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (debouncedSearchTerm) {
      params.set('query', debouncedSearchTerm);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
    setLoadind(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setLoadind(true);
    setSearchTerm(event.target.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='pt-6'>
      <label htmlFor='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
        Search
      </label>
      <div className='relative w-full'>
        {loading ? <LoadingDots className={' w-6 absolute top-3 left-3'} numDots={1} /> : <Icon name='search' className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500' />}
        <Input
          type='search'
          value={searchTerm}
          onChange={handleInputChange} // Handle input change
          className='p-4 pl-10 text-sm text-black-600 border border-gray-300 rounded-lg bg-gray-50 transition ease-in-out duration-300 focus:border-gray-300 focus:ring-gray-300 focus-visible:ring-gray-300 focus-visible:border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
      </div>
    </div>
  );
};

export default SearchBar;
