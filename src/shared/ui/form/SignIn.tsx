import { useState } from 'react';
import { Mail, KeyRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import InputField from '../input/Input';
import { login, type LoginPayload, type LoginResponse } from '../../../Api/authServices';

function SignIn() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const payload: LoginPayload = { email, password };
    try {
      const data: LoginResponse = await login(payload);
      console.log('Logged in user:', data);
      // Save the entire user object in localStorage
      localStorage.setItem('user', JSON.stringify(data));
      setSuccess('Login successful! Redirecting to home page...');
      // Redirect to the home page after a short delay
      setTimeout(() => {
        navigate('/');
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
        setError('Login failed');
      }
    }
  };

  return (
    <form className="form card-body" onSubmit={handleSubmit}>
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

export default SignIn;
