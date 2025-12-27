import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from './lib/firebaseAdmin';

/**
 * Middleware to protect /admin/* routes
 * Verifies auth cookie and admin status
 */
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Only protect /admin/* routes
  if (!pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  // Allow /admin/login without auth
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Check for auth cookie on protected routes
  const token = request.cookies.get('kashpages_auth')?.value;

  if (!token) {
    // Redirect to login
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  try {
    // Verify token using Firebase Admin SDK
    const decodedToken = await adminAuth!.verifyIdToken(token);
    const uid = decodedToken.uid;

    // Check if user is in admins collection
    const adminDoc = await adminDb!
      .collection('admins')
      .doc(uid)
      .get();

    if (!adminDoc.exists) {
      // User is authenticated but not an admin
      // Clear the cookie and redirect to login
      const response = NextResponse.redirect(new URL('/admin/login', request.url));
      response.cookies.delete('kashpages_auth');
      return response;
    }

    // Valid admin, continue to the route
    return NextResponse.next();
  } catch (error) {
    console.error('Middleware auth verification failed:', error);
    // Token is invalid or verification failed
    // Redirect to login and clear cookie
    const response = NextResponse.redirect(new URL('/admin/login', request.url));
    response.cookies.delete('kashpages_auth');
    return response;
  }
}

/**
 * Configure which routes this middleware applies to
 */
export const config = {
  matcher: [
    '/admin/:path*', // Protect all /admin/* routes
  ],
};
