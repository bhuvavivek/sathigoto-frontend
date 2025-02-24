import { createContext, useContext, useState } from 'react';

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

    return (
        <PaymentContext.Provider value={{ isPaymentSuccessful, setIsPaymentSuccessful }}>
            {children}
        </PaymentContext.Provider>
    );
};

export const usePayment = () => useContext(PaymentContext);
