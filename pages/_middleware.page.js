import { NextResponse } from 'next/server';

const isMobile = true

const getDeviceType = () => {
  return isMobile ? 'mobile' : 'desktop'
}

const getLocale = () => {
  const someLogic = true

  return someLogic ? 'en' : 'id'
}

const PUBLIC_FILE_PATTERN = /\.(.*)$/;

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // excludes public files (files having extensions)
  if (!PUBLIC_FILE_PATTERN.test(pathname)) {
    const locale = getLocale();
    const device = getDeviceType()
    const targetPathname = pathname.slice(1)

    const nextPageTarget = `/${locale}/${targetPathname}/${device}`;

    // mutate the target pathname
    req.nextUrl.pathname = nextPageTarget;

    const nextResponse = NextResponse.rewrite(req.nextUrl)

    return nextResponse;
  }
}
