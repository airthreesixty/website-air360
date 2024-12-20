import React, { PropsWithChildren } from 'react';
import Icon from './icons';

const ToastErrorMessage: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Icon name='triangle-exclamation' className='fa-lg text-slate-900 mr-3' />
      <span className='text-red-500'>{children}</span>
    </div>
  );
};

export default ToastErrorMessage;
