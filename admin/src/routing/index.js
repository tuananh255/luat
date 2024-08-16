import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  let getToken;
  try {
    getToken = JSON.parse(sessionStorage.getItem('user'));
  } catch (e) {
    console.error("Error parsing sessionStorage data", e);
    getToken = null;
  }

  const tokenExists = getToken?.user?.token !== null && getToken?.user?.token !== undefined;

  return tokenExists ? children : <Navigate to={'/'} replace={true} />;
};

export default PrivateRoutes;
