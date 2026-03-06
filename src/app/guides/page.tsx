import React from 'react';

const GuidesPage: React.FC = () => {
    return (
        <main className="flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold mb-4">Transform Your Database Experience with Effortless Query Management!</h1>
            <p className="text-lg mb-6">
                Streamline your database queries with intuitive management tools for developers.
            </p>
            <section className="w-full max-w-2xl">
                <h2 className="text-2xl font-semibold mb-2">Guides and Tutorials</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>
                        <a href="/guides/visual-query-builder" className="text-blue-600 hover:underline">
                            Visual Query Builder
                        </a> - Create and modify queries with drag-and-drop functionality.
                    </li>
                    <li>
                        <a href="/guides/dashboard" className="text-blue-600 hover:underline">
                            Dashboard Overview
                        </a> - Learn how to use the dashboard to display current query states and highlight stale data.
                    </li>
                    <li>
                        <a href="/guides/notifications" className="text-blue-600 hover:underline">
                            Understanding Notifications
                        </a> - Get notified when your data becomes stale with suggested actions.
                    </li>
                    <li>
                        <a href="/guides/integration" className="text-blue-600 hover:underline">
                            Integration with Databases
                        </a> - Explore how to integrate with MySQL and PostgreSQL.
                    </li>
                </ul>
                <p className="text-sm text-gray-600">
                    Each guide provides step-by-step assistance for common query scenarios. 
                    Enhance your understanding and efficiency in managing your database queries.
                </p>
            </section>
        </main>
    );
};

export default GuidesPage;