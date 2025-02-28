import { createContext, useContext, useState, ReactNode } from 'react';
import Toast from '../shared/ui/toast/toast';

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastProps | null>(null);

  const showToast = (message: string, type: string) => {
    setToast({
      toastMessage: message,
      toastType: type,
      onClose: () => setToast(null),
    });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <Toast
          toastType={toast.toastType}
          toastMessage={toast.toastMessage}
          onClose={() => setToast(null)}
        />
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
