import { Navigate, Outlet } from "react-router-dom";
import { usePayment } from "../PaymentContext";


const ProtectedRoute = () => {
    const { isPaymentSuccessful } = usePayment();

    return isPaymentSuccessful ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
