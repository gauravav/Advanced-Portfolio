'use client';

import AppCard from "./components/AppCard";
import PortfolioHome from "./components/PortfolioHome";
import PortfolioProjects from "./components/PortfolioProjects";
import ResumeSection from "./components/ResumeSection";
import { useNavigation } from "./layout";

export default function Home() {
  const { activeSection } = useNavigation();

  const applications = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio website showcasing my work, skills, and projects. Built with modern web technologies to provide a seamless user experience.",
      websiteUrl: "https://gauravavula.com",
      githubUrl: "https://github.com/gauravavula",
      tags: ["Portfolio", "Web Development", "Personal"]
    },
    {
      title: "Sample Project 1",
      description: "A sample application demonstrating various features and capabilities. This is a placeholder for your actual projects.",
      websiteUrl: "https://example.com",
      githubUrl: "https://github.com/gauravavula/sample-project-1",
      tags: ["React", "TypeScript", "Next.js"]
    },
    {
      title: "Sample Project 2",
      description: "Another example project showcasing different technologies and approaches. Replace with your real applications.",
      githubUrl: "https://github.com/gauravavula/sample-project-2",
      tags: ["Node.js", "API", "Backend"]
    },
    {
      title: "Sample Project 3",
      description: "Additional project demonstrating full-stack development capabilities with modern frameworks and best practices.",
      websiteUrl: "https://example.com",
      githubUrl: "https://github.com/gauravavula/sample-project-3",
      tags: ["Full Stack", "Database", "Cloud"]
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Home Section */}
          {activeSection === 'home' && (
            <div className="animate-fadeIn">
              <PortfolioHome />
            </div>
          )}

          {/* Portfolio Section */}
          {activeSection === 'portfolio' && (
            <div className="animate-fadeIn">
              <PortfolioProjects />
            </div>
          )}

          {/* Apps Section */}
          {activeSection === 'apps' && (
            <div className="animate-fadeIn">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--heading-color)' }}>
                  My Applications
                </h1>
                <p className="text-lg" style={{ color: 'var(--text-color)' }}>
                  Explore my portfolio of projects and applications
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {applications.map((app, index) => (
                  <AppCard
                    key={index}
                    title={app.title}
                    description={app.description}
                    websiteUrl={app.websiteUrl}
                    githubUrl={app.githubUrl}
                    tags={app.tags}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Resume Section */}
          {activeSection === 'resume' && (
            <div className="animate-fadeIn">
              <ResumeSection />
            </div>
          )}
        </div>
    </div>
  );
}
