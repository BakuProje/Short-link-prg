import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { X, Copy, Check, Share2, MessageSquare, Send } from 'lucide-react';

export default function ShareModal({ isOpen, onClose, onCopySuccess }) {
  if (!isOpen) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://prglink.site';
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true);
      if (onCopySuccess) onCopySuccess('Link direktori PRG berhasil disalin!');
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const shareWhatsApp = `https://api.whatsapp.com/send?text=${encodeURIComponent('Kunjungi Portal Link Resmi PRG: ' + currentUrl)}`;
  const shareTelegram = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('PRG Official Links Hub')}`;
  const shareFacebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <h3 className="modal-title">Bagikan Link PRG</h3>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Tutup Modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* QR Code Container */}
        <div className="qr-box">
          <QRCodeSVG
            value={currentUrl}
            size={160}
            bgColor="#f8fafc"
            fgColor="#0f172a"
            level="H"
            includeMargin={true}
          />
          <span style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.65rem', fontWeight: 600 }}>
            Scan QR Code ini lewat smartphone Anda
          </span>
        </div>

        {/* Share Buttons */}
        <div className="share-links-grid">
          <a
            href={shareWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn wa"
          >
            <MessageSquare size={18} color="#16a34a" />
            <span>WhatsApp</span>
          </a>
          <a
            href={shareTelegram}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn tg"
          >
            <Send size={18} color="#0284c7" />
            <span>Telegram</span>
          </a>
          <a
            href={shareFacebook}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn fb"
          >
            <Share2 size={18} color="#2563eb" />
            <span>Facebook</span>
          </a>
        </div>

        {/* Copy Link Row */}
        <button
          className="btn-primary-neo"
          style={{ width: '100%' }}
          onClick={handleCopyLink}
        >
          {copied ? (
            <>
              <Check size={18} color="#10B981" />
              <span>Link Berhasil Disalin!</span>
            </>
          ) : (
            <>
              <Copy size={18} />
              <span>Salin Link Halaman</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
