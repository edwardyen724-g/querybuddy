import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const Dashboard: React.FC = () => {
  const [queries, setQueries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const { data, error } = await supabase
          .from('queries')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw new Error(error.message);
        setQueries(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchQueries();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Transform Your Database Experience with Effortless Query Management!</h1>
      <h2>Current Queries</h2>
      {queries.length === 0 ? (
        <p>No queries found.</p>
      ) : (
        <ul>
          {queries.map(query => (
            <li key={query.id}>
              <h3>{query.title}</h3>
              <p>{query.description}</p>
              <p>Created at: {new Date(query.created_at).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;