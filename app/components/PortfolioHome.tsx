'use client';

import React, { useState } from 'react';
import EmailModal from './EmailModal';

export default function PortfolioHome() {
  const [showEmailModal, setShowEmailModal] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmailModal(true);
  };
  return (
    <div className="space-y-8">
      {/* About Section */}
      <div className="rounded-lg p-8 backdrop-blur-sm text-center" style={{ backgroundColor: 'var(--content-bg-color)', boxShadow: '0 5px 20px var(--shadow-color)' }}>
        <div className="mb-8 pb-6" style={{ borderBottom: '1px solid var(--border-color)' }}>
          <img
            src="/profile.png"
            alt="Gaurav Avula"
            className="mx-auto mb-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid var(--content-bg-color)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--heading-color)' }}>Gaurav Avula</h1>
          <p className="text-base sm:text-lg md:text-xl italic px-4" style={{ color: 'var(--text-color)' }}>Software Developer | Backend Systems | Distributed Architecture</p>
        </div>
        <h2 className="text-2xl font-bold mb-4 pb-2 inline-block" style={{ color: 'var(--heading-color)', borderBottom: '2px solid var(--border-color)' }}>About Me</h2>
        <p style={{ color: 'var(--text-color)' }}>
          Software Developer with 6 years of experience designing and building high-performance distributed systems and RESTful APIs using Java, Python, Spring Boot, and Go. Proven expertise in optimizing API performance by 40%, architecting scalable microservices, implementing machine learning integrations, and managing distributed data processing pipelines across cloud infrastructure.
        </p>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--heading-color)', borderBottom: '2px solid var(--border-color)', paddingBottom: '8px' }}>Education</h2>

        <div className="rounded-lg p-6 mb-4 backdrop-blur-sm" style={{ backgroundColor: 'var(--content-bg-color)', boxShadow: '0 5px 20px var(--shadow-color)' }}>
          <div className="flex justify-between items-baseline flex-wrap mb-2">
            <h3 className="text-xl font-bold" style={{ color: 'var(--heading-color)' }}>University of North Carolina Charlotte</h3>
            <span className="text-sm" style={{ color: 'var(--text-color)', opacity: 0.8 }}>(Aug 2022 – Dec 2023)</span>
          </div>
          <h4 className="text-lg mb-3" style={{ color: 'var(--text-color)' }}>MS in Computer Science</h4>
          <p style={{ color: 'var(--text-color)' }}><strong>Coursework:</strong> Algorithm and Data Structures, Cloud Computing for Data Analysis, Software System Design and Implementation, Computer Communication and Networks, Network Based Application Development, Mobile Application Development, Visual Analytics, Intelligent Systems</p>
        </div>

        <div className="rounded-lg p-6 backdrop-blur-sm" style={{ backgroundColor: 'var(--content-bg-color)', boxShadow: '0 5px 20px var(--shadow-color)' }}>
          <div className="flex justify-between items-baseline flex-wrap mb-2">
            <h3 className="text-xl font-bold" style={{ color: 'var(--heading-color)' }}>University at Buffalo</h3>
            <span className="text-sm" style={{ color: 'var(--text-color)', opacity: 0.8 }}>(Jan 2015 – May 2019)</span>
          </div>
          <h4 className="text-lg mb-3" style={{ color: 'var(--text-color)' }}>BS in Computer Engineering</h4>
          <p style={{ color: 'var(--text-color)' }}><strong>Coursework:</strong> Algorithms for Modern Computing Systems, Operating Systems, Data Structures, Software Engineering Concepts, Computer Vision and Image Processing, Data Intensive Computing, Real Time Embedded Systems, Hardware and Software Integration</p>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--heading-color)', borderBottom: '2px solid var(--border-color)', paddingBottom: '8px' }}>Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Languages', skills: 'Python, Java, Go, SQL, Shell Scripting, JavaScript' },
            { title: 'Backend', skills: 'Spring Boot, Flask, FastAPI, Node.js, RESTful APIs, GraphQL' },
            { title: 'Databases', skills: 'PostgreSQL, MySQL, MongoDB, DynamoDB, Oracle' },
            { title: 'Search', skills: 'Apache Lucene, Elasticsearch, FAISS' },
            { title: 'Machine Learning', skills: 'TensorFlow, PyTorch, Scikit-learn, OpenCV, NLP' },
            { title: 'Cloud', skills: 'AWS (Lambda, EC2, S3, DynamoDB, API Gateway, SageMaker)' },
            { title: 'DevOps', skills: 'Docker, Kubernetes, Jenkins, GitHub Actions, Terraform, CI/CD' },
            { title: 'Testing', skills: 'JUnit, PyTest, Mockito, Selenium, Postman' }
          ].map((category, idx) => (
            <div key={idx} className="rounded-lg p-4 backdrop-blur-sm" style={{ backgroundColor: 'var(--content-bg-color)', boxShadow: '0 5px 20px var(--shadow-color)' }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--heading-color)' }}>{category.title}</h3>
              <p className="text-sm" style={{ color: 'var(--text-color)' }}>{category.skills}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="rounded-lg p-8 backdrop-blur-sm" style={{ backgroundColor: 'var(--content-bg-color)', boxShadow: '0 5px 20px var(--shadow-color)' }}>
        <h2 className="text-2xl font-bold mb-4 pb-2" style={{ color: 'var(--heading-color)', borderBottom: '2px solid var(--border-color)' }}>Contact</h2>
        <p className="mb-4" style={{ color: 'var(--text-color)' }}>Feel free to reach out:</p>
        <ul className="space-y-2" style={{ color: 'var(--text-color)' }}>
          <li><strong>Location:</strong> Irving, TX, USA</li>
          <li>
            <strong>Email:</strong>{' '}
            <a
              href="#"
              onClick={handleEmailClick}
              className="cursor-pointer hover:underline"
              style={{ color: 'var(--link-color)' }}
            >
              sudo@gauravavula.com
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://linkedin.com/in/gauravavula"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:underline"
              style={{ color: 'var(--link-color)' }}
            >
              linkedin.com/in/gauravavula
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/gauravav"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:underline"
              style={{ color: 'var(--link-color)' }}
            >
              github.com/gauravav
            </a>
          </li>
        </ul>
      </div>

      {showEmailModal && <EmailModal onClose={() => setShowEmailModal(false)} />}
    </div>
  );
}
