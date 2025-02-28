import { FC } from 'react';

const Toast: FC<ToastProps> = ({ toastType, toastMessage }) => {
  return (
    <div className="toast toast-end">
      <div
        className={`alert text-white ${toastType === 'success' ? 'alert-success' : 'alert-info'}`}
      >
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};

export default Toast;
