'use client';

import React, { useState } from 'react';
import { useSupabase } from '../../lib/supabase';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const SubscriptionPage: React.FC = () => {
  const { user } = useSupabase();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscription = async () => {
    if (!user) {
      setError('Please log in to subscribe.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const stripe = await stripePromise;
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: user.id }),
      });

      if (!response.ok) {
        throw new Error('Failed to create subscription');
      }

      const { sessionId } = await response.json();
      await stripe!.redirectToCheckout({ sessionId });
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="subscription-container">
      <h1>Transform Your Database Experience with Effortless Query Management!</h1>
      <p>Streamline your database queries with intuitive management tools for developers.</p>
      <button onClick={handleSubscription} disabled={loading}>
        {loading ? 'Processing...' : 'Subscribe Now'}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SubscriptionPage;