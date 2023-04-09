import { RotatingLines } from 'react-loader-spinner';
import { LoaderSpin } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderSpin>
      <RotatingLines strokeColor="blue" />
    </LoaderSpin>
  );
};
