import type { NextApiRequest, NextApiResponse } from 'next';
import admin from 'firebase-admin';

interface AuthedRequest extends NextApiRequest {
  user?: { uid: string };
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

const queriesMap: Map<string, number> = new Map();

const rateLimit = (key: string) => {
  const currentTime = Date.now();
  const requestCount = queriesMap.get(key) || 0;
  queriesMap.set(key, requestCount + 1);
  setTimeout(() => {
    queriesMap.set(key, (queriesMap.get(key) ?? 1) - 1);
  }, 1000);
  return requestCount < 5; // Limit to 5 requests per second
};

const handler = async (req: AuthedRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      if (!rateLimit(req.headers['x-real-ip'] || 'unknown')) {
        return res.status(429).json({ error: 'Too many requests' });
      }
      // Implement logic to retrieve queries from the database
      const queriesSnapshot = await admin.firestore().collection('queries').get();
      const queries = queriesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return res.status(200).json(queries);
    } else if (req.method === 'POST') {
      if (!rateLimit(req.headers['x-real-ip'] || 'unknown')) {
        return res.status(429).json({ error: 'Too many requests' });
      }
      const { query } = req.body;
      if (!query) {
        return res.status(400).json({ error: 'Query data is required' });
      }
      // Implement logic to store query in the database
      const docRef = await admin.firestore().collection('queries').add({ query });
      return res.status(201).json({ id: docRef.id, query });
    } else {
      return res.setHeader('Allow', ['GET', 'POST']).status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (err) {
    return res.status(500).json({ error: err instanceof Error ? err.message : String(err) });
  }
};

export default handler;