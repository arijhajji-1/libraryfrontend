import { useState } from 'react';
import { Mail, UserRound, KeyRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import InputField from '../input/Input';
import { register } from '../../../service/authServices';

const SignUp = () => {
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
      console.log('Utilisateur inscrit:', data);
      setSuccess(
        'Inscription réussie ! Redirection vers la page de connexion...',
      );
      setName('');
      setEmail('');
      setPassword('');
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
        setError("L'inscription a échoué");
      }
    }
  };

  return (
    <form className="form card-body" onSubmit={handleSubmit}>
      <InputField
        type="text"
        placeholder="Nom d'utilisateur"
        Icon={UserRound}
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <InputField
        type="email"
        placeholder="Email"
        Icon={Mail}
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <InputField
        type="password"
        placeholder="Mot de passe"
        Icon={KeyRound}
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <button className="btn btn-primary" type="submit">
        S'inscrire
      </button>
      <p className="mt-4 text-sm">
        Vous avez déjà un compte ?{' '}
        <button
          type="button"
          className="text-blue-500 underline cursor-pointer bg-transparent border-none p-0"
          onClick={() => navigate('/signin')}
        >
          Connectez-vous
        </button>
      </p>
    </form>
  );
};

export default SignUp;
