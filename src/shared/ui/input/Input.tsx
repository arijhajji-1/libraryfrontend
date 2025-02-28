import { type FC } from 'react';

const InputField: FC<InputFieldProps> = ({
  type,
  placeholder,
  Icon,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="w-full">
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
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
