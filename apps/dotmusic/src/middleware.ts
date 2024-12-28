import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const cspHeader = `
    connect-src 'self';
    font-src 'self';
    frame-ancestors 'none';
    frame-src open.spotify.com www.youtube.com;
    img-src 'self' db.music ffm.to gstatic.com i.ytimg.com jimmyandrade.com jimmyandrade.music jimmyandrade.net jyverso.com.br quemeusou.com.br photos.bandsintown.com rsv-ink-images-production.s3.sa-east-1.amazonaws.com;
    manifest-src 'self';
    script-src-elem 'self' 'unsafe-inline' va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline';
    style-src-elem 'self';
    upgrade-insecure-requests;
`;
  const cleanedCspHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim();
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', cleanedCspHeaderValue);
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set('Content-Security-Policy', cleanedCspHeaderValue);
  return response;
}
