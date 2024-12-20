import React from 'react';

export interface Heading {
  id: string | null;
  text: string;
}

export const getHeadings = (children: React.ReactNode): Heading[] => {
  const h2Array: { id: string | null; text: string }[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      // Check if the element is an <h2>
      if (child.type === 'h2') {
        const h2Id = child.props.id || null;

        // Extract the text from the <a> tag inside the <h2>
        const anchor = React.Children.toArray(child.props.children).find((c) => React.isValidElement(c) && c.type === 'a');

        const text = anchor && React.isValidElement(anchor) ? anchor.props.children : '';

        h2Array.push({
          id: h2Id,
          text: typeof text === 'string' ? text : '' // Ensure it's just the text
        });
      }

      // Recursively check the child’s children (if any)
      if (child.props.children) {
        h2Array.push(...getHeadings(child.props.children));
      }
    }
  });

  return h2Array;
};
