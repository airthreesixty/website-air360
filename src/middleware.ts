import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

// export default createMiddleware(routing);

// Create next-intl middleware
const intlMiddleware = createMiddleware(routing);

// Export the combined middleware
export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https: http: ${process.env.NODE_ENV === 'production' ? '' : `'unsafe-eval'`};
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);

  requestHeaders.set('x-current-path', request.nextUrl.pathname);

  // First, run the next-intl middleware
  const intlResponse = intlMiddleware(request);

  // Then, apply the custom headers to the response
  if (intlResponse) {
    intlResponse.headers.set('x-current-path', request.nextUrl.pathname);
    return intlResponse;
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
  response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);

  return response;
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|xml|txt)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)'
  ]
  // matcher: ['/', '/(de|en)/:path*']
};
