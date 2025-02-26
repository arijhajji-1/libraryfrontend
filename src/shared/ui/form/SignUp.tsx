import { useState } from 'react';
import { Mail, UserRound, KeyRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import InputField from '../input/Input';
import {
  register,
  type RegisterPayload,
  type RegisterResponse,
} from '../../../Api/authServices';

function SignUp() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const payload: RegisterPayload = { name, email, password };
    try {
      const data: RegisterResponse = await register(payload);
      console.log('User registered:', data);
      setSuccess('Registration successful! Redirecting to sign in...');
      // Clear the fields
      setName('');
      setEmail('');
      setPassword('');
      // Redirect to the sign-in page after a short delay
      setTimeout(() => {
        navigate('/signin');
      }, 1500);
    } catch (err: unknown) {
      if (
        err &&
        typeof err === 'object' &&
        'response' in err &&
        err.response &&
        typeof err.response === 'object' &&
        'data' in err.response &&
        err.response.data &&
        typeof err.response.data === 'object' &&
        'message' in err.response.data
      ) {
        setError((err.response.data as { message: string }).message);
      } else {
        setError('Registration failed');
      }
    }
  };

  return (
    <form className="form card-body" onSubmit={handleSubmit}>
      <InputField
        type="text"
        placeholder="Username"
        Icon={UserRound}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        type="email"
        placeholder="Email"
        Icon={Mail}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        Icon={KeyRound}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default SignUp;
