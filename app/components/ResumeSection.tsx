import React from 'react';

export default function ResumeSection() {
  return (
    <div className="space-y-8">
      <div className="rounded-lg p-8 backdrop-blur-sm" style={{ backgroundColor: 'var(--content-bg-color)', boxShadow: '0 5px 20px var(--shadow-color)' }}>
        <h2 className="text-2xl font-bold mb-6 pb-2" style={{ color: 'var(--heading-color)', borderBottom: '2px solid var(--border-color)' }}>Resume</h2>

        <div className="mb-4">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: 'var(--link-color)', color: 'white' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume (PDF)
          </a>
        </div>

        <div className="mt-6">
          <iframe
            src="/resume.pdf#zoom=FitH"
            className="w-full border rounded-lg"
            style={{
              height: '70vh',
              minHeight: '400px',
              border: '1px solid var(--border-color)',
              backgroundColor: '#808080'
            }}
            title="Gaurav Avula Resume"
          >
            <p style={{ color: 'var(--text-color)', padding: '20px', textAlign: 'center' }}>
              Your browser does not support embedded PDFs. You can{' '}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--link-color)' }}
                className="hover:underline cursor-pointer"
              >
                download the PDF
              </a>{' '}
              instead.
            </p>
          </iframe>
        </div>
      </div>
    </div>
  );
}
