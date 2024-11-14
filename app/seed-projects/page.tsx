// app/seed-projects/page.tsx
"use client";

import { useState } from 'react';

export default function SeedProjectsPage() {
  const [status, setStatus] = useState<string>('');

  const seedProjects = async () => {
    try {
      setStatus('Seeding projects...');
      const response = await fetch('/api/seed-projects', { method: 'POST' });
      const data = await response.json();

      if (response.ok) {
        setStatus(data.message);
      } else {
        setStatus(data.error || 'Failed to seed projects');
      }
    } catch (error) {
      console.error('Error seeding projects:', error);
      setStatus('Error seeding projects');
    }
  };

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Seed Projects Data</h1>
      <button onClick={seedProjects} className="btn btn-primary">
        Seed Projects
      </button>
      {status && <p className="mt-4 text-lg">{status}</p>}
    </div>
  );
}