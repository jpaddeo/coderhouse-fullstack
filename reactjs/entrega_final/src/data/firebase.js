import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { CONFIG } from '@/utils/config';

const firebaseConfig = {
  apiKey: CONFIG.FIREBASE_API_KEY,
  authDomain: CONFIG.FIREBASE_AUTH_DOMAIN,
  projectId: CONFIG.FIREBASE_PROJECT_ID,
  storageBucket: CONFIG.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: CONFIG.FIREBASE_MESSAGING_SENDER_ID,
  appId: CONFIG.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, '(default)');

export { db };
