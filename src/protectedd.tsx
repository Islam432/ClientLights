import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

type ProtectedRouteProps = {
  children: JSX.Element | JSX.Element[]
}

export default function protectedd({ children }: ProtectedRouteProps) {
  const cook = Cookies.get('token');
  console.log('Token:', cook);

  if (!cook) {
    console.log('Redirecting to /signin');
    return <Navigate to='/signin' />;
  }

  console.log('Rendering children');
  return children;
}