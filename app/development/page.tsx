// app/development/page.tsx
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Project = {
  _id: string;
  title: string;
  startDate: string;
  finishDate?: string;
  techStack: string[];
  description: string;
};

export default function DevelopmentPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/dev-projects');
        if (!response.ok) throw new Error('Failed to fetch projects');

        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Error fetching projects');
      }
    };

    fetchProjects();
  }, []);

  return (
    <main className="p-8 space-y-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Development Projects</h1>
      
      {error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project._id} className="p-6 bg-white rounded-lg shadow-md space-y-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
              <p className="text-sm text-gray-600">
                {new Date(project.startDate).toLocaleDateString()} -{" "}
                {project.finishDate ? new Date(project.finishDate).toLocaleDateString() : "Present"}
              </p>
              <p className="text-gray-700">{project.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                <strong>Tech Stack:</strong> {project.techStack.join(", ")}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}