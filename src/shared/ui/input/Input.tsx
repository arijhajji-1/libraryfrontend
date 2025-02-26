import { type FC } from 'react';
import { type InputFieldProps } from '../../interface/input';

const InputField: FC<InputFieldProps> = ({
  type,
  placeholder,
  Icon,
  value,
  onChange,
}) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <Icon className="h-4 w-4 opacity-70" />
      <input
        type={type}
        className="grow"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default InputField;
