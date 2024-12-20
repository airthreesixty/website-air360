'use client';

import { getHeadings } from '@/lib/get-headings';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import * as React from 'react';
import { useEffect, useState, useCallback } from 'react';

export interface Props {
  data: React.ReactNode;
}

export default function Toc({ data }: Props) {
  const headings = getHeadings(data);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [manualActive, setManualActive] = useState(false); // Track if the user clicked on a link

  // Function to observe heading elements during scroll
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (!manualActive) {
        // Only update via scroll if no manual activation
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newId = entry.target.id;
            setActiveId(newId);
            updateUrlHash(newId);
          }
        });
      }
    },
    [manualActive]
  );
  const updateUrlHash = (id: string) => {
    if (window) {
      window.history.pushState(null, '', `#${id}`); // Update the URL hash without reloading the page
    }
  };

  // Observe headings when component mounts
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0px 0px -80% 0px', // Adjust as needed
      threshold: 0.1
    });

    const headingElements = document.querySelectorAll('h2[id]');
    headingElements.forEach((element) => observer.observe(element));

    return () => {
      headingElements.forEach((element) => observer.unobserve(element));
    };
  }, [handleObserver]);

  // Function to handle manual click on a link
  const handleClick = (id: string) => {
    setManualActive(true); // Set manualActive to true
    setActiveId(id); // Manually set the active ID
    setTimeout(() => setManualActive(false), 2000); // Allow scroll tracking after 2 seconds
  };
  return (
    <div className='md:sticky md:top-40 '>
      <nav>
        <ul className='md:flex md:flex-col md:gap-4'>
          {headings.map((item) => (
            <li key={item.id}>
              <Link href={`#${item.id}`} className={cn(`font-bold `, activeId === item.id ? '!text-pink-600' : '')} onClick={() => handleClick(item.id!)}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
