import { adminAuth, adminDb } from './firebaseAdmin';
import { cookies } from 'next/headers';
import { DecodedIdToken } from 'firebase-admin/auth';

const AUTH_COOKIE_NAME = 'kashpages_auth';
const AUTH_COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

/**
 * Verify Firebase ID token and check if user is admin
 * @param token Firebase ID token from client
 * @returns Admin data if valid, null otherwise
 */
export async function verifyAdminToken(token: string): Promise<any | null> {
  try {
    // Verify token using Firebase Admin SDK
    const decodedToken = await adminAuth!.verifyIdToken(token);
    const uid = decodedToken.uid;

    // Check if user exists in admins collection
    const adminDoc = await adminDb!
      .collection('admins')
      .doc(uid)
      .get();

    if (!adminDoc.exists) {
      console.warn(`User ${uid} tried to access admin panel but is not in admins collection`);
      return null;
    }

    return {
      uid,
      email: decodedToken.email,
      ...adminDoc.data(),
    };
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}

/**
 * Set auth cookie with ID token
 * @param token Firebase ID token
 */
export async function setAuthCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: AUTH_COOKIE_MAX_AGE,
    path: '/',
  });
}

/**
 * Get auth token from cookie
 * @returns Token or null
 */
export async function getAuthCookie(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIE_NAME)?.value || null;
}

/**
 * Clear auth cookie (logout)
 */
export async function clearAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}

/**
 * Get current admin from request
 * @returns Admin data if authenticated, null otherwise
 */
export async function getCurrentAdmin(): Promise<any | null> {
  const token = await getAuthCookie();
  if (!token) return null;

  return verifyAdminToken(token);
}

/**
 * Log admin action for audit purposes
 */
export async function logAuditEvent(
  action: string,
  adminId: string,
  targetType: string,
  targetId: string,
  changes?: { before: any; after: any },
  ipAddress?: string
): Promise<void> {
  try {
    await adminDb!.collection('auditLogs').add({
      action,
      adminId,
      adminEmail: (await adminAuth!.getUser(adminId)).email,
      targetType,
      targetId,
      changes: changes || {},
      ipAddress: ipAddress || 'unknown',
      createdAt: new Date(),
    });
  } catch (error) {
    console.error('Audit logging failed:', error);
    // Don't throw - audit failure shouldn't break the operation
  }
}
