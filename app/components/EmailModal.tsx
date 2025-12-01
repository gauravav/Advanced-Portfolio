'use client';

import { useState, useEffect } from 'react';

interface EmailModalProps {
  onClose: () => void;
}

export default function EmailModal({ onClose }: EmailModalProps) {
  const [step, setStep] = useState<'ask' | 'loading' | 'done'>('ask');
  const [countdown, setCountdown] = useState(10);
  const [includeLocation, setIncludeLocation] = useState(false);

  useEffect(() => {
    if (step === 'loading') {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            sendEmailWithoutLocation();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [step]);

  const handleYesLocation = () => {
    setStep('loading');
    setIncludeLocation(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          sendEmailWithLocation(position.coords.latitude, position.coords.longitude);
        },
        () => {
          sendEmailWithoutLocation();
        }
      );
    } else {
      sendEmailWithoutLocation();
    }
  };

  const handleNoLocation = () => {
    sendEmailWithoutLocation();
  };

  const sendEmailWithLocation = (lat: number, lon: number) => {
    const subject = encodeURIComponent('Contact from Portfolio - Location Included');
    const body = encodeURIComponent(
      `Hello,\n\nI'm reaching out from your portfolio website.\n\nLocation: ${lat}, ${lon}\n\nBest regards`
    );
    window.location.href = `mailto:sudo@gauravavula.com?subject=${subject}&body=${body}`;
    setStep('done');
    setTimeout(onClose, 2000);
  };

  const sendEmailWithoutLocation = () => {
    const subject = encodeURIComponent('Contact from Portfolio');
    const body = encodeURIComponent(
      `Hello,\n\nI'm reaching out from your portfolio website.\n\nBest regards`
    );
    window.location.href = `mailto:sudo@gauravavula.com?subject=${subject}&body=${body}`;
    setStep('done');
    setTimeout(onClose, 2000);
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center px-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      <div
        className="rounded-xl p-6 sm:p-8 max-w-lg w-full text-center animate-slideIn"
        style={{
          backgroundColor: 'var(--content-bg-color)',
          boxShadow: '0 10px 40px var(--shadow-color)'
        }}
      >
        {step === 'ask' && (
          <>
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: 'var(--heading-color)' }}>
              Include Location Information?
            </h3>
            <p className="mb-6 text-base sm:text-lg" style={{ color: 'var(--text-color)' }}>
              Would you like to include your location information in the email?
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button
                onClick={handleYesLocation}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all hover:opacity-90 hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
                style={{ backgroundColor: 'var(--link-color)', color: 'white' }}
              >
                Yes, Include Location
              </button>
              <button
                onClick={handleNoLocation}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
                style={{
                  backgroundColor: 'var(--border-color)',
                  color: 'var(--text-color)'
                }}
              >
                No, Send Without Location
              </button>
            </div>
          </>
        )}

        {step === 'loading' && (
          <>
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--heading-color)' }}>
              Getting Your Location...
            </h3>
            <p className="mb-6" style={{ color: 'var(--text-color)' }}>
              Please allow location access in your browser.
            </p>
            <div className="w-12 h-12 mx-auto mb-4 border-4 rounded-full animate-spin" style={{ borderColor: 'var(--border-color)', borderTopColor: 'var(--link-color)' }}></div>
            <p className="font-medium mb-1" style={{ color: 'var(--text-color)' }}>
              Time remaining: <span className="text-2xl font-bold" style={{ color: 'var(--link-color)' }}>{countdown}</span> seconds
            </p>
            <p className="text-sm mb-6" style={{ color: 'var(--text-color)', opacity: 0.8 }}>
              Email will be sent automatically if location is not received.
            </p>
            <button
              onClick={sendEmailWithoutLocation}
              className="px-6 py-3 rounded-lg font-medium transition-all hover:-translate-y-0.5 cursor-pointer"
              style={{
                backgroundColor: 'var(--border-color)',
                color: 'var(--text-color)'
              }}
            >
              Changed My Mind - Send Without Location
            </button>
          </>
        )}

        {step === 'done' && (
          <>
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--heading-color)' }}>
              Opening Email Client...
            </h3>
            <p style={{ color: 'var(--text-color)' }}>
              Your email application should open shortly.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
