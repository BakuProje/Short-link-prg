import React from 'react';
import { ArrowLeft, Play } from 'lucide-react';

export default function HenTutorial({ onBack }) {
  const tutorials = [
    {
      id: 'ps4',
      console: 'PS4',
      title: 'Cara Aktifkan HEN PS4',
      colorTheme: 'blue'
    },
    {
      id: 'ps3',
      console: 'PS3',
      title: 'Cara Aktifkan HEN PS3',
      colorTheme: 'orange'
    }
  ];

  return (
    <div className="tutorial-page-view">
      {/* Top Sticky Navigation Bar */}
      <div className="tutorial-nav-bar">
        <button 
          className="btn-back-neo" 
          onClick={onBack}
          aria-label="Kembali ke Beranda"
        >
          <ArrowLeft size={18} />
          <span>Kembali</span>
        </button>

        <div className="tutorial-nav-badge">
          <span className="live-dot-pulse"></span>
          <span>VIDEO ONGOING</span>
        </div>
      </div>

      {/* Side-by-Side 2-Column Grid (Kiri: PS4, Kanan: PS3) */}
      <div className="tutorial-cards-grid">
        {tutorials.map((item) => (
          <article key={item.id} className={`video-card-neo theme-${item.colorTheme}`}>
            {/* Title & Ongoing Badge */}
            <div className="video-card-header-clean">
              <h2 className="video-title">{item.title}</h2>
              <div className="status-badge-ongoing">
                <span className="status-dot"></span>
                <span>ONGOING</span>
              </div>
            </div>

            {/* Video Player Mockup Container (16:9, Static Display without click effects) */}
            <div className="video-player-container static-view">
              <div className="video-screen-bg">
                <div className="video-grid-pattern"></div>
                
                {/* PlayStation Watermark */}
                <div className="video-ps-watermark">
                  <span>{item.console}</span>
                </div>

                {/* Center Play & Ongoing Box */}
                <div className="video-center-cta">
                  <div className="play-button-pulsing">
                    <Play size={26} className="play-icon-triangle" fill="white" />
                  </div>
                  <div className="video-ongoing-banner">
                    <span className="live-indicator"></span>
                    <span className="ongoing-text">VIDEO SEDANG ONGOING</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
