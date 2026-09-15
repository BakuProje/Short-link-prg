import React from 'react';

export default function Header() {
  return (
    <header className="hub-header-clean">
      {/* Big Circular PRG Brand Logo with Cyan Ring */}
      <div className="logo-circle-wrapper">
        <div className="logo-inner-ring">
          <img
            src="/images/logo.png"
            alt="PRG Logo"
            className="brand-logo-circle"
          />
        </div>
      </div>

      {/* Bold Dual-color Title & Spaced Subtitle */}
      <h1 className="hub-title-sporty">
        <span className="title-dark">PRG </span>
        <span className="title-blue">OFFICIAL</span>
      </h1>
      <p className="hub-subtitle-spaced" style={{ color: 'black' }}>
        Pusat informasi dan link Resmi <br></br>Playstation Racing Game
      </p>
    </header>
  );
}
