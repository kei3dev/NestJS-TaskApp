import { NextResponse, type NextRequest } from 'next/server';
import { jwtDecode } from 'jwt-decode';
import { Payload } from './types/payload';

export const middleware = (request: NextRequest) => {
  const token = request.cookies.get('token');

  if (!token) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  try {
    const decodedToken = jwtDecode<Payload>(token.value);
    if (decodedToken.exp * 1000 < Date.now()) {
      return NextResponse.redirect(new URL('/signin', request.url));
    }
  } catch (error) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/'],
};
