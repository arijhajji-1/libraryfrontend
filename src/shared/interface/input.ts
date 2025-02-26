import { type FC } from 'react';

export interface InputFieldProps {
  type: string;
  placeholder: string;
  Icon: FC<{ className: string }>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
