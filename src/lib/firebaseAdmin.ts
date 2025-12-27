import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK only on server
let adminApp: admin.app.App;

if (!admin.apps.length && process.env.FIREBASE_ADMIN_SDK_KEY) {
  const serviceAccount = JSON.parse(
    Buffer.from(process.env.FIREBASE_ADMIN_SDK_KEY, 'base64').toString('utf-8')
  );

  adminApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  });
} else if (admin.apps.length) {
  adminApp = admin.app();
}

const adminAuth = adminApp?.auth();
const adminDb = adminApp?.firestore();

export { adminAuth, adminDb, adminApp };
