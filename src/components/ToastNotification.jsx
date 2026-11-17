import React from 'react';
import { useEventContext } from '../context/EventContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastNotification = () => {
  const { toasts, removeToast } = useEventContext();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        maxWidth: '420px',
        width: 'calc(100% - 48px)',
        pointerEvents: 'none'
      }}
    >
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isError = toast.type === 'error';
        const isInfo = toast.type === 'info';

        return (
          <div
            key={toast.id}
            className="animate-scale-in"
            style={{
              pointerEvents: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              padding: '14px 18px',
              borderRadius: '12px',
              background: '#0F172A',
              border: `1px solid ${
                isSuccess
                  ? 'rgba(16, 185, 129, 0.4)'
                  : isError
                  ? 'rgba(244, 63, 94, 0.4)'
                  : 'rgba(99, 102, 241, 0.4)'
              }`,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)',
              color: '#F8FAFC'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {isSuccess && <CheckCircle2 size={20} color="#10B981" style={{ flexShrink: 0 }} />}
              {isError && <AlertCircle size={20} color="#F43F5E" style={{ flexShrink: 0 }} />}
              {isInfo && <Info size={20} color="#6366F1" style={{ flexShrink: 0 }} />}
              <span style={{ fontSize: '0.9rem', fontWeight: '500', lineHeight: 1.4 }}>
                {toast.message}
              </span>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              style={{
                color: '#94A3B8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px',
                borderRadius: '6px',
                transition: 'all 0.2s ease'
              }}
              aria-label="Close notification"
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ToastNotification;
