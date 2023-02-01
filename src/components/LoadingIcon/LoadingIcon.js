import './LoadingIcon.css';
import oval from '../../images/oval.svg';
import Header from '../Header/Header';

const LoadingIcon = () => {
  return (
    <>
      <Header />
      <div className="loading-container">
        <img className="loading-image" src={oval} alt="loading" />
      </div>
    </>
  );
};

export default LoadingIcon;
