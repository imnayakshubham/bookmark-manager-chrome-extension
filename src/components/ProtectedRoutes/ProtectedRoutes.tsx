
import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../../constants';

const ProtectedRoutes = () => {
    const userInfo = useUserContext()?.userInfo;
    return userInfo?.token ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes;

