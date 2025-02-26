import { KeyRound, Mail, UserRound } from 'lucide-react';
import InputField from '../input/Input';

function SignUp() {
  return (
    <form className="form card-body">
      <InputField type="email" placeholder="Username" Icon={Mail} />
      <InputField type="text" placeholder="Email" Icon={UserRound} />
      <InputField type="password" placeholder="Password" Icon={KeyRound} />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default SignUp;
