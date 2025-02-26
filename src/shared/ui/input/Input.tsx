import { type InputFieldProps } from '../../interface/input';

const InputField = ({ type, placeholder, Icon }: InputFieldProps) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <Icon className="h-4 w-4 opacity-70" />
      <input type={type} className="grow" placeholder={placeholder} />
    </label>
  );
};

export default InputField;
