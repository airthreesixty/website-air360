'use client';
import { useEffect, useRef } from 'react';

function SlideAnimation() {
  const textContainerRefs = useRef([]);
  const imageContainerRefs = useRef([]);

  // Ensure refs are not null
  textContainerRefs.current = [];
  imageContainerRefs.current = [];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const textContainers = Array.from(document.querySelectorAll('.text-container'));
      const imageContainers = Array.from(document.querySelectorAll('.image-container'));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = textContainers.indexOf(entry.target);
            if (entry.isIntersecting) {
              // Remove 'active' class from all
              textContainers.forEach((container, idx) => {
                container.classList.remove('active');
                imageContainers[idx].classList.remove('active');
              });
              // Add 'active' class to the intersecting element
              entry.target.classList.add('active');
              imageContainers[index].classList.add('active');
            }
          });
        },
        {
          threshold: 0.5 // Adjust as needed
        }
      );

      textContainers.forEach((textContainer) => {
        observer.observe(textContainer);
      });

      // Cleanup on unmount
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return null;
}

export default SlideAnimation;
