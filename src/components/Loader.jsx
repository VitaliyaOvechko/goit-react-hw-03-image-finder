import { RotatingLines } from 'react-loader-spinner';
import './styles.css';

export const Loader = () => {
  return (
    <div className="loader-spin">
      <RotatingLines strokeColor="blue" />
    </div>
  );
};
