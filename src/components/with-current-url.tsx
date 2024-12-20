import React from 'react';
import { headers } from 'next/headers';

export function withCurrentUrl<P extends object>(WrappedComponent: React.ComponentType<P>) {
  const ComponentWithCurrentUrl = (props: P) => {
    const headersList = headers();
    const host = headersList.get('host') || 'localhost';
    const protocol = headersList.get('x-forwarded-proto') || 'http';
    const pathName = headersList.get('x-current-path') || '';
    const currentUrl = `${protocol}://${host}`;

    return <WrappedComponent {...props} baseUrl={currentUrl} pathName={pathName} />;
  };

  return ComponentWithCurrentUrl;
}
