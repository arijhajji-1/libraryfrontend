import type { FC } from 'react';

const LoadingOrError: FC<LoadingOrErrorProps> = ({
  loading,
  error,
  gotBooks,
}) => {
  return (
    <>
      {(loading || error || !gotBooks) && (
        <div className="flex items-center justify-center h-full w-full">
          {loading && (
            <span className="loading loading-spinner loading-lg"></span>
          )}
          {error && <p className="text-red-500 font-extrabold">{error}</p>}
          {!error && !loading && !gotBooks && (
            <p className="font-extrabold">Aucun livre trouvé</p>
          )}
        </div>
      )}
    </>
  );
};

export default LoadingOrError;
