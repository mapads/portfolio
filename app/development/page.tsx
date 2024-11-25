"use client";

import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import DevProjectCard from "../components/DevProjectCard";

type Project = {
  _id: string;
  title: string;
  startDate: string;
  finishDate?: string;
  techStack: string[];
  description: string;
  shortDescription: string;
};

export default function DevelopmentPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/dev-projects");
        if (!response.ok) throw new Error("Failed to fetch projects");

        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Error fetching projects");
      }
    };

    fetchProjects();
  }, []);

  return (
    <main className="flex h-screen">
      {/* Left Column (Profile Card) */}
      <div className="w-1/3 p-4 sticky top-0">
        <ProfileCard />
      </div>

      {/* Right Column (Projects) */}
      <div className="w-2/3 overflow-y-auto p-8">
        {error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <DevProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}