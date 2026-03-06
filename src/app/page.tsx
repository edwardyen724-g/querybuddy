import React from 'react';

const Page: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Transform Your Database Experience with Effortless Query Management!
      </h1>
      <p className="mt-4 text-lg text-center text-gray-600">
        Streamline your database queries with intuitive management tools for developers.
      </p>
      <div className="mt-8 max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-gray-800">Why Choose QueryBuddy?</h2>
        <ul className="mt-4 space-y-2 list-disc list-inside">
          <li>🎨 Visual query builder to create and modify queries with drag-and-drop functionality.</li>
          <li>📊 Dashboard that displays current query states, highlighting stale data conveniently.</li>
          <li>📚 Built-in guides and tutorials that offer step-by-step assistance for common query scenarios.</li>
          <li>🔔 Notifications for users when data becomes stale and suggested actions to refresh it.</li>
          <li>🔗 Integration capabilities with commonly used relational databases like MySQL and PostgreSQL.</li>
        </ul>
      </div>
      <div className="mt-6">
        <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Get Started Today
        </button>
      </div>
    </main>
  );
};

export default Page;