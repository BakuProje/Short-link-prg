import React from 'react';
import { ShieldCheck, Lock, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="hub-footer">
      {/* Security Verification Notice */}
      <div className="security-card">
        <div className="security-icon">
          <ShieldCheck size={24} />
        </div>
        <div className="security-text">
          <h4>Portal Terverifikasi & Aman</h4>
          <p>
            Pastikan seluruh transaksi & komunikasi hanya dilakukan melalui nomor WhatsApp resmi dan domain login <strong>prgrental.id</strong> yang tertera di atas.
          </p>
        </div>
      </div>

      <div className="footer-pill">
        <Lock size={14} color="#0066FF" />
        <span>Official Directory &bull; PRG Enterprise</span>
      </div>

      <p className="footer-copy">
        &copy; {currentYear} PRG SHORT. Hak Cipta Dilindungi Undang-Undang.
      </p>
    </footer>
  );
}
