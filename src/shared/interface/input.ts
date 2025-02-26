import { type FC } from 'react';

export interface InputFieldProps {
  type: string;
  placeholder: string;
  Icon: FC<{ className: string }>;
}
