import React from 'react';

export default function SocialFooter() {
  const socials = [
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@prgrental',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.34 0 .66.06.96.17v-3.52a6.34 6.34 0 0 0-.96-.08A6.33 6.33 0 0 0 3 15.67 6.33 6.33 0 0 0 9.33 22a6.33 6.33 0 0 0 6.34-6.33V9.05a8.16 8.16 0 0 0 4.92 1.63v-3.45a4.85 4.85 0 0 1-1-.54z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/prgrental',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    }
  ];

  return (
    <div className="social-divider-container">
      <div className="social-line left"></div>
      <div className="social-buttons-row">
        {socials.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-circle-btn"
            title={item.name}
            aria-label={item.name}
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div className="social-line right"></div>
    </div>
  );
}
