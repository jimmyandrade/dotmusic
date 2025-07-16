import { type NextRequest, NextResponse } from 'next/server';
import { allowedImageHosts } from './config/imageHosts';

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const imgSrc = ["'self'", ...allowedImageHosts].join(' ');
  const cspHeader = `
    connect-src 'self';
    font-src 'self';
    frame-ancestors 'none';
    frame-src open.spotify.com www.youtube.com onerpm.link www.instagram.com instagram.com;
    img-src ${imgSrc};
    manifest-src 'self';
    script-src-elem 'self' 'unsafe-inline' va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline';
    style-src-elem 'self' 'unsafe-inline';
    upgrade-insecure-requests;
`;
  const cleanedCspHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim();
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', cleanedCspHeaderValue);
  requestHeaders.set(
    'Permissions-Policy',
    'autoplay=(self "https://www.youtube.com" "https://open.spotify.com"), fullscreen=(self "https://www.youtube.com" "https://open.spotify.com")',
  );
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set('Content-Security-Policy', cleanedCspHeaderValue);
  response.headers.set(
    'Permissions-Policy',
    'autoplay=(self "https://www.youtube.com" "https://open.spotify.com"), fullscreen=(self "https://www.youtube.com" "https://open.spotify.com")',
  );
  return response;
}
