import React from 'react';
import confetti from 'canvas-confetti';
import Header from './components/Header';
import LinkCard from './components/LinkCard';
import SocialFooter from './components/SocialFooter';

function App() {
  const playClickSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(260, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {
      // Ignore audio context error
    }
  };

  const triggerConfetti = () => {
    playClickSound();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#0066FF', '#00D2FF', '#FF6600', '#FFFFFF']
    });
  };

  const linkData = [
    {
      id: 'founder',
      title: 'WhatsApp',
      badgeText: 'FOUNDER',
      badgeType: 'cyan',
      iconType: 'whatsapp',
      actionUrl: `https://wa.me/6282349918631?text=${encodeURIComponent('Halo Founder PRG, saya ingin bertanya.')}`,
      isFeatured: false
    },
    {
      id: 'cofounder',
      title: 'WhatsApp',
      badgeText: 'CO-FOUNDER',
      badgeType: 'blue',
      iconType: 'whatsapp',
      actionUrl: `https://wa.me/6281527641306?text=${encodeURIComponent('Halo Co-Founder PRG, saya ingin bertanya.')}`,
      isFeatured: false
    },
    {
      id: 'website',
      title: 'Website Rental',
      badgeText: 'OFFICIAL',
      badgeType: 'blue',
      iconType: 'website',
      actionUrl: 'https://www.prgrental.site',
      isFeatured: false
    },
    {
      id: 'member',
      title: 'Member Online',
      badgeText: 'MEMBER',
      badgeType: 'orange',
      iconType: 'member',
      actionUrl: 'https://www.prgrental.site/login',
      isFeatured: true
    }
  ];

  return (
    <div className="page-overlay">
      <div className="hub-wrapper">
        {/* Header with Top Bar, Circular Logo, and Dual-tone Title */}
        <Header />

        {/* Shortlinks Stack */}
        <main className="links-stack">
          {linkData.map((item) => (
            <LinkCard
              key={item.id}
              title={item.title}
              badgeText={item.badgeText}
              badgeType={item.badgeType}
              iconType={item.iconType}
              actionUrl={item.actionUrl}
              isFeatured={item.isFeatured}
              onClick={() => {
                if (item.id === 'member' || item.id === 'website') {
                  triggerConfetti();
                } else {
                  playClickSound();
                }
              }}
            />
          ))}
        </main>

        {/* Neobrutalism Social Footer (TikTok, WhatsApp, Instagram) */}
        <SocialFooter />
      </div>
    </div>
  );
}

export default App;
