import SignUp from '../shared/ui/form/SignUp';
import SignIn from '../shared/ui/form/SignIn';
import ThemeToggle from '../shared/features/Themetoggle';

interface AuthPageProps {
  mode: string;
}

function AuthPage({ mode }: AuthPageProps) {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-2xl p-4 rounded-lg">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold p-2">
            {mode === 'signup' ? 'Sign Up to Zlib !' : 'Login'}
          </h1>
          <p className="py-6">
            Grab your cup of coffee and start your journey with us.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <p className="card-title flex justify-center font-bold text-2xl py-2">
            {mode === 'signup' ? 'Sign Up' : 'Sign In'}
          </p>
          {mode === 'signup' ? <SignUp /> : <SignIn />}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
