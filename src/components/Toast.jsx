import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message, isVisible }) {
  if (!isVisible || !message) return null;

  return (
    <div className="toast-container" role="status" aria-live="polite">
      <div className="toast-box">
        <CheckCircle2 size={20} color="#00D2FF" />
        <span>{message}</span>
      </div>
    </div>
  );
}
