import React from 'react';

export default function PortfolioProjects() {
  const experiences = [
    {
      company: 'Delta Cognition',
      position: 'Software Developer – Remote',
      date: 'Feb 2024 – Current',
      achievements: [
        'Architected and deployed scalable microservices in Go and Python for an LLM-powered interview platform, handling 10K+ concurrent requests with load balancing and horizontal scaling.',
        'Designed RESTful APIs with comprehensive endpoint documentation, implementing rate limiting, caching strategies (Redis), and request validation to ensure system reliability and performance.',
        'Optimized API response times by 45% through database query optimization, connection pooling, and implementing asynchronous processing for long-running tasks.',
        'Built distributed batch processing systems using Python and Celery for asynchronous task execution, processing 100K+ jobs daily with fault tolerance and retry mechanisms.'
      ]
    },
    {
      company: 'OneIT UNC Charlotte',
      position: 'Application Developer – Charlotte, NC',
      date: 'Aug 2022 – Dec 2023',
      achievements: [
        'Developed Python automation scripts and Java Spring Boot services for inventory management, implementing scheduled batch jobs with error handling and monitoring.',
        'Built high-performance RESTful APIs using Spring Boot with PostgreSQL, implementing database indexing, query optimization, and caching to handle 5K+ requests per minute.',
        'Architected microservices for real-time data synchronization across multiple systems, using message queues (RabbitMQ) for asynchronous communication and event-driven architecture.',
        'Optimized API endpoint performance by 40% (from 3s to 1.8s) through implementing connection pooling, lazy loading, and reducing N+1 query problems.'
      ]
    },
    {
      company: 'Credit Suisse Group',
      position: 'Software Developer – Raleigh, NC',
      date: 'Aug 2020 – Aug 2022',
      achievements: [
        'Engineered high-performance batch processing systems in Java Spring Boot with multithreading and parallel processing, reducing data processing time from 6 hours to 2 hours for 50M+ records.',
        'Designed and implemented RESTful APIs in Java Spring Boot serving 15K+ requests per minute, with comprehensive error handling, input validation, and structured logging.',
        'Optimized database performance through advanced query optimization, proper indexing strategies, and connection pool tuning, reducing query execution time by 65%.',
        'Implemented caching strategies using Redis to reduce database load by 40%, improving API response times and system scalability.'
      ]
    }
  ];

  const projects = [
    {
      title: 'WordPress Websites',
      description: [
        'Built chatbot with Python, TensorFlow, Dialogflow.',
        'Reduced response time by 50% with intelligent query handling.'
      ]
    },
    {
      title: 'Visual Intelligence with OpenCV',
      description: [
        'Applied advanced image processing for edge/keypoint detection.',
        'Built real-time object detector achieving 95% accuracy.'
      ]
    },
    {
      title: 'Food Truck Finder',
      description: [
        'Java + React app for real-time food truck location.',
        'Used geo-location APIs, reduced server load by 30%.'
      ]
    },
    {
      title: 'Personal Budget Application',
      description: [
        'Java + Firebase budgeting app used by 200+ users.',
        'Enabled real-time budget sync across devices; reduced overspending by 25%.'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Experience */}
      <div>
        <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--heading-color)', borderBottom: '2px solid var(--border-color)', paddingBottom: '8px' }}>Experience</h2>
        {experiences.map((exp, idx) => (
          <div key={idx} className="rounded-lg p-6 mb-4 backdrop-blur-sm" style={{ backgroundColor: 'var(--content-bg-color)', boxShadow: '0 5px 20px var(--shadow-color)' }}>
            <div className="flex justify-between items-baseline flex-wrap mb-2">
              <h3 className="text-xl font-bold" style={{ color: 'var(--heading-color)' }}>{exp.company}</h3>
              <span className="text-sm" style={{ color: 'var(--text-color)', opacity: 0.8 }}>({exp.date})</span>
            </div>
            <h4 className="text-lg mb-3" style={{ color: 'var(--text-color)' }}>{exp.position}</h4>
            <ul className="space-y-2" style={{ color: 'var(--text-color)', paddingLeft: '1.25rem' }}>
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-sm leading-relaxed" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'outside' }}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div>
        <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--heading-color)', borderBottom: '2px solid var(--border-color)', paddingBottom: '8px' }}>Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <div key={idx} className="rounded-lg p-6 backdrop-blur-sm" style={{ backgroundColor: 'var(--content-bg-color)', boxShadow: '0 5px 20px var(--shadow-color)' }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--heading-color)' }}>{project.title}</h3>
              <ul className="space-y-1" style={{ color: 'var(--text-color)', paddingLeft: '1.25rem' }}>
                {project.description.map((desc, i) => (
                  <li key={i} className="text-sm" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'outside' }}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
